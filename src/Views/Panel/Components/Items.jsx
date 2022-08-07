import { InputRecibeme } from './../../../Widgets/InputRecibeme';
import { Form } from './Styles/Items.style';

import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { ButtonAnimated } from './../../../Themes/Buttons.style';


const Items = () => {
	return (
		<Form onSubmit = {(e)=>e.preventDefault()}>
			
			<h4>Nuevo Item</h4>

			<InputRecibeme nameLabel="Nombre" required={true} type="text">
				
			</InputRecibeme>

			<InputRecibeme nameLabel="Peso" required={true} type="text" >
				
			</InputRecibeme>

			<InputRecibeme nameLabel="Código" required={true} type="text" >
				
			</InputRecibeme>

			<InputRecibeme nameLabel="Cantidad Mínima" required={true} type="text" >
				
			</InputRecibeme>

			<InputRecibeme nameLabel="Precio Actual" required={true} type="text" >
				
			</InputRecibeme>

			<InputRecibeme nameLabel="Cantidad" required={true} type="text" >
				
			</InputRecibeme>

			<ButtonAnimated>
				Guardar
				<span>
					<FontAwesomeIcon icon={ ["fa","right-to-bracket"] }/>
				</span>
			</ButtonAnimated>

		</Form>
	);
}

export default Items;