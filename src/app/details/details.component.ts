import { Component, inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.less'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService = inject(MovieService);
  movie: Movie | undefined;
  constructor() {
    const movieId = parseInt(this.route.snapshot.params['id'], 10);
    this.movie = this.movieService.getBestMovieById(movieId);
  }
}
