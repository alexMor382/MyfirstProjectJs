'use strict'

const numberOfFilms = +prompt('How much have you already wachted films?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

const lastMovie = prompt('What have you watched last film?', '');
const rating = prompt('What do you evaluate this film?', '');
const lastMovie1 = prompt('What have you watched last film?', '');
const rating1 = prompt('What do you evaluate this film?', '');

personalMovieDB.movies[lastMovie] = rating;
personalMovieDB.movies[lastMovie1] = rating1;

console.log(`last film is ${lastMovie} has rating - ${personalMovieDB.movies[lastMovie]}`);