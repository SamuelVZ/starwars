import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Character } from '../../Models/Character';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, OnDestroy {
  listCharacters: Character[] = [];
  activatedRoute: ActivatedRoute;
  starwarsService: StarWarsService;
  loadedSide = 'all';
  subscription!: Subscription;

  constructor(
    activatedRoute: ActivatedRoute,
    starwarsService: StarWarsService
  ) {
    this.activatedRoute = activatedRoute;
    this.starwarsService = starwarsService;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.listCharacters = this.starwarsService.getCharacters(params['side']);
      this.loadedSide = params['side'];
    });

    this.subscription = this.starwarsService.characterChanched.subscribe(() => {
      this.listCharacters = this.starwarsService.getCharacters(this.loadedSide);
    });
  }
}
