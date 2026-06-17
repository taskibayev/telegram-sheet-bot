function handleCommand(data) {
  const text = data.text;

  if (text === '/start') {
    sendTelegramMessage(
      data.telegramId,
      'Welcome to LeadCollector Bot. Send me a message and I will save it as a lead.'
    );
    return;
  }

  if (text === '/help') {
    sendTelegramMessage(
      data.telegramId,
      'Available commands:\n/start - start bot\n/help - show help'
    );
    return;
  }

  if (text === '/stats') {
    if (!isAdmin(data.telegramId)) {
      sendTelegramMessage(
        data.telegramId,
        'You do not have permission to use this command.'
      );
      return;
    }

    const usersCount = getUsersCount();
    const messagesCount = getMessagesCount();

    sendTelegramMessage(
      data.telegramId,
`📊 Bot Statistics

👥 Users: ${usersCount}
💬 Messages: ${messagesCount}`
    );

    return;
  }

  sendTelegramMessage(
    data.telegramId,
    'Your message has been saved. Thank you!'
  );
}