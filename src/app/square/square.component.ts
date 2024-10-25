import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
@Input() value:'X'|'o'| null=null;
@Output() squareBox= new EventEmitter<void>();

click(){
  this.squareBox.emit();
}
}
