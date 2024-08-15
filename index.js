const express = require('express');


const app = express();
const PORT = 5000 || process.env.port;
app.listen(PORT, ()=>{

    console.log(`Server is running on port ${PORT}`)
});


const dotEnv = require('dotenv');
dotEnv.config()
const UserInfoRoutes = require('./Routes/UserInfo');
const ExpensesRoutes = require('./Routes/Expenses');

const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(path.join(__dirname, 'FrontEnd')))

mongoose.connect(process.env.MONGODB_URL).then(() => {

    console.log('DB connected')

}).catch(error => console.log(error))

app.use(express.json());

// Users
app.use('/api/v1/UserInfo', UserInfoRoutes); 

// Expenses
app.use('/api/v1/Expenses', ExpensesRoutes) 