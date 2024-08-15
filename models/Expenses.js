const mongoose = require('mongoose');

const ExpensesSchema = new mongoose.Schema({

    expenseLabel:{
        type: String,
        required: true
    
    }, 
    descriptionOrDate: {
    
        type: String
        
    },
    category:{
    
        type: String
    
    },
    amount:{
    
        type: String
    
    },
    debitOrCredit:{
    
        type: String
    
    },
    
    userName:{
        type: mongoose.Schema.Types.ObjectID,
        ref: 'UserInfo',
        required: true
    
    }
    
    })
    
    const ExpensesModel = mongoose.model('Expenses', ExpensesSchema);
    
    module.exports = ExpensesModel;