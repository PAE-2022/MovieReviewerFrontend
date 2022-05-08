import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-movie-datails',
  templateUrl: './movie-datails.component.html',
  styleUrls: ['./movie-datails.component.css']
})
export class MovieDatailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: string | any;
  ngOnInit(): void {
    this.route.params.subscribe( params =>
        this.id = params['id']
    )
  }

}
