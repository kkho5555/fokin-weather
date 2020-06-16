import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: {
    iconName: 'weather-lightning-rainy',
    gradient: ['#1f4037', '#99f2c8'],
    title: '천둥번개가 치네요',
    subtitle: '나가지 마세요!',
  },
  Drizzle: {
    iconName: 'weather-partly-rainy',
    gradient: ['#8360c3', '#2ebf91'],
    title: '이슬비가 내려요',
    subtitle: '우산을 챙기세요',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#2980b9', '#2c3e50'],
    title: '비가 와요',
    subtitle: '우산을 챙기세요',
  },
  Snow: {
    iconName: 'weather-snowy-heavy',
    gradient: ['#8e9eab', '#eef2f3'],
    title: '눈이 내리네요',
    subtitle: '우산을 챙기세요',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#36D1DC', '#5B86E5'],
    title: '화창한 날이에요',
    subtitle: '나들이 하기 좋아요',
  },
  Clouds: {
    iconName: 'cloud',
    gradient: ['#44A08D', '#093637'],
    title: '선선해요',
    subtitle: '나들이 하기 좋아요',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#43cea2', '#185a9d'],
    title: '황사가 심해요',
    subtitle: '마스크를 착용하세요',
  },
  Smoke: {
    iconName: 'smog',
    gradient: ['#FFA17F', '#00223E'],
    title: '미세먼지 조심하세요',
    subtitle: '마스크를 착용하세요',
  },
  Haze: {
    iconName: 'weather-fog',
    gradient: ['#FFAFBD', '#ffc3a0'],
    title: '미세먼지 조심하세요',
    subtitle: '마스크를 착용하세요',
  },
  Dust: {
    iconName: 'weather-fog',
    gradient: ['#780206', '#061161'],
    title: '미세먼지 조심하세요',
    subtitle: '마스크를 착용하세요',
  },
  Fog: {
    iconName: 'weather-fog',
    gradient: ['#F0C27B', '#4B1248'],
    title: '미세먼지 조심하세요',
    subtitle: '마스크를 착용하세요',
  },
  Sand: {
    iconName: 'weather-fog',
    gradient: ['#D3959B', '#BFE6BA'],
    title: '미세먼지 조심하세요',
    subtitle: '마스크를 착용하세요',
  },
  Ash: {
    iconName: 'weather-fog',
    gradient: ['#200122', '#6f0000'],
    title: '미세먼지 조심하세요',
    subtitle: '마스크를 착용하세요',
  },
  Squall: {
    iconName: 'wind-turbine',
    gradient: ['#3D7EAA', '#FFE47A'],
    title: '바람이 많이 불어요',
    subtitle: '외투를 챙기세요',
  },
  Tornado: {
    iconName: 'weather-tornado',
    gradient: ['#00416A', '#E4E5E6'],
    title: '태풍이 와요',
    subtitle: '외출하지 마세요',
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={86}
          color="white"
        />
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.message }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  temp: {
    fontSize: 36,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    alignItems: 'flex-start',
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  title: { color: 'white', fontWeight: '300', fontSize: 44, marginBottom: 10 },
  subtitle: { color: 'white', fontWeight: '600', fontSize: 24 },
});

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Clear',
    'Clouds',
    'Mist',
    'Smoke',
    'Haze',
    'Dust',
    'Fog',
    'Sand',
    'Ash',
    'Squall',
    'Tornado',
  ]).isRequired,
};
