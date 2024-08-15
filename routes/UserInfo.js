const express = require('express');
const Router = express.Router();
const {CreateUser, GetUserById } = require ('../controllers/UserInfo');

// Fetching the User
//Router.get('/', GetAllUsers)

// Creating an User
Router.post('/', CreateUser)

// Get an User by Id
Router.get('/:id', GetUserById)

module.exports = Router; 