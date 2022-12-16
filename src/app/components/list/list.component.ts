import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../Models/Character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listCharacters: Character[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
