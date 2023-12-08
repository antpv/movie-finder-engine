const search = (value, page) => `https://www.omdbapi.com/?apikey=a6004d7a&s=${value}&page=${page}`
const searchById = value => `https://www.omdbapi.com/?apikey=a6004d7a&i=${value}`

export const searchMovie = async (value, page) => {
  const results = await fetch(search(value, page), { method: 'GET' })
  const json = await results.json()

  const { Search: items } = json

  const detalisedItems = await Promise.all(items.map(({ imdbID }) => getDetalisatedMovie(imdbID)))

  return { ...json, Search: detalisedItems }
}

export const getDetalisatedMovie = async (imdbID) => {
  const results = await fetch(searchById(imdbID), { method: 'GET' })
  const json = await results.json()

  return json
}
