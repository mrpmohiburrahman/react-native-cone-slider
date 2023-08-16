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
}) => {
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
      translateX.value = clamp(ctx.startX + event.translationX, 0, width - 30);
      runOnJS(onValueChangeSafe)(
        (translateX.value / (width - 30)) * range + min
      );
    },
    onStart: (_, ctx) => {
      ctx.startX = translateX.value;
    },
  });

  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={[
          { flex: 1, justifyContent: 'center', alignItems: 'center' },
          containerStyle,
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
              borderRightColor: '#CCCCCC',
              borderRightWidth: width,
              borderStyle: 'solid',
              borderTopColor: 'transparent',
              borderTopWidth: height / 7,
              height: 0,
              width: 0,
            }}
          />

          <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View
              style={[
                {
                  backgroundColor: 'grey',
                  borderRadius: 25,
                  height: 30,
                  position: 'absolute',
                  top: height / 4 - 25,
                  width: 30,
                },
                circleStyle,
              ]}
            />
          </PanGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};
