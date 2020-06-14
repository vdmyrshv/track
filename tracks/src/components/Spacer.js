import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Spacer = ({children}) => {
    return (
        <View style={styles.spacingStyles}>
            {children}
        </View>
    )
}

export default Spacer

const styles = StyleSheet.create({
    spacingStyles : {
        marginHorizontal: 10,
        marginVertical: 5
    }
})
