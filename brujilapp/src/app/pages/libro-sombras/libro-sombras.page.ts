import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular'; // ToastController para el mensaje
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-libro-sombras',
  templateUrl: './libro-sombras.page.html',
  styleUrls: ['./libro-sombras.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LibroSombrasPage implements OnInit {

  nuevoHechizo: string = '';
  entradas: string[] = [];

  constructor(private storage: Storage, private toastController: ToastController) {}

  async ngOnInit() {
    // 1. Iniciamos la base de datos al entrar
    await this.storage.create();
    // 2. Cargamos lo que tenías escrito de antes
    this.cargarEntradas();
  }

  async guardarEntrada() {
    // Verificamos que no esté vacío (eliminando espacios en blanco extra)
    if (this.nuevoHechizo.trim().length > 0) {
      
      // Agregamos la entrada AL PRINCIPIO de la lista (unshift) para verla arriba
      this.entradas.unshift(this.nuevoHechizo);
      
      // Guardamos la lista actualizada en la memoria del celular/navegador
      await this.storage.set('mi_libro_sombras', this.entradas);

      // Limpiamos el campo de escritura
      this.nuevoHechizo = '';

      // Mostramos un mensaje elegante de confirmación
      this.mostrarMensaje('✨ Sellado en el Grimorio ✨');
    }
  }

  async cargarEntradas() {
    // Pedimos a la memoria los datos guardados bajo la llave 'mi_libro_sombras'
    const guardado = await this.storage.get('mi_libro_sombras');
    if (guardado) {
      this.entradas = guardado;
    }
  }

  // Función auxiliar para mostrar el mensajito flotante
  async mostrarMensaje(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000, // Dura 2 segundos
      color: 'dark',  // Color oscuro para combinar
      position: 'bottom',
      cssClass: 'magic-toast' // Clase por si queremos darle estilo extra luego
    });
    toast.present();
  }
}