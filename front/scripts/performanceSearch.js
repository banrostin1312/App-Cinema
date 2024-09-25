import renderMovies from "./renderMovies.js";


const d = document;
const inicioinfo = d.getElementById('inicioInfo');
export async function performSearch() {
  const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3000/movies';
  const searchTerm = searchInput.value;
  console.log(searchTerm);

  // Verifica si se proporcionó un término de búsqueda
  if (searchTerm.trim() !== '') {
    try {
      const response = await axios.get(`${apiUrl}?search=${searchTerm}`);
      const apiData = response.data;
      renderMovies(apiData);
      searchInput.value = '';
      inicioinfo.innerHTML = '';
    } catch (error) {
      console.error(error.message);
    }
  } else {
    alert('Por favor, ingresa un título de búsqueda válido.');
  }
}
