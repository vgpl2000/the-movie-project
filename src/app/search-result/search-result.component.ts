import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  constructor(private router: Router) {}
  
  @Input() movieData: any[] =[];
  
  selectedMovie: any = null; // Track the selected movie

  displayDefault(event: any) {
    event.target.src = "https://img.freepik.com/free-vector/flat-design-no-photo-sign-design_23-2149290509.jpg";
  }

  viewDetails(movie: any) {
    this.selectedMovie = movie; // Set the selected movie
  }

  closeDetails() {
    this.selectedMovie = null; // Clear the selected movie
  }
}
