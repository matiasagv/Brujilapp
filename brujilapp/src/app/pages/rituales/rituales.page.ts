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

  // Variables para el Modal
  isModalOpen: boolean = false;
  categoriaSeleccionada: any = null;

  // LISTA DE CATEGORÍAS (ICONOS)
  categorias = [
    {
      nombre: 'Amor',
      icono: 'heart',
      color: 'danger', // Rojo
      hechizos: [
        { titulo: 'Baño de Dulzura', materiales: 'Miel, canela, rosas rojas.', pasos: 'Hierve todo en 2L de agua. Úsalo tras tu ducha visualizando amor.' },
        { titulo: 'Endulzamiento Suave', materiales: 'Azúcar, papel rosa, vela rosa.', pasos: 'Escribe el nombre, cúbrelo de azúcar y enciende la vela pidiendo armonía.' }
      ]
    },
    {
      nombre: 'Protección',
      icono: 'shield-checkmark',
      color: 'medium', // Gris/Plata
      hechizos: [
        { titulo: 'Círculo de Sal', materiales: 'Sal gruesa.', pasos: 'Rodea tu cama o casa con sal visualizando una muralla de fuego azul.' },
        { titulo: 'Escudo de Espejo', materiales: 'Visualización.', pasos: 'Imagina que un espejo te rodea mirando hacia afuera, rebotando todo mal.' }
      ]
    },
    {
      nombre: 'Dinero',
      icono: 'cash',
      color: 'success', // Verde
      hechizos: [
        { titulo: 'Imán de Billetera', materiales: 'Laurel, billete, pirita.', pasos: 'Guarda una hoja de laurel y una pirita en tu billetera junto al dinero.' },
        { titulo: 'Lluvia de Arroz', materiales: 'Arroz, monedas.', pasos: 'Pon un plato con arroz y 7 monedas en la entrada de tu casa o negocio.' }
      ]
    },
    {
      nombre: 'Abundancia',
      icono: 'infinite', // Icono de infinito
      color: 'warning', // Dorado
      hechizos: [
        { titulo: 'Frasco de la Abundancia', materiales: 'Lentejas, maíz, arroz, monedas.', pasos: 'Llena un frasco por capas con las semillas y pon las monedas arriba. Déjalo en la cocina.' }
      ]
    },
    {
      nombre: 'Limpieza',
      icono: 'water',
      color: 'tertiary', // Azul
      hechizos: [
        { titulo: 'Sahumerio de Ruda', materiales: 'Ruda seca, carbón.', pasos: 'Ahúma toda la casa desde el fondo hacia la puerta para sacar larvas astrales.' },
        { titulo: 'Baño de Sal y Vinagre', materiales: 'Sal de mar, vinagre blanco.', pasos: 'Mezcla en agua y límpiate del cuello abajo para cortar la negatividad.' }
      ]
    },
    {
      nombre: 'Devoción',
      icono: 'flame', 
      color: 'warning', // Naranja/Dorado
      hechizos: [
        { titulo: 'Ofrenda a Hécate', materiales: 'Ajo, llaves, vino.', pasos: 'En una encrucijada o altar, deja las ofrendas en luna nueva pidiendo guía.' },
        { titulo: 'Altar Diario', materiales: 'Vela blanca, vaso de agua.', pasos: 'Enciende la vela y cambia el agua cada día agradeciendo a tus guías.' }
      ]
    },
    {
      nombre: 'Volteo',
      icono: 'refresh-circle', // Flechas girando
      color: 'danger', // Rojo/Oscuro
      hechizos: [
        { titulo: 'Vela de Volteo', materiales: 'Vela negra/roja (reversibles), aceite.', pasos: 'Unge la vela de abajo hacia arriba pidiendo que todo mal vuelva a su origen.' },
        { titulo: 'Espejo Enterrado', materiales: 'Espejo pequeño.', pasos: 'Entierra un espejo mirando hacia abajo en la entrada para que el mal rebote a la tierra.' }
      ]
    },
    // NUEVA CATEGORÍA: DOMINIO (Para desespero y control)
    {
      nombre: 'Dominio',
      icono: 'lock-closed', // Candado (Atadura)
      color: 'dark', // Negro (Magia fuerte)
      hechizos: [
        { 
          titulo: 'Vela del Desespero', 
          materiales: 'Vela roja, alfiler, aceite de dominio.', 
          pasos: 'Talla el nombre de la persona 7 veces en la vela. Úngela pensando en que te busca desesperadamente. Di: "No tendrás paz hasta que a mis pies vengas a parar".' 
        },
        { 
          titulo: 'Ritual del Pie Izquierdo', 
          materiales: 'Bolígrafo rojo.', 
          pasos: 'Escribe el nombre de la persona en la planta de tu pie izquierdo. Zapatea 3 veces fuerte contra el suelo diciendo: "Te domino, te llamo y te traigo a mí ahora mismo".' 
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  // ABRIR EL MODAL CON LOS HECHIZOS
  abrirCategoria(cat: any) {
    this.categoriaSeleccionada = cat;
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
    this.categoriaSeleccionada = null;
  }

}