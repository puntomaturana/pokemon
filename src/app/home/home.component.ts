import { Component, OnInit } from '@angular/core';
import { PokeService } from '../services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  initPoke: any;
  constructor(private pokeService: PokeService) { }

  ngOnInit(): void {
    this.pokeService.getPoke().subscribe(pokes => {
      this.initPoke = pokes;
      this.initPoke = this.initPoke.results;
     });
  }

}
