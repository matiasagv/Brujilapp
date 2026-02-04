import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
// IMPORTANTE: Importamos los iconos manualmente para asegurar que se vean
import { addIcons } from 'ionicons';
import { arrowUndoOutline, trashOutline, save, createOutline, brushOutline } from 'ionicons/icons';

@Component({
  selector: 'app-libro-sombras',
  templateUrl: './libro-sombras.page.html',
  styleUrls: ['./libro-sombras.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LibroSombrasPage implements OnInit, AfterViewInit {

  @ViewChild('canvas', { static: false }) canvas!: ElementRef;
  
  modo: string = 'escribir';
  nuevoHechizo: string = '';
  entradas: any[] = [];
  
  // Variables dibujo
  drawing = false;
  ctx: any;
  
  // Historial para deshacer
  history: ImageData[] = [];

  constructor(
    private storage: Storage, 
    private toastController: ToastController,
    private platform: Platform
  ) {
    // Registramos los iconos para que no salgan vacíos
    addIcons({ arrowUndoOutline, trashOutline, save, createOutline, brushOutline });
  }

  async ngOnInit() {
    await this.storage.create();
    this.cargarEntradas();
  }

  ngAfterViewInit() {}

  cambiarModo(nuevoModo: string) {
    this.modo = nuevoModo;
    if (this.modo === 'dibujar') {
      setTimeout(() => {
        this.configurarCanvas();
      }, 100);
    }
  }

  configurarCanvas() {
    if (!this.canvas) return;
    const canvasEl = this.canvas.nativeElement;
    
    // TRUCO: Si el ancho ya está bien configurado, NO reiniciamos el canvas.
    // Esto evita que se borre el dibujo si cambias de pestaña y vuelves.
    if (canvasEl.width === canvasEl.offsetWidth && canvasEl.height === canvasEl.offsetHeight) {
      // Solo recuperamos el contexto por si acaso, pero no borramos nada
      this.ctx = canvasEl.getContext('2d');
      this.restaurarEstiloPincel();
      return; 
    }

    // Si es la primera vez o cambió el tamaño, configuramos todo de cero
    canvasEl.width = canvasEl.offsetWidth;
    canvasEl.height = canvasEl.offsetHeight;
    
    this.ctx = canvasEl.getContext('2d');
    this.restaurarEstiloPincel();
    
    // Solo reiniciamos historial si el canvas se reinició de verdad
    this.history = [];
  }

  restaurarEstiloPincel() {
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#3e2723';
  }

  // --- LÓGICA DE DESHACER ---
  
  saveState() {
    if (!this.canvas || !this.ctx) return;
    const canvasEl = this.canvas.nativeElement;
    
    // Guardamos la foto actual del lienzo
    const imagenData = this.ctx.getImageData(0, 0, canvasEl.width, canvasEl.height);
    this.history.push(imagenData);
    
    // Limitamos a 20 pasos para no saturar memoria
    if (this.history.length > 20) {
      this.history.shift();
    }
  }

  deshacer() {
    if (this.history.length > 0 && this.ctx) {
      // Sacamos el último estado guardado
      const ultimoEstado = this.history.pop();
      if (ultimoEstado) {
        this.ctx.putImageData(ultimoEstado, 0, 0);
      }
    }
  }

  // EVENTOS DE DIBUJO
  startDrawing(ev: any) {
    // 1. Guardamos el estado ANTES de hacer el trazo
    this.saveState();
    
    this.drawing = true;
    const { x, y } = this.getCoordinates(ev);
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
  }

  moved(ev: any) {
    if (!this.drawing) return;
    const { x, y } = this.getCoordinates(ev);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  endDrawing() {
    this.drawing = false;
  }

  getCoordinates(ev: any) {
    const canvasEl = this.canvas.nativeElement;
    const rect = canvasEl.getBoundingClientRect();
    let x, y;

    if (ev.touches && ev.touches.length > 0) {
      x = ev.touches[0].clientX - rect.left;
      y = ev.touches[0].clientY - rect.top;
    } else {
      x = ev.clientX - rect.left;
      y = ev.clientY - rect.top;
    }
    return { x, y };
  }

  limpiarLienzo() {
    if (!this.canvas) return;
    this.saveState(); // Guardamos por si se arrepiente de borrar todo
    
    const canvasEl = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }

  // GUARDAR EN BD
  async guardarEntrada() {
    let nuevaEntrada = null;

    if (this.modo === 'escribir' && this.nuevoHechizo.trim().length > 0) {
      nuevaEntrada = { tipo: 'texto', contenido: this.nuevoHechizo };
      this.nuevoHechizo = ''; 
    } 
    else if (this.modo === 'dibujar' && this.canvas) {
      const canvasEl = this.canvas.nativeElement;
      const imagenData = canvasEl.toDataURL('image/png');
      
      // Pequeña validación: no guardar lienzos vacíos (opcional)
      nuevaEntrada = { tipo: 'imagen', contenido: imagenData };
      
      this.limpiarLienzo();
      this.history = []; // Limpiamos historial tras guardar
    }

    if (nuevaEntrada) {
      this.entradas.unshift(nuevaEntrada);
      await this.storage.set('mi_libro_sombras_v2', this.entradas);
      this.mostrarMensaje('✨ Sellado en el Grimorio ✨');
    }
  }

  async cargarEntradas() {
    const guardado = await this.storage.get('mi_libro_sombras_v2');
    if (guardado) this.entradas = guardado;
  }

  async mostrarMensaje(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 2000,
      color: 'dark',
      position: 'bottom',
      cssClass: 'magic-toast'
    });
    toast.present();
  }
}