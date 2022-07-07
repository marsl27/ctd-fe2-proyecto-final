import { useEffect, useState } from "react";
import { SuscribeImage } from "../../assets";
import { obtenerNoticias } from "./fakeRest";
import {
	TarjetaNoticia,
	FechaTarjetaNoticia,
	DescripcionTarjetaNoticia,
	ImagenTarjetaNoticia,
	TituloTarjetaNoticia,
	ContenedorNoticias,
	ListaNoticias,
	TituloNoticias,
	BotonLectura,
	BotonSuscribir
} from "./styled";

import { toUpperCase } from "../../utils/formatStrings";
import { elapsedMinutes } from "../../utils/formatDate";
import ModalNoticias from "./ModalNoticias";

export interface INoticiasNormalizadas {
	id: number;
	titulo: string;
	descripcion: string;
	fecha: number | string;
	esPremium: boolean;
	imagen: string;
	descripcionCorta?: string;
}

const formatData = (data: any) => {
	return data.map((n: any) => {
		//Pase las dos funciones que formateaban el titulo y los minutos a una carpeta utils para que la funcion formatData solo se encargue
		//de devolver el objeto con la data ya formateada aplicando el principio de responsabilidad unica
		const titulo = toUpperCase(n.titulo);
		const minutosTranscurridos = elapsedMinutes(n.fecha);

		return {
			id: n.id,
			titulo,
			descripcion: n.descripcion,
			fecha: `Hace ${minutosTranscurridos} minutos`,
			esPremium: n.esPremium,
			imagen: n.imagen,
			descripcionCorta: n.descripcion.substring(0, 100),
		};
	});
}

const Noticias = () => {
	const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
	const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
	
	const tituloSuscribete = "Suscríbete a nuestro Newsletter";
	const descripcionSuscribete = "Suscríbete a nuestro newsletter y recibe noticias de nuestros personajes favoritos."

	const obtenerInformacion = async () => {
		const respuesta = await obtenerNoticias();
		const data = formatData(respuesta);

		setNoticias(data);
	}

	useEffect(() => {
		obtenerInformacion();
	}, []);

	return (
		<ContenedorNoticias>
			<TituloNoticias>Noticias de los Simpsons</TituloNoticias>
			<ListaNoticias>
				{noticias.map((n) => (
					<TarjetaNoticia key={n.id}>
						<ImagenTarjetaNoticia src={n.imagen} />
						<TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
						<FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
						<DescripcionTarjetaNoticia>
							{n.descripcionCorta}
						</DescripcionTarjetaNoticia>
						<BotonLectura onClick={() => setModal(n)}>Ver más</BotonLectura>
					</TarjetaNoticia>
				))}
				{modal ? (
					modal.esPremium ? (
						<ModalNoticias
							imagen={SuscribeImage} 
							titulo={tituloSuscribete}
							descripcion={descripcionSuscribete}
							altImagen="mr-burns-excelent"
							setModal={setModal}
						>
							<BotonSuscribir
								onClick={() =>
									setTimeout(() => {
										alert("Suscripto!");
										setModal(null);
									}, 1000)
								}
							>
								Suscríbete
							</BotonSuscribir>
						</ModalNoticias>

					) : (
						<ModalNoticias
							imagen={modal.imagen} 
							titulo={modal.titulo}
							descripcion={modal.descripcion}
							altImagen="news-image"
							setModal={setModal}
						/>
					)
				) : null}
			</ListaNoticias>
		</ContenedorNoticias>
	);
};

export default Noticias;
