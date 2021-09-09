let row_movies_amount = 0;
function fetchData(api){
    fetch(api)
    .then(response => {
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    }).then(data => {
        let html = data.Search.map(movie => {
            if(row_movies_amount === 0){
                row_movies_amount++;
                return `
                <div class="posters">
                    <img src='${movie.Poster}' alt='movie'>`;
            }

            if(row_movies_amount % 5 === 0 && row_movies_amount !== 0){
                row_movies_amount++;
                return `
                    </div>
                        <div class="posters">
                            <img src='${movie.Poster}' alt='movie'>`;
            }
            
            if(row_movies_amount % 5 !== 0 && row_movies_amount !== 0){
                row_movies_amount++;
                return `<img src='${movie.Poster}' alt='movie'>`;
            }
        })
        .join('');
        document.querySelector('#movies').innerHTML += html;
    }).catch(error => {
        console.log(error);
    });
}
fetchData('http://www.omdbapi.com/?apikey=90ccbfa0&s=love&type=movie&page=1');
fetchData('http://www.omdbapi.com/?apikey=90ccbfa0&s=love&type=movie&page=2');