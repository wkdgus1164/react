import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tv from '../screens/Tv';
import Movies from '../screens/Movies/MoviesContainer';
import Favs from '../screens/Discovery';
import Search from '../screens/Search';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const Tabs = createBottomTabNavigator()

const getHeaderName = route => route?.state?.routeNames[route.state.index] || "Movie"

export default ({ navigation, route }) => {
    useLayoutEffect(() => {
        const name = getHeaderName(route)
        navigation.setOptions({
            title: name,
        })
    }, [route])
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-"
                    if (route.name === "영화") iconName += "film"
                    else if (route.name === "TV") iconName += "tv"
                    else if (route.name === "검색") iconName += "search"
                    else if (route.name === "탐색") iconName += "heart"
                    return <Ionicons name={iconName} color={focused ? "white" : "grey"} size={30} />
                }
            })}
            tabBarOptions={{
                showLabel: false,
                style: {
                    backgroundColor: 'black',
                    borderTopColor: 'black'
                }
            }}>
            <Tabs.Screen name="영화" component={Movies} />
            <Tabs.Screen name="TV" component={Tv} />
            <Tabs.Screen name="검색" component={Search} />
            <Tabs.Screen name="탐색" component={Favs} />
        </Tabs.Navigator>
    )
}