const express = require('express')
const moment = require('moment')

const HOST = '0.0.0.0'

//fake db

let daysList = []

//app 
const app = express()
app.use(express.json())

//callback

app.get('/api/v1/classes', (req, res) => {
    res.send(daysList)
})

app.post('/api/v1/classes', (req, res) => {
    const postData = req.body
    res.send("Data criada", daysList)
    makeData(postData)
})


function makeData() {
    const {year, semester, days} = postData
    if (semester == 1) {  
        let data = moment([year, 1])
        let finalData = moment([year, 1]).add(5, "month").add(-1, "days")
        let tmpDay = data
    
        for (let j = 0;;j++) {
            //Verifica se o dia é anterior ao último dia do semestre
            if (tmpDay.isBefore(finalData)) {
                //Verifica quando é a primeira posição para não adicionar o próximo dia
                if (j !== 0) {
                    tmpDay.add(1, "day")
                }
                for(let i = 0; i < days.length;i++) {
                    //Verifica se o dia é o mesmo que o informado naquela posição do array
                    if(tmpDay.days() === days[i]) {
                        daysList.push(tmpDay.format('DD/MM/YYYY'))
                    }
                }
            } else {
                break
            }
        }
        listList()
    } else if (semester == 2) {
        let data = moment([year, 7])
        let finalData = moment([year, 7]).add(4, "month").add(-1, "days")
        console.log(finalData.format('DD/MM/YYYY'))
        let tmpDay = data

        for (let j = 0;;j++) {
            //Verifica se o dia é anterior ao último dia do semestre
            if (tmpDay.isBefore(finalData)) {
                //Verifica quando é a primeira posição para não adicionar o próximo dia
                if (j !== 0) {
                    tmpDay.add(1, "day")
                }
                for(let i = 0; i < days.length;i++) {
                    //Verifica se o dia é o mesmo que o informado naquela posição do array
                    if(tmpDay.days() === days[i]) {
                        daysList.push(tmpDay.format('DD/MM/YYYY'))
                    }
                }
            } else {
                break
            }
        }
        
    }     
}

//servidor rodando 
app.listen(8087, HOST, () => console.log('Server funcionando na porta 8080'))