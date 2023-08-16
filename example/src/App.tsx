import * as React from 'react';

import { SafeAreaView, Text, View } from 'react-native';
import { ConeSlider } from 'react-native-cone-slider';

export default function App() {
  const [sliderValue, setSliderValue] = React.useState(0);

  const handleValueChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View>
        <Text
          style={{
            fontSize: 24,
            marginBottom: 10,
            color: 'black',
            textAlign: 'center',
          }}
        >
          Slider Value: {sliderValue.toFixed(2)}
        </Text>
      </View>

      <ConeSlider
        rotationDegree={0}
        height={100}
        width={200}
        min={0}
        max={100}
        onValueChange={handleValueChange}
        containerStyle={{ backgroundColor: '#fff' }}
      />
    </SafeAreaView>
  );
}
