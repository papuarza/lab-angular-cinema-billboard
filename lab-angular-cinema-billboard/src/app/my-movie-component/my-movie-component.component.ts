import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers: [ CinemaService ]
})
export class MyMovieComponentComponent implements OnInit {
  contactId : number;
  movie: Array<Object>;
  constructor(public cinemaService : CinemaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.contactId = +params['id']);
    this.movie = this.cinemaService.getMovie(this.contactId);
  }
}
