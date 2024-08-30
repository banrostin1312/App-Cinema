import renderMovies from "./renderMovies.js";


const d = document;
export default async function performSearchExplore() {
    const apiUrl = 'http://localhost:3000/movies';
    const searchTerm = searchInput.value;
    console.log(searchTerm);
  
    // Verifica si se proporcionó un término de búsqueda
    if (searchTerm.trim() !== '') {
      try {
        const response =  await axios.get(`${apiUrl}?search=${searchTerm}`);
        const apiData  = response.data;
        renderMovies(apiData);
        searchInput.value = '';
      
      } catch (error) {
        console.error(error.message);
      }
    } else {
      alert('Por favor, ingresa un título de búsqueda válido.');
    }
  }
  