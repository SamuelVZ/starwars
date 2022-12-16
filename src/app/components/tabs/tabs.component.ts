import { Component, OnInit, EventEmitter } from '@angular/core';
import { Character } from '../../Models/Character';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters!: Character[];
  choosenList = 'all';
  starWarsService: StarWarsService;


  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
   }

  ngOnInit(): void {
  }

  getCharacters(): Character[]{
    this.characters = this.starWarsService.getCharacters(this.choosenList);
    return this.characters;
  }

  onChoose(sideChoosen: string){
    this.choosenList = sideChoosen;
  }

}
