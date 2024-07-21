import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { BestMovieComponent } from '../best-movie/best-movie.component';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BestMovieComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  bestMovieList : Movie[] = [];
  movieService: MovieService = inject(MovieService);

  constructor(){
    this.bestMovieList =  this.movieService.getAllBestMovies();
  }
}
