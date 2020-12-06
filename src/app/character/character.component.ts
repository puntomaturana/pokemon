import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokeService } from '../services/poke.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  id: string;
  characters: any;
  nombre: any;
  order: any;
  weight: any;
  experience: any;
  image: any;
  img: any;

  constructor(private pokeService: PokeService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.pokeService.getCharacter(this.id).subscribe(characterObj => {
      this.characters = characterObj
      this.nombre = this.characters.name;
      this.order = this.characters.order;
      this.weight = this.characters.weight;
      this.experience = this.characters.base_experience;
      this.image = this.characters.sprites;
      this.image = this.image.front_default;
    });
  }

  ngOnInit(): void {
  }

}
