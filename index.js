const express = require('express') 
const moment = require('moment')

const HOST = '0.0.0.0'


//app 
const app = express()
app.use(express.json())

//callback
app.post('/api/v1/classes', (req,res)=>{
    const data = req.body  
    
})

const checkingData = (data) =>{
    
}







//servidor rodando 
app.listen(8087, HOST, ()=> console.log('Server funcionando na porta 8080'))