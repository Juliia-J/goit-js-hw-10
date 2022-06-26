import './css/styles.css';
import Notiflix from 'notiflix';
import fetchCountries from './fetchCountries';
import countryCard from './countryCard';

const DEBOUNCE_DELAY = 300;
const refs = {
    countrySearch: document.querySelector('#search-box'),
    countryContainer: document.querySelector('.country-info'),
};

refs.countrySearch.addEventListener('input', onSearch);

function onSearch(e) {
    // e.prevenDefault();
    const form = e.currentTarget;
    const searchName = e.target.value;
    console.log(searchName);

    fetchCountries(searchName)
        .then(countryCard)
        .catch(error => console.log(error))
        .finally(() => form.reset());
}





    

