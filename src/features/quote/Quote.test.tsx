import Cita from "./Cita";
import { render, screen } from "../../test-utils";
import userEvent from '@testing-library/user-event';

describe("cita", () => {
	it("Deberia renderizar el mensaje No se encontro ninguna cita al iniciar la aplicacion", async () => {
		render(<Cita />);
		const p = screen.getByText("No se encontro ninguna cita");
		expect(p).toBeInTheDocument();
	})
	it("Deberia renderizar un boton que diga Obtener cita aleatoria al iniciar la aplicacion", () => {
		render(<Cita />);
		const button = screen.getByText("Obtener cita aleatoria");
		expect(button).toBeInTheDocument();
	})
	it("Deberia renderizar un boton que diga Obtener cita si se tipea en el input", async () => {
		render(<Cita />);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor")
		await userEvent.type(input, "Bart")
		const button = screen.getByText(/Obtener cita/i);
		expect(button).toBeInTheDocument();
	})
	it("Deberia renderizar el mensaje de cargando al hacer click en el boton", async () => {
		render(<Cita />);
		const button = screen.getByText("Obtener cita aleatoria");
		await userEvent.click(button);
		const p = await screen.findByText(/Cargando/i);
		expect(p).toBeInTheDocument();
	})
	it("Deberia renderizar una cita aleatoria al hacer click en el boton de Obtener cita aleatoria", async () => {
		render(<Cita />);
		const button = screen.getByText(/Obtener cita aleatoria/i);
		await userEvent.click(button);
		expect(await screen.findByText(/Homer Simpson/i)).toBeInTheDocument()
	})
})
