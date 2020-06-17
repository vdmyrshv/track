import {useContext} from 'react'

import {Context as TrackContext} from '../context/TrackContext'
import {Context as LocationContext} from '../context/LocationContext'

import {navigate} from '../navigationRef'

export default () => {
    const {createTrack} = useContext(TrackContext)
    const {state: {locations, name}, clearName, clearLocations} = useContext(LocationContext)

    const saveTrack = async () => {
        try{
            await createTrack({name, locations})
            clearName()
            clearLocations()
            navigate('TrackList')
        } catch {
            console.log("There was an error saving your track!")
        }
    }

    return [saveTrack]
}

