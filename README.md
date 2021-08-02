# destination-finder-server
Express Backend Server

# Code Overview

## Dependencies
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - Used to hash and compare passwords in user authentication
- [cors](https://github.com/expressjs/cors) - CORS Middleware
- [dotenv](https://github.com/motdotla/dotenv) - Creates environmental variables during development 
- [expressjs](https://github.com/expressjs/express) - The server for handling and routing HTTP requests 
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [mongoose](https://github.com/Automattic/mongoose) - For modeling and mapping MongoDB data to javascript  
- [nodemon](https://github.com/remy/nodemon) - Automaticaly restarts Node server from changes in development

## Application Structure

- `app.js` - The entry point to the application. This file defines the express server and connects it to MongoDB using mongoose.
- `middleware/` - This folder contains custom middleware for user authentication.
- `routes/` - This folder contains the route definitions for the API.
- `models/` - This folder contains the schema definitions for the Mongoose models.

## Authentication

Requests are authenticated using the `x-auth-token` header with a valid JWT. "jsonwebtoken" is used to verify the jwt token.
