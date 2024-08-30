import renderMovies from './renderMovies.js';
const d = document;



export default async function explorePelis (){
    try {
     const response = await axios.get("http://localhost:3000/movies");
     const dataMovies = response.data;
     renderMovies(dataMovies);
    } catch (error) {
     console.log(`Error al conseguir las peliculas: ${error}`);
    }
   }

   