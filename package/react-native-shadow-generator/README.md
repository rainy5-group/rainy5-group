# React native shadow generator

Shadow generator inspired by: https://ethercreative.github.io/react-native-shadow-generator/

Example usage:
```
import { generateShadow } from "@rainy5-group/react-native-shadow-generator"

...

const styles = StyleSheet.create({
  styleName: {
    // First parameter (number) sets the elevation of the shadow
    // Second parameter (string) is optional and sets the shadow color for the iOS devices
    ...generateShadow(5)
  }
})
```