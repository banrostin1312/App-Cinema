const d = document;
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

   export default function clearForm(){
    titleInput.value = "";
    yearInput.value = "";
    directorInput.value = "";
    durationInput.value = "";
    genreInput.value = "";
    rateInput.value = "";
    posterInput.value = "";
   };