import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent],
  providers: [],

  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
