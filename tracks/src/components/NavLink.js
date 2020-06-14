import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import Spacer from './Spacer'

const NavLink = ({caption, target}) => {
    return (
        <TouchableOpacity onPress={()=> navigation.navigate(target)}>
            <Spacer>
                <Text style={styles.signupStyle}>{caption}</Text>
            </Spacer>
		</TouchableOpacity>
    )
}

export default NavLink

const styles = StyleSheet.create({
	signupStyle: {
		color: 'blue'
	}
})
