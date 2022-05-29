import * as yup from "yup";

const carSchema = yup.object().shape({
	id: yup.string().required("Erro tente Novamente"),
	year: yup
		.number()
		.positive()
		.integer()
		.min(1919)
		.max(new Date().getFullYear())
		.required("Insira um ano"),
	maxVelocity: yup
		.number()
		.positive()
		.integer()
		.min(0)
		.max(300)
		.required("Insira uma velocidade maxima"),
	noteEconomics: yup
		.number()
		.positive()
		.integer()
		.min(0)
		.max(10)
		.required("Insira uma nota"),
	noteUsers: yup
		.number()
		.positive()
		.integer()
		.min(0)
		.max(10)
		.required("Insira uma nota"),
	linkProduct: yup
		.string()
		.trim()
		.strict()
		.required("Insira o link do produto"),
	photo: yup.string().required("Escolha uma foto"),
	name: yup.string().required("Insira um nome."),
});

export default carSchema;
