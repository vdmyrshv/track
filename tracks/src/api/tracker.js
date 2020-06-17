import axios from 'axios'
import { AsyncStorage } from 'react-native'

const BASE_URL = 'http://e7f84ee6ad57.ngrok.io'.trim()

const instance = axios.create({ baseURL: BASE_URL })

instance.interceptors.request.use(
	//1st fn called automatically when making a request
	async config => {
        const token = await AsyncStorage.getItem('token')
        console.log("token!!!", token)
		if (token) {
            config.headers.Authorization = `Bearer ${token}`
            console.log(config)
		}
		return config
	},
	//second fn called automatically when there is an error with that request
	err => Promise.reject(err)
)

export default instance
