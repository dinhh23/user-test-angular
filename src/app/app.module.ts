import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { BoolPasswordPipe } from './pipes/bool-password.pipe';
import { UserSearchPipe } from './user/user-search.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    BoolDisplayPipe,
    BoolPasswordPipe,
    UserSearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
