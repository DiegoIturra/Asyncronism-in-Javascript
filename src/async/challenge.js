const fetchData = require('../utils/fetchData');
let url_api = "https://rickandmortyapi.com/api/character/";

const fetchDataAsync = async(url_api) => {
    try {
        const response = await fetchData(url_api);
        console.log(response.info.count);

        const response2 = await fetchData(`${url_api}${response.results[0].id}`);
        console.log(response2.name);

        const response3 = await fetchData(response2.origin.url);
        console.log(response3.dimension);
    } catch (error) {
        console.error(error.message);
    }
}

fetchDataAsync(url_api);