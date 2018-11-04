// 


 document.addEventListener('DOMContentLoaded', function() {

    function renderMovies(movieData) {
    

        var moviesHTML = movieData.map(function(movie){
             return `
             <div class="card m-2" style="width: 14rem;">
             <img id="movieImage"class="card-img-top" src="${movie.Poster}" alt="Movie Image">
             <div class="card-body">
               <h5 id="movieTitle" class="card-title">${movie.Title}</h5>
               <p id="movieYear" class="card-text">${movie.Year}</p>
               <button class="btn btn-primary">Add Flick</button>
             </div>
           </div>
             `
         });
     
     
         return moviesHTML.join('');
         
     }

document.getElementById('search-form').addEventListener('submit', function(e){
    e.preventDefault();
    var searchMovies = document.getElementById('search-form');

    
    movieContainer.innerHTML = renderMovies(movieData);

});

// Below is the code to make part 1 through 2 work for the Scene It assignment. 
// moviesContainer.innerHTML = renderMovies(movieData);

});

