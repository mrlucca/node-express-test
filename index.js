const express = require('express')
const { FakeService } = require('./app/fake-service.js')

const app = express()

const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.json(new FakeService().hello())
})

app.listen(PORT, () => console.log(`listen in ${PORT}`))