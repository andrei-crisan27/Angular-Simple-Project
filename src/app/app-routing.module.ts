import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './first-page/login/login.component';
import { CardsComponent } from './second-page/cards/cards.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cards', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
