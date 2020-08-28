const Web3 = require('web3');
const config = require('../configs/local/contract.config');

const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/F42ddsdfsfsdf'));
const contract = new web3.eth.Contract(config.king.abi, config.king.address);

(async () => {
  contract
    .getPastEvents('allEvents', {
      topics: ['0xd76543f114c7b00ff2cd99901ad48f6871fcec'],
      fromBlock: 1
    }, (error, log) => {
      console.log(log.find(log => log.transactionHash = '0xd5f710ff21da891a7ee7586f6adfgdhfd71f7f2072371de'));
    });
})();
