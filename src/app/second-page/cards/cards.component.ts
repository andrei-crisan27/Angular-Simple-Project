import { Component } from '@angular/core';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public allGroups = new Array<GroupComponent>();

  addGroup(){
    this.allGroups.push(new GroupComponent);
    console.log(this.allGroups.length)
  }
}
