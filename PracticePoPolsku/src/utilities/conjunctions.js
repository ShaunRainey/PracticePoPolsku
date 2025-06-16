import axios from 'axios';

const polishAPI = axios.create({ baseURL: "https://practice-po-polsku.onrender.com/api/conjunctions" });

function getConjunctions() {
    return polishAPI.get().then((response) => {
        return response.data
    })
}

function getConjunctionById(id) {
    return polishAPI.get(`/${id}`).then((response) => {
        return response.data
    })
}

export default {
    getConjunctions,
    getConjunctionById
}

// getConjunctions().then(response => console.log(response))
// getConjunctionById(5).then(response => console.log(response))
