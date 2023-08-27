'use strict';

const numberOfFilms = +prompt('How much have you already wachted films?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
let lastMovie;
let rating;
let count = numberOfFilms;
for( let i = 0; i < count; i++) {
	lastMovie = prompt('What have you watched last film?', '');
	rating = prompt('What do you evaluate this film?', '');
	if(lastMovie === '' || lastMovie.length >= 50 || lastMovie === null){
		count++;	
	}
	else{
		personalMovieDB.movies[lastMovie] = rating;
		console.log(`last film is ${lastMovie} has rating - ${personalMovieDB.movies[lastMovie]}`);
	}
}

// do while /////////////////////////////////////////////////

// let j = 0;
// do{
// 	lastMovie = prompt('What have you watched last film?', '');
// 	rating = prompt('What do you evaluate this film?', '');
// 	if(lastMovie === '' || lastMovie.length >= 10 ){
// 		count++;	
// 	}
// 	else{
// 		personalMovieDB.movies[lastMovie] = rating;
// 		console.log(`last film is ${lastMovie} has rating - ${personalMovieDB.movies[lastMovie]}`);
// 	}
// 	j++;
// } while (j < count);

// first answer /////////////////////////////////////////////////////////
//const lastMovie = prompt('What have you watched last film?', '');     //
//const rating = prompt('What do you evaluate this film?', '');         //
//const lastMovie1 = prompt('What have you watched last film?', '');    //
//const rating1 = prompt('What do you evaluate this film?', '');

//personalMovieDB.movies[lastMovie] = rating;
//personalMovieDB.movies[lastMovie1] = rating1;
//////////////////////////////////////////////////////////////////////////



