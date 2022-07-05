import { rest } from "msw";
import { API_URL } from "../app/constants";

interface IQuote {
	character: string;
	quote: string;
	image: string;
	characterDirection: string;
}
  
export const handlers = [
	rest.get(API_URL, (req, res, ctx) => {
		let quote: IQuote[] = [];
		switch (req.url.searchParams.get('character')) {
			case 'Bart': 
				quote = [{
					quote: "Eat my shorts",
					character: "Bart Simpson",
					image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
					characterDirection: "Right"
				}];
				break;
			case 'Marge': 
				quote = [{
					quote: "I'm sleeping in the bath tub.",
					character: "Marge Simpson",
					image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
					characterDirection: "Right"
				}];
				break;
			case null: 
				quote = [{
					quote: "Marriage is like a coffin and each kid is another nail.",
					character: "Homer Simpson",
					image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
					characterDirection: "Right"
				}]
				break;
		}
		return res(
			ctx.status(200),
			ctx.json(quote)
		);
	})
];