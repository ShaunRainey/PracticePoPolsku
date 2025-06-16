import axios from 'axios';

const polishAPI = axios.create({ baseURL: "https://practice-po-polsku.onrender.com/api/adverbs" });

function getAdverbs(query) {

    let searchString = "";

    if (query) {
        const formattedQuery = query.split(" ").join("%20");
        searchString += `?adverb_category=${formattedQuery}`
    }

    return polishAPI.get(searchString).then((response) => { 
        return response.data;
    })
}

function getAdverbById(id) {
    return polishAPI.get(`/${id}`).then((response) => {
        return response.data
    })
}

export default {
    getAdverbs,
    getAdverbById
}

// getAdverbs().then(response => console.log(response))
// getAdverbs("Adverbs of Affirmation or Negation").then(response => console.log(response.length))
// getAdverbById(2).then(response => console.log(response))