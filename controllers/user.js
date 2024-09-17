const User = require('../models/user')
async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({})
    const names = allDbUsers.map(user => ({

        id:user._id,
        first_name: user.first_name,
        last_name: user.last_name
    
    }))
    res.json(names);
}
async function getUserById(req,res) {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(404).json({ message: "user not found" })
    } else {
        return res.json(user)

    }
}
async function updateUserById(req,res){
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,  //Updated fields from the request body
        { new: true, runValidators: true }
    )
    if (!updatedUser) {
        return res.status(404).json({ msg: "user not found" })
    } else {
        res.status(200).json({ status: "success" })
    }
}
async function deleteUser(req,res){
    const userindex = await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({ status: "success", message: "User deleted successfully" })
}
async function createUser(req,res){
    const body = req.body;
    if (!body
        || !body.first_name
        || !body.last_name
        || !body.email
        || !body.gender
        || !body.phoneno) {
        return res.status(400).json({ msg: "all fields are required" })
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        phoneno: body.phoneno
    })
    //console.log("result",result)`
    return res.status(201).json({ msg: "success" })
}

module.exports = {
    handleGetAllUsers,
    getUserById,
    updateUserById,
    deleteUser,
    createUser

}