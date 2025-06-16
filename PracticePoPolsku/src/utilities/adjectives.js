import axios from 'axios';

const polishAPI = axios.create({ baseURL: "https://practice-po-polsku.onrender.com/api/adjectives" })

function getAdjectives(query, gender, number) {
        
    const acceptableNumbers = ["Singular", "Plural", "None"];
    
    let searchString = "";

    if (gender && number) {
        searchString = `?gender=${gender}&singular_plural=${number}`;
    } else if (acceptableNumbers.includes(gender)) {
        number = gender;
        searchString = `?singular_plural=${number}`;
    } else if (gender) {
        searchString = `?gender=${gender}`;
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data;
    })
}

function getAdjectiveById(id) {

    return polishAPI.get(`/${id}`).then((response) => {
        return response.data;
    })
}

function getAdjectivesByForm(form, gender, number) {

    const acceptableNumbers = ["Singular", "Plural", "None"];

    let searchString = `/form/${form}`

    if (gender && number) {
        searchString += `?gender=${gender}&singular_plural=${number}`;
    } else if (acceptableNumbers.includes(gender)) {
        number = gender;
        searchString += `?singular_plural=${number}`;
    } else if (gender) {
        searchString += `?gender=${gender}`;
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
}

export default {
    getAdjectives,
    getAdjectiveById,
    getAdjectivesByForm
}

// getAdjectives().then(response => console.log(response))

// getAdjectiveById(123).then(response => console.log(response))

// getAdjectivesByForm("accusative_animate").then(response => console.log(response)),
// getAdjectivesByForm("instrumental", "Male").then(response => console.log(response))
// getAdjectivesByForm("instrumental", "Plural").then(response => console.log(response))
// getAdjectivesByForm("locative", "Non-male", "Plural").then(response => console.log(response))



