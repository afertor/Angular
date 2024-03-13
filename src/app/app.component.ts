import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from "../body/body.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BodyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Prueba';
  contadorVinilos: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.contadorVinilos++;
    }, 1000);
  }
}
