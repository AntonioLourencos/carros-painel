interface ITheme {
	name: string;
	colors: {
		default: {
			primary: string;
			secundary: string;
			tertiary: string;
		};
		reverse: {
			primary: string;
			tertiary: string;
		};
		auxiliary: {
			white: string;
		};
	};
	fonts: {
		default: string;
	};
}

export default ITheme;
