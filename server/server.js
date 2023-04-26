import express from 'express'
import cors from 'cors'
import MpesaRouter from './routes/Mpesa_Route.js'

const app = express();
const PORT = 8000

app.use(express.json())
app.use(cors())
app.use('/',MpesaRouter)

app.get('/home',(req,res)=>{
    res.status(200).json({'message':'Here we are with React Native'})
})

app.all('*',(req,res)=>{
    res.status(404).json({'message':'Error finding Page'})
})
app.listen(PORT,()=>console.log(`App is running on port ${PORT}`))
