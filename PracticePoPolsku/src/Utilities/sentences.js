import axios from 'axios';

const polishAPI = axios.create({ baseURL: "https://practice-po-polsku.onrender.com/api/sentences" })

function getSentences(query) {

    let searchString = "";
    
    if(query){
        searchString += `?unit=${query}`
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
}

function getSentenceById(id) {
    return polishAPI.get(`/${id}`).then((response) => {
        return response.data
    })    
}

export default {
    getSentences,
    getSentenceById
}