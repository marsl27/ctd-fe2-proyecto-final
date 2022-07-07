export const toUpperCase = (text:string) => {
	return text.split(" ")
	.map((str) => {
	  return str.charAt(0).toUpperCase() + str.slice(1);
	})
	.join(" ");
}