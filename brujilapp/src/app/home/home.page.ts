import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
})
export class HomePage implements OnInit {

  nombreFase: string = 'Cargando...';
  // Imagen por defecto (mientras calcula)
  imagenFase: string = 'assets/moon/lunallena-removebg.png';

  constructor() {}

  ngOnInit() {
    this.calcularFaseLunar();
  }

  calcularFaseLunar() {
    const date = new Date();
    
    // Algoritmo simple para calcular la fase (0.0 a 1.0)
    // 0 = Nueva, 0.5 = Llena, 1.0 = Nueva otra vez
    const synodic = 29.53058867; // Días del ciclo lunar
    const msPerDay = 86400000;
    const baseDate = new Date('2000-01-06T18:14:00Z'); // Una luna nueva conocida
    
    const diff = date.getTime() - baseDate.getTime();
    const phaseRatio = (diff / msPerDay) / synodic;
    let phase = phaseRatio - Math.floor(phaseRatio); // Nos quedamos solo con el decimal (0.0 - 0.99)

    // ASIGNACIÓN DE TUS IMÁGENES SEGÚN LA FASE
    // Usando la ruta: assets/moon/NOMBRE_DEL_ARCHIVO

    if (phase < 0.03 || phase > 0.97) {
      this.nombreFase = 'Luna Nueva';
      this.imagenFase = 'assets/moon/lunanueva-removebg.png';
    } 
    else if (phase < 0.23) {
      this.nombreFase = 'Creciente';
      this.imagenFase = 'assets/moon/lunacreciente-removebg.png';
    } 
    else if (phase < 0.27) { // Cuarto Creciente (aprox 0.25)
      this.nombreFase = 'Cuarto Creciente';
      this.imagenFase = 'assets/moon/primercuartodeluna-removebg.png';
    } 
    else if (phase < 0.47) {
      this.nombreFase = 'Gibosa Creciente';
      this.imagenFase = 'assets/moon/lunagibosacreciente-removebg.png';
    } 
    else if (phase < 0.53) { // Luna Llena (aprox 0.50)
      this.nombreFase = 'Luna Llena';
      this.imagenFase = 'assets/moon/lunallena-removebg.png';
    } 
    else if (phase < 0.73) {
      this.nombreFase = 'Gibosa Menguante';
      this.imagenFase = 'assets/moon/lunagibosamenguante-removebg.png';
    } 
    else if (phase < 0.77) { // Cuarto Menguante (aprox 0.75)
      this.nombreFase = 'Cuarto Menguante';
      this.imagenFase = 'assets/moon/medialunamenguante-removebg.png';
    } 
    else {
      this.nombreFase = 'Menguante';
      this.imagenFase = 'assets/moon/mediocuartoluna-removebg.png'; 
      // Asumí que 'mediocuartoluna' es tu imagen para la menguante final
    }
  }
}