const btnSubmit = document.querySelector('#btnSubmit');
loadMovies();

btnSubmit.addEventListener('click', () =>{
    let name = document.querySelector('#name').value;
    let rating = document.querySelector('#rating').value;

    if(name.trim() === '' || rating.trim() === '') return false;
    fetch('/new', {
        method: 'POST', 
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({name: name, rating: rating})
    })
    .then(res => res.text())
    .then(data =>{
        alert(data);
        loadMovies();
    });
});

function loadMovies(){
    fetch('/get-movies', {method: 'GET'})
    .then(res => res.json())
    .then(data =>{
        const movie = document.querySelector('.row-movie');
        let html = '';
        data.movies.map(item =>{
            html += `<div class="d-flex" >${item.name}
                   <div class="scored"> ${Array.from(new Array(item.rating)).map(star => `<img src="img/star.png" width="16" />`)}</div>
                    </div>
            `
        });
        movie.innerHTML = html;
    });
}