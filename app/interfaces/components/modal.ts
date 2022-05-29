interface IModal {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
	handle: React.ReactNode[];
	children?: React.ReactNode;
}

export default IModal;
