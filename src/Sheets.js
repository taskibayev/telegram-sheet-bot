function getSheet(name) {
  return SpreadsheetApp
    .openById(getConfig().SPREADSHEET_ID)
    .getSheetByName(name);
}

function saveMessage(data) {
  const sheet = getSheet(getConfig().SHEETS.MESSAGES);

  sheet.appendRow([
    data.date,
    data.telegramId,
    data.username,
    data.firstName,
    data.text
  ]);
}

function saveOrUpdateUser(data) {
  const sheet = getSheet(getConfig().SHEETS.USERS);
  const values = sheet.getDataRange().getValues();

  const telegramId = String(data.telegramId);

  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]) === telegramId) {
      sheet.getRange(i + 1, 5).setValue(data.date);
      return;
    }
  }

  sheet.appendRow([
    data.telegramId,
    data.username,
    data.firstName,
    data.date,
    data.date
  ]);
}

function logDebug(title, data) {
  const sheet = getSheet(getConfig().SHEETS.LOGS);

  sheet.appendRow([
    new Date(),
    title,
    data
  ]);
}