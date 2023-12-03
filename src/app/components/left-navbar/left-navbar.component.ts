import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navbar',
  templateUrl: './left-navbar.component.html',
  styleUrl: './left-navbar.component.css'
})
export class LeftNavbarComponent {
  menuList = [
    'fa-bars',
    'fa-cube',
    'fa-square-plus',
    'fa-check-double',
    'fa-gear',
    'fa-download'
  ]

}
