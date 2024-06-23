import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'manjunath',
    email: 'manjunath@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'ameenagouda',
    email: 'ameenagouda@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Chandrika',
    email: 'chandrika@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'sangeetha',
    email: 'sangeetha@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'nakshatra',
    email: 'nakshatra@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
