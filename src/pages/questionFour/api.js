import axios from 'axios'

const getGeoData = async () => {
  try {
    const { data } = await axios.get('http://localhost:3001/mapData')

    return data
  } catch (error) {
    console.log(error)

    throw error
  }
}

const getMapSeries = async () => {
  const data = [
    ['gb-wls', 37],
    ['gb-sct', 24],
    ['gb-nir', 3],
    ['gb-eng', 47]
  ]

  return Promise.resolve(data)
}

export { getGeoData, getMapSeries }
