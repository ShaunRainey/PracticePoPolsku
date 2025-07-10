import axios from 'axios';

//This will break upon updating spreadsheet as the format will change. Table elements will need updating as the examples will be seperated

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
