import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.page.html',
  styleUrls: ['./temas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class TemasPage implements OnInit {
  
  segmentoActual: string = 'mayores';

  // --- ARCANOS MAYORES (Datos de texto) ---
  arcanosMayores = [
    { numero: '0', romano: '0', nombre: 'El Loco', palabra: 'Inicios • Libertad • Espontaneidad' },
    { numero: '1', romano: 'I', nombre: 'El Mago', palabra: 'Manifestación • Poder • Acción' },
    { numero: '2', romano: 'II', nombre: 'La Sacerdotisa', palabra: 'Intuición • Misterio • Subconsciente' },
    { numero: '3', romano: 'III', nombre: 'La Emperatriz', palabra: 'Fertilidad • Abundancia • Naturaleza' },
    { numero: '4', romano: 'IV', nombre: 'El Emperador', palabra: 'Estructura • Autoridad • Estabilidad' },
    { numero: '5', romano: 'V', nombre: 'El Sumo Sacerdote', palabra: 'Tradición • Creencias • Guía' },
    { numero: '6', romano: 'VI', nombre: 'Los Enamorados', palabra: 'Amor • Decisiones • Armonía' },
    { numero: '7', romano: 'VII', nombre: 'El Carro', palabra: 'Control • Voluntad • Victoria' },
    { numero: '8', romano: 'VIII', nombre: 'La Fuerza', palabra: 'Coraje • Compasión • Paciencia' },
    { numero: '9', romano: 'IX', nombre: 'El Ermitaño', palabra: 'Introspección • Soledad • Guía Interior' },
    { numero: '13', romano: 'XIII', nombre: 'La Muerte', palabra: 'Transformación • Finales • Cambios' },
    // ... Puedes completar el resto tú mismo
  ];

  // --- ARCANOS MENORES ---
  arcanosMenores = [
    { palo: 'Copas', nombre: 'As de Copas', palabra: 'Nuevos Sentimientos • Amor Puro' },
    { palo: 'Copas', nombre: 'Dos de Copas', palabra: 'Conexión • Pareja • Unión' },
    { palo: 'Bastos', nombre: 'As de Bastos', palabra: 'Inspiración • Chispa Creativa' },
    { palo: 'Bastos', nombre: 'Tres de Bastos', palabra: 'Expansión • Viajes • Futuro' },
    { palo: 'Espadas', nombre: 'As de Espadas', palabra: 'Claridad Mental • Verdad' },
    { palo: 'Espadas', nombre: 'Diez de Espadas', palabra: 'Final Doloroso • Traición' },
    { palo: 'Oros', nombre: 'As de Oros', palabra: 'Oportunidad • Dinero • Semilla' },
    { palo: 'Oros', nombre: 'Rey de Oros', palabra: 'Abundancia • Seguridad • Éxito' },
  ];

  constructor() { }

  ngOnInit() {
  }

  cambiarSegmento(event: any) {
    this.segmentoActual = event.detail.value;
  }
}