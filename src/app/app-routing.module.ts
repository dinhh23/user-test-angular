import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: "", redirectTo: "/users/list", pathMatch: "full"},
  { path: "users/list", component: UserListComponent },
  { path: "users/edit/:id", component: UserEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
