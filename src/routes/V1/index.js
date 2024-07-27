const express = require('express');
const router = express.Router();
const {UserController} = require('../../controllers/index')
router.get('/users', UserController.allUser)
router.post('/createuser', UserController.create)
router.put('/updateuser/:id', UserController.update)
router.delete('/deleteuser/:id', UserController.delUser)
module.exports = router;