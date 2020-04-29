import React from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

const weatherOptions = {
    'Clouds': {
        iconName: "weather-cloudy",
        gradient: ["#4da0b0", '#d39d38'],
        title: 'Clouds',
        subtitle: 'CloudsCloudsClouds'
    },
    'Thunderstorm': {
        iconName: 'weather-sunny',
        gradient: ["#4da0b0", '#d39d38']
    },
    'Drizzle': {
        iconName: 'weather-cloudy',
        gradient: ["#4da0b0", '#d39d38']
    },
    'Rain': {
        iconName: '',
        gradient: []
    },
    'Snow': {
        iconName: '',
        gradient: []
    },
    'Atmosphere': {
        iconName: '',
        gradient: []
    },
    'Clear': {
        iconName: 'weather-sunny',
        gradient: []
    },
    'Haze': {
        iconName: '',
        gradient: []
    },
}

export default function Weather({ temp, condition }) {
    console.log("Weather : " + condition);

    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze'
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white'
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: "300",
        marginBottom: 10,
        fontSize: 44
    },
    subtitle: {
        fontWeight: '600',
        color: 'white',
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
})