import { Component, Input, OnInit } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { Character } from '../../Models/Character';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character!: Character;

  starWarsService: StarWarsService;

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
   }
  ngOnInit(): void {
  }

  onAssignClick(sideItem: string){
      const returnCharacter: Character = {name: this.character.name, side: sideItem};

      this.starWarsService.onSideAssignedTab(returnCharacter);
  }
}
