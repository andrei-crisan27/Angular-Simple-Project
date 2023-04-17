import { Component } from '@angular/core';
import { GroupComponent } from '../group/group.component';
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  public allGroups = new Array<GroupComponent>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) { }

  addGroup() {
  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(GroupComponent);
  const componentRef = this.viewContainerRef.createComponent(componentFactory);
  const groupComponent = componentRef.instance;
  this.allGroups.push(groupComponent);
  console.log(this.allGroups.length);
  this.allGroups.pop()
}

}
