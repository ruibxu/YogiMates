
import { HeartRateSummary, HeartRateData, activitiesData} from "@dynamic-data/fitbit-data/src/mockups";
import { View, StyleSheet,  Dimensions, ScrollView,Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { theme } from '../../theme';

const CaloriesBurnedGraph = () => {
    // Extract calories burned data
    const zoneNames = activitiesData.heartRateZones.map(zone => zone.name);
    const caloriesBurned = activitiesData.heartRateZones.map(zone => zone.caloriesOut);
  
    // Prepare dataset
    const dataset = {
      labels: zoneNames,
      datasets: [
        {
          data: caloriesBurned,
          barPercentage: 0.5, // Adjust the width of the bars
          
        },
      ],
    };
    return (
      <View style={styles.container}>
        <BarChart
          data={dataset}
          width={300}
          height={200}
          yAxisLabel="CB "
          chartConfig={{
            backgroundGradientFrom: theme.colors.background,
            backgroundGradientTo: theme.colors.background,
            decimalPlaces: 0,
            color: (opacity = 1) => theme.colors.activeText, 
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default CaloriesBurnedGraph;