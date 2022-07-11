export interface INoticiasNormalizadas {
	id: number;
	titulo: string;
	descripcion: string;
	fecha: number | string;
	esPremium: boolean;
	imagen: string;
	descripcionCorta?: string;
}

export interface IPropsModal {
	imagen: string, 
	titulo: string, 
	descripcion: string,
	altImagen: string, 
	setModal: (modal: INoticiasNormalizadas | null) => void, 
	children?: React.ReactNode,
}