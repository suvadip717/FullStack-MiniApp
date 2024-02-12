import express from 'express'
import dotenv from 'dotenv'


dotenv.config(
    {
        path: './.env'
    }
)

const people = [
    {
        "id": 1,
        "firstName": "Joe",
        "lastName": "Jackson",
        "gender": "male",
        "age": 28,
        "number": "7349282382"
    },
    {
        "id": 2,
        "firstName": "James",
        "lastName": "Smith",
        "gender": "male",
        "age": 32,
        "number": "5678568567"
    },
    {
        "id": 3,
        "firstName": "Emily",
        "lastName": "Jones",
        "gender": "female",
        "age": 24,
        "number": "456754675"
    }
]

const app = express()

const port = process.env.PORT || 3000

app.get('/api', (req, res) => {
    res.send("Hello!")
})

app.get('/api/hello', (req, res) => {
    res.send("<h1>hello</h1>")
})

app.get('/api/people', (req, res) => {
    res.json(people)
})

app.listen(port, () => {
    console.log(`App run at port ${port}`)
})
