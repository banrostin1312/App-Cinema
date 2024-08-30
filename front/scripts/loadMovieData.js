import clearForm from "../scripts/clearForm.js";

const d = document;


function addMovieData (){
   const addMovie = d.getElementById("addmovie");
   const messageConfirm = d.getElementById("messageConfirm");
   const messageError = d.getElementById("messageError");
    addMovie.addEventListener("click",async(e)=>{
   e.preventDefault();

   const titleInput = d.getElementById("title");
   const yearInput = d.getElementById("year");
   const directorInput = d.getElementById("director");
   const durationInput = d.getElementById("duration");
   const genreInput = d.getElementById("genre");
   const rateInput = d.getElementById("rate");
   const posterInput = d.getElementById("poster");

   const title = titleInput.value;
   const year = yearInput.value;
   const director = directorInput.value;
   const duration = durationInput.value;
   const genre = genreInput.value;
   const rate = rateInput.value;
   const poster = posterInput.value;
     if(typeof title !== "string") alert("El titulo es invalido")
     if(title && year && director && duration && genre && rate && poster){
      const genres = genre.split(",").map(genre => genre.trim());

      const movieData = {
         title,
         year,
         director,
         duration,
         genre:genres,
         rate,
         poster
      }
 
      try {
         const response = await axios.post("http://localhost:3000/movies",movieData);
         messageConfirm.innerHTML = "The movie was successfully added";
         clearForm();
         
         setTimeout(() => {
            messageConfirm.innerHTML= "";
         }, 2000);
      } catch (error) {
         console.error("Error al agregar la película:", error.message);
         messageError.innerHTML = "Error al agregar la película. Por favor, inténtalo de nuevo.";
         clearForm();
         
         setTimeout(() => {
            messageError.innerHTML= "";
         }, 2000);
      }
     } else{
      alert("Porfavor llene todos los campos antes de agregar la pelicula.");
     }

    
    })




}
addMovieData();


