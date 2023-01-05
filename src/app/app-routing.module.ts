import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponets/about/about.component';
import { TodoAddComponent } from './MyComponets/todo-add/todo-add.component';
import { TodosComponent } from './MyComponets/todos/todos.component';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
