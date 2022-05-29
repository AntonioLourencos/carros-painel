interface IButton {
	to?: string;
	action?: () => void;
	children?: any;
	showBorder?: boolean;
	reverseColor?: boolean;
	showReverseBorder?: boolean;
	ghost?: boolean;
	icon?: JSX.Element;
	type?: "submit" | "reset" | "button";
}

export default IButton;
