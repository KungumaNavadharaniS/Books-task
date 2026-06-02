# Book Management REST API

## Project Overview

This project is a simple REST API built using Node.js and Express.js to manage a list of books. The API performs CRUD (Create, Read, Update, Delete) operations using an in-memory array without a database.

## Technologies Used

* Node.js
* Express.js
* Postman
* VS Code

## Features

* View all books
* Add a new book
* Update an existing book
* Delete a book
* JSON request and response handling

## Installation

1. Clone the repository

```bash
git clone <repository-link>
```

2. Navigate to the project folder

```bash
cd BookAPI
```

3. Install dependencies

```bash
npm install
```

4. Start the server

```bash
node server.js
```

Server runs on:

```text
http://localhost:3000
```

## API Endpoints

### GET All Books

```http
GET /books
```

### Add a New Book

```http
POST /books
```

Request Body:

```json
{
  "title": "Rich Dad Poor Dad",
  "author": "Robert Kiyosaki"
}
```

### Update a Book

```http
PUT /books/:id
```

Request Body:

```json
{
  "title": "Updated Book",
  "author": "Updated Author"
}
```

### Delete a Book

```http
DELETE /books/:id
```

## Testing

All API endpoints were tested using Postman.

## Learning Outcomes

* REST API fundamentals
* Express.js routing
* HTTP methods (GET, POST, PUT, DELETE)
* JSON handling
* CRUD operations
* Middleware usage

## Author

Kunguma Nava Dharani S
BE Computer Science Engineering (3rd Year)
