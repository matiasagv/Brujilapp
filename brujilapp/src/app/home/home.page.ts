import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // <--- Importante
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // <--- Para que funcionen los enlaces

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  // AQUÍ ESTÁ LA MAGIA: Agregamos las herramientas que usa el HTML
  imports: [IonicModule, CommonModule, RouterLink], 
})
export class HomePage {
  constructor() {}
}