import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import * as Astronomy from 'astronomy-engine';
import { addIcons } from 'ionicons';
import { planet, refresh, calendarOutline, timeOutline, eye, heart, flame, chatbubbles } from 'ionicons/icons';

@Component({
  selector: 'app-carta-natal',
  templateUrl: './carta-natal.page.html',
  styleUrls: ['./carta-natal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class CartaNatalPage implements OnInit {

  nombre: string = '';
  fechaNacimiento: string = '';
  horaNacimiento: string = '';
  latitud: number = 0;
  longitud: number = 0;
  resultado: any = null;

  ciudades = [
    { nombre: 'Concepción, Chile', lat: -36.8201, lon: -73.0444 },
    { nombre: 'Santiago, Chile', lat: -33.4489, lon: -70.6693 },
    { nombre: 'Valparaíso, Chile', lat: -33.0472, lon: -71.6127 },
    { nombre: 'Antofagasta, Chile', lat: -23.6509, lon: -70.3975 },
    { nombre: 'Buenos Aires, Arg', lat: -34.6037, lon: -58.3816 },
    { nombre: 'Ciudad de México', lat: 19.4326, lon: -99.1332 },
    { nombre: 'Madrid, España', lat: 40.4168, lon: -3.7038 },
    { nombre: 'Manual (Ingresar Coordenadas)', lat: 0, lon: 0 }
  ];

  signosZodiaco = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'];

  constructor() {
    addIcons({ planet, refresh, calendarOutline, timeOutline, eye, heart, flame, chatbubbles });
  }

  ngOnInit() {}

  seleccionarCiudad(event: any) {
    const ciudad = event.detail.value;
    if (ciudad && ciudad.nombre !== 'Manual') {
      this.latitud = ciudad.lat;
      this.longitud = ciudad.lon;
    } else {
      this.latitud = 0;
      this.longitud = 0;
    }
  }

  calcularCartaReal() {
    if (!this.fechaNacimiento || !this.horaNacimiento) return;

    const fechaString = this.fechaNacimiento.split('T')[0]; 
    const horaString = this.horaNacimiento.split('T')[1] ? this.horaNacimiento.split('T')[1].slice(0,5) : this.horaNacimiento;
    const fechaFinal = new Date(`${fechaString}T${horaString}:00`);

    // 1. SOL (Esencia)
    const solData = this.calcularPlaneta(Astronomy.Body.Sun, fechaFinal);
    
    // 2. LUNA (Emociones)
    const lunaData = this.calcularPlaneta(Astronomy.Body.Moon, fechaFinal);

    // 3. MERCURIO (Mente/Comunicación)
    const mercurioData = this.calcularPlaneta(Astronomy.Body.Mercury, fechaFinal);

    // 4. VENUS (Amor/Deseo)
    const venusData = this.calcularPlaneta(Astronomy.Body.Venus, fechaFinal);

    // 5. MARTE (Acción/Fuerza)
    const marteData = this.calcularPlaneta(Astronomy.Body.Mars, fechaFinal);

    // 6. ASCENDENTE (La Máscara) - Cálculo Matemático
    const ascendenteData = this.calcularAscendente(fechaFinal, this.latitud, this.longitud);

    // Formato Fecha
    const fechaBonita = new Date(this.fechaNacimiento).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });

    this.resultado = {
      nombre: this.nombre,
      fecha: `${fechaBonita} a las ${horaString}`,
      sol: solData,
      luna: lunaData,
      ascendente: ascendenteData,
      mercurio: mercurioData,
      venus: venusData,
      marte: marteData
    };
  }

  // Función auxiliar para planetas
  calcularPlaneta(cuerpo: any, fecha: Date) {
    const vector = Astronomy.GeoVector(cuerpo, fecha, true);
    const ecliptica = Astronomy.Ecliptic(vector);
    return this.gradosASigno(ecliptica.elon);
  }

  // CÁLCULO DEL ASCENDENTE (Trigonometría Esférica)
  calcularAscendente(fecha: Date, lat: number, lon: number) {
    // 1. Obtener Hora Sideral de Greenwich (GMST)
    const gmst = Astronomy.SiderealTime(fecha);
    
    // 2. Calcular Hora Sideral Local (LST) sumando longitud (en horas)
    // Longitud en grados / 15 = Longitud en horas
    let lst = gmst + (lon / 15.0);
    if (lst < 0) lst += 24;
    if (lst > 24) lst -= 24;

    // 3. Calcular RAMC (Ascensión Recta del Medio Cielo) en grados
    const ramc = lst * 15;

    // 4. Oblicuidad de la eclíptica (aprox 23.44 grados)
    const eps = 23.4393;

    // Conversión a radianes para Math
    const rad = (deg: number) => deg * Math.PI / 180;
    const deg = (rad: number) => rad * 180 / Math.PI;

    // FÓRMULA DEL ASCENDENTE:
    // tan(Asc) = cos(RAMC) / ( -sin(RAMC) * cos(eps) - tan(lat) * sin(eps) )
    const num = Math.cos(rad(ramc));
    const den = -Math.sin(rad(ramc)) * Math.cos(rad(eps)) - Math.tan(rad(lat)) * Math.sin(rad(eps));

    let ascRad = Math.atan2(num, den);
    let ascDeg = deg(ascRad);

    // Ajuste para rango 0-360
    if (ascDeg < 0) ascDeg += 360;

    return this.gradosASigno(ascDeg);
  }

  gradosASigno(grados: number): any {
    let g = grados % 360;
    if (g < 0) g += 360;
    const index = Math.floor(g / 30);
    const nombre = this.signosZodiaco[index];
    const gradoEnSigno = Math.floor(g % 30);
    
    let elemento = '';
    if ([0, 4, 8].includes(index)) elemento = 'Fuego 🔥'; 
    if ([1, 5, 9].includes(index)) elemento = 'Tierra 🌿'; 
    if ([2, 6, 10].includes(index)) elemento = 'Aire 💨'; 
    if ([3, 7, 11].includes(index)) elemento = 'Agua 💧'; 

    return { nombre, grado: gradoEnSigno, elemento };
  }
}