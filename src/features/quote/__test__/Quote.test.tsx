import Cita from "../Cita";
import { render, screen } from "../../../test-utils";
import userEvent from '@testing-library/user-event';

describe("cita", () => {
	it("Deberia renderizar el mensaje No se encontro ninguna cita al iniciar la aplicacion", () => {
		render(<Cita />);
		const message = screen.getByText("No se encontro ninguna cita");
		expect(message).toBeInTheDocument();
	})
	it("Deberia renderizar un boton que diga Obtener cita aleatoria al iniciar la aplicacion", () => {
		render(<Cita />);
		const button = screen.getByText("Obtener cita aleatoria");
		expect(button).toBeInTheDocument();
	})
	it("Deberia renderizar un boton que diga Obtener cita si se tipea en el input", async () => {
		render(<Cita />);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		await userEvent.type(input, "Bart");
		const button = screen.getByText(/Obtener cita/i);
		expect(button).toBeInTheDocument();
	})
	it("Deberia renderizar el mensaje de cargando al hacer click en el boton", async () => {
		render(<Cita />);
		const button = screen.getByText("Obtener cita aleatoria");
		await userEvent.click(button);
		const message = screen.getByText(/Cargando/i);
		expect(message).toBeInTheDocument();
	})
	
	it("Deberia renderizar una cita aleatoria al hacer click en el boton de Obtener cita aleatoria", async () => {
		render(<Cita />);
		const button = screen.getByText(/Obtener cita aleatoria/i);
		await userEvent.click(button);
		expect(await screen.findByText(/Homer Simpson/i)).toBeInTheDocument();
	})
	it("No deberia renderizar el mensaje No se encontro ninguna cita al hacer click en obtener cita aleatoria", async () => {
		render(<Cita />);
		const button = screen.getByText(/Obtener cita aleatoria/i);
		await userEvent.click(button);
		expect(screen.queryByText("No se encontro ninguna cita")).not.toBeInTheDocument();
	})
	it("Deberia renderizar una cita de bart al ingresar el nombre", async () => {
		render(<Cita />);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		await userEvent.type(input, "Bart");
		const button = screen.getByText(/Obtener cita/i);
		await userEvent.click(button);
		expect(await screen.findByText(/Bart Simpson/i)).toBeInTheDocument();
	})
	it("Deberia renderizar una cita de Marge al ingresar el nombre", async () => {
		render(<Cita />);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		await userEvent.type(input, "Marge");
		const button = screen.getByText(/Obtener cita/i);
		await userEvent.click(button);
		expect(await screen.findByText(/Marge Simpson/i)).toBeInTheDocument();
	})
	it("Deberia renderizar un error al ingresar un numero", async () => {
		render(<Cita />);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		await userEvent.type(input, "9");
		const button = screen.getByText(/Obtener cita/i);
		await userEvent.click(button);
		expect(await screen.findByText(/Por favor ingrese un nombre válido/i)).toBeInTheDocument();
	})
	it("Deberia borrar el nombre ingresado al hacer click en borrar", async () => {
		render(<Cita />);
		const input = screen.getByPlaceholderText("Ingresa el nombre del autor");
		await userEvent.type(input, "Bart");
		const button = screen.getByText(/Borrar/i);
		await userEvent.click(button);
		expect(screen.getByText(/Obtener cita aleatoria/i)).toBeInTheDocument();
	})
})
