"use strict";
// Inspired by and based on: https://github.com/ethercreative/react-native-shadow-generator
// Penumbra meaning: https://en.wikipedia.org/wiki/Umbra,_penumbra_and_antumbra
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShadow = void 0;
// ----------------------------------------------------------------------------
// Data -----------------------------------------------------------------------
// ----------------------------------------------------------------------------
// https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_elevation-theme.scss
const penumbraMap = [
    "0px 1px 1px 0px",
    "0px 2px 2px 0px",
    "0px 3px 4px 0px",
    "0px 4px 5px 0px",
    "0px 5px 8px 0px",
    "0px 6px 10px 0px",
    "0px 7px 10px 1px",
    "0px 8px 10px 1px",
    "0px 9px 12px 1px",
    "0px 10px 14px 1px",
    "0px 11px 15px 1px",
    "0px 12px 17px 2px",
    "0px 13px 19px 2px",
    "0px 14px 21px 2px",
    "0px 15px 22px 2px",
    "0px 16px 24px 2px",
    "0px 17px 26px 2px",
    "0px 18px 28px 2px",
    "0px 19px 29px 2px",
    "0px 20px 31px 3px",
    "0px 21px 33px 3px",
    "0px 22px 35px 3px",
    "0px 23px 36px 3px",
    "0px 24px 38px 3px",
];
// ----------------------------------------------------------------------------
// Logic ----------------------------------------------------------------------
// ----------------------------------------------------------------------------
const parseShadow = (penumbra) => {
    const values = penumbra
        .split(" ")
        .map((val) => Number.parseInt(val.replace("px", ""), 10));
    return {
        x: values[0],
        y: values[1],
        blur: values[2],
        spread: values[3], // not used
    };
};
const interpolate = (i, a, b, a2, b2) => {
    return ((i - a) * (b2 - a2)) / (b - a) + a2;
};
/**
 * Generates react-native shadow object and returns
 * it for consumption
 *
 * @param elevation - android elevation equivalent from 1-24
 * @param shadowColor - color string in hexadecimal format
 * @returns Shadow object (example: https://github.com/ethercreative/react-native-shadow-generator)
 */
const generateShadow = (elevation, shadowColor) => {
    let depth = elevation - 1;
    if (elevation < 1) {
        depth = 0;
    }
    else if (elevation >= penumbraMap.length) {
        console.log("fuck");
        depth = penumbraMap.length - 1;
    }
    else {
        depth = elevation - 1;
    }
    const shadow = parseShadow(penumbraMap[depth]);
    const y = shadow.y === 1 ? 1 : Math.floor(shadow.y * 0.5);
    return {
        shadowColor: shadowColor ? shadowColor : "#000",
        shadowOffset: {
            width: 0,
            height: y,
        },
        shadowOpacity: Number.parseFloat(interpolate(depth, 1, 24, 0.2, 0.6).toFixed(2)),
        shadowRadius: Number.parseFloat(interpolate(shadow.blur, 1, 38, 1, 16).toFixed(2)),
        elevation: depth + 1,
    };
};
exports.generateShadow = generateShadow;
