import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieId: number = 0;
  @Output() close = new EventEmitter<void>(); // Event to close modal

  movieDetails: any;

  constructor(private movieService: MovieServiceService) {}

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    this.movieService.getMovieDetails(this.movieId).subscribe((data: any) => {
      this.movieDetails = data;
    });
  }

  closeModal() {
    this.close.emit(); // Emit event to close modal
  }

  displayDefault(event: any) {
    event.target.src = "https://img.freepik.com/free-vector/flat-design-no-photo-sign-design_23-2149290509.jpg";
  }
}
