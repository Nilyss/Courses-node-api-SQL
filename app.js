const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')

// server config
const app = express()
const port = 8000

// middleware
app
  .use(favicon(__dirname + '/favicon.ico'))
  .use(morgan('dev'))
  .use(bodyParser.json())

// db
sequelize.initDb()

// routes
require('./src/routes/findAllPokemons')(app)
require('./src/routes/findPokemonByPk')(app)
require('./src/routes/createPokemon')(app)
require('./src/routes/updatePokemon')(app)
require('./src/routes/deletePokemon')(app)

// handle 404 error
app.use(({ res }) => {
  const message = 'Resources not found ! You can try another URL.'
  res.status(404).json({ message })
})

// starting server
app.listen(port, () =>
  console.log(`node start on port : http://localhost:${port}`)
)
