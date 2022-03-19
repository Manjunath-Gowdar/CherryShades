import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoute from './routes/productRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import userRoute from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json()) //to parse data in req.body

app.get('/', (req, res) => {
  res.send('API is running')
})

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoutes)

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
