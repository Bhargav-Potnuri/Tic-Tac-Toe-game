import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [SquareComponent,CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
@Input() squares:('X'|'o'|null)[]=[];
@Output() checkBox=new EventEmitter<number>();

onClick(index:number){
this.checkBox.emit(index);
}
}
