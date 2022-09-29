import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { game } from '../interface/game';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  gameList: game;
  constructor(private router: Router) {
    this.gameList = new game();
   }

  ngOnInit(): void {
    
  }

  getIndex(){
    const data = localStorage.getItem('gameList');
    if (data !== null ) {
      const gameList = JSON.parse(data);
      return gameList.length + 1;
    } else {
      return 1;
    }
  }

  saveGame() {
    const first = this.getIndex(); 
    this.gameList.index = first;
    const data = localStorage.getItem('gameList');
    if (data !== null ) {
      const gameList = JSON.parse(data);
      gameList.push(this.gameList);
      localStorage.setItem('gameList', JSON.stringify(gameList));
    }else{
      const gameArray = [];
      gameArray.push(this.gameList);
      localStorage.setItem('gameList', JSON.stringify(gameArray));
    }
    // this.router.navigateByUrl('/showData');
  }
}
