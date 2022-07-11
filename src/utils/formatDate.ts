const ahora = new Date();

export const elapsedMinutes = (date: Date) => 
	Math.floor((ahora.getTime() - date.getTime()) / 60000);
