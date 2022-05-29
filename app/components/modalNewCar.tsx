import React from "react";
import Modal from "@/components/modal";
import PlusIcon from "@/assets/handle_icons/plus.svg";
import Button from "@/components/button";
import * as Styles from "@/styles/components/modalCar";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import carSchema from "@/validation/car";
import { v4 as UUID } from "uuid";
import type ICar from "@/interfaces/services/cars";
import { useCars } from "@/contexts/Cars";
import type IModalNewCar from "@/interfaces/components/modalNewCar";
import PhotoEmpety from "@/assets/helper/empetyPhotoInput.png";
import CarDefaultValue from "@/helper/resetModalCarData";

const ModalNewCar = ({ setShow, show }: IModalNewCar): JSX.Element => {
	const { newCar } = useCars();
	const photoPreview = React.createRef<HTMLImageElement>();

	const formik = useFormik({
		initialValues: CarDefaultValue,
		onSubmit: async (car: ICar, helperFomik) => {
			try {
				car.id = UUID();
				const carValidated = await carSchema.validate(car);
				newCar(carValidated);
				setShow(false);
				helperFomik.resetForm();
			} catch (yupError: any) {
				if (yupError.errors[0]) {
					return toast.error(yupError.errors[0]);
				}
			}
		},
	});

	const AddNewCarModal = [
		<Button
			key="addNew"
			type="button"
			action={formik.handleSubmit}
			icon={<img src={PlusIcon} alt="" />}
		>
			Adicionar Novo
		</Button>,
	];

	return (
		<Modal
			title="Adicionar Novo"
			handle={AddNewCarModal}
			setShow={setShow}
			show={show}
		>
			<Styles.Form onSubmit={formik.handleSubmit}>
				<Styles.Left>
					<label htmlFor="photo">
						<img
							src={formik.values.photo ? formik.values.photo : PhotoEmpety}
							alt=""
							ref={photoPreview}
						/>
						<span>Selecionar imagem</span>
					</label>
					<input
						type="file"
						name="photo"
						id="photo"
						onChange={(event) =>
							formik.setFieldValue(
								"photo",
								URL.createObjectURL(event.target.files![0])
							)
						}
						accept="image/jpg, image/jpeg, image/png"
					/>
				</Styles.Left>
				<Styles.Right>
					<Styles.Field>
						<label htmlFor="name">Nome</label>
						<input
							onChange={formik.handleChange}
							value={formik.values.name}
							type="text"
							name="name"
						/>
					</Styles.Field>
					<Styles.Field>
						<label htmlFor="year">Ano</label>
						<input
							onChange={formik.handleChange}
							value={formik.values.year}
							type="number"
							name="year"
							min={1919}
							max={new Date().getFullYear()}
						/>
					</Styles.Field>
					<Styles.Field>
						<label htmlFor="maxVelocity">Velocidade Máxima Km/h</label>
						<input
							onChange={formik.handleChange}
							value={formik.values.maxVelocity}
							type="number"
							name="maxVelocity"
							min={0}
							max={300}
						/>
					</Styles.Field>
					<Styles.Field>
						<label htmlFor="noteEconomics">Nota economia</label>
						<input
							onChange={formik.handleChange}
							value={formik.values.noteEconomics}
							min={0}
							max={10}
							type="number"
							name="noteEconomics"
						/>
					</Styles.Field>
					<Styles.Field>
						<label htmlFor="noteUsers">Nota usuários</label>
						<input
							onChange={formik.handleChange}
							value={formik.values.noteUsers}
							type="number"
							name="noteUsers"
							min={0}
							max={10}
						/>
					</Styles.Field>
					<Styles.Field>
						<label htmlFor="linkProduct">Link produto</label>
						<input
							onChange={formik.handleChange}
							value={formik.values.linkProduct}
							type="text"
							name="linkProduct"
							placeholder="/exemplo"
						/>
					</Styles.Field>
				</Styles.Right>
			</Styles.Form>
		</Modal>
	);
};

export default ModalNewCar;
