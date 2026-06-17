function getConfig() {
  const secrets = getSecrets();

  return {
    BOT_TOKEN: secrets.BOT_TOKEN,
    SPREADSHEET_ID: secrets.SPREADSHEET_ID,
    ADMIN_TELEGRAM_ID: secrets.ADMIN_TELEGRAM_ID,

    SHEETS: {
      USERS: 'Users',
      MESSAGES: 'Messages',
      LOGS: 'Logs'
    }
  };
}

function isAdmin(telegramId) {
  const config = getConfig();

  return String(telegramId) === String(config.ADMIN_TELEGRAM_ID);
}