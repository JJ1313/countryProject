import {Country} from './assets/js/country.js';

const URL = "https://restcountries.com/v3.1/all";

const getCountries = async () => {
  const response = await fetch(URL);
  const countries = await response.json();
  const countriesList = [];

  countries.forEach((country) => {
    countriesList.push(new Country(country.name.common, country.flags.png, country.flag, country.flags.alt))
  });
  return countriesList;
}

const countries = await getCountries();
let currentCountry = null;
const correctCountries = []

const btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', () => {  
  document.getElementById('app-section').setAttribute('data-visible', 'true');
  btnStart.style.visibility = 'hidden';
  
  currentCountry = runLevel(countries);
}); 

const btnCheck = document.getElementById('btn-check');
btnCheck.addEventListener('click', () => {
  console.log(currentCountry);
  const answer = document.querySelector('#answer-wrapper input').value;
  if(answer.toLowerCase() === currentCountry.name.toLowerCase()){
    correctCountries.push(currentCountry);
    displayCorrectCountries(currentCountry);
    currentCountry = runLevel(countries);
  }
});


const pickRandom = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

const runLevel = (countries) => {
  const country = pickRandom(countries);
  const img = document.querySelector('#app-section img');
  img.setAttribute('src', country.flag);
  img.setAttribute('alt', country.flagAlt);
  return country;
}

const correctSection = document.querySelector('#correct-section ul');
const displayCorrectCountries = (country) => {
  const li = document.createElement('li');

  li.innerText = `${country.name}`;

  correctSection.appendChild(li);
}

