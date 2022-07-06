import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import morgan from 'morgan'
import productRoute from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoute from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json()) //to parse data in req.body

app.get('/', (req, res) => {
  res.send('API is running')
})

// to send paypal config
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID)
})

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

// uploading image
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// error handling middleware
app.use(notFound)
app.use(errorHandler)

// dotenv
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `server is in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
