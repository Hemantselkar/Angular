import { Component } from '@angular/core';

type Player = 'X'|'O'|null;
@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {

  board:Player[]= Array(9).fill(null);
  currentPlayer:Player='X';
  winner:Player|'draw'=null;

  makeMove(index:number){
    if (this.board[index]||this.winner) {
      return;
    }
    this.board[index]=this.currentPlayer;

    if (this.checkWinner()) {
      this.winner=this.currentPlayer
    }else if(this.board.every((cell)=>cell !==null)){
      this.winner='draw';
    }else{
      this.currentPlayer=this.currentPlayer==='X'?'O':'X';
    }
  }

  checkWinner():boolean{
    const wins=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    // return wins.some((pattern)=>pattern.every((i)=>this.board[i]===this.currentPlayer));
    for (let pattern of wins) {
    let isWinner = true;

    for (let i of pattern) {
      if (this.board[i] !== this.currentPlayer) {
        isWinner = false;
        break;
      }
    }

    if (isWinner) {
      return true;
    }
}

return false;
  }

  resetGame(){
    this.board= Array(9).fill(null);
    this.currentPlayer='X';
    this.winner=null;
    
  }

}
