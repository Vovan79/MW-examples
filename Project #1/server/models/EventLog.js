const { TYPE_CASTLE_LOOT } = require('../cron/base/EthereumEvents');

class EventLog extends Model {
  static async getLastDistribute() {
    const self = this;

    const [event] = await self.record.find({
      type: TYPE_CASTLE_LOOT,
      status: self.STATUS_PROCESSED
    }).sort({ 'id': -1 }).limit(1);
    if (event) {
      return event;
    }

    return null;
  }
}