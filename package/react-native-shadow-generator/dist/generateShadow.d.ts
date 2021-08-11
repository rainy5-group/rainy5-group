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
export declare const generateShadow: GenerateShadow;
export {};
//# sourceMappingURL=generateShadow.d.ts.map