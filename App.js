import React from 'react';
import * as Location from 'expo-location';
import Loading from './Loading';
import { Alert } from 'react-native';
import axios from 'axios';

const API_KEY = '26f395bcdb994323a1dac9c99ebfc9b4';
export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      console.log(latitude, longitude);

      this.setState({ isLoading: false });
      // Send to API and get weather
    } catch (error) {
      Alert.alert("Can't find you.", 'So sad');
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : <></>;
  }
}
