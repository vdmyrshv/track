import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <Text>TrackList</Text>
            <Button title="go to track detail" onPress={()=> navigation.navigate('TrackDetail')} />
        </View>
    )
}

export default TrackListScreen

const styles = StyleSheet.create({})
