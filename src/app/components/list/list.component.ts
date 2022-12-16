import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../../Models/Character';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  listCharacters: Character[] = [];
  activatedRoute: ActivatedRoute;
  starwarsService: StarWarsService;

  constructor(
    activatedRoute: ActivatedRoute,
    starwarsService: StarWarsService
  ) {
    this.activatedRoute = activatedRoute;
    this.starwarsService = starwarsService;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) =>
        (this.listCharacters = this.starwarsService.getCharacters(
          params['side']
        ))
    );
  }
}
