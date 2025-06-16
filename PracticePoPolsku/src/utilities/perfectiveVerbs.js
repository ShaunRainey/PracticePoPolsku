import handleError from "./handleError.js"
import axios from 'axios';

const polishAPI = axios.create({ baseURL: "https://practice-po-polsku.onrender.com/api/verbs/perfective" })

function getPastTensePerVerbs(query) {

    let searchString = "/pastTense"

    if (query) {
        searchString += `?unit=${query}`
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getPastTensePerVerbById(id) {
    return polishAPI.get(`/pastTense/${id}`).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getFutureTensePerVerbs(query) {

    let searchString = "/futureTense"

    if (query) {
        searchString += `?unit=${query}`
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getFutureTensePerVerbById(id) {
    return polishAPI.get(`/futureTense/${id}`).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getConditionalTensePerVerbs(query) {

    let searchString = "/conditionalTense"

    if (query) {
        searchString += `?unit=${query}`
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getConditionalTensePerVerbById(id) {
    return polishAPI.get(`/conditionalTense/${id}`).then((response) => {
        return response.data
    })
        .catch(handleError)
}

export default {
    getPastTensePerVerbs,
    getPastTensePerVerbById,
    getFutureTensePerVerbs,
    getFutureTensePerVerbById,
    getConditionalTensePerVerbs,
    getConditionalTensePerVerbById
}

// getConditionalTensePerVerbs(3.09).then(response => console.log(response.length))
// getFutureTensePerVerbs(3.09).then(response => console.log(response.length))
// getPastTensePerVerbs(3.09).then(response=>console.log(response.length))