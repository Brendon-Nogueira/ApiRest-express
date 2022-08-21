const express = require('express') 
const moment = require('moment')

// fake data base
let schedule = {
    'year' : 0,
    'semester' : 0,
    'days' : [1,2,3,4,5],
}

//app 
const app = express()
app.use(express.json())

//callback
app.post('/api/v1/classes', (req,res)=>{
    const {year, semester, days} = req.body
    const weekly = {year,semester,days}

    if (weekly.days < 1 || weekly.days > 5){
        console.log('Valor de data incorreto')
        return res.status(400).end()
    } else if (weekly.semester !== 1 && weekly.semester !== 2) {
        console.log('Valor de semestre incorreto')
        return res.status(400).end()
    } else {
        schedule.push(weekly)
        return res.status(201).json(weekly)
    }
})

let makeData = () => {
    
}

app.get('/api/v1/classes', (req, res) =>{
    const allDays = schedule
    console.log(`lista de datas ${allDays}`)
    return res.status(200).json(allDays)

})

//servidor rodando 
app.listen(8080, ()=> console.log('Server funcionando na porta 8080'))