const express = require('express')
let pokemons = require('./mock-pokemon')

const app = express()

const port = 8000

app.get('/api/pokemons', (req, res) => {
  res.send(`il y as actuellement ${pokemons.length} dans le pokédex.`)
})

app.get('/api/pokemons/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const pokemon = pokemons.find((pokemon) => pokemon.id === id)
  res.send(`Pokémon n°${id} : ${pokemon.name}`)
})

app.listen(port, () =>
  console.log(`node start on port : http://localhost:${port}`)
)
