import axios from 'axios';

const polishAPI = axios.create({ baseURL: "https://practice-po-polsku.onrender.com/api/pronouns" })

function getPronouns(query) {

    let searchString = "";
    
    if(query){
        searchString += `?category=${query}`
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
}

function getPronounById(id) {
    return polishAPI.get(`/${id}`).then((response) => {
        return response.data
    })    
}

function getPronounsByForm(form, gender="", number="") {

    const acceptableNumbers = ["Singular", "Plural", "None"];

    let searchString = `/form/${form}?gender=${gender}&singular_plural=${number}`;

    if (acceptableNumbers.includes(gender)) {
        number = gender;
        searchString = `/form/${form}?singular_plural=${number}`;
    }

    return polishAPI.get(searchString).then((response) => {
        return response.data
    })
}

export default {
    getPronouns,
    getPronounById,
    getPronounsByForm
}

// getPronouns("Negative").then(response => console.log(response))
// getPronounById(15).then(response => console.log(response))
// getPronounsByForm("genitive").then(response => console.log(response))