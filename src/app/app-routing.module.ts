import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOperationComponent } from './edit-operation/edit-operation.component';
import { MainComponent } from './main/main.component';
import { OperationsComponent } from './operations/operations.component';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'showData', component: OperationsComponent},
  {path:'updateData/:id', component: EditOperationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
