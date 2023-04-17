import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardData } from 'src/app/models/card.model';

@Component({
  selector: 'app-single-card',
  templateUrl: './single-card.component.html',
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent {
  @Input() data: CardData = new CardData();
  @Input() index: number = 0;
  @Output() deleteUser = new EventEmitter<number>();

  delete(){
    this.deleteUser.emit(this.index);
  }
}
