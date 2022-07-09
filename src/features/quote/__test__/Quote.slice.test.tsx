import citaReducer, { EstadoCita, obtenerCitaAsync } from "../citaSlice";
import { ESTADO_FETCH } from "../constants";

describe("Reducer", () => {
	const initialState: EstadoCita = {
		data: null,
		estado: ESTADO_FETCH.INACTIVO,
	};

	it("Deberia devolver el estado inicial", () => {
		const result = citaReducer(initialState, { type: "any" });
		expect(result).toEqual(initialState);
	})
	it("Deberia renderizar una cita", () => {
		const cita = {
			personaje: "Homer Simpson",
			cita: "Marriage is like a coffin and each kid is another nail.",
			imagen: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
			direccionPersonaje: "Right"
		}

		const result = citaReducer(initialState, { type: obtenerCitaAsync.fulfilled, payload: cita });
		expect(result.data?.personaje).toEqual("Homer Simpson")
	})
	it("Deberia arrojar el estado en cargando", () => {
		const result = citaReducer(initialState, { type: obtenerCitaAsync.pending });
		expect(result.estado).toEqual(ESTADO_FETCH.CARGANDO)
	})
	it("Deberia arrojar el estado de error", () => {
		const result = citaReducer(initialState, { type: obtenerCitaAsync.rejected });
		expect(result.estado).toEqual(ESTADO_FETCH.ERROR)
	})
})