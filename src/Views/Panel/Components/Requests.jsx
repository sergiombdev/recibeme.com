import { ContainerPage, ContainerTable } from './Styles/Request.style';

const dataTable = [
    {
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
    }
];


const Request = ()=> {
    return(
        <ContainerPage>
            <ContainerTable>
              
            </ContainerTable>
        </ContainerPage>
    );
}

export default Request;