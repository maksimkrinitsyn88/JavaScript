"use strict";

const numberOfFilms = prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastFilm = prompt('Один из последних просмотренных фильмов', '');
const lastFilmRate = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = lastFilmRate;
console.log(personalMovieDB);

