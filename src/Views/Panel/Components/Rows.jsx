import { ContainerPage, ContainerTable, StyledTable, ContainerScrollTable, Select, ButtonState } from './Styles/Request.style';
import {useState} from "react";
import { Modal, ModalContent, CloseModal } from './Styles/Modal';

export const Rows = ({val}) =>{

	const [showModal, setShowModal] = useState(false);
	console.log(showModal);
return <>
	 <tr>
            <td>{val.store_name}</td>
            <td>{val.first_name}</td>
            <td>{val.middle_name}</td>
            <td>{val.last_name}</td>
            <td>{val.address}</td>
            <td>{val.prefered_delivery_time}</td>
            <td>{val.delivery_time}</td>
            <td>{val.paymentStatus}</td>
            <td>{val.shippmentType}</td>
            <td>
            <Select defaultValue="1">
                <option value="" hidden>
                    Type
                </option>
                <option value="1">Pendiente </option>
                <option value="2">En Proceso</option>
                <option value="3">Entregado</option>
                <option value="4">Rechazado</option>
            </Select> 
          	</td>
          	<td>
          		<ButtonState onClick={()=>{setShowModal(true);}}>Ver Items</ButtonState>
          		 <Modal show={showModal}>
			    	<ModalContent>
			    		Items
			    		<CloseModal onClick={()=>{setShowModal(false);}}>
			    			X
			    		</CloseModal>

				    	<ul>{
				            (val.items||[]).map(({name,code,description, quantity},index)=>{
				                return (<li key={index}>{`${name}, ${code}, ${description}, ${quantity}`}</li>)
				            })
				        }</ul>
			        </ModalContent>
			    </Modal>

          	</td>
    </tr>

</>
}