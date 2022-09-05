const express = require('express') 
const moment = require('moment')


//app 
const app = express()
app.use(express.json())

//callback
app.post('/api/v1/classes', (req,res)=>{
    const data = req.body  
    
})

const checkingData = (data) =>{
    const  {year, semster, days}
}







//servidor rodando 
app.listen(8080, ()=> console.log('Server funcionando na porta 8080'))