import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink], 
})
export class HomePage implements OnInit {
  nombreFase: string = 'Cargando luna...'; // Texto por defecto

  constructor() {}

  ngOnInit() {
    // ESTO FALTABA: ¡Hay que llamar a la función al iniciar!
    this.calcularFaseLunar();
  }

  calcularFaseLunar() {
    const fecha = new Date();
    
    // OJO: getMonth() devuelve 0-11, sumamos 1 para el cálculo matemático
    let year = fecha.getFullYear();
    let month = fecha.getMonth() + 1; 
    let day = fecha.getDate();

    // Ajuste del algoritmo para enero y febrero
    if (month < 3) {
      year--;
      month += 12;
    }

    let a = Math.floor(year / 100);
    let b = 2 - a + Math.floor(a / 4);
    let jd = Math.floor(365.25 * (year + 4716)) + Math.floor(30.6001 * (month + 1)) + day + b - 1524.5;
    let daysSinceNew = jd - 2451550.1;
    let newMoons = daysSinceNew / 29.53058867;
    let cycle = (newMoons - Math.floor(newMoons)) * 29.53;

    // cycle es la "edad" de la luna en días
    this.determinarNombreFase(cycle);
  }

  determinarNombreFase(edad: number) {
    if (edad < 1.84) this.nombreFase = 'Luna Nueva';
    else if (edad < 5.53) this.nombreFase = 'Luna Creciente';
    else if (edad < 9.22) this.nombreFase = 'Cuarto Creciente';
    else if (edad < 12.91) this.nombreFase = 'Gibosa Creciente';
    else if (edad < 16.61) this.nombreFase = 'Luna Llena';
    else if (edad < 20.30) this.nombreFase = 'Gibosa Menguante';
    else if (edad < 23.99) this.nombreFase = 'Cuarto Menguante';
    else if (edad < 27.68) this.nombreFase = 'Luna Menguante';
    else this.nombreFase = 'Luna Nueva';
  }
}