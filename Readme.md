# Role based Auth

Welcome to the Role based Auth repository! This server is designed to handle various functionalities related to employee management within a company.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Role based Auth is built to manage employee data, roles, and related operations within the organization. It provides RESTful APIs for employee registration, authentication, and authorization.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) installed and running
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package admin

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Francis-Mwaniki/role-based-auth.git
   cd role-based-auth
    ```

2. Install the dependencies:

   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory of the project and add the following environment variables:

   ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/role-based-auth
    JWT_SECRET=secret
    ```
4. Start the server:

   ```bash
   npm start
   ```
5. Navigate to [http://localhost:3000](http://localhost:3000) in your browser to explore the API.

## Project Structure

```
├── src
│   |
│   │   
│   ├── controllers
│      ├── login.js
│      ├── signup.js
│     
│   
│   ├── middleware.js
│   │ 
│   │  
│   ├── models
│   │   ├── employee.js
│   │   
│   ├── routes
│   │   ├── user.js
│   │  
│   │  
│   |
│   └── index.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```


## Usage

The Role based Auth provides the following RESTful APIs:
 
- `POST /api/auth/register-se` - Register a new  Software engineer employee
- `POST /api/auth/register-hr` - Register a new Human Resource employee
- `POST /api/auth/register-admin` - Register a new admin employee
- `POST /api/auth/Login-se` - Login a Software engineer employee
- `POST /api/auth/Login-hr` - Login a Human Resource employee
- `POST /api/auth/Login-admin` - Login a admin employee

- Protected routes

- `GET /api/marketers-protected` - right to marketers
- `GET /api/admin-protected` - right to admin
- `GET /api/hr-protected` - right to human resource employees
- `GET /api/se-protected` - right to software engineers

