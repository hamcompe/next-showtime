import fetch from './fetch'

const API_HOST = 'https://showtimes.everyday.in.th/api/v2'

export default {
  getTheaters() {
    return fetch({
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
    return fetch({
      method: 'GET',
      baseURL: API_HOST,
      url: `/theater/${id}`,
    })
  },
  getMovie(id) {
    return fetch({
      method: 'GET',
      baseURL: API_HOST,
      url: `/movie/${id}`,
    })
  },
  getShowtimes(id) {
    return fetch({
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
