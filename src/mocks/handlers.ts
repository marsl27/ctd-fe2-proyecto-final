import { rest } from "msw";
import { API_URL } from "../app/constants";

export const handlers = [
	rest.get(API_URL, (req, res, ctx) => {
		return res(ctx.json([{
			quote: "Marriage is like a coffin and each kid is another nail.",
			character: "Homer Simpson",
			image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
			characterDirection: "Right"
		}]));
	}),
	//rest.get(`https://thesimpsonsquoteapi.glitch.me/quotes?character=${personaje}`, (req, res, ctx) => {})
]
