import * as Styles from "@/styles/pages/tabela";
import React from "react";
import Button from "@/components/button";
import EditIcon from "@/assets/handle_icons/edit.svg";
import DeleteIcon from "@/assets/handle_icons/delete.svg";
import ModalNewCar from "@/components/modalNewCar";
import { useSearchParams } from "@remix-run/react";
import { useCars } from "@/contexts/Cars";
import ModalEditCar from "@/components/modalEditCar";
import type ICar from "@/interfaces/services/cars";
import CarDefaultValue from "@/helper/resetModalCarData";

const Tabela = () => {
	const { cars, removeCar } = useCars();
	const [showModalAddNew, setShowModalAddNew] = React.useState<boolean>(false);
	const [showModalEdit, setShowModalEdit] = React.useState<boolean>(false);
	const [editCar, setEditCar] = React.useState<ICar>(CarDefaultValue);
	const [searchParams] = useSearchParams();
	const IsLogged = searchParams.get("logged");

	const handleEditCar = (data: ICar) => {
		setEditCar(data);
		setShowModalEdit(true);
	};

	const handleRemoveCar = (data: ICar) => {
		removeCar(data);
	};

	const handleOpenModalAddNew = () => {
		setShowModalAddNew(true);
	};

	return (
		<Styles.Container>
			{IsLogged && [
				<ModalNewCar
					key="newCar"
					show={showModalAddNew}
					setShow={setShowModalAddNew}
				/>,
				<ModalEditCar
					key="editCar"
					show={showModalEdit}
					setShow={setShowModalEdit}
					defaultValueCar={editCar}
				/>,
			]}

			<Styles.Header>
				<span>Tabela</span>
				{IsLogged && (
					<Button reverseColor showBorder action={handleOpenModalAddNew}>
						Adicionar Novo
					</Button>
				)}
			</Styles.Header>
			<Styles.Table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Ano</th>
						<th>Velocidade máx Km/h</th>
						<th>Nota Economica</th>
						<th>Nota Usuários</th>
						{IsLogged && <th></th>}
					</tr>
				</thead>
				<tbody>
					{cars.map((car, key) => {
						return (
							<tr key={key}>
								<td>{car.name}</td>
								<td>{car.year}</td>
								<td>{car.maxVelocity}</td>
								<td>{car.noteEconomics}</td>
								<td>{car.linkProduct}</td>
								{IsLogged && (
									<td>
										<img
											src={EditIcon}
											alt=""
											onClick={() => handleEditCar(car)}
										/>
										<img
											style={{ marginLeft: 10 }}
											src={DeleteIcon}
											alt=""
											onClick={() => handleRemoveCar(car)}
										/>
									</td>
								)}
							</tr>
						);
					})}
				</tbody>
			</Styles.Table>

			{cars.length === 0 && (
				<span style={{ marginTop: 20 }}>Nenhum Carro Localizado :(</span>
			)}
		</Styles.Container>
	);
};

export default Tabela;
