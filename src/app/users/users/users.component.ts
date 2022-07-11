import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log('The dialog was closed');
      if (result !== undefined) {
        if (result !== 'no') {
          this.users.push(result);
        } else if (result === 'no') {
          console.log('User clicked Cancel');
        }
      }
    });
  }
  onClickAddUser() {
    this.openDialog();
  }
}
