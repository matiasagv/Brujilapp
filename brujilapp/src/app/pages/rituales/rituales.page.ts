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

  categorias = [
    {
      nombre: 'Amor',
      icono: 'heart',
      color: 'danger', 
      hechizos: [
        { 
          titulo: 'Vela de Miel y Lavanda (Armonía)', 
          materiales: 'Vela rosa, miel, lavanda seca, plato blanco.', 
          proceso: 'Unge la vela con miel usando tus dedos de arriba hacia abajo. Luego, ruédala sobre la lavanda seca para que se pegue.', 
          ritual: 'Enciéndela un viernes. Mientras miras la llama, visualiza una luz rosa llenando tu hogar y di: "Que el amor dulce llegue y se quede".' 
        },
        { 
          titulo: 'Amarre Suave con Sigilo', 
          materiales: 'Vela roja, 3 clavos de olor, papel, bolígrafo rojo.', 
          proceso: 'Dibuja un sigilo de unión en el papel y ponlo bajo el plato. Clava los 3 clavos en la vela roja formando un triángulo.', 
          ritual: 'Enciende la vela y concéntrate en la llama. Di: "Como estos clavos penetran la cera, que el amor penetre tu corazón. Así es y así será".' 
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
          materiales: 'Vela blanca, ajo machacado, sal gruesa, aceite de oliva.', 
          proceso: 'Mezcla el ajo machacado con sal y un poco de aceite. Viste la vela blanca con esta mezcla desde la base hacia la mecha (expulsar).', 
          ritual: 'Al encenderla, visualiza un muro de fuego blanco alrededor de tu casa. Di: "Aquí solo entra la luz, todo mal se quema y se va".' 
        },
        { 
          titulo: 'Sigilo de Romero', 
          materiales: 'Ramitas de romero fresco, hilo rojo.', 
          proceso: 'Toma dos ramas de romero y crúzalas formando una X. Átalas fuerte en el centro con el hilo rojo haciendo 3 nudos.', 
          ritual: 'Cuelga este amuleto detrás de tu puerta principal diciendo: "Romero santo, romero bendito, protege esta casa de todo conflicto".' 
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
          materiales: 'Vela verde, clavo de olor, canela en polvo, palillo.', 
          proceso: 'Con el palillo, talla el símbolo $ o la runa Fehu en la vela. Introduce 7 clavos de olor en los trazos de la talla.', 
          ritual: 'Espolvorea la canela sobre la llama (con cuidado) para que chispee y di: "Dinero ven, dinero crece, el oro en mis manos aparece".' 
        },
        { 
          titulo: 'Sahumerio Abrecaminos', 
          materiales: 'Carbón litúrgico, romero seco, cáscara de naranja seca.', 
          proceso: 'Enciende el carbón en un cuenco resistente al calor. Agrega el romero y la cáscara de naranja hasta que salga humo.', 
          ritual: 'Pasa el humo por tu billetera, tus manos y la puerta de tu negocio visualizando puertas doradas abriéndose para ti.' 
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
          materiales: 'Frasco de vidrio, aceite de cocina, maíz, lentejas, mecha flotante.', 
          proceso: 'Llena el fondo del frasco con capas de maíz y lentejas. Cubre con aceite y coloca la mecha flotante encima.', 
          ritual: 'Enciéndela los jueves en tu cocina. Agradece por los alimentos que tienes y pide que nunca falte el sustento en tu mesa.' 
        }
      ]
    },
    {
      nombre: 'Limpieza',
      icono: 'water',
      color: 'tertiary', 
      hechizos: [
        { 
          titulo: 'Vela de limpieza', 
          materiales: 'Vela negra(limpieza total), aceite de ruda (o oliva), romero, lavanda, sal gruesa.', 
          proceso: 'Anota tu nombre y apellido de la punta a la base, para alejar toda negatividad enviada a ti, después de ello, pasalo por todo tu cuerpo, intencionando y sintiendo como la energía negativa se va hacia la vela, despues intenciona los ingredientes a ocupar, puedes ocuparlo tanto para el circulo, o para que este untada junto a la vela, no te olvides del circulo de protección con la Sal.', 
          ritual: 'Enciéndela en un lugar seguro y di: "Quemo lo denso, rompo el bloqueo, mis caminos se abren según mi deseo". Deja que se consuma completamente, observa el proceso, la direccion de la mecha, el resto de vela.' 
        },
        { 
          titulo: 'Sahumerio fuerte', 
          materiales: 'Ají seco, carbón, ruda y romero seco.', 
          proceso: 'Abre TODAS las ventanas. idealmente coloca un cuenco o algo bajo seguro que te pueda llegar el humo directamente a ti, Enciende el carbón y pon el ají seco junto con la ruda y romero. El humo será picante, recomiendo no abrir los ojos en ese momento', 
          ritual: 'Siente como se va toda energia negativa, como se crea una barrera energtica que te protege en el proceso, expulsando presencias o influencias intrusas' 
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
          materiales: 'Vela blanca, vaso de agua limpia, un cigarro o puro, flores blancas.', 
          proceso: 'Limpia su altar. Coloca el agua fresca y las flores. Enciende la vela blanca frente a su imagen.', 
          ritual: 'Enciende el cigarro, da tres caladas y sopla el humo hacia la imagen (respetuosamente). Di: "Santísima, cubre mi espalda y guía mis pasos. Gracias por tu protección".' 
        },
        { 
          titulo: 'Llamado a Hécate (Strophalos)', 
          materiales: 'Vela negra, llave antigua, 3 dientes de ajo, papel.', 
          proceso: 'Dibuja el Strophalos (rueda de Hécate) en el papel. Ponlo bajo la vela negra. Rodea la vela con los 3 ajos y la llave.', 
          ritual: 'En la noche oscura, enciende la vela y llama: "Hécate, guardiana de la encrucijada, abre el camino y muéstrame la verdad oculta".' 
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
          materiales: 'Vela negra/roja (reversible), ají en polvo, aceite de dominio.', 
          proceso: 'Corta un poco la base de la vela para liberar la mecha de abajo (voltear). Talla el nombre de quien te ataca al revés.', 
          ritual: 'Viste con aceite y ají. Enciéndela por la parte cortada (la nueva mecha) y di: "No te deseo mal, solo te devuelvo lo que es tuyo multiplicado por tres".' 
        },
        { 
          titulo: 'Espejo de Retorno', 
          materiales: 'Vela blanca, espejo pequeño, sal negra.', 
          proceso: 'Haz un círculo de sal negra. Pon el espejo en el centro mirando hacia arriba. Pon la vela sobre el espejo.', 
          ritual: 'Enciende la vela y di: "Fuego sagrado, refleja el daño. Lo que me envías, en este espejo rebota y a su dueño regresa".' 
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
          materiales: 'Vela negra, pimienta negra, hilo negro grueso.', 
          proceso: 'Escribe el nombre del chismoso en la vela. Úngela con aceite y cúbrela de pimienta. Enrolla el hilo negro alrededor apretando fuerte.', 
          ritual: 'Mientras atas el hilo di: "Ato tu lengua, ato tu maldad. De mí no hablarás, silencio guardarás". Deja que la vela selle el hilo.' 
        },
        { 
          titulo: 'Ritual del Clavo Ardiente', 
          materiales: 'Vela roja, papel pequeño, 1 clavo de olor grande.', 
          proceso: 'Escribe el nombre de la persona en el papelito. Envuélvelo apretado alrededor del clavo de olor.', 
          ritual: 'Sostén el clavo con unas pinzas sobre la llama de la vela hasta que el papel se queme y el clavo se caliente. Di: "Como arde este fuego, arde tu voluntad de obedecerme".' 
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