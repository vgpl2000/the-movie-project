import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movieProject';
  displayComp: boolean = false;
  movieData: any[] = [];
  searchTerm: string ='';

  constructor(private router: Router, private http: HttpClient) { }

  searchMovie(searchTerm: string) {
    console.log("Moviename: ", searchTerm)
    if (searchTerm == '') {
      this.displayComp = false
      this.movieData = []
    }
    else {
      this.displayComp = true
      console.log("Searched movie: ", searchTerm)
      this.router.navigate(['/search'])
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=b2423bc054d4a3e8a45893f29515dce3&query=${searchTerm}`;
      this.http.get(apiUrl).subscribe((data: any) => {
        this.movieData = data.results;
      });
    }

  }
}
