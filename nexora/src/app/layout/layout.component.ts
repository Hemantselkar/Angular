import { Component } from '@angular/core';
import {  SideNavComponent } from '../side-nav/side-nav.component';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, SideNavComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})

export class LayoutComponent {

}
