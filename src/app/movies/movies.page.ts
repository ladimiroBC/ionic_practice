import { Component, OnInit } from '@angular/core';
import { Movie } from '../domain/movie';
import { MovieService } from '../application/movie.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies!: Movie[];

  constructor(
    private _movieSvc: MovieService,
    public _toastController: ToastController,
    public _alertController: AlertController
    ) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): Movie[] {
    this.movies = this._movieSvc.getMovies();
    return this.movies;
  }

  async movieToast() {
    const toast = await this._toastController.create({
      message: "Card movie selected",
      duration: 2000,
      position: "bottom"
    })
    toast.present();
  }

  async cardMovieDelete() {
    const alert = await this._alertController.create({
      header: "Card movie delete",
      message: "You're sure",
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("Canceled action");
          }
        },
        {
          text: "Si",
          handler: () => {
            console.log("Card movie delete");
          }
        }
      ]
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }
}
