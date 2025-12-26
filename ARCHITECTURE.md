# Project Architecture

## Directory Structure
- `/index.html`: Main entry point. Contains structure and content.
- `/css/style.css`: (Future) All styles should eventually move here from the HTML head.
- `/assets/`: Stores images like `logo.png`.
- `/js/script.js`: (Future) Interactivity logic.

## Data Flow
1. **Static Content:** Hardcoded in HTML for immediate rendering.
2. **Assets:** Local images served relative to root.
3. **Links:** Direct anchor tags (`<a>`) to external platforms (WhatsApp, Telegram).

## Naming Conventions
- **Classes:** Kebab-case (e.g., `.profile-img`, `.link-btn`).
- **IDs:** CamelCase (if used).
- **Images:** Snake_case (e.g., `tornado_logo.png`).
