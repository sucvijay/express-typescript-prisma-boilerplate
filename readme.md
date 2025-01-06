# Express TypeScript Prisma Boilerplate with JWT Authentication

This is a boilerplate application built with Express.js, TypeScript, and Prisma ORM, featuring JWT authentication middleware. It provides a solid foundation for building secure REST APIs with TypeScript and modern database access through Prisma.

## Features

- Express.js with TypeScript configuration
- Prisma ORM for database operations
- JWT authentication middleware
- Environment-based configuration
- TypeScript path aliases
- Error handling middleware
- Request validation
- Secure routing setup

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- A PostgreSQL, MySQL, or SQLite database

## Project Setup

1. Clone the repository:
```bash
git clone git@github.com:sucvijay/express-typescript-prisma-boilerplate.git
cd express-typescript-prisma-boilerplate/
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory and add the following configurations:

```env
# Database connection string
DATABASE_URL=""

# JWT configuration
JWT_SECRET=""
ISSUER=""
AUDIENCE=""
```

Example configurations:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET="your-super-secret-key"
ISSUER="your-app-name"
AUDIENCE="your-app-users"
```

4. Initialize Prisma:
```bash
npx prisma generate
npx prisma migrate dev
```

## Running the Application

There are multiple ways to run the application:

1. Development mode with auto-reload:
```bash
npm run dev
```

2. Production mode:
```bash
npm start
```

3. Directly with ts-node:
```bash
npx ts-node src/index.ts
```



## API Documentation

The API endpoints will be available at `http://localhost:3000` by default.


## Development

### Available Scripts


- `npm run dev` - Runs the built application in debug
- `npm start` - Runs the application



### Working with Prisma

1. Update schema:
```bash
# Edit prisma/schema.prisma
npx prisma generate
npx prisma migrate dev
```

2. Access database with Prisma Studio:
```bash
npx prisma studio
```

## Security

- JWT tokens are used for authentication
- Passwords are hashed before storage
- Environment variables are used for sensitive data
- CORS is configured for API security
- Request validation is implemented
- Error handling prevents sensitive data exposure

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.