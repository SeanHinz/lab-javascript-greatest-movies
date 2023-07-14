// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((eachMovie) => {
        let obj = {director: eachMovie.director}
        return obj
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaGenre = moviesArray.filter((eachMovie) => {
        let obj = false
            for (let i = 0; i < eachMovie.genre.length; i++)
              if (eachMovie.genre[i] === 'Drama') {
                   obj = true
              }
        return obj
      })
      spielbergDrama = dramaGenre.filter((eachDirector) => {
        return eachDirector.director === 'Steven Spielberg';

      })
      return spielbergDrama.length
  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    let averageScore = moviesArray.reduce((a, b) => {
        if (!b.score) { 
            b.score = 0
        }
        return a + b.score;
      }, 0)/moviesArray.length
      return Number(averageScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaGenre = moviesArray.filter((eachMovie) => {
        let obj = false
            for (let i = 0; i < eachMovie.genre.length; i++)
              if (eachMovie.genre[i] === 'Drama') {
                   obj = true
              }
        return obj
      })
      return scoresAverage(dramaGenre)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = moviesArray.sort((a,b)=>{
        if (a.year > b.year) {
          return 1;
        } else if(b.year > a.year){
          return -1;
        } else if (a.year === b.year) { 
            if (a.title > b.title) {
                return 1;
              } else if(b.title > a.title){
                return -1;
              } else
              return 0;
        }
      });
     return newArray 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [...moviesArray]
    newArray = newArray.sort((a,b)=>{
    if (a.title > b.title) {
        return 1;
      } else if(b.title > a.title){
        return -1;
      } else
      return 0;
    });
    let titles = newArray.map((eachMovie) => {
        let obj = eachMovie.title
        return obj
    })
    if (titles.length > 20) {
        return titles.slice(0, 20)
    }
    return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
