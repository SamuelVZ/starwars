import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './services/star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private starwarsService: StarWarsService) {}

  ngOnInit(): void {
    this.starwarsService.fetchCharacters().subscribe((data) => {
      data.results.map((char: { name: any }) => {
        // const fetchChar: Character = { name: char.name };
        this.starwarsService.addCharacter(char.name, '');
      });
    });
  }
  title = 'starwars';
}
