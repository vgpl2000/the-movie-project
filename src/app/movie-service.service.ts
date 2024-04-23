import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private apiUrl = 'https://api.themoviedb.org/3/movie';
  private apiKey = 'b2423bc054d4a3e8a45893f29515dce3';
  constructor(private http: HttpClient) { }
  searchMovies(movieName: string): any {
    const apiUrl = `${this.apiUrl}?api_key=${this.apiKey}&query=${movieName}`;
    return this.http.get(apiUrl);
  }
  getMovieDetails(movieId: number): any {
    const apiUrl = `${this.apiUrl}/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}