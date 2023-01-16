// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) { 
    let allDirectors = moviesArray.map(movie => movie.director);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
 let spielbergDramaMovies = moviesArray.filter(
        (movie) =>
          movie.director === "Steven Spielberg" && movie.genre.includes ("Drama")
      );

    if (moviesArray.length === 0) return 0;
  
  return spielbergDramaMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    let scoresNumbersArr = moviesArray.filter(item=>typeof item.score==="number")
        .map((item)=> item.score)
        .reduce((acc, cur) => acc + cur, 0)
    let average = scoresNumbersArr / moviesArray.length
    let roundedAverage = Math.round(average*100)/100


    return roundedAverage
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  /* let Drama = moviesArray.filter((m) => m.genre.includes("Drama"))
    return scoresAverage(Drama)*/

 const allDramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (allDramaMovies.length === 0) return 0;
  let dramaMoviesScore = allDramaMovies.filter(movie=>typeof movie.score==="number")
  .map(movie=>movie.score)
  .reduce((acc, cur) => acc + cur, 0)
  let average = dramaMoviesScore / allDramaMovies.length
   let roundedAverage = Math.round(average*100)/100
 
  return roundedAverage
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedMovies = [...moviesArray]
    .sort((a,b)=>{
        if (a.year == b.year) {
            if (a.title < b.title) {
                return -1 
            } else {
                return 1 
            }
        } else {
            return a.year - b.year 
        }
    })
    return orderedMovies

}

    
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let orderAlphabetically = moviesArray.map(movie=> movie.title)

  let orderAlpha = orderAlphabetically.sort((a,b) => a.localeCompare(b)).slice(0, 20)

  return orderAlpha
}
 
     
      


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesToMinutes = moviesArray.map((movie) => {
        const duration = movie.duration.split(" ");
        let hours = 0;
        let minutes = 0;
        duration.map((time) => {
            if (time.includes("h")) {
                hours = Number(time.replace("h", ""));
            } else if (time.includes("min")) {
                minutes = Number(time.replace("min", ""));
            }
        });
        return {
            ...movie,
            duration: (hours * 60) + minutes,
        };
    });
    return moviesToMinutes;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
}