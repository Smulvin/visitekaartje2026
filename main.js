const apiURL = "https://fdnd.directus.app/items/person/310"

console.log(apiURL);

const parentElement = document.querySelector("main")

console.log(parentElement.style)

parentElement.classList.add("Loading")

let data = fetchJson(apiURL).then( function(response) {
    console.log(response.data);
    parentElement.innerHTML = `
    <article>
        <h2>${response.data.name}</h2>
        <p>${response.data.birthdate}</p>
    </article>
    `
    parentElement.classList.remove("Loading")

})


async function fetchJson(url, payload = {}) {
  return await fetch(url, payload)
    .then((response) => response.json())
    .catch((error) => error)
}