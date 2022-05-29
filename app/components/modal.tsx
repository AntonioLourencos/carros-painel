import React from "react";
import ReactModal from "react-modal";
import Close from "@/assets/handle_icons/close.svg";
import type IModal from "@/interfaces/components/modal";
import Button from "@/components/button";
import * as Styles from "@/styles/components/modal";

const Modal = ({
	setShow,
	show,
	title,
	handle,
	children,
}: IModal): JSX.Element => {
	const handleClose = () => {
		setShow(false);
	};

	const configModal: {
		[key: string]: React.CSSProperties;
	} = {
		overlay: {
			display: "flex",
			alignContent: "center",
			justifyContent: "center",
			zIndex: 999,
			backgroundColor: "#000000CC",
			margin: 0,
		},
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			padding: 0,
		},
	};

	return (
		<ReactModal isOpen={show} onRequestClose={handleClose} style={configModal}>
			<Styles.Header>
				<h2>{title}</h2>
				<img src={Close} alt="Close" onClick={handleClose} />
			</Styles.Header>

			<Styles.Body>
				{children}

				<Styles.Footer>
					<Button action={handleClose} reverseColor>
						Cancelar
					</Button>
					{...handle}
				</Styles.Footer>
			</Styles.Body>
		</ReactModal>
	);
};

export default Modal;
