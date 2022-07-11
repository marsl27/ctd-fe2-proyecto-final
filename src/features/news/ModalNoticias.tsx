import React from "react";
import {
	ContenedorModal, 
	TarjetaModal, 
	CloseButton, 
	ImagenModal,
	TituloModal, 
	DescripcionModal, 
	ContenedorTexto
} from "./styled";
import { CloseButton as Close } from "../../assets";
import { IPropsModal } from "./types"

const ModalNoticias = ({ imagen, titulo, descripcion, altImagen, setModal, children }: IPropsModal) => {
	return <ContenedorModal>
		<TarjetaModal>
			<CloseButton onClick={() => setModal(null)}>
				<img src={Close} alt="close-button" />
			</CloseButton>
			<ImagenModal src={imagen} alt={altImagen} />
			<ContenedorTexto>
				<TituloModal>{titulo}</TituloModal>
				<DescripcionModal>{descripcion}</DescripcionModal>
				{children}
			</ContenedorTexto>
		</TarjetaModal>
	</ContenedorModal>
}

export default ModalNoticias;