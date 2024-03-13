# Proyecto Angular

Este proyecto se ha generado con Angular
 
Lo primero que debemos hacer es asegurarnos que tenemos node instalado

Una vez nos aseguremos de que esta instalado escribiremos el siguiente comando: `ng generate component nombreComponente`

Ahora veremos como crear un contador.


```
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
```

Esto lo añadiremos en la clase App.component.ts y despues lo nombraremos como script en nuestra clase body.component.html y veremos que funciona en la siguiente preview de la pagina.














