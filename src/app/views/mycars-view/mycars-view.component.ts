import { Component } from '@angular/core';
import {CarCardComponent} from "../../cars/car-card/car-card.component";
import {SidebarComponent} from "../../navigation/sidebar/sidebar.component";
import {CarAddComponent} from "../../cars/car-add/car-add.component";
import {MatDialog} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-mycars-view',
  standalone: true,
  imports: [
    CarCardComponent,
    SidebarComponent,
    CarAddComponent,
    MatButton,
  ],
  templateUrl: './mycars-view.component.html',
  styleUrl: './mycars-view.component.css'
})
export class MycarsViewComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(CarAddComponent, {
      width: '600px'
    });
  }
}
