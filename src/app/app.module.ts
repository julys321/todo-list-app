import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ArchivedTodoListComponent } from './archived-todo-list/archived-todo-list.component';
import { CreateTodoItemComponent } from './create-todo-item/create-todo-item.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule, MatCardModule, MatButtonModule, MatInputModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ArchivedTodoListComponent,
    CreateTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    DragDropModule,
    MatInputModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
