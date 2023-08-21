# react-native-cone-slider

Cone shape slider in react-native

## Demo

<img  alt="react-native-cone-slider in action" src="https://github.com/mrpmohiburrahman/react-native-cone-slider/blob/main/example/cone-slider-demo.gif?raw=true" width="150" hight="200"/>  

## Installation

```sh
yarn add react-native-cone-slider
```

or

```sh
npm install react-native-cone-slider
```

### Dependencies

---
This library depends on [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/), [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/), [react-native-redash](https://wcandillon.gitbook.io/redash/).
Please, install these beforehand.

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

## Social

<!-- [![Twitter Follow](https://img.shields.io/twitter/follow/mrp_mohibur?label=Follow&style=social)](https://twitter.com/mrp_mohibur)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/mrpmohiburrahman/)](https://www.linkedin.com/in/mrpmohiburrahman/)
[![Reddit User Karma](https://img.shields.io/reddit/user-karma/combined/mrpm0h18urr4hm4n?style=social)](https://www.reddit.com/user/mrpm0h18urr4hm4n/) -->

<a href="https://twitter.com/mrp_mohibur" target="_blank">
    <img src="https://img.shields.io/twitter/follow/mrp_mohibur?label=Follow&style=social" alt="Twitter Follow" style="height: auto !important; width: 85px !important;" />
</a>
<a href="https://www.linkedin.com/in/mrpmohiburrahman/" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" style="height: auto !important; width: 100px !important;" />
</a>
<a href="https://www.reddit.com/user/mrpm0h18urr4hm4n/" target="_blank">
    <img src="https://img.shields.io/reddit/user-karma/combined/mrpm0h18urr4hm4n?style=social" alt="Reddit User Karma" style="height: auto !important; width: 285px !important;" />
</a>
