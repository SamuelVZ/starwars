import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StarWarsService } from 'src/app/services/star-wars.service';
import { Character } from '../../Models/Character';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character!: Character;
  @Output() sideAssigned = new EventEmitter<Character>();

  starWarsService: StarWarsService;

  constructor(starWarsService: StarWarsService) {
    this.starWarsService = starWarsService;
   }
  ngOnInit(): void {
  }

  onAssignClick(sideItem: string){
      // this.character.side = sideAssigned
      const returnCharacter: Character = {name: this.character.name, side: sideItem};

      // this.sideAssigned.emit(returnCharacter);
      this.starWarsService.onSideAssignedTab(returnCharacter);
  }
}
