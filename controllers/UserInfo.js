const UserModel = require('../Models/UserInfo');
/*
const GetAllUsers = async (req, res) => {
    try{
        const AllUsers = await UserModel.find()
        return res.status(200).json({
            success: true,
            data: AllUsers

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
*/

const CreateUser = async (req, res) => {
     const userData = req.body;
     const newUser = await UserModel({

         name: userData.name,
         email: userData.email
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

const GetUserById = async (req, res) =>{
    const {id} = req.params;

    try{
        const userInfo = await UserModel.findById(id)
        if (userInfo){
            return res.status(200).json({
                success: true,
                data: userInfo
            })
        } else {
            return res.status(404).json({
                success: false,
                data: null,
                error: "User not found"
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
    //GetAllAuthor,
    CreateUser,
    GetUserById
}