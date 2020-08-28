const { EventLog } = require('../models');
const moment = require('moment');

class CastleController extends Controller {
  static listenEventEmitter() {
    const isDistributed = (character) => {
      const isArcher = (character.race === 'archer') ? 1 : 0;
      let isDistributeAges = false;
      let survivedFights = false;
      let confirmed = '';
      if (character.status) {
        if (character.status.teleport) {
          confirmed = character.status.teleport.confirmed;
        }

        if (confirmed) {
          const nowToUTC = moment().utc();
          const confirmedToUTC = moment(confirmed * 1000).utc();
          let age = (nowToUTC.unix() - confirmedToUTC.unix()) * 1000;
          age = age <= self.ONE_DAY ? 0 : parseInt(age / self.ONE_DAY);

          if (age >= 7) {
            isDistributeAges = true;
          }
        }

        if (character.status.fights) {
          const fights = character.status.fights.filter(fight => fight.initiator);
          survivedFights = fights.length >= 3 ? 1 : 0;
        }
      }

      return isArcher && isDistributeAges && survivedFights;
    };

    const archers = data.filter(character => isDistributed(character));
    await CastleLootCompetitions.updateCompetitionsOnCastleLoot(archers, { txHash, timeStamp });

    self.eventEmitter.emit('history.castle.distributed', { txHash, from });
  }

  static async getLastDistribute(socket, cb) {
    const lastDistribute = await EventLog.getLastDistribute();
    let canDistribute = false;
    if (lastDistribute) {
      const confirmed = lastDistribute.timestamp * 1000;
      if (Date.now() >= confirmed + this.ONE_DAY) {
        canDistribute = true;
      }
    }

    cb(null, canDistribute)
  }
}

CastleController.ONE_DAY = 24 * 60 * 60 * 1000;
