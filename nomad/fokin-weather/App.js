import React from 'react'
import Loading from './Loading'
import * as Location from 'expo-location'
import { Alert } from 'react-native'
import axios from 'axios'
import Weather from './Weather';

const API_KEY = "9ba3bbe893ff4cd3a52bcb6104dc7de8"

export default class extends React.Component {

  state = {
    isLoading: true,
  }

  getWeather = async (latitude, longitude) => {
    const { data: {
      main: { temp },
      weather
    }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    })
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync()
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude)
      this.setState({
        isLoading: false,
      })
    } catch (error) {
      Alert.alert("can't find you", "so sad")
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    const { isLoading, temp, condition } = this.state
    console.log(temp, condition);
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  }
}
