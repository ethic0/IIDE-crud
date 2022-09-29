import { Component, OnInit } from '@angular/core';
import { game } from '../interface/game';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  gameList: game [];
  constructor() { 
    this.gameList = [];
  }

  ngOnInit(): void {
    debugger;
   const data = localStorage.getItem('gameList');
   if(data !== null){
    this.gameList = JSON.parse(data);
   }
  }

  deleteData(index: any){
    const data = localStorage.getItem('gameList');
    if(data !== null){
      const gameList = JSON.parse(data);
      gameList.splice(gameList.findIndex((i: any) => i.index == index),1);
      localStorage.setItem('gameList',JSON.stringify(gameList));
    }
    const newdata = localStorage.getItem('gameList');
    if(data !== null){
     this.gameList = JSON.parse(data);
    }
  }
}
