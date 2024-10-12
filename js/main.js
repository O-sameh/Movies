var moviesrow = document.querySelector("#moviesrow");
var moviestype = document.querySelector("#moviestype");
var wordsearch = document.querySelector("#wordsearch");
var ratesearch = document.querySelector("#ratesearch");



const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2VjNTRkMzMyN2JhNDI5OTZmZjAxN2UwODg3NDA5OSIsIm5iZiI6MTcyNTAyNzc4Mi41MzEyOCwic3ViIjoiNjZkMDdkYmQzZjNlOGU2OTkzMDAyY2Y1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.6JoU57QWk7i0dpQx_mg-tXzKqcYv_FNw7U_DxHsJRkk'
    }
  };


var films;
var originalFilms; 
function getMovies(type,headertype) {
    moviestype.textContent = headertype


    fetch(`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => {
        console.log(response.results)
        films = response.results;
        originalFilms = films;
        moviesrow.innerHTML=""
        films.forEach(film => {
            moviesrow.innerHTML+= `
                
                    <div class="col-md-4 my-3">
                            <div class="card border-0 h-100">
                            <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" class="card-img-top" alt="poster">
                            <div class="card-body text-light py-5  text-center">
                                <h4 class="card-title  my-5">${film.original_title}</h5>
                                <p class="card-text ">${film.overview}</p>
                                <p class="card-text ">${film.vote_average}</p>
                                <p class="card-text ">${film.release_date}</p>
                            </div>
                            </div>
                        </div>
            `
        });
    })
}

getMovies("now_playing","Now Playing");



wordsearch.addEventListener('keyup',function(){
    var searchValue = wordsearch.value;
    films=originalFilms.filter(function(film){
        return film.original_title.toLowerCase().includes(searchValue)

    })
    moviesrow.innerHTML=""
        films.forEach(film => {
            moviesrow.innerHTML+= `
                
                    <div class="col-md-4 my-3">
                            <div class="card border-0 h-100">
                            <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" class="card-img-top" alt="poster">
                            <div class="card-body text-light py-5  text-center">
                                <h4 class="card-title  my-5">${film.original_title}</h5>
                                <p class="card-text ">${film.overview}</p>
                                <p class="card-text ">${film.vote_average}</p>
                                <p class="card-text ">${film.release_date}</p>
                            </div>
                            </div>
                        </div>
            `
        });
})


ratesearch.addEventListener('keyup',function(){
    var rateValue = ratesearch.value;
    
    films=originalFilms.filter(function(film){
        var filmRate = film.vote_average.toString();
        return filmRate.includes(rateValue)

    })
    moviesrow.innerHTML=""
        films.forEach(film => {
            moviesrow.innerHTML+= `
                
                    <div class="col-md-4 my-3">
                            <div class="card border-0 h-100">
                            <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" class="card-img-top" alt="poster">
                            <div class="card-body text-light py-5  text-center">
                                <h4 class="card-title  my-5">${film.original_title}</h5>
                                <p class="card-text ">${film.overview}</p>
                                <p class="card-text ">${film.vote_average}</p>
                                <p class="card-text ">${film.release_date}</p>
                            </div>
                            </div>
                        </div>
            `
        });
})

