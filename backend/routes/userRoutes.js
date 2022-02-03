import express from 'express'
import {authUser} from '../controllers/userController.js'
// import { getProductById, getProducts } from '../controllers/productControllers.js'


const router = express.Router()

router.post('/login',authUser)

// router.route('/:id').get(getProductById)

export default router