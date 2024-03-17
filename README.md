# Qencode Login UI

This project implements the Qencode Login UI as per the provided Figma design, integrating with the Authentication API. Built with React, this application utilizes `Tailwind CSS` for styling, `@tanstack/react-form` for form handling, and `@tanstack/react-router` for routing.

## Features

- **Responsive Design:** Fully responsive layout that works on desktop and mobile.
- **Form Validation:** Client-side validation for email formats and password length.
- **API Integration:** Communication with authentication API for login, password reset, and token refresh.
- **Error Handling:** User feedback on input errors and API request issues.

## Project Structure

- `/src`: Source files including components and utility functions.
- `/docs`: Documentation including the project architecture description.

See `/docs/project-architecture.md` for a detailed explanation of the project architecture.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/vhalchuk/qencode-login.git
cd qencode-login
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm dev
```

This will run the app in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Deployment

The project is deployed on Netlify. Access the live version here: [https://qencode-demo-by-vhalchuk.netlify.app](https://qencode-demo-by-vhalchuk.netlify.app/).
