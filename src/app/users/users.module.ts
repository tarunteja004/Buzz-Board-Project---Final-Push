import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersComponent } from './add-users/add-users.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // declarations: [AddUsersComponent, UsersComponent],
  // imports: [
  //   CommonModule,
  //   MatToolbarModule,
  //   MatIconModule,
  //   MatButtonModule,
  //   MatDialogModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   UsersRoutingModule,
  //   MatRadioModule,
  //   FormsModule,
  //   ReactiveFormsModule
  // ],
  // exports: [AddUsersComponent],
})
export class UsersModule {}
