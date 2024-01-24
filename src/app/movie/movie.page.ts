import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../domain/movie';
import { MovieService } from '../application/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  id!: any;
  movie!: Movie;

  constructor (
    private activatedRoute: ActivatedRoute,
    private _movieSvc: MovieService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    let movieId = this.id - 1;
    this.movie = this._movieSvc.getMovieId(movieId);
  }
}
