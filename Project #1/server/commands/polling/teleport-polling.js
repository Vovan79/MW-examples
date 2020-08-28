const { TeleportPolling } = require('../cron/polling');

(async () => {
  await TeleportPolling.run();
  process.exit();
})();
