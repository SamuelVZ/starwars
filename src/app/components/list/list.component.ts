import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../../Models/Character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listCharacters: Character[] = [];
  @Output() sideAssigned = new EventEmitter<Character>()
  constructor() { }

  ngOnInit(): void {
  }

  onSideAssigned(event : any){
    this.sideAssigned.emit(event);
  }
}
