import { Link } from "@remix-run/react";
import type IButton from "@/interfaces/components/button";
import * as Styles from "@/styles/components/button";

const Button = (props: IButton): JSX.Element => {
	if (props.to) {
		return (
			<Styles.Container
				onClick={props.action}
				reverseColor={props.reverseColor}
				showReverseBorder={props.showReverseBorder}
				showBorder={props.showBorder}
				ghost={props.ghost}
			>
				<Link to={props.to}>
					<button type={props.type}>
						{props.icon && props.icon}
						{props.children}
					</button>
				</Link>
			</Styles.Container>
		);
	}

	return (
		<Styles.Container
			onClick={props.action}
			reverseColor={props.reverseColor}
			showReverseBorder={props.showReverseBorder}
			showBorder={props.showBorder}
			ghost={props.ghost}
		>
			<button type={props.type}>
				{props.icon && props.icon}
				{props.children}
			</button>
		</Styles.Container>
	);
};

export default Button;
