import axios from 'axios'

export const getCardDetails = async () => {
  try {
	 const { data } = await axios.get('http://localhost:3001/example')

	 return data
  } catch (error) {
    console.log(error)

    throw error
  }
}
