import { Component, OnInit } from '@angular/core';
import { Movie } from '../domain/movie';
import { MovieService } from '../application/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies!: Movie[];

  constructor(private _movieSvc: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): Movie[] {
    this.movies = this._movieSvc.getMovies();
    return this.movies;
  }
}
