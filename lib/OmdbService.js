import fetch from './fetch'

const API_KEY = '28de411a'
const API_HOST = 'https://www.omdbapi.com'

export default {
  getData(name = '') {
    const encodedName = encodeURIComponent(name)
    return fetch({
      method: 'GET',
      baseURL: API_HOST,
      params: {
        apikey: API_KEY,
        t: encodedName,
      },
    })
  },
}
