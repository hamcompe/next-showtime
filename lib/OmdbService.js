import axios from 'axios'
import { prop } from 'ramda'

const API_KEY = '28de411a'
const API_HOST = 'https://www.omdbapi.com/'

const getData = prop('data')

export default {
  getData(name = '') {
    const encodedName = name.split(' ').join('+')
    return axios({
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Content-Type': 'application/json',
      },
      baseURL: API_HOST,
      params: {
        apikey: API_KEY,
        t: encodedName,
      },
      crossDomain: true,
      credentials: 'same-origin',
    }).then(getData)
  },
}
