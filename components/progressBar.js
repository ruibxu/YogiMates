import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, G, Text as SvgText } from 'react-native-svg';

const CircularProgressBar = ({ radius, strokeWidth, progress, color, bgColor }) => {
  const circumference = 2 * Math.PI * radius;
  const progressValue = circumference - (circumference * progress) / 100;

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          stroke={bgColor}
          fill="none"
          strokeWidth={strokeWidth}
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
        />
        <Circle
          stroke={color}
          fill="none"
          strokeWidth={strokeWidth}
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeDasharray={circumference}
          strokeDashoffset={progressValue}
          strokeLinecap="round"
        />
        <SvgText
          x={radius}
          y={radius}
          fill="#000"
          color="#5E7167"
          textAnchor="middle"
          fontSize={20}
          fontWeight="bold"
          alignmentBaseline="middle"
        >
          {progress}%
        </SvgText>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default CircularProgressBar;
