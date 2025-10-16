# Email Configuration

## Overview
This document describes the email configuration for the Intracosta website contact forms and quote requests.

## Current Configuration
All emails (contact form and quote requests) are configured to be sent to `web@intracosta.com`.

## Environment Variables Required

Create a `.env` file in the project root with the following configuration:

```bash
# Email Configuration
SMTP_HOST=mail.intracosta.com
SMTP_PORT=465
SMTP_USER=web@intracosta.com
SMTP_PASS=wx7zI?PNuEn,QuWs
MAIL_FROM=web@intracosta.com
MAIL_TO_CONTACT=web@intracosta.com
MAIL_TO_QUOTE=web@intracosta.com
```

## Email Destinations

### Contact Form (`/api/contact`)
- **Recipient**: `web@intracosta.com`
- **Subject**: "New contact from [Name]"
- **Reply-To**: User's email address

### Quote Request (`/api/quote`)
- **Recipient**: `web@intracosta.com`
- **Subject**: "New quote request from [Company Name]"
- **Reply-To**: User's email address

## SMTP Settings
- **Host**: mail.intracosta.com
- **Port**: 465 (SSL)
- **Authentication**: Required (web@intracosta.com)

## Security Notes
- The `.env` file is ignored by git and should not be committed
- SMTP credentials are stored securely in environment variables
- All emails use TLS encryption

## Testing
To test the email configuration:
1. Ensure the `.env` file is properly configured
2. Restart the server after making changes
3. Submit a test contact form or quote request
4. Check the web@intracosta.com inbox for received emails
