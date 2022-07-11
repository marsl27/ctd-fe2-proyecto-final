export const toUpperCase = (text:string) => 
	text.split(" ")
	.map((str) => str.charAt(0).toUpperCase() + str.slice(1))
	.join(" ");