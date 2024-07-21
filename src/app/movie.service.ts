import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  bestMovieList : Movie[] = [
    {
      id: 1,
      originalTitle: "The best movie",
      posterPath: "sesituequelquepart",
      releaseDate: "20/07/2024",
      voteAverage: 4.5,
      voteCount: 5
    },
    {
      id: 2,
      originalTitle: "Another best",
      posterPath: "sesituequelquepart",
      releaseDate: "19/07/2024",
      voteAverage: 4.2,
      voteCount: 11
    }
  ]

  constructor() { }

  getAllBestMovies() {
    return this.bestMovieList;
  }

  getBestMovieById(id: number): Movie | undefined {
    return this.bestMovieList.find(movie => movie.id === id);
  }
}
