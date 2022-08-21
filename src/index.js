const express = require('express') 

// fake data base
let courses = []


//app 
const app = express()

app.use(express.json())

//callback
app.post('/courses', (req,res)=>{
    const {name, course, year} = req.body
    const curso = {name, course,year}
    courses.push(curso)
    return res.status(201).json(curso)
})

app.get('/courses', (req, res) =>{
    const allCourses = courses
    console.log('lista de cursos', `${allCourses}`)
    return res.status(200).json(allCourses)

})


//servidor rodando 
app.listen(8080, ()=> console.log('Server funcionando'))