import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LibreriaModule } from './libreria/libreria-module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LibreriaModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Libreria';
}
