
import scrollTopButton from './scrollUpBtn.js';

import explorePelis from './explorePelis.js';
import performSearchExplore  from './PerformanceSearchExplore.js';

const d = document;
const inputBtn = d.getElementById('searchBtn');
const searchInput = d.getElementById('searchInput');

document.getElementById("inicio-Btn").addEventListener("click", function() {
  window.location.href = "/PM2-banrostin1312/front/index.html"; // Redirige a la URL especificada
});

d.addEventListener("DOMContentLoaded",()=>{
    explorePelis();
    scrollTopButton('.scrollUpBtn');
})
inputBtn.addEventListener('click', () => {
performSearchExplore();
});

searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    performSearchExplore();  }
});
