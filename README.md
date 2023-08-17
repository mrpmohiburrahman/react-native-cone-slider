# react-native-cone-slider

Cone shape slider in react-native

## Installation

```sh
yarn add react-native-cone-slider
```

or

```sh
npm install react-native-cone-slider
```

## Usage

```js
import { ConeSlider } from 'react-native-cone-slider';

// ...

<ConeSlider
    height={100} // issue: adjust height and width untill you get the desired Cone Slider
    width={200}
    min={0}
    max={100}
    onValueChange={(value: number) => {
        console.log(`🚀 ~ file: README.md:30 ~ value:`, value);
    }}
    containerStyle={{ backgroundColor: '#fff' }}
/>
```

## Props

| Name |description| type |required |
|---------|---------|---------|---------|
| height  | Height of slider   |number | Yes   |
| width   | Width  of slider   |number | Yes   |
| min     | Minimum value of slider   |number | Yes   |
| maximum   | Maximum value of slider   |number | Yes   |
| onValueChange   | Function to get the values from slider   |(value:number)=>void | No   |
| rotationDegree  | Rotate the Cone Slider   |number | No   |
| containerStyle  | Style Object, Applied to Slider Container   |StyleProp\<ViewStyle\> | No   |
| sliderBackgroundColor  | Style Object, Applied to Slider Container   |string | No   |
| circleBackgroundColor  | Style Object, Applied to Slider Container   |string | No   |

## ⚠️ Issues

Right now, you need to adjust height and widht to get the expected behaviour from Cone Slider.

Generally, the width will be doubled the value of height, ( this is not exactly right, specially for smaller height)

## Contributing

Help me make this library great.

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
