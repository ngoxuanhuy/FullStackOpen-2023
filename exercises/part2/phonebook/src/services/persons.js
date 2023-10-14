import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const removeContact = id => {
    const objectUrl = `${baseUrl}/${id}`
    console.log("Object URL: ", objectUrl)
    return axios.delete(objectUrl)
}

export default { getAll, create, removeContact }