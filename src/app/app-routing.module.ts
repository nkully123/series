import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { SelectedComponent } from './selected/selected.component';


const routes: Routes = [
  { path: '', redirectTo: 'details', pathMatch: 'full'},
  { path: 'details', component: DetailsComponent },
  { path: 'selected', component: SelectedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}