import { Injectable } from "@angular/core";
import { IMovieService } from "../domain/movie.interface";
import { Movie } from "../domain/movie";
import data_movie from "../../assets/data/movies.json";

@Injectable({
  providedIn: "root"
})
export class MovieService implements IMovieService {
  movie!: Movie;

  constructor() {
    this.movie = {
      name: '',
      release: '',
      image: '',
      description: ''
    }
  }

  getMovies(): Movie[] {
    let movies = data_movie.movies;
    return movies;
  }

  getMovieId(id: number): Movie {
    let movies = data_movie.movies;
    this.movie = {
      name: movies[id].name,
      release: movies[id].release,
      image: movies[id].image,
      description: movies[id].description
    }
    return this.movie;
  }
}
