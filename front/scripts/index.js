
import exploreMovies from './exploreMovies.js';
import scrollTopButton from './scrollUpBtn.js';
import inicioBtnFun from './inicioBtn.js';
import { performSearch } from './performanceSearch.js';

const d = document;
const inicioBtn = d.getElementById("inicio-Btn");
const inputBtn = d.getElementById('searchBtn');
const searchInput = d.getElementById('searchInput');
const exploreMoviesBtn = d.getElementById("explore-movies");

d.addEventListener("DOMContentLoaded",()=>{
scrollTopButton('.scrollUpBtn');
})

inicioBtn.addEventListener("click",()=>{
  inicioBtnFun();
})

exploreMoviesBtn.addEventListener("click",()=>{
  exploreMovies();
})

inputBtn.addEventListener('click', () => {
  performSearch();
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    performSearch();
  }
});










