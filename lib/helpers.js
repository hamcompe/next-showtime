import shortid from 'shortid'

export const generateKeyWrapper = arr => arr.map(item => ({ id: shortid.generate(), value: item }))
