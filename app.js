const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const { success } = require('./helper')
let pokemons = require('./mock-pokemon')

const app = express()

const port = 8000

app.use(favicon(__dirname + '/favicon.ico')).use(morgan('dev'))

app.get('/api/pokemons', (req, res) => {
  const pokemonList = pokemons
  const message = `${pokemonList.length} pokémons trouvé`
  res.json(success(message, pokemons))
})

app.get('/api/pokemons/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const pokemon = pokemons.find((pokemon) => pokemon.id === id)
  const message = 'Un pokémon a bien été trouvé'
  res.json(success(message, pokemon))
})

app.listen(port, () =>
  console.log(`node start on port : http://localhost:${port}`)
)
