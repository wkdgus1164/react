import React from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import MoviesScreen from '../screens/Movies'
import TVScreen from '../screens/TV'
import SearchScreen from '../screens/Search'
import TabBarIcon from './../components/TabBarIcon';
import { Platform } from 'react-native'

const TabNavigation = createBottomTabNavigator({
    Movie: {
        screen: MoviesScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-film" : "md-film"} />
            )
        }
    },
    TV: {
        screen: TVScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-tv" : "md-tv"} />
            )
        }
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
            )
        }
    }
}, {
    tabBarOption: {
        showLabel: false,
        style: {
            backgroundColor: 'black'
        }
    }
})

export default createAppContainer(TabNavigation)