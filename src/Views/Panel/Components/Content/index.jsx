import CodeMirror from "@uiw/react-codemirror";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { javascript } from "@codemirror/lang-javascript";

import { Container, Info, TokenInfo } from "./Styles";
export const Content = ({ name = "", token = "" }) => (
	<Container>
		<Info>
			<p>
				Hola!, <b>{name}</b> este es tu <b>api_key</b>:
			</p>
			<TokenInfo>{token}</TokenInfo>
		</Info>

		<Info>
			<p>
				Integra tus servicios con nuestra <b>REST API</b>:
			</p>
			<p>
				Usar nuestra rest api es tan sencillo que solo necesitas enviar tu{" "}
				<b>api_key</b> en los headers en cada llamada a los servicios de{" "}
				<b>recíbeme.com.</b>
			</p>

			<CodeMirror
				value= {`//ejemplo javascript
fetch("https://api.recibeme.com/api/store/stock",{
	metohod: get,
	headers: {
		'Content-Type': 'application/json',
		api_key: //<tu api key>
	}
})
//.....
				`}
				height="200px"
				editable= {false}
				theme={sublime}
				extensions={[javascript({ jsx: true })]}
			/>
		</Info>

		<Info>
			<p>
				Servicios:
			</p>
			<p>
				GET: <b>/inventory/stock</b>
			</p>
			
			<CodeMirror
				value= {`//Resultado:
"nameStore": //nombre de tu tienda
"addressStore": //dirección de tu tienda
"token": //token de tu tienda,
"sku_code": "",
"logo_url": "",
"code": //código del producto,
"quantity": //stock del producto,
"date": //fecha de ingreso al almacén,
"price": // precio de entrada al almacén,
"balance": // saldo de productos,
"nameItem": // nombre del producto,
"weight": //peso en Kg,
"min_quantity": // Información del limite de cantidad mínima,
"current_price": // precio de venta,
"quantityItem": //total de productos del mismo tipo en almacén

				`}
				height="auto"
				editable= {false}
				theme={sublime}
				extensions={[javascript({ jsx: true })]}
			/>

		</Info>

	</Container>
);
