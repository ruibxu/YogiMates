import React, { useEffect, useState } from 'react';
import { BleManager } from '@react-native-community/bob-plx';

const HeartRateMonitor = () => {
  const [heartRate, setHeartRate] = useState(null);
  const [manager, setManager] = useState(null);
  const DEVICE_ID = 'YOUR_DEVICE_ID';

  useEffect(() => {
    const bleManager = new BleManager();
    setManager(bleManager);

    const scanAndConnect = async () => {
      try {
        const device = await bleManager.connectToDevice({ id: DEVICE_ID });
        await device.discoverAllServicesAndCharacteristics();
        device.monitorCharacteristicForService(
          'HEART_RATE_SERVICE_UUID',
          'HEART_RATE_CHARACTERISTIC_UUID',
          (error, characteristic) => {
            if (error) {
              console.error('Failed to monitor heart rate:', error);
              return;
            }
            const heartRate = characteristic.value[1];
            setHeartRate(heartRate);
          }
        );
      } catch (error) {
        console.error('Failed to connect to BLE device:', error);
      }
    };

    scanAndConnect();

    return () => {
      bleManager.destroy();
    };
  }, []);

  return (
    <View>
      <Text>Heart Rate: {heartRate}</Text>
    </View>
  );
};

export default HeartRateMonitor;
