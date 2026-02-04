import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-libro-sombras',
  templateUrl: './libro-sombras.page.html',
  styleUrls: ['./libro-sombras.page.scss'],
})
export class LibroSombrasPage implements OnInit {
  nuevoHechizo: string = '';
  entradas: string[] = [];

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.cargarEntradas();
  }

  async guardarEntrada() {
    if (this.nuevoHechizo) {
      this.entradas.push(this.nuevoHechizo);
      await this.storage.set('mi_libro_sombras', this.entradas);
      this.nuevoHechizo = ''; // Limpiar el campo
    }
  }

  async cargarEntradas() {
    const guardado = await this.storage.get('mi_libro_sombras');
    if (guardado) {
      this.entradas = guardado;
    }
  }
}
