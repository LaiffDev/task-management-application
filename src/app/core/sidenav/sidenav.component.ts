import { Component, input, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationsComponent } from '../../components/navigations/navigations.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatButtonModule,
    MatSidenavModule,
    NavigationsComponent,
    RouterOutlet,
],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {

}
