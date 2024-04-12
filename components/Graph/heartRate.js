import { HeartRateSummary, HeartRateData, activitiesData} from "@dynamic-data/fitbit-data/src/mockups";
import { View, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { theme } from '../../theme';
const heartRate = () => {
  const zoneNames = activitiesData.heartRateZones.map(zone => zone.name);
  const maxHeartRates = activitiesData.heartRateZones.map(zone => zone.max);
  
  const minHeartRates = activitiesData.heartRateZones.map(zone => zone.min);

  // Prepare dataset
  const dataset = {
    labels: zoneNames,
    datasets: [
      {
        data: maxHeartRates,
        color: (opacity = 1) => theme.colors.activeText, // Blue color for max heart rates
        barPercentage: 0.5, // Adjust the width of the bars
      },
      {
        data: minHeartRates,
        color: (opacity = 1) => theme.colors.activeText, // Red color for min heart rates
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
          yAxisLabel="HR "
          chartConfig={{
            backgroundGradientFrom: theme.colors.background,
            backgroundGradientTo: theme.colors.background,
            decimalPlaces: 0,
            color: (opacity = 1) => theme.colors.activeText, // Blue color for max heart rates
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


export default heartRate;