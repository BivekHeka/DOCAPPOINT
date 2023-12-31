const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { getDoctorInfoController, updateProfileController, getDoctorByIdController } = require('../controllers/doctorCtrl')
const router = express.Router()

//POST SINGLE DOC INFO
router.post('/getDoctorInfo', authMiddleware, getDoctorInfoController);

//POST
router.post('/updateProfile', authMiddleware, updateProfileController);

//POST GET SINGLE DOC INFO
router.post('/getDoctorById', authMiddleware, getDoctorByIdController)

module.exports = router;