import { Component } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BoardComponent, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  squares: ('X' | 'o' | null)[] = Array(9).fill(null);
  isFirstPlayerNext = true;
  score = {
    isFirstPlayer: 0,
    isSecondPlayer: 0,
  };
  winner: 'X' | 'o' | 'Draw' | null = null;

  handleMove(index: number) {
    if (this.squares[index] || this.winner) return;
    this.squares[index] = this.isFirstPlayerNext ? 'X' : 'o';
    this.isFirstPlayerNext = !this.isFirstPlayerNext;
    this.winner = this.calculateWinner();
    if (this.winner === 'X' || this.winner === 'o') {
      this.score[this.winner === 'X' ? 'isFirstPlayer' : 'isSecondPlayer']++;
    } else if (!this.squares.includes(null)) {
      this.winner = 'Draw';
    }
  }

  calculateWinner(): 'X' | 'o' | null {
    const lines = [
      [0, 1, 3],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (const [a, b, c] of lines) {
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

  resetGame() {
    this.squares = Array(9).fill(null);
    this.isFirstPlayerNext = true;
    this.winner = null;
  }
}
