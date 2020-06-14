import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

import { Context as AuthContext } from '../context/AuthContext'

import Spacer from '../components/Spacer'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = ({ navigation }) => {
	const { state, signIn } = useContext(AuthContext)

	return (
		<View style={styles.containerStyle}>
			<AuthForm title='Sign In' action={signIn} />
			<NavLink
				caption='Not yet a member? Tap here to sign up!'
				target='Signup'
			/>
			{!!state.errorMessage && (
				<Text style={styles.errorStyle}>
					Error! {state.errorMessage}
				</Text>
			)}
		</View>
	)
}

SigninScreen.navigationOptions = () => ({
	headerShown: false
})

export default SigninScreen

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
