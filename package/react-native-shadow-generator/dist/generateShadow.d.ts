declare type Shadow = {
    shadowColor: string;
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowOpacity: number;
    shadowRadius: number;
    elevation: number;
};
declare type GenerateShadow = (elevation: number, shadowColor?: string) => Shadow;
/**
 * Generates react-native shadow object and returns
 * it for consumption
 *
 * @param elevation - android elevation equivalent from 1-24
 * @param shadowColor - color string in hexadecimal format
 * @returns Shadow object (example: https://github.com/ethercreative/react-native-shadow-generator)
 */
export declare const generateShadow: GenerateShadow;
export {};
//# sourceMappingURL=generateShadow.d.ts.map