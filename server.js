require('dotenv').config()

const app = require('./src/app')

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`O servidor está na ${PORT}`)
})