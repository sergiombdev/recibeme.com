import {
	ContainerPage,
	ContainerTable,
	StyledTable,
	ContainerScrollTable,
} from "./Styles/Inventory.style";

const dataTable = [
	{
		nameStore: "nombre1",
		address: "dirección1",
		nameItem: "item1",
		sku_code: "somecode1",
		weight: "weight1",
		min_quantity: "3",
		current_price: "50",
		quantityItem: "12",
		adressWarehouse: "Santa Cruz Central", //añadir nombre tienda
	},
	{
		nameStore: "nombre2",
		address: "dirección2",
		nameItem: "item2",
		sku_code: "somecode2",
		weight: "weight2",
		min_quantity: "5",
		current_price: "100",
		quantityItem: "10",
		adressWarehouse: "Santa Cruz 4to Anillo",
	},
];

const Inventory = () => {
	return (
		<ContainerPage>
			<ContainerTable>
				<ContainerScrollTable>
					<StyledTable>
						<thead>
							<tr>
								<th>Nombre Tienda</th>
								<th>Dirección Tienda</th>
								<th>Nombre Item</th>
								<th>Código SKU Item</th>
								<th>Peso</th>
								<th>Cantidad Mínima</th>
								<th>Precio Actual</th>
								<th>Cantidad Actual</th>
								<th>Direccíon del Almacén</th>
							</tr>
						</thead>
						<tbody>
							{dataTable.map((val, key) => (
								<tr key={key}>
									<td>{val.nameStore}</td>
									<td>{val.address}</td>
									<td>{val.nameItem}</td>
									<td>{val.sku_code}</td>
									<td>{val.weight}</td>
									<td>{val.min_quantity}</td>
									<td>{val.current_price}</td>
									<td>{val.quantityItem}</td>
									<td>{val.adressWarehouse}</td>
								</tr>
							))}
						</tbody>
					</StyledTable>
				</ContainerScrollTable>
			</ContainerTable>
		</ContainerPage>
	);
};

export default Inventory;
