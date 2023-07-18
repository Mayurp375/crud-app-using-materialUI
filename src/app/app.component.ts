import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CmpAddEditComponent } from './cmp-add-edit/cmp-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-app-using-materialUI';

  constructor(private dialog:MatDialog){}

  openAddEditForm(){
    this.dialog.open(CmpAddEditComponent);
  }
}