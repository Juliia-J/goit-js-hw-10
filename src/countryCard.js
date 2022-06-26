export function countryCard(country) {
    refs.countryContainer.innerHTML = data.results
        .map(country => `<div><h2>${country.flags}${country.name}</h2><p>Capital:${country.capital}</p><p>Population:${country.population}</p><p>Languages:${country.languages}</p>`)
        .join('');
}