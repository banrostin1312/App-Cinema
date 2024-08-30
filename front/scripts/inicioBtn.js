const d = document;
const inicioinfo = d.getElementById('inicioInfo');
const container = d.getElementById('movie-container');


export default function inicioBtnFun (){
    inicioinfo.innerHTML = `<div class="h2Container">
    <h2>Explora el emocionante mundo del cine con RambyTv</h2>
  </div>
  <p>Tu plataforma de entretenimiento cinematográfico personalizado. Descubre una amplia variedad de películas de todos los géneros y épocas, desde clásicos atemporales hasta los últimos éxitos de taquilla.</p>

  <h3>Características Destacadas:</h3>
  <ul>
      <li>🎞️ Películas Aleatorias al Instante: Deja que RambyTv sorprenda tu experiencia cinematográfica con una selección aleatoria de películas cada vez que visites la página. Nunca sabrás qué joya cinematográfica descubrirás a continuación.</li>
      <br><br>
      <li>🎞️ Búsqueda Personalizada: Encuentra tus películas favoritas fácilmente con nuestra potente función de búsqueda. Simplemente ingresa el título que deseas explorar y deja que RambyTv haga el resto.</li>
      <br><br>
      <li>🎞️ Información Detallada: Obtén información detallada sobre cada película, incluyendo el director, el año de lanzamiento, la duración y la calificación de IMDb. Conoce más sobre tus películas antes de verlas.</li>
      <br><br>
      <li>🎞️ Experiencia de Usuario Intuitiva: Nuestra interfaz de usuario fácil de usar garantiza una navegación sin complicaciones. Descubre nuevas películas, guarda tus favoritas y disfruta de una experiencia cinematográfica sin igual.</li>
      <br><br>
      <li>🎞️ Modo de Visualización Detallada: Sumérgete en el mundo de cada película con nuestro modo de visualización detallada. Desde sinopsis hasta puntuaciones de críticos, obtén toda la información que necesitas con un solo clic.</li>
  </ul>

  <p>RambyTv es más que una plataforma de películas; es tu compañero de confianza para explorar, disfrutar y enamorarte del séptimo arte. ¿Listo para la aventura cinematográfica? ¡Únete a RambyTv ahora y deja que la magia del cine cobre vida en tu pantalla!</p>
  `;
    container.innerHTML = '';
}