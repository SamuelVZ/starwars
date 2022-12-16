import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarsService } from '../../services/star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css'],
})
export class CreateCharacterComponent implements OnInit {
  starwarsService: StarWarsService;
  availableSides = [
    { display: 'None', side: '' },
    { display: 'Light', side: 'light' },
    { display: 'Dark', side: 'dark' },
  ];
  defaultName = 'Obi-Wan';

  constructor(starwarsService: StarWarsService) {
    this.starwarsService = starwarsService;
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form);
    this.starwarsService.addCharacter(form.value.name, form.value.side);
  }
}
