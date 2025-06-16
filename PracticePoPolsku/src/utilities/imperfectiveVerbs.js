import handleError from "./handleError.js"
import axios from 'axios';

const polishAPI = axios.create({ baseURL: "https://practice-po-polsku.onrender.com/api/verbs/imperfective" })

function getPastTenseImpVerbs(query) {

    let searchString = "/pastTense"

    if (query) {
        searchString += `?unit=${query}`
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getPastTenseImpVerbById(id) {
    return polishAPI.get(`/pastTense/${id}`).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getPresentTenseImpVerbs(query) {

    let searchString = "/presentTense"

    if (query) {
        searchString += `?unit=${query}`
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getPresentTenseImpVerbById(id) {
    return polishAPI.get(`/presentTense/${id}`).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getConditionalTenseImpVerbs(query) {

    let searchString = "/conditionalTense"

    if (query) {
        searchString += `?unit=${query}`
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
        .catch(handleError)
}

function getConditionalTenseImpVerbById(id) {
    return polishAPI.get(`/conditionalTense/${id}`).then((response) => {
        return response.data
    })
        .catch(handleError)
}

export default {
    getPastTenseImpVerbs,
    getPastTenseImpVerbById,
    getPresentTenseImpVerbs,
    getPresentTenseImpVerbById,
    getConditionalTenseImpVerbs,
    getConditionalTenseImpVerbById
}

// getConditionalTenseImpVerbs(1.15).then(response=>console.log(response))