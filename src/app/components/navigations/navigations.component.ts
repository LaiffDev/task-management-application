import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navigations',
  imports: [RouterLink],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.css'
})
export class NavigationsComponent {
  @Input() drawer: any;
}
