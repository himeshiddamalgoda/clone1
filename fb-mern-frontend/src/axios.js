import axios from  'axios'

const instance = axios.create({
    baseUrl: 'https://fb-mern-clone-himesh.herokuapp.com'
})

export default instance

