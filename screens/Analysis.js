import React from 'react';
import { View, Text } from 'react-native';
import { theme } from '../theme';



import {ActivitySummary} from "@dynamic-data/oura-data/src/mockups";
import {WorkoutDetails} from "@dynamic-data/peloton-data/src/mockups";
import {HeartRateSummary} from "@dynamic-data/fitbit-data/src/mockups";

const Analysis = () => {
  return (
    <View>
      <Text style={{ color: theme.colors.text }}>{ActivitySummary.summary_date}</Text>
      <Text style={{ color: theme.colors.text }}>{WorkoutDetails.fitness_discipline}</Text>
      <Text style={{ color: theme.colors.text }}>{HeartRateSummary.fat_burn.cals}</Text>
    </View>
  );
};

export default Analysis;
