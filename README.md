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
    height={100}
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

| Name |description| required |
|---------|---------|---------|
| height  | Height of slider   | Yes   |
| width   | Width  of slider   | Yes   |
| min     | Minimum value of slider   | Yes   |
| maximum   | Maximum value of slider   | Yes   |
| onValueChange   | Function to get the values from slider   | No   |
| containerStyle  | Style Object, Applied to Slider Container   | No   |  Applicable|

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
