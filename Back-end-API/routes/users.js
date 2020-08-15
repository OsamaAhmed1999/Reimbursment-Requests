const express = require('express')
const router = express.Router()

const {signin, signout, signup, getUsers} = require('../controllers/UserControllers')




router.get('/getusers',getUsers)  //for getting all the user info
router.get('/signin',signin)  //for getting all the user info
router.post('/signup',  signup); //for addusers
router.get('/signout', signout); //for sign out


module.exports = router;