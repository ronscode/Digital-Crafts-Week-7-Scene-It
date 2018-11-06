document.addEventListener('DOMContentLoaded', function() {

    function renderMovies(movieData) {
    

        var moviesHTML = movieData.map(function(currentMovie){
             return `
             <div class="card m-2" style="width: 14rem;">
             <img id="movieImage"class="card-img-top" src="${currentMovie.Poster}" alt="Movie Image">
             <div class="card-body">
               <h5 id="movieTitle" class="card-title">${currentMovie.Title}</h5>
               <p id="movieYear" class="card-text">${currentMovie.Year}</p>
               <button class="btn btn-primary" onclick='saveToWatchList("${currentMovie.imdbID}")'>Add Flick</button>
             </div>
           </div>
             `
         });
     
         return moviesHTML.join('');

         
     }