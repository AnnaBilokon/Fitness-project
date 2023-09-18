export const exerciseOptions = {

		method: 'GET',
		url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
		headers: {
		  'X-RapidAPI-Key': '4f75ddd74cmsh996bbfc5c08aa58p109f1ejsn9a18687b7382',
		  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'

	  }
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();

	return data;
}