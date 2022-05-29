import type ICar from "@/interfaces/services/cars";

const CarDefaultValue: ICar = {
	id: "",
	name: "",
	year: new Date().getFullYear(),
	maxVelocity: 0,
	noteEconomics: 0,
	noteUsers: 0,
	linkProduct: "",
	photo: "",
};

export default CarDefaultValue;
