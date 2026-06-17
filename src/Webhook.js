function doPost(e) {
  try {
    const raw = e.postData.contents;
    logDebug('RAW_UPDATE', raw);

    const update = JSON.parse(raw);

    if (!update.message) {
      return HtmlService.createHtmlOutput('OK');
    }

    const message = update.message;
    const user = message.from;

    const userData = {
      telegramId: user.id,
      username: user.username || '',
      firstName: user.first_name || '',
      text: message.text || '',
      date: new Date()
    };

    saveOrUpdateUser(userData);
    saveMessage(userData);
    handleCommand(userData);

    return HtmlService.createHtmlOutput('OK');

  } catch (error) {
    logDebug('ERROR', error.toString());
    return HtmlService.createHtmlOutput('ERROR');
  }
}

function testSecrets() {
  Logger.log(getConfig());
}
