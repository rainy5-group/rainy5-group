# React native shadow generator

Shadow generator inspired by: https://ethercreative.github.io/react-native-shadow-generator/
<br />
More about object destructuring assignment: https://javascript.info/destructuring-assignment#object-destructuring
<br />

## Installation

```
yarn add @rainy5-group/react-native-shadow-generator
```

or

```
npm install @rainy5-group/react-native-shadow-generator
```

<br />

## Usage example

```
import { generateShadow } from "@rainy5-group/react-native-shadow-generator"

// ...
// Your code goes here, of course you can destructure the generated shadow object in inline style
// ...

const styles = StyleSheet.create({
  styleName: {
    // First parameter (number) sets the elevation of the shadow
    // Second parameter (string) is optional and sets the shadow color for the iOS devices
    // Simple object destructuring is used to unpack shadow styling where you want it
    ...generateShadow(5)
  }
})
```

Return value example for `generateShadow(1, "#FFFF00")`:

```
{
  "shadowColor": "#FFFF00",
  "shadowOffset": {
    "width": 0,
    "height": 1
  },
  "shadowOpacity": 0.18,
  "shadowRadius": 1,
  "elevation": 1
}
```

<br />

## Contributing

PRs are always welcome
