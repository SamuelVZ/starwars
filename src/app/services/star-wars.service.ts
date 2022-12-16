import { Injectable } from '@angular/core';
import { Character } from '../Models/Character';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  constructor() { }

  private characters: Character[] = [
    {name: 'Luke', side: ''},
    {name: 'Darth Vader', side: ''}
  ];


  getCharacters(choosenList: string): Character[]{

    if(choosenList === 'all'){
      return this.characters.slice(); //slice returns a copy of the array
    }

    return this.characters.filter(c => c.side === choosenList);
  }


  onSideAssignedTab(char: Character){
    const pos = this.characters.findIndex(c => c.name === char.name);
    this.characters[pos].side = char.side;
  }
}
