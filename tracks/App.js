import React from 'react'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { setNavigator } from './src/navigationRef'

import {
	Provider as AuthProvider
} from './src/context/AuthContext'

import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import AccountScreen from './src/screens/AccountScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import TrackDetailScreen from './src/screens/TrackDetailScreen'

const switchNavigator = createSwitchNavigator({
	loginFlow: createStackNavigator({
		Signup: SignupScreen,
		Signin: SigninScreen
	}),
	mainFlow: createBottomTabNavigator({
		trackListFlow: createStackNavigator({
			TrackList: TrackListScreen,
			TrackDetail: TrackDetailScreen
		}),
		TrackCreate: TrackCreateScreen,
		Account: AccountScreen
	})
})

const App = createAppContainer(switchNavigator)

export default () => (
	<AuthProvider>
		<App ref={(nav)=> {setNavigator(nav)}}/>
	</AuthProvider>
)
