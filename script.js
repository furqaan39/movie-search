
const input = document.getElementById('input');
const btn = document.getElementById('btn');

const poster = document.getElementById('poster');
const title = document.getElementById('title');
const rated = document.getElementById('rated');
const year = document.getElementById('year');
const plot = document.getElementById('plot');
const ratings = document.getElementById('ratings');
const info = document.getElementsByClassName('info')[0];

btn.addEventListener('click', search);

function search(e){
	console.log(input.value);
	
	if(input.value !== ''){

		fetch(`http://www.omdbapi.com/?apikey=1cf10687&t=${input.value}`)
		.then(res => res.json())
		.then(result => {
			console.log(result);
			if(result.Title === undefined){
				title.innerHTML = "Not Found";
			}
			else{
				info.style.border = "1px solid black";
				poster.style.boxShadow = "0 0 10px 3px gray";
				poster.src = result.Poster;
				title.innerHTML = result.Title;
				year.innerHTML = result.Year;
				rated.innerHTML  =  result.Rated;
				ratings.innerHTML = "IMDB: " + result.Ratings[0].Value;
				plot.innerHTML = "<h3>Synopsis:</h3> " + result.Plot;
			}
		});		
	}	
}
