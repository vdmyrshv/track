import axios from 'axios'

const BASE_URL = 'http://99976f3b3f32.ngrok.io'

export default axios.create({ baseURL: BASE_URL})