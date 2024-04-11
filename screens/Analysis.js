import React from 'react';
import { View, Text, Dimensions, ScrollView} from 'react-native';
import { theme } from '../theme';
import { LineChart } from 'react-native-chart-kit';
import HeartRate from "../components/Graph/heartRate";
import SleepQuality from '../components/Graph/sleepQuality';
import CaloriesBurnedGraph from '../components/Graph/calories';

const Analysis = () => {


  return (
    <ScrollView style={{padding: 16}}>

      <Text  style={{ color: theme.colors.text, fontSize: 18, fontWeight: 'bold' }}>
        Calories Burned
      </Text>

      <CaloriesBurnedGraph />


      <Text  style={{ color: theme.colors.text, fontSize: 18, fontWeight: 'bold' }}>
        Heart Rate
      </Text>

      <HeartRate />

      <Text  style={{ color: theme.colors.text, fontSize: 18, fontWeight: 'bold' }}>
        Sleep Quality
      </Text>
      
      <SleepQuality/>
      
    </ScrollView>
  );
};

export default Analysis;
