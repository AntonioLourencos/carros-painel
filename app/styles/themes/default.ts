import type ITheme from "@/interfaces/styles/theme";

const DefaultTheme: ITheme = {
	name: "Default Theme",
	colors: {
		default: {
			primary: "#1D2527",
			secundary: "#AFAFAF",
			tertiary: "#D2D4D9",
		},
		reverse: {
			primary: "#ffffff",
			tertiary: "#181f21",
		},
		auxiliary: {
			white: "#ffffff",
		},
	},
	fonts: {
		default: '"Montserrat", "sans-serif"',
	},
};

export default DefaultTheme;
