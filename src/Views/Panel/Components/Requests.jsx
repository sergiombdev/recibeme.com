import { ContainerPage, ContainerTable, StyledTable, ContainerScrollTable, Select, ButtonState } from './Styles/Request.style';
import { Rows } from "./Rows";
const dataTable = [
    {
        "store_name": "ClothingZ",
        "first_name": "nombre1",
        "middle_name": "segundoNombre1",
        "last_name": "apellido1",
        "address": "direccion1",
        "prefered_delivery_time": "2022-07-27T04:00:00.000Z",
        "delivery_time": "2022-07-29T04:00:00.000Z",// fecha y hora de envio programado en recibeme
        "paymentStatus": "paid",
        "shippmentType": "regular",
        "deliveryStatus": "pending",// estado del envio
        "items": [
            {
                "code": "someCode1",
                "name": "chaleco",
                "quantity": 80,
                "description": "ddddd"
            },
            {
                "code": "someCode2",
                "name": "bufanda",
                "quantity": 80,
                "description": "ddddd"
            }
        ]
    },
    {
        "store_name": "Totto",
        "first_name": "nombre1",
        "middle_name": "segundoNombre1",
        "last_name": "apellido1",
        "address": "direccion1",
        "prefered_delivery_time": "2022-08-01T04:00:00.000Z",
        "delivery_time": "2022-08-02T04:00:00.000Z",// fecha y hora de envio programado en recibeme
        "paymentStatus": "paid",
        "shippmentType": "regular",
        "deliveryStatus": "pending",// estado del envio
        "items": [
            {
                "code": "someCode1",
                "name": "chaleco",
                "quantity": 80,
                "description": "ddddd"
            },
            {
                "code": "someCode2",
                "name": "bufanda",
                "quantity": 80,
                "description": "ddddd"
            },
            {
                "code": "someCode3",
                "name": "pantalon",
                "quantity": 80,
                "description": "ddddd"
            }
        ]
    },
    {
        "store_name": "Totto",
        "first_name": "nombre1",
        "middle_name": "segundoNombre1",
        "last_name": "apellido1",
        "address": "direccion1",
        "prefered_delivery_time": "2022-07-27T04:00:00.000Z",
        "delivery_time": "2022-07-29T04:00:00.000Z",// fecha y hora de envio programado en recibeme
        "paymentStatus": "paid",
        "shippmentType": "regular",
        "deliveryStatus": "pending",// estado del envio
        "items": [
            {
                "code": "someCode1",
                "name": "chaleco",
                "quantity": 15,
                "description": "ddddd"
            },
            {
                "code": "someCode2",
                "name": "bufanda",
                "quantity": 2,
                "description": "ddddd"
            },
            {
                "code": "someCode4",
                "name": "polera",
                "quantity": 3,
                "description": "ddddd"
            },
            {
                "code": "someCode5",
                "name": "pañuelo",
                "quantity": 5,
                "description": "ddddd"
            }
        ]
    }
];


const Request = ()=> {
    return(
        <ContainerPage>
            <ContainerTable>
                <ContainerScrollTable>
                    <StyledTable>
                        <thead>
                            <tr>
                                <th>Nombre Tienda</th>
                                <th>Primer nombre</th>
                                <th>Segundo nombre</th>
                                <th>Apellido</th>
                                <th>Dirección</th>
                                <th>Fecha y hora de preferencia de envío</th>
                                <th>Fecha y hora de Envío</th>
                                <th>Estado de pago</th>
                                <th>Tipo de envío</th>
                                <th>Estado del envío</th>
                                <th>Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTable.map((val, index) => (
                                <Rows key={index} val={val}/>
                            ))}
                        </tbody>
                    </StyledTable>
                </ContainerScrollTable>
            </ContainerTable>
        </ContainerPage>
    );
}

export default Request;