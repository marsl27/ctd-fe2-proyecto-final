import React from "react";
import {
	ContenedorModal, 
	TarjetaModal, 
	CloseButton, 
	ImagenModal,
	TituloModal, 
	DescripcionModal, 
	CotenedorTexto
} from "./styled";
import { CloseButton as Close } from "../../assets";
import { INoticiasNormalizadas } from "./Noticias"

interface IProps {
	imagen: string, 
	titulo: string, 
	descripcion: string,
	altImagen: string, 
	setModal: (modal: INoticiasNormalizadas | null) => void, 
	children?: React.ReactNode,
}

const ModalNoticias = ({ imagen, titulo, descripcion, altImagen, setModal, children }: IProps) => {

	return <ContenedorModal>
		<TarjetaModal>
			<CloseButton onClick={() => setModal(null)}>
				<img src={Close} alt="close-button" />
			</CloseButton>
			<ImagenModal src={imagen} alt={altImagen} />
			<CotenedorTexto>
				<TituloModal>{titulo}</TituloModal>
				<DescripcionModal>{descripcion}</DescripcionModal>
				{children}
			</CotenedorTexto>
		</TarjetaModal>
	</ContenedorModal>
}

export default ModalNoticias;