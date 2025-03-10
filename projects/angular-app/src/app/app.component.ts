import { Component } from '@angular/core';
import { ButtonComponentLib } from 'lib-turbo-components-scd';
// import { ButtonComponentLib } from '../../../lib-turbo-components-scd/src/lib/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponentLib],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
