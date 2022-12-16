import { Component, OnInit, EventEmitter } from '@angular/core';
import { Character } from '../../Models/Character';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters: Character[] = [
    {name: 'Luke', side: ''},
    {name: 'Darth Vader', side: ''}
  ];

  choosenList = 'all';


  constructor() { }

  ngOnInit(): void {
  }
  getCharacters(): Character[]{

    if(this.choosenList === 'all'){
      return this.characters.slice(); //slice returns a copy of the array
    }

    return this.characters.filter(c => c.side === this.choosenList);
  }

  onChoose(sideChoosen: string){
    this.choosenList = sideChoosen;
  }

  onSideAssignedTab(event: any){
    const pos = this.characters.findIndex(char => char.name === event.name);
    this.characters[pos].side = event.side;
  }

}
