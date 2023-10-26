let countries = ["spain", "france","italy"];

let person = {
    name: "pepe",
    pet: "cat",
    hobby: "baseball"
}

let allCountries = ""

for (let index = 1; index <= countries.length; index++) {
    const country = countries [index-1];
    console.log(property +' :' + person[property] )
}