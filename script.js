'use strict';

let numberOfFilms;

function start() {

	numberOfFilms = +prompt('How much have you already wachted films?', '');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { // isNaN(numberOfFilms) - если здесь не число возвращает true
		numberOfFilms = +prompt('How much have you already wachted films?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		const genre = prompt(`What are you favourite genres of number ${i + 1}?`);
		personalMovieDB.genres[i] = genre;
	}
}
writeYourGenres();

function showMyDB(hidden) {
	if(!hidden) {
		console.log(personalMovieDB);
	}
}

// function showMyDB() {
// 	if (personalMovieDB.privat == false) {
// 		console.log(personalMovieDB);
// 	}
// }

showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
	for (let i = 0; i < 1; i++) {

		const lastMovie = prompt('What have you watched last film?', '');
		const rating = prompt('What do you evaluate this film?', '');

		if ((lastMovie != null && rating != null) && (lastMovie != '' && rating != '') && (lastMovie.length <= 50)) {
			console.log(personalMovieDB.movies[lastMovie]);
			personalMovieDB.movies[lastMovie] = rating;
			console.log('Done');
		} else {
			console.log('Error!');
			i--;
		}
	}
}
rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('You have watched a little films ');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('You\'re a classical viewer');
	} else if (personalMovieDB.count >= 30) {
		console.log('You are a kinoman');
	} else {
		console.log('Error');
	}
}
detectPersonalLevel();

console.log(personalMovieDB);

//  my option

// let lastMovie;
// let rating;
// let count = numberOfFilms;
// for( let i = 0; i < count; i++) {
// 	lastMovie = prompt('What have you watched last film?', '');
// 	rating = prompt('What do you evaluate this film?', '');
// 	if(lastMovie === '' || lastMovie.length >= 50 || lastMovie == null){
// 		count++;	
// 	}
// 	else{
// 		personalMovieDB.movies[lastMovie] = rating;
// 		console.log(`last film is ${lastMovie} has rating - ${personalMovieDB.movies[lastMovie]}`);
// 	}
// }

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



