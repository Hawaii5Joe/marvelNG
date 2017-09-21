import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// we had to import



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // variables
  searchVal;

  @Output() searchPerformed = new EventEmitter<string>();

  constructor() { }

  search(){
    this.searchPerformed.emit(this.searchVal);
    console.log(this.searchVal);
  }

  ngOnInit() {
  }

}
