import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, shieldCheckmark, cash, infinite, water, flame, refreshCircle, lockClosed, sparkles, close } from 'ionicons/icons';

@Component({
  selector: 'app-rituales',
  templateUrl: './rituales.page.html',
  styleUrls: ['./rituales.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RitualesPage implements OnInit {

  isModalOpen: boolean = false;
  categoriaSeleccionada: any = null;

  // LISTA ACTUALIZADA: ENFOQUE EN VELAS Y HIERBAS
  categorias = [
    {
      nombre: 'Amor',
      icono: 'heart',
      color: 'danger', 
      hechizos: [
        { 
          titulo: 'Vela de Miel y Lavanda (Armonía)', 
          materiales: 'Vela rosa, miel, lavanda seca.', 
          pasos: 'Unge la vela con miel y ruédala sobre la lavanda. Enciéndela un viernes pidiendo paz y amor dulce en tu hogar.' 
        },
        { 
          titulo: 'Amarre Suave con Sigilo', 
          materiales: 'Vela roja, clavo de olor, papel.', 
          pasos: 'Dibuja un sigilo de unión en el papel. Ponlo bajo la vela roja. Clava 3 clavos de olor en la vela formando un triángulo y enciende.' 
        }
      ]
    },
    {
      nombre: 'Protección',
      icono: 'shield-checkmark',
      color: 'medium', 
      hechizos: [
        { 
          titulo: 'Vela Muralla de Ajo', 
          materiales: 'Vela blanca, ajo machacado, sal.', 
          pasos: 'Machaca el ajo con sal. Viste la vela blanca con esta mezcla de abajo hacia arriba. Al encenderla, visualiza un escudo impenetrable.' 
        },
        { 
          titulo: 'Sigilo de Romero', 
          materiales: 'Ramitas de romero, hilo rojo.', 
          pasos: 'Ata las ramas formando una cruz o sigilo de protección. Cuélgalo detrás de la puerta principal para que nada malo entre.' 
        }
      ]
    },
    {
      nombre: 'Dinero',
      icono: 'cash',
      color: 'success', 
      hechizos: [
        { 
          titulo: 'Vela Verde de Activación', 
          materiales: 'Vela verde, clavo de olor, canela.', 
          pasos: 'Talla el símbolo $ o la runa Fehu en la vela. Introduce 7 clavos de olor en la talla y espolvorea canela mientras arde.' 
        },
        { 
          titulo: 'Sahumerio Abrecaminos', 
          materiales: 'Carbón, romero seco, cáscara de naranja.', 
          pasos: 'Quema el romero y la naranja sobre el carbón. Pasa el humo por tu billetera y negocio visualizando puertas abiertas.' 
        }
      ]
    },
    {
      nombre: 'Abundancia',
      icono: 'infinite',
      color: 'warning', 
      hechizos: [
        { 
          titulo: 'Lámpara de Aceite y Granos', 
          materiales: 'Frasco, aceite, maíz, lentejas, mecha.', 
          pasos: 'Prepara una lámpara casera con granos en el fondo y aceite. Enciéndela los jueves para que nunca falte el alimento.' 
        }
      ]
    },
    {
      nombre: 'Limpieza',
      icono: 'water',
      color: 'tertiary', 
      hechizos: [
        { 
          titulo: 'Vela Destrancadera', 
          materiales: 'Vela morada, ruda, sal gruesa.', 
          pasos: 'Pasa la vela por todo tu cuerpo sin tocar la piel. Luego úngela con aceite y pégale la ruda. Enciéndela para quemar lo denso.' 
        },
        { 
          titulo: 'Sahumerio Fuerte (Ají)', 
          materiales: 'Ají seco, carbón, ruda.', 
          pasos: 'CUIDADO: El humo es picante. Quema el ají seco con ruda y recorre la casa con ventanas abiertas para expulsar larvas y parásitos.' 
        }
      ]
    },
    {
      nombre: 'Devoción',
      icono: 'flame', 
      color: 'warning', 
      hechizos: [
        { 
          titulo: 'Luz a la Santa Muerte', 
          materiales: 'Vela blanca, vaso de agua, cigarro/puro.', 
          pasos: 'Ofrece la luz de la vela blanca agradeciendo su protección. Sopla humo de tabaco sobre su imagen y pídele que cubra tu espalda.' 
        },
        { 
          titulo: 'Llamado a Hécate (Strophalos)', 
          materiales: 'Vela negra, llave antigua, ajo.', 
          pasos: 'Dibuja el sigilo Strophalos (rueda de Hécate) en un papel. Ponlo bajo la vela negra rodeada de dientes de ajo en una encrucijada o altar.' 
        }
      ]
    },
    {
      nombre: 'Volteo',
      icono: 'refresh-circle', 
      color: 'dark', 
      hechizos: [
        { 
          titulo: 'Vela Reversible con Ají', 
          materiales: 'Vela roja/negra (doble color), ají en polvo.', 
          pasos: 'Corta la punta inferior de la vela para "darle la vuelta" a la mecha. Vístela con aceite y ají. Pide que todo daño vuelva a su origen x3.' 
        },
        { 
          titulo: 'Espejo de Retorno', 
          materiales: 'Vela blanca, espejo pequeño.', 
          pasos: 'Enciende la vela frente al espejo. Di: "Lo que me envías, en este espejo rebota y a ti regresa". Deja que se consuma.' 
        }
      ]
    },
    {
      nombre: 'Dominio',
      icono: 'lock-closed', 
      color: 'dark', 
      hechizos: [
        { 
          titulo: 'Vela Tapa Bocas', 
          materiales: 'Vela negra, pimienta, hilo negro.', 
          pasos: 'Escribe el nombre de quien habla mal de ti en la vela. Úngela con pimienta y átala con el hilo negro para silenciar chismes.' 
        },
        { 
          titulo: 'Ritual del Clavo Ardiente', 
          materiales: 'Vela roja, papel, 1 clavo de olor.', 
          pasos: 'Escribe el nombre en papel. Envuélvelo alrededor del clavo de olor. Quémalo con la llama de la vela diciendo: "Tu voluntad es mía".' 
        }
      ]
    }
  ];

  constructor() { 
    addIcons({ heart, shieldCheckmark, cash, infinite, water, flame, refreshCircle, lockClosed, sparkles, close });
  }

  ngOnInit() {
  }

  abrirCategoria(cat: any) {
    this.categoriaSeleccionada = cat;
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
    this.categoriaSeleccionada = null;
  }

}