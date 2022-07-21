import { ContainerInput, Input, Label } from './styles';

export const InputRecibeme = ( { nameLabel = "", children ,...props} )=>{
	return(
		<ContainerInput>
			<Input {...props}/>
			<Label>{ nameLabel }</Label>
			{children}
		</ContainerInput>
	);
}