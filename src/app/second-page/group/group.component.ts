import { Component } from '@angular/core';
import { SingleCardComponent } from '../single-card/single-card.component';
import { CardData } from 'src/app/models/card.model';
import { Subject, first } from 'rxjs';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {
  public firstName: string = '';
  public lastName: string = '';
  public gender: string = '';
  public email: string = '';
  public picture: string = '';
  public allObjects = new Array<CardData>();
  public apiCallFlag: Subject<boolean> = new Subject<boolean>();

  constructor (private apiService: MyServiceService) {

  }

  addObject(){
    //this.allObjects.push(new SingleCardComponent);
    this.initializeData();
    this.apiCallFlag.pipe(first()).subscribe(result => {
      if (result) {
        const CardData = {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          email: this.email,
          picture: this.picture
        };
        this.allObjects.push(CardData);
      }
    });
  }

  private initializeData(){
    this.apiService.getData().pipe(first()).subscribe({
      next: (result: any) => {
        this.firstName = result.results[0].name.first;
        this.lastName = result.results[0].name.last;
        this.gender = result.results[0].gender;
        this.email = result.results[0].email;
        this.picture = result.results[0].picture.large;
        this.apiCallFlag.next(true);        
        },
      error: (error: any) => {
          this.apiCallFlag.next(false);
          console.log(error);
        }
    });
  }

  public deleteCard(index: number){
    this.allObjects.splice(index, 1);
  }
}
