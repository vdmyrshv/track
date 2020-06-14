import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

import { Context as AuthContext } from '../context/AuthContext'

const ResolveAuthScreen = () => {
	const { tryLocalSignin } = useContext(AuthContext)

	useEffect(() => {
		tryLocalSignin()
    }, [])
    
	return (
		<View style={styles.containerStyle}>
			<ActivityIndicator size='large' color='darkcyan' />
		</View>
	)
}

export default ResolveAuthScreen

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
	}
})
