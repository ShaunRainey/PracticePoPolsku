import axios from 'axios';

const polishAPI = axios.create({ baseURL: "https://practice-po-polsku.onrender.com/api/nouns" })

function getNouns(gender="", number="") {

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

function getNounById(id) {
    return polishAPI.get(`/${id}`).then((response) => {
        return response.data;
    })
}

function getNounsByForm(form, gender, number) {

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
    getNouns,
    getNounById,
    getNounsByForm
}

// getNouns().then(response => console.log(response.length));
// getNouns("Male", "Plural").then(response => console.log(response.length));
// getNouns("Plural").then(response => console.log(response.length));
// getNouns("Male").then(response => console.log(response.length));
// getNouns("Male", "Singular").then(response => console.log(response.length))
// getNouns("Female", "Plural").then(response => console.log(response.length))
// getNouns("Female", "Singular").then(response => console.log(response.length))
// getNouns("Neuter", "Plural").then(response => console.log(response.length))
// getNouns("Neuter", "Singular").then(response => console.log(response.length))

// getNounById(343).then(response => console.log(response))

// getNounsByForm("accusative", "Plural").then(response => console.log(response))
// getNounsByForm("instrumental", "Plural").then(response => console.log(response))
// getNounsByForm("genitive", "Male").then(response => console.log(response))
// getNounsByForm("locative", "Male", "Plural").then(response => console.log(response))