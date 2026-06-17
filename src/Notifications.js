
function notifyAdmin(data) {
  const config = getConfig();

  const message =
`🔔 Новая заявка

👤 Имя: ${data.firstName}
📛 Username: @${data.username}
🆔 ID: ${data.telegramId}

💬 Сообщение:
${data.text}`;

  sendTelegramMessage(
    config.ADMIN_TELEGRAM_ID,
    message
  );
}