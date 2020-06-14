import React, { useContext, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'

import { Context as AuthContext } from '../context/AuthContext'

import Spacer from '../components/Spacer'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {
	const { state, signUp, clearErrorMessage, tryLocalSignin } = useContext(
		AuthContext
	)

	return (
		<View style={styles.containerStyle}>
			<NavigationEvents onWillFocus={clearErrorMessage} />
			<AuthForm title='Sign Up' action={signUp} />
			<NavLink
				caption='Already a member? Tap here to sign in!'
				target='Signin'
			/>
			{!!state.errorMessage && (
				<Text style={styles.errorStyle}>
					Error! {state.errorMessage}
				</Text>
			)}
		</View>
	)
}

SignupScreen.navigationOptions = () => ({
	headerShown: false
})
export default SignupScreen

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: -40
	},
	errorStyle: {
		color: 'red'
	}
})
