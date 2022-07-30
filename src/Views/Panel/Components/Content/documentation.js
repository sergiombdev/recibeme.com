export const documentation = [
	{
		url: "api/inventory/stock",
		method: "GET",
		body: "",
		headers: "api_key",
		example: `curl --location --request GET 'https://${window.location.host}/api/inventory/stock' --header 'api_key: <your api_key>`,
		description: `Recibe un registro detallado del stock de productos que tienes en nuestros almacenes de recíbeme.com`,
		response: `[
    {
        "code": "your product code",
        "incommingQuantity": 100,
        "incommigDate": "2022-07-26T04:00:00.000Z",
        "unitPrice": 250.5,
        "balance": 100,
        "nameItem": "name product",
        "weight": 20,
        "addressWarehouse": "warehouse address"
    }
]`
	},
	{
		url: "api/inventory/stock/total",
		method: "GET",
		body: "",
		headers: "api_key",
		example: `curl --location --request GET 'https://${window.location.host}/api/inventory/stock/total' 
--header 'api_key: <your api_key>`,
		description: `Recibe un resumen del total de productos disponibles en almacenes de recibeme.com.`,
		response: `[
    {
        "code": "your code produt",
        "unitPrice": 250.5,
        "balance": 300, // resumen del total de productos del mismo tipo en almacen
        "nameItem": "chaleco",
        "weight": 2, // peso en kg
        "addressWarehouse": "warehouse address"
    }
]`}
,
	{
		url: "api/inventory/deliverys",
		method: "GET",
		body: "",
		headers: "api_key",
		example: `curl --location --request GET 'https://${window.location.host}/api/inventory/deliverys' 
--header 'api_key: <your api_key>`,
		description: `Recibe un registro detallado de todas las solicitudes de envíos realizados a recíbeme.com`,
		response: `[
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
]`},


	{
		url: "api/inventory/deliverys/total",
		method: "GET",
		body: "",
		headers: "api_key",
		example: `curl --location --request GET 'https://${window.location.host}/api/inventory/deliverys/total' 
--header 'api_key: <your api_key>`,
		description: `Recibe un resumen del  total de envíos por estado de envió.`,
		response: `[
    {
        "deliveryStatus": "pending",
        "total": 2
    }
]`},
	{
		url: "api/inventory/deliverys/filter",
		method: "POST",
		headers: "api_key",
		example: `curl --location --request GET 'https://${window.location.host}/api/inventory/deliverys/filter' 
--header 'api_key: <your api_key> 
--data-raw '{
    "startDate" : "1/1/2022",
    "endDate" : "29/7/2022"
}'
`,
		body: `<b>startDate</b> (requerido) - Formato fecha <b>dd/mm/YYYY</b> </br><b>endDate</b> (opcional) - Formato fecha <b>dd/mm/YYYY</b>`,
		description: `Filtra por fecha las solicitudes de envió.`,
		response: `[  
    {
        "first_name": "nombre1",
        "middle_name": "segundoNombre1",
        "last_name": "apellido1",
        "address": "direccion1",
        "prefered_delivery_time": "2022-07-27T04:00:00.000Z",
        "delivery_time": "2022-07-29T04:00:00.000Z",
        "paymentStatus": "paid",
        "shippmentType": "regular",
        "deliveryStatus": "pending",
        "items": [
            {
                "code": "someCode1",
                "name": "chaleco",
                "quantity": 80,
                "description": "description"
            },
            {
                "code": "someCode2",
                "name": "bufanda",
                "quantity": 80,
                "description": "description"
            },
            {
                "code": "someCode3",
                "name": "pantalon",
                "quantity": 80,
                "description": "description"
            }
        ]
    }
]`},
	{
		url: "api/inventory/stock/filter",
		method: "POST",
		headers: "api_key",
		example: `curl --location --request GET 'https://${window.location.host}/api/inventory/stock/filter' 
--header 'api_key: <your api_key> 
--data-raw '{
    "startDate" : "1/1/2022",
    "endDate" : "29/7/2022"
}'
`,
		body: `<b>startDate</b> (requerido) - Formato fecha <b>dd/mm/YYYY</b> </br><b>endDate</b> (opcional) - Formato fecha <b>dd/mm/YYYY</b>`,
		description: `Filtra por fecha las solicitudes de envió.`,
		response: `[
   {
        "code": "someCode3",
        "incommingQuantity": 100,
        "incommigDate": "2022-07-26T04:00:00.000Z",
        "unitPrice": 250.5,
        "balance": 100,
        "nameItem": "pantalon",
        "weight": null,
        "addressWarehouse": "calle2"
    }
]`}

];