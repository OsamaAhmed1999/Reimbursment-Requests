const express = require('express')
const router = express.Router()

const {signin, signout, signup, getUsers, deleteUser} = require('../controllers/UserControllers')
const {userSignupValidator, userSigninValidator} = require('../validators/validators')



router.get('/getusers', getUsers)  //for getting all the user info
router.post('/signin',userSigninValidator, signin)  //for getting all the user info
router.post('/signup', userSignupValidator, signup); //for addusers
router.delete('/deleteuser/:id', deleteUser) // for delete user 

router.get('/signout', signout); //for sign out


module.exports = router;
