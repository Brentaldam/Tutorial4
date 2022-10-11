const movieList = [
    {
      title: "Batman",
      year: 1989,
      director: "Tim Burton",
      imdbRating: 7.6
    },
    {
      title: "Batman Returns",
      year: 1992,
      director: "Tim Burton",
      imdbRating: 7.0
    },
    {
      title: "Batman Forever",
      year: 1995,
      director: "Joel Schumacher",
      imdbRating: 5.4
    },
    {
      title: "Batman & Robin",
      year: 1997,
      director: "Joel Schumacher",
      imdbRating: 3.7
    },
    {
      title: "Batman Begins",
      year: 2005,
      director: "Christopher Nolan",
      imdbRating: 8.3
    },
    {
      title: "The Dark Knight",
      year: 2008,
      director: "Christopher Nolan",
      imdbRating: 9.0
    },
    {
      title: "The Dark Knight Rises",
      year: 2012,
      director: "Christopher Nolan",
      imdbRating: 8.5
    }
  ];

  console.log(movieList[0]);
  console.log(movieList[1].title);
  movieList.forEach(movie=>{
    console.log(movie.title);
  });

  //use functional programing to get all the Nolan movies
const nolanMovies = movieList.filter(movie => movie.director === "Christopher Nolan");
console.log("Nolan movies below")
  console.log(nolanMovies);
  //generic filter function
  const filter = (array, funct) => array.filter(funct);
//create a by Nolan filter
const byNolan = movie=> movie.director ==="Christopher Nolan";
//to use this do the following
const nolanMovies2 = filter(movieList, byNolan);
console.log(nolanMovies2)