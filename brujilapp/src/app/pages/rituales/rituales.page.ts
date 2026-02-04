import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-rituales',
  templateUrl: './rituales.page.html',
  styleUrls: ['./rituales.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RitualesPage implements OnInit {

  // LISTA DE RITUALES
  categorias = [
    {
      nombre: 'Protección',
      icono: 'shield-checkmark', // Icono de Ionic
      color: 'warning', // Dorado
      hechizos: [
        {
          titulo: 'Círculo de Sal',
          materiales: 'Sal de mar gruesa, 1 vela blanca.',
          pasos: 'Dibuja un círculo de sal alrededor de tu cama o altar. Enciende la vela en el centro y visualiza una luz blanca que repele cualquier energía densa. Di: "Solo la luz entra aquí".'
        },
        {
          titulo: 'Amuleto de Turmalina',
          materiales: 'Una piedra de turmalina negra, incienso de ruda.',
          pasos: 'Pasa la piedra por el humo del incienso 7 veces. Llévala siempre en tu bolsillo izquierdo para repeler envidias.'
        }
      ]
    },
    {
      nombre: 'Amor & Vínculos',
      icono: 'heart',
      color: 'danger', // Rojo
      hechizos: [
        {
          titulo: 'Baño de Dulzura',
          materiales: 'Miel, pétalos de rosa roja, canela en rama.',
          pasos: 'Hierve los ingredientes en 2 litros de agua. Deja entibiar. Después de tu ducha normal, vierte esta mezcla desde el cuello hacia abajo pensando en atraer amor propio y externo.'
        }
      ]
    },
    {
      nombre: 'Dinero & Abundancia',
      icono: 'cash',
      color: 'success', // Verde
      hechizos: [
        {
          titulo: 'El Laurel en la Billetera',
          materiales: '3 hojas de laurel secas, 1 billete de curso legal.',
          pasos: 'Pon las hojas de laurel junto al billete en tu billetera. El laurel es símbolo de triunfo y el billete actúa como imán. Cámbialas cada luna nueva.'
        },
        {
          titulo: 'Vela de Jueves',
          materiales: 'Vela verde, aceite de oliva.',
          pasos: 'Un jueves, unge la vela con aceite desde la base hacia la mecha. Enciéndela y pide apertura de caminos laborales.'
        }
      ]
    },
    {
      nombre: 'Limpieza Energética',
      icono: 'water',
      color: 'tertiary', // Azul
      hechizos: [
        {
          titulo: 'Sahumerio de Salvia',
          materiales: 'Atado de salvia blanca o palo santo.',
          pasos: 'Enciende el atado y recorre tu casa desde la habitación más lejana hasta la puerta de entrada, haciendo espirales con el humo en cada esquina.'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}