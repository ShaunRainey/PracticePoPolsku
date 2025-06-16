import axios from 'axios';

const polishAPI = axios.create({ baseURL: "https://practice-po-polsku.onrender.com/api/prepositions" })


function getPrepositions(query) {

    let searchString = "";
    if (query) {
        searchString += `?grammaticalCase=${query}`;
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data;
    })
}

function getPrepositionById(id) {
    return polishAPI.get(`/${id}`).then((response) => {
        return response.data;
    })
}

export default {
    getPrepositions,
    getPrepositionById
}

// getPrepositions().then(response => { console.log(response) })
// getPrepositions("genitive").then(response => { console.log(response) })
// getPrepositionById(31).then(response => {console.log(response)})
