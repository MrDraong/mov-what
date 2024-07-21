import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../movie';

@Component({
  selector: 'app-best-movie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './best-movie.component.html',
  styleUrl: './best-movie.component.less'
})
export class BestMovieComponent {
  @Input() movie!: Movie;
}
