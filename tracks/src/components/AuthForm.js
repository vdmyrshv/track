import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import {Text, Button, Input} from 'react-native-elements'

import Spacer from './Spacer'

const AuthForm = ({title, action}) => {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    return (
		<>
			<Spacer>
				<Text h3 style={styles.headerStyle}>
					{title} For Tracker
				</Text>
			</Spacer>
			<Input
				label="email"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={text => setEmail(text)}
			/>
			<Input
				label="password"
				secureTextEntry={true}
                autoCapitalize="none"
				autoCorrect={false}
				onChangeText={text => setPassword(text)}
			/>
			<Spacer>
				<Button title={title} onPress={()=> action({email, password})}/>
			</Spacer>
        </>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    headerStyle: {
		marginBottom: 10
	}
})
