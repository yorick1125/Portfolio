import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { MatDialog } from '@angular/material/dialog';
import {InfosheetComponent} from './infosheet/infosheet.component';
import { ɵangular_packages_platform_browser_animations_animations_a } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  title = 'Pokedex';
  private data:any;
  pokemons:any = [];
  loaded: boolean = false;
  name: any;

  constructor(private http: HttpClient, public dialog: MatDialog) {
    
  }

  ngOnInit(){

  }

  getData(){
    if(!this.loaded){
      for(let i = 1; i <= 151; i++) {
        const url =`https://pokeapi.co/api/v2/pokemon/${i}`;

        this.http.get(url).subscribe((res)=>{
          this.data = res
            const pokemon = {
              name: this.data.name,
              id: this.data.id,
              image: this.data.sprites['front_default'],
              height: this.data.height / 10,
              weight: this.data.weight / 10,
              type: this.data.types.map((type: any) => type.type.name).join("-"),
              abilities: this.data.abilities.map((ability: any) => ability.ability.name).join(", "),
              stats: {
                hp: {
                  name: this.data.stats[0].stat.name,
                  number: this.data.stats[0].base_stat
                },
                attack: {
                  name: this.data.stats[1].stat.name,
                  number: this.data.stats[1].base_stat
                },
                defense: {
                  name: this.data.stats[2].stat.name,
                  number: this.data.stats[2].base_stat
                },
                spattack: {
                  name: this.data.stats[3].stat.name,
                  number: this.data.stats[3].base_stat
                },
                spdefense: {
                  name: this.data.stats[4].stat.name,
                  number: this.data.stats[4].base_stat
                },
                speed: {
                  name: this.data.stats[5].stat.name,
                  number: this.data.stats[5].base_stat
                }
              }
          };

          this.pokemons.push(pokemon);
          this.printPokemons();
        })
      }
      this.loaded = true;
  }
    
  }

  printPokemons() {

    this.pokemons.sort((a: any, b: any) => (a.id < b.id ? -1 : 1));

    // for(let i = 0; i < 150; i++) {
    //   console.log(this.pokemons[i].name);
    // }
  }


  openDialog(pokemon:any) {

    console.log(this.pokemons.length);

    const dialogRef = this.dialog.open(InfosheetComponent, {
      width: '300px',
      height: '300px',
      data: {
        title: `${pokemon.id}. ${pokemon.name}`,
        message: `<img src="${pokemon.image}"> <br> 
        <b>Type:</b> ${pokemon.type} <br>
        <b>Height:</b> ${pokemon.height}m <br>
        <b>Weight:</b> ${pokemon.weight}kg <br>
        <b>Abilities:</b> ${pokemon.abilities} <br>
        <br>
        <b>HP:</b> ${pokemon.stats.hp.number} <br>
        <b>Attack:</b> ${pokemon.stats.attack.number} <br>
        <b>Defense:</b> ${pokemon.stats.defense.number} <br>
        <b>Special Attack:</b> ${pokemon.stats.spattack.number} <br>
        <b>Special Defense:</b> ${pokemon.stats.spdefense.number} <br>
        <b>Speed:</b> ${pokemon.stats.speed.number} <br>
        `
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      //console.log(res);
    })
  }

  Search() {

    console.log("typing");
    if(this.name == ""){
      if(this.loaded == true){
        this.loaded = false;
        this.pokemons = [];
        this.getData();
      }

    }
    else{
      this.pokemons = this.pokemons.filter((res:any) => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
  }
  }
 
}
