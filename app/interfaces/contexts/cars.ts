import type ICar from "../services/cars";

interface ICarContext {
	cars: ICar[];
	newCar: (data: ICar) => void;
	editCar: (data: ICar) => void;
	removeCar: (data: ICar) => void;
}

export default ICarContext;
