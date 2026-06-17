# LeadCollector Bot

Telegram lead collection bot built with Google Apps Script and Google Sheets.

## Overview

LeadCollector Bot automatically collects messages from Telegram users, stores them in Google Sheets, and notifies the administrator about new leads.

The project demonstrates serverless development using Google Apps Script without requiring a dedicated backend server.

## Features

### User Management

* Automatic user registration
* User activity tracking
* Last seen updates

### Message Management

* Message storage in Google Sheets
* Lead history tracking
* Incoming message logging

### Telegram Commands

* `/start`
* `/help`
* `/stats` (admin only)

### Admin Features

* Instant lead notifications
* User statistics
* Message statistics

### Security

* Secret management
* Git-safe configuration

---

## Architecture

```text
Telegram User
      ↓
Telegram Bot
      ↓
Webhook
      ↓
Google Apps Script
      ↓
Business Logic
      ↓
Google Sheets
      ↓
Admin Notification
```

---

## Technology Stack

* Google Apps Script
* Telegram Bot API
* Google Sheets
* GitHub
* clasp

---

## Project Structure

```text
src/
├── Commands.js
├── Config.js
├── Notifications.js
├── Secrets.example.js
├── Sheets.js
├── Telegram.js
└── Webhook.js
```

---

## Implemented Functionality

### Webhook Processing

Receives updates from Telegram and processes incoming messages.

### User Storage

Stores Telegram users in Google Sheets.

### Message Storage

Stores all incoming messages in Google Sheets.

### Admin Notifications

Sends instant notifications to the administrator when a new lead is received.

### Statistics

Provides bot statistics via the `/stats` command.

---

## Skills Demonstrated

* Telegram Bot API Integration
* Google Apps Script Development
* Google Sheets Automation
* Webhook Processing
* Command Routing
* Notification Systems
* Secret Management
* Serverless Architecture

---

## Future Improvements

* User search by Telegram ID
* Broadcast messaging
* Lead export
* Admin dashboard
* Search functionality
* Configuration via Google Sheets

---

## Status

Completed

Version: 1.0
