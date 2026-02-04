import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-libro-sombras',
  templateUrl: './libro-sombras.page.html',
  styleUrls: ['./libro-sombras.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LibroSombrasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
