import { Component, OnInit } from '@angular/core';
// we had to import
import {MarvelService} from './marvel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

// variables we need to use
herosInfo;


constructor(private marvelService: MarvelService){}
  title = 'app';

  getDataFromService (searchTerm = ''){
    this.marvelService.getHero(searchTerm)
    .subscribe(
      heroInfo => {
        this.herosInfo = heroInfo.data.results;
      }
    )
  }

  // getResult(searchTerm) {
  //   this.marvelService.getHero(searchTerm)
  //   .subscribe(
  //     heroInfo => {
  //       this.herosInfo = heroInfo.data.results;
  //     }
  //   )

  // }














  ngOnInit(){
    this.getDataFromService()
    
  }












}
