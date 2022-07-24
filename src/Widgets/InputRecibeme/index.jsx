import { ContainerInput, Input, Label } from './styles';

export const InputRecibeme = ( { isEmpty=false, nameLabel = "", children ,...props} )=>{
	return(
		<ContainerInput isEmpty={isEmpty} >
			<Input {...props}/>
			<Label>{ nameLabel }</Label>
			{children}
		</ContainerInput>
	);
}