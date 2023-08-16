import * as React from 'react';

import { Text, View } from 'react-native';
import { ConeSlider } from 'react-native-cone-slider';

export default function App() {
  const [sliderValue, setSliderValue] = React.useState(0);

  const handleValueChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
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

      <View>
        <ConeSlider
          height={100}
          width={200}
          min={0}
          max={100}
          onValueChange={handleValueChange}
          containerStyle={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100,
          }}
        />
      </View>
    </View>
  );
  // const [result, setResult] = React.useState<number | undefined>();

  // React.useEffect(() => {
  //   multiply(3, 7).then(setResult);
  // }, []);

  // return (
  //   <View style={styles.container}>
  //     <Text>Result: {result}</Text>
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   box: {
//     width: 60,
//     height: 60,
//     marginVertical: 20,
//   },
// });
