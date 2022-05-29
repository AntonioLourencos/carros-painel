import type ICar from "../services/cars";

interface IModalEditCar {
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	defaultValueCar: ICar;
}

export default IModalEditCar;
