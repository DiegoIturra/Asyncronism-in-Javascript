const fetchData = require('../utils/fetchData');
let url_api = "https://rickandmortyapi.com/api/character/";

fetchData(url_api)
    .then(response => {
        console.log(response.info.count);
        value = response.info.count
        return fetchData(`${url_api}${response.results[0].id}`);
    })
    .then(response => {
        console.log(response.name)
        return fetchData(response.origin.url);
    })
    .then(response => {
        console.log(response.dimension);
    })
    .catch(error => {
        console.error(error);
    })

