import { InputRecibeme } from './../../../../Widgets/InputRecibeme';
import { Form } from './Styles';

import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome';
import { ButtonAnimated } from './../../../../Themes/Buttons.style';


export const LoginForm = () => {
	return (
		<Form onSubmit = {(e)=>e.preventDefault()}>
			
			<h4>rest api</h4>

			<InputRecibeme nameLabel="Usuario" required={true} type="text" autoComplete="new-password">
				<span>
					<FontAwesomeIcon icon={["fa","user"]}/>
				</span>
			</InputRecibeme>

			<InputRecibeme nameLabel="Contraseña" required={true} type="password" autoComplete="new-password">
				<span>
					<FontAwesomeIcon icon={["fa","key"]}/>
				</span>
			</InputRecibeme>

			<ButtonAnimated>
				Entrar
				<span>
					<FontAwesomeIcon icon={ ["fa","right-to-bracket"] }/>
				</span>
			</ButtonAnimated>

		</Form>
	);
}