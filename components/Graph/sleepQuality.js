import {SleepData} from "@dynamic-data/oura-data/src/mockups";
import { View, StyleSheet,  Dimensions, ScrollView,Text, } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { theme } from '../../theme';
const sleepQuality = () => {

    const timestamps = SleepData.hr_5min.map((_, index) => {
        const totalMinutes = index * 5; // Assuming data is recorded every 5 minutes
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    });
    const heartRates = SleepData.hr_5min;

    // Prepare the data
    const data = {
        labels: timestamps,
        datasets: [
        {
            data: heartRates,
            color: (opacity = 1) => theme.colors.activeText, // Blue color
        },
        ],
    };
    return(
        <ScrollView horizontal style={styles.container}>
            <LineChart
            data={data}
            width={Dimensions.get('window').width * 8} // Use double the window width
            height={220}
            yAxisLabel="HR "
            yAxisInterval={1} // Optional, interval of the y-axis
            chartConfig={{
            backgroundGradientFrom: theme.colors.background,
            backgroundGradientTo: theme.colors.background,
            decimalPlaces: 0, // No decimal places for y-axis labels
            color: (opacity = 1) => theme.colors.text, // Black color for text
            labelColor: (opacity = 1) => theme.colors.text,// Black color for labels
            propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: theme.colors.secondary,
            },
            }}
            bezier
            style={{
            marginVertical: 8,
            borderRadius: 16,
            }}
            />
        </ScrollView>
        );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
});

export default sleepQuality;
