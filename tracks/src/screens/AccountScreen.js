import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import { Context as AuthContext } from '../context/AuthContext'

const AccountScreen = () => {
    const { signOut } = useContext(AuthContext)
    
    
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.testStyle}>AccountScreen</Text>
            <View style={styles.buttonSizeStyle}>
			    <Button style={styles.buttonStyle} type="outline" raised title="Sign Out" onPress={signOut} />
            </View>
		</View>
	)
}

export default AccountScreen

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    testStyle: {
        marginBottom: 20,
        fontSize: 30
    },
    buttonStyle: {
        marginTop: 50,
        width: 300,
        marginHorizontal: 30
    },
    buttonSizeStyle: {
        width: wp('50%')
    }
})
