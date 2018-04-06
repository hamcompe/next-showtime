import fetch from 'isomorphic-unfetch'

export default async function ({
  method, baseURL, url = '', params = {}, headers, body = {},
}) {
  const queryParams = queryParamsStringify(params)

  const fetchUrl = baseURL + url + queryParams
  const options = {
    method,
    headers,
  }
  if (body) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(fetchUrl, options)
  if (!response.ok) {
    Promise.reject(response)
  }
  return response.json()
}

function queryParamsStringify(params) {
  if (params == null || Object.keys(params).length === 0) return ''
  const qpStr = Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join('&')
  return `?${qpStr}`
}
