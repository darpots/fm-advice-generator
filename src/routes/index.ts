export async function get() {
	// log all headers
	const result = await fetch('https://api.adviceslip.com/advice');
	const data = await result.json();

	return {
		body: {
			id: data.slip.id,
			advice: data.slip.advice
		}
	};
}
