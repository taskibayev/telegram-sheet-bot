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

  sendTelegramMessage(
    data.telegramId,
    'Your message has been saved. Thank you!'
  );
}