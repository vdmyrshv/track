import createDataContext from './createDataContext'

import { AsyncStorage } from 'react-native'

import trackerAPI from '../api/tracker'

import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
	switch (action.type) {
		case 'sign_up':
			return { errorMessage: '', token: action.payload }
		case 'sign_in':
			return { errorMessage: '', token: action.payload }
		case 'add_error':
			return { ...state, errorMessage: action.payload }
		case 'sign_out':
			return { errorMessage: '', token: null }
		case 'clear_error_message':
			return {...state, errorMessage: ''}
		default:
			return state
	}
}

const tryLocalSignin = dispatch => async () => {
	const token = await AsyncStorage.getItem('token')
	if (token) {
		dispatch({ type: 'sign_in', payload: token})
		navigate('TrackList')
	} else {
		navigate('loginFlow')
	}
}
const signUp = dispatch => async ({ email, password }) => {
	//make API request to sign up with email password
	//if signed up, modify state and say we are authenticated
	//if signup fails, we probably need to reflect an error message somewhere
	try {
		const response = await trackerAPI.post('/signup', {
			email,
			password
		})
		await AsyncStorage.setItem('token', response.data.token)
		dispatch({ type: 'sign_up', payload: response.data.token })
		navigate('TrackList')
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: err.message
		})
		setTimeout(() => dispatch({ type: 'add_error', payload: '' }), 3000)
		console.log(err.message)
	}
}
const signIn = dispatch => async ({ email, password }) => {
	try {
		const response = await trackerAPI.post('/signin', {
			email,
			password
		})
		await AsyncStorage.setItem('token', response.data.token)
		dispatch({ type: 'sign_in', payload: response.data.token })
		navigate('TrackList')
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: 'Oops, something went wrong!'
		})
		setTimeout(() => dispatch({ type: 'add_error', payload: '' }), 3000)
		console.log(err.message)
	}
}
const signOut = dispatch => async () => {
	await AsyncStorage.removeItem('token')
	dispatch({ type: 'sign_out' })
	navigate('Signin')
}

const clearErrorMessage = dispatch => () => {
	dispatch({ type: 'clear_error_message'})
	console.log('error message cleared')
}

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signUp, signIn, signOut, clearErrorMessage, tryLocalSignin },
	{ token: null, errorMessage: '' }
)
