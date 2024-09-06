# Shopping List App

## Introduction

This project is a full-stack web application developed as part of a coding challenge for a job position. The application is built using Turborepo, NestJS, and Vite.

## Technologies Used

- Monorepo Tool: Turborepo
- Backend: NestJS
- Database: PostgreSQL
- ORM: TypeORM
- Frontend: React with Vite
- State Management: Redux Toolkit Query
- Virtualization: react-window
- Form Handling: React Hook Form
- Validation: Zod
- UI Components: Material UI

### Apps and Packages

- `web`: shopping list web app built using [Vite](https://vitejs.dev/)
- `api`: shopping list api built using [NestJS](https://nestjs.com/)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Installation

1- Clone the repository:

```
git clone git@github.com:manuelbogino95/shopping-list.git
cd shopping-list
```

2- Install dependencies:

```
pnpm install
```

3- Create a new postgress database.

4- Add environment variables for both (api and web) apps using the provided env.example file:

- Web ():

```
VITE_API_URL=http://localhost:3001
```

- API (NestJS app):

```
PORT=3001
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE=shopping-list
```

6- Run the application:

```
pnpm dev
```

To use the application, navigate to http://localhost:5173 in your web browser.
