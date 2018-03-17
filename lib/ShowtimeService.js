import axios from 'axios'

const API_HOST = 'https://showtimes.everyday.in.th/api/v2/'

export default {
  getTheaters() {
    return axios({
      method: 'GET',
      baseURL: API_HOST,
      url: '/theater',
      params: {
        offset: 0,
        group: 'sf',
      },
    })
  },
  getTheater(id) {
    return axios({
      method: 'GET',
      baseURL: API_HOST,
      url: `/theater/${id}`,
    })
  },
  getShowtimes(id) {
    return axios({
      method: 'GET',
      baseURL: API_HOST,
      url: `/theater/${id}/showtimes`,
      params: {
        offset: 0,
        date: 'today',
      },
    })
  },
}
