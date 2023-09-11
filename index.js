const getQoute = async () => {
  const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b0cbc9dd9emsh3b5b00f6d3497a3p1f8af4jsnc034605e7647',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  qouteData(result)
	// console.log(result[0].text);
} catch (error) {
	console.error(error);
}
}

const qouteData = (qoute) => {
  const midContainer = document.querySelector('.midContainer') 
  midContainer.innerHTML = `<p>"${qoute[0].text}"</p>`
}

const generateQoute = document.getElementById('generateQoute')

generateQoute.onclick = () => getQoute()

getQoute()