# API REST for User Management

This is a simple example of a REST API built with Node.js and Express. The API allows CRUD operations to manage users.

Requirements
Node.js (LTS version recommended)
npm (Node Package Manager), which comes installed with Node.js

Installation
To run the project locally, first clone the repository with the following command:

git clone https://github.com/your-username/api-rest-node.git
cd api-rest-node

Then install the necessary dependencies with npm:

npm install

To start the server, use:

node app.js

The server will be running on port 3000, and you can access it at http://localhost:3000

API Endpoints

GET /api/users
Fetches all registered users. The response will be an array of user objects with their data.

POST /api/users
Creates a new user. Send a request body with the user's name and email. The response will include the newly created user with its ID.

GET /api/users/:id
Fetches a specific user by their ID. The response will be a user object with their data.

PUT /api/users/:id
Updates a specific user's information. Send a request body with the updated data, and the response will be the updated user.

DELETE /api/users/:id
Deletes a specific user. The response will be a message confirming that the user was deleted.

Test the API
You can test the API using tools like Postman or Insomnia. Make requests to the mentioned endpoints and check the responses.

License
This project is licensed under the MIT License.
