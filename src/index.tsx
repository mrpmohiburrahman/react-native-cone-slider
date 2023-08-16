import React from 'react';
import type { ViewStyle } from 'react-native';
import type { StyleProp } from 'react-native';
import { View } from 'react-native';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  type PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { clamp } from 'react-native-redash';

interface ConeSliderProps {
  width: number;
  height: number;
  min: number;
  max: number;
  onValueChange?: (value: number) => void;
  containerStyle?: StyleProp<ViewStyle>;
  sliderBackgroundColor?: string;
  circleBackgroundColor?: string;
  rotationDegree?: number; // Add this prop
}

type GestureContext = {
  startX: number;
};

export const ConeSlider: React.FC<ConeSliderProps> = ({
  width,
  height,
  min,
  max,
  onValueChange,
  containerStyle,
  sliderBackgroundColor = '#CCCCCC',
  circleBackgroundColor = 'grey',
  rotationDegree = 0, // Default to 0 degrees if not provided
}) => {
  const circleRadius = 15;
  const translateX = useSharedValue(0);
  const range = max - min;

  const onValueChangeSafe = (value: number) => {
    if (onValueChange && typeof onValueChange === 'function') {
      onValueChange(value);
    }
  };

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    GestureContext
  >({
    onActive: (event, ctx) => {
      translateX.value = clamp(
        ctx.startX + event.translationX,
        0,
        width - circleRadius * 2
      );
      runOnJS(onValueChangeSafe)(
        (translateX.value / (width - circleRadius * 2)) * range + min
      );
    },
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
  });

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const mainContainerStyle = {
    transform: [{ rotate: `${rotationDegree}deg` }],
    transformOrigin: { x: width / 2, y: height / 2 }, // Set the focal point to the center
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={[
          { flex: 1, justifyContent: 'center', alignItems: 'center' },
          containerStyle,
          mainContainerStyle, // Add the rotation style here
        ]}
      >
        <View style={{ height, overflow: 'hidden', width }}>
          <View
            style={{
              backgroundColor: 'transparent',
              borderBottomColor: 'transparent',
              borderBottomWidth: height / 6,
              borderLeftColor: 'red',
              borderLeftWidth: 0,
              borderRightColor: sliderBackgroundColor,
              borderRightWidth: width,
              borderStyle: 'solid',
              borderTopColor: 'transparent',
              borderTopWidth: height / 7,
              height: 0,
              width: 0,
              borderTopRightRadius: height / 6, // adjust this to get desired rounded effect
              borderBottomRightRadius: height / 6, // adjust this to get desired rounded effect
            }}
          />

          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View
              style={[
                {
                  // borderRadius: 25,
                  // height: 30,
                  // top: height / 4 - 25,
                  // width: circleRadius * 2,
                  backgroundColor: circleBackgroundColor,
                  borderRadius: circleRadius + 10,
                  height: circleRadius * 2,
                  position: 'absolute',
                  top: height / 4 - circleRadius - 10,
                  width: 30,
                },
                circleStyle,
              ]}
            >
              <View // This is the pseudo-circle
                style={{
                  position: 'absolute',
                  right: -circleRadius,
                  top: 0,
                  // backgroundColor: sliderBackgroundColor,
                  borderRadius: circleRadius,
                  height: circleRadius * 2,
                  width: circleRadius * 2,
                }}
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};
