const express = require('express') 


// fake data base
let courses = []


//app 
const app = express

app.use(express.json())

app.post('courses', (req,res)=>{
    const {name, course, year} = req.body
    const curso = {name, course,year}
    courses.push(curso)
    res.status(201).json(curso)
})


//servidor rodando 
app.listen(8080, ()=> console.log('Server funcionando'))