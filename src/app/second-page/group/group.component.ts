import { Component } from '@angular/core';
import { SingleCardComponent } from '../single-card/single-card.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  public allObjects = new Array<SingleCardComponent>();

  addObject(){
    this.allObjects.push(new SingleCardComponent);
    console.log(this.allObjects.length)
  }
}
