const d = document;
const container = d.getElementById('movie-container');


export default async function renderMovies(dataApi) {
    container.innerHTML = '';
  
    if (dataApi && dataApi.length > 0) {
      for (const movieData of dataApi) {
        const movieElement = d.createElement('div');
        movieElement.classList.add('movie-card');
  
        movieElement.innerHTML = `
        <a href='${movieData.poster}' target = "_blank" style="color:black;">${movieData.title}</a>
          <p>Año: ${movieData.year}</p>
          <p>Director: ${movieData.director || 'N/A'}</p>
          <p>Duración: ${movieData.duration || 'N/A'}</p>
          <p>Género: ${movieData.genre || 'N/A'}</p>
          <p>Rating: ${movieData.rate || 'N/A'}</p>
          <img src="${movieData.poster}" alt="${movieData.title}">
        `;
   
        container.appendChild(movieElement);
      }
    } else {
      alert('No se encontraron resultados para la búsqueda.');
    }
  }
  