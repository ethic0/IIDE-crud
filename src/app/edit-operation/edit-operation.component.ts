import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { game } from '../interface/game';
@Component({
  selector: 'app-edit-operation',
  templateUrl: './edit-operation.component.html',
  styleUrls: ['./edit-operation.component.css']
})
export class EditOperationComponent implements OnInit {
  gameList: game;
  constructor(private route: ActivatedRoute) {
    this.gameList = new game();
    this.route.queryParams.subscribe((response)=>{
      this.gameList.index = response['index'];
    });
   }

  ngOnInit(): void {
    debugger;
    const oldData = localStorage.getItem('gameList');
    if(oldData !== null ){
      const  gameList = JSON.parse(oldData);
      const currentGame = gameList.find((m: any)=> m.index == this.gameList.index);
      if(currentGame !== undefined){
        this.gameList.title = currentGame.title;
        this.gameList.platform = currentGame.platform;
        this.gameList.genre = currentGame.genre;
      }
    }
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
