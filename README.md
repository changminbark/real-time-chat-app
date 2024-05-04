# Fullstack Real-Time Messenger

This is a fullstack real-time messenger application built using React, Express, Socket.IO, PostgreSQL, and Redis. The purpose of this application is to learn the PERN stack (PostgreSQL, Express, React, Node.js) for an upcoming backend role internship at Hangry, an F&B startup in Indonesia. It allows users to communicate with each other in real-time.

## Credits

This project was inspired by the tutorials provided by Lester Fernandez on his [YouTube channel](https://www.youtube.com/@LesterFernandezIO). Lester's insightful tutorials helped in understanding the integration of various technologies to build a robust real-time messaging application.

## Features

- Real-time messaging: Users can send and receive messages instantly.
- User authentication: Secure user authentication system to ensure only authorized users can access the messenger.
- Message history: Users can view their message history and continue conversations seamlessly.
- User presence indication: Users can see who else is online and available for chat.
- Responsive design: The application is designed to work seamlessly across various devices and screen sizes.

## Technologies Used

- **React**: Frontend user interface is built using React, providing a dynamic and interactive experience.
- **Express**: Backend server is built using Express, providing a robust and efficient server-side architecture.
- **Socket.IO**: Enables real-time, bidirectional communication between clients and the server.
- **PostgreSQL**: Database management system used to store user data and message history.
- **Redis**: In-memory data structure store used for caching user sessions and improving application performance.
- **Helmet**: Middleware-based technology that fortifies the security of HTTP headers returned by a Node.js application, enhancing overall protection.
- **CORS**: Facilitates Cross-Origin Resource Sharing, enabling secure communication between client-side and server-side components, ensuring seamless integration and interaction across different domains.
- **Yup**: Empowers validation in JavaScript applications, ensuring data integrity and accuracy by defining and enforcing schema constraints, thereby enhancing overall data reliability and consistency.
- **pg**: Non-blocking PostgreSQL client for Node.js
- **ioredis**: A robust, performance-focused and full-featured Redis client for Node.js.
- **connect-redis**: The connect-redis module provides Redis session storage for Express.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using `yarn` in the client and server folders in the packages directory.
3. Set up PostgreSQL and Redis databases. Make sure to set up your own databases. The NOTES.md file has some instructions for this.
4. Configure environment variables for database connections and other settings.
5. Start the backend server using `yarn dev` after navigating to the server directory.
6. Start the frontend development server using `yarn start` after navigating to the client directory.
7. Access the application in your browser at `http://localhost:3000`.

Note: If there is an error with installing dependencies for the "@real-time-chat-app/common" package, cd into the packages/common directory and type yarn link in the terminal. Then go to the packages/client and packages/server directory and type yarn link "@real-time-chat-app/common". However, this should not be a problem as the package.json in both client and server folders refer to a local package using the "file:/PATH" convention. If I were to use the package directly, I would need to upload it to the yarn/npm registry.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.
