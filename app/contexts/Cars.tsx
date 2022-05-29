import React from "react";
import type ICar from "@/interfaces/services/cars";
import type ICarContext from "@/interfaces/contexts/cars";
import { toast } from "react-toastify";

const Cars = React.createContext<ICarContext>({
	cars: [],
	newCar: () => {},
	editCar: () => {},
	removeCar: () => {},
});

export const CarsProvider = ({ children }: { children: any }) => {
	const [cars, setCars] = React.useState<ICar[]>([]);

	const newCar = (data: ICar) => {
		localStorage.setItem("@cars", JSON.stringify([data, ...cars]));
		setCars([data, ...cars]);
		toast.success("🚗 Adicionado com sucesso!");
	};

	const removeCar = (data: ICar) => {
		setCars((_cars) => {
			_cars.forEach((car, key) => {
				if (car.id === data.id) _cars.splice(key, 1);
			});

			localStorage.setItem("@cars", JSON.stringify([..._cars]));
			return [..._cars];
		});
		toast.success("🚗 Removido com sucesso!");
	};

	const editCar = (data: ICar) => {
		setCars((_cars) => {
			const editedCars = _cars.map((car) => {
				if (car.id === data.id) {
					return data;
				}
				return car;
			});

			localStorage.setItem("@cars", JSON.stringify(editedCars));
			return editedCars;
		});

		toast.success("🚗 Editado com sucesso!");
	};

	React.useEffect(() => {
		const cars = localStorage.getItem("@cars");
		if (!cars) return;
		setCars(JSON.parse(cars));
	}, []);

	return (
		<Cars.Provider value={{ cars, newCar, removeCar, editCar }}>
			{children}
		</Cars.Provider>
	);
};

export const useCars = () => {
	const context = React.useContext(Cars);
	return { ...context };
};
