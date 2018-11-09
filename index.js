// 
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

// This is Scene It pt 2 with the save to watchlist function


function saveToWatchList(imdbID) {
    var movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID;

});


var watchlistJSON = localStorage.getItem('watchlist');
var watchlist = JSON.parse(watchlistJSON);

if (!watchlist) {
    watchlist = [];
}
watchlist.push(movie);
watchlistJSON = JSON.stringify(watchlist);
localStorage.setItem('watchlist', watchlistJSON);

}



document.addEventListener('DOMContentLoaded', function() {



var movieContainer = document.getElementById('movieContainer')


document.getElementById('search-form').addEventListener('submit', function(e){
    e.preventDefault();
    var searchMovies = document.getElementById('search-form').value;
    
    movieContainer.innerHTML = renderMovies(movieData);


});



// Below is the code to make part 1 through 2 work for the Scene It assignment. 
// moviesContainer.innerHTML = renderMovies(movieData);

});

