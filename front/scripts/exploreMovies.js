import renderMovies from './renderMovies.js';
const d = document;
const inicioinfo = d.getElementById('inicioInfo');


export default async function exploreMovies (){
    try {
     const response = await axios.get("http://localhost:3000/movies");
     const dataMovies = response.data;
     inicioinfo.innerHTML = '';
     renderMovies(dataMovies);
    } catch (error) {
     console.log(`Error al conseguir las peliculas: ${error}`);
    }
   }

   