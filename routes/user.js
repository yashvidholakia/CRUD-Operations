const express=require('express')
const {handleGetAllUsers,
       getUserById,
       updateUserById,
       deleteUser,
       createUser
}=require('../controllers/user')
const router=express.Router();

router.route("/")
.get(handleGetAllUsers)
.post(createUser)

router.route("/:id")
    .get(getUserById)
    .patch(updateUserById)
    .delete(deleteUser)

module.exports=router;
