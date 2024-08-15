const ExpensesModel = require('../Models/Expenses');
const UserModel = require('../Models/UserInfo');

const GetAllExpenses = async (req, res) => {
    try{
        const allExpenses = await ExpensesModel.find()
        return res.status(200).json({
            success: true,
            data: allExpenses

        })
    } 
    catch (error){
        return res.status(500).json({
            success: false,
            data: null,
            error
        })
    }

};

const CreateExpense = async (req, res) => {
    const {expenseLabel, description, category, amount, debitOrCredit, Username} = req.body;
   
    const userExists = await UserModel.FindById(Username)
    if (!userExists){
        return res.status(404).json({
            success: false,
            data: null,
            message: 'User not found'
        })
     
    }
   
    const newExpense = await ExpensesModel({
        expenseLabel,
        description,
        category,
        amount,
        debitOrCredit,
        Username
    })

   try{
       const newlyCreatedUser = await newUser.save();
       return res.status(201).json({
           success: true,
           data: newlyCreatedUser})
   
   } 
   catch (error){
       return res.status(500).json({
           success: false,
           data: null,
           error
       })

   }

}

const GetExpensesById = async (req, res) =>{
   const {id} = req.params;

   try{
       const expenseID = await ExpensesModel.findById(id)
       if (expenseID){
           return res.status(200).json({
               success: true,
               data: {expenseID: expenseID }, 
           })
       } else {
           return res.status(404).json({
               success: false,
               data: null,
               error: "Expense not found"
           })

       }
   }
   catch (error) {

       return res.status(500).json({
           success: false,
           data: null,
           error
       })


   }
}


module.exports = {
    GetAllExpenses,
    CreateExpense,
    GetExpensesById
}