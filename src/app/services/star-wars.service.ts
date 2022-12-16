import { Injectable } from '@angular/core';
import { Character } from '../Models/Character';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
   }

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


  onSideAssigned(char: Character){
    const pos = this.characters.findIndex(c => c.name === char.name);
    this.characters[pos].side = char.side;
    this.logService.writeLog('changed side of ' + char.name + ' to be: ' + char.side);
  }
}
