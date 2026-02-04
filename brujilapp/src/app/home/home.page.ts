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

  nombreFase: string = 'Calculando energía...';
  // Imagen por defecto (mientras carga)
  imagenFase: string = 'assets/moon/lunallena-removebg.png';

  constructor() {}

  ngOnInit() {
    this.calcularFaseLunar();
  }

  calcularFaseLunar() {
    const date = new Date();
    
    // Algoritmo astronómico simplificado
    const synodic = 29.53058867; // Ciclo lunar en días
    const msPerDay = 86400000;
    const baseDate = new Date('2000-01-06T18:14:00Z'); // Referencia de Luna Nueva
    
    const diff = date.getTime() - baseDate.getTime();
    const phaseRatio = (diff / msPerDay) / synodic;
    const phase = phaseRatio - Math.floor(phaseRatio); // Valor entre 0.0 y 0.99

    // --- MAPEO DE TUS IMÁGENES EXACTAS ---

    if (phase < 0.03 || phase > 0.97) {
      this.nombreFase = 'Luna Nueva';
      this.imagenFase = 'assets/moon/lunanueva-removebg.png';
    } 
    else if (phase < 0.23) {
      this.nombreFase = 'Creciente';
      this.imagenFase = 'assets/moon/lunacreciente-removebg.png';
    } 
    else if (phase < 0.27) { // Cuarto Creciente
      this.nombreFase = 'Cuarto Creciente';
      this.imagenFase = 'assets/moon/primercuartodeluna-removebg.png';
    } 
    else if (phase < 0.47) {
      this.nombreFase = 'Gibosa Creciente';
      this.imagenFase = 'assets/moon/lunagibosacreciente-removebg.png';
    } 
    else if (phase < 0.53) { // Luna Llena
      this.nombreFase = 'Luna Llena';
      this.imagenFase = 'assets/moon/lunallena-removebg.png';
    } 
    else if (phase < 0.73) {
      this.nombreFase = 'Gibosa Menguante';
      this.imagenFase = 'assets/moon/lunagibosamenguante-removebg.png';
    } 
    else if (phase < 0.77) { // Cuarto Menguante
      this.nombreFase = 'Cuarto Menguante';
      this.imagenFase = 'assets/moon/medialunamenguante-removebg.png';
    } 
    else {
      this.nombreFase = 'Menguante';
      // Asumo que 'mediocuartoluna' es la última fase antes de nueva
      this.imagenFase = 'assets/moon/mediocuartoluna-removebg.png'; 
    }
  }
}