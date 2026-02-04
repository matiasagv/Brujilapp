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
  isModalOpen: boolean = false;
  cartaSeleccionada: any = null;

  // --- ARCANOS MAYORES (22 Cartas) ---
  arcanosMayores = [
    { numero: '0', romano: '0', nombre: 'El Loco', palabra: 'Inicios • Fe', historia: 'El alma antes de encarnar, llena de inocencia y potencial ilimitado, dando un salto de fe.', derecho: 'Nuevos comienzos, espontaneidad, fe ciega.', reves: 'Imprudencia, riesgos innecesarios.' },
    { numero: '1', romano: 'I', nombre: 'El Mago', palabra: 'Poder • Acción', historia: 'Canaliza la energía del cielo a la tierra con todas las herramientas a su disposición.', derecho: 'Manifestación, fuerza de voluntad, habilidad.', reves: 'Manipulación, talentos ocultos.' },
    { numero: '2', romano: 'II', nombre: 'La Sacerdotisa', palabra: 'Intuición', historia: 'Guardiana de los misterios y el velo del subconsciente.', derecho: 'Intuición, sabiduría interior, misterio.', reves: 'Secretos revelados, desconexión.' },
    { numero: '3', romano: 'III', nombre: 'La Emperatriz', palabra: 'Abundancia', historia: 'La Madre Naturaleza, creadora de vida y belleza sensual.', derecho: 'Fertilidad, naturaleza, abundancia.', reves: 'Bloqueo creativo, dependencia.' },
    { numero: '4', romano: 'IV', nombre: 'El Emperador', palabra: 'Estructura', historia: 'El Padre que trae orden al caos y establece reglas.', derecho: 'Autoridad, estructura, estabilidad.', reves: 'Tiranía, rigidez, dominación.' },
    { numero: '5', romano: 'V', nombre: 'El Sumo Sacerdote', palabra: 'Tradición', historia: 'El puente entre la humanidad y lo divino a través de las creencias.', derecho: 'Sabiduría espiritual, tradición, guía.', reves: 'Rebelión, hipocresía.' },
    { numero: '6', romano: 'VI', nombre: 'Los Enamorados', palabra: 'Elección', historia: 'La unión de opuestos y la elección moral desde el corazón.', derecho: 'Amor, armonía, decisiones.', reves: 'Desequilibrio, mala elección.' },
    { numero: '7', romano: 'VII', nombre: 'El Carro', palabra: 'Victoria', historia: 'El triunfo de la voluntad sobre las fuerzas opuestas.', derecho: 'Control, éxito, determinación.', reves: 'Falta de control, agresión.' },
    { numero: '8', romano: 'VIII', nombre: 'La Fuerza', palabra: 'Compasión', historia: 'Dominar a la bestia interior con suavidad, no con fuerza bruta.', derecho: 'Fuerza interior, valentía, paciencia.', reves: 'Duda, debilidad, inseguridad.' },
    { numero: '9', romano: 'IX', nombre: 'El Ermitaño', palabra: 'Introspección', historia: 'Retirarse del mundo para encontrar la luz interior.', derecho: 'Búsqueda del alma, soledad, guía.', reves: 'Aislamiento, rechazo.' },
    { numero: '10', romano: 'X', nombre: 'Rueda de Fortuna', palabra: 'Destino', historia: 'El ciclo eterno de la vida; todo cambia, nada permanece.', derecho: 'Buena suerte, karma, ciclos.', reves: 'Mala suerte, resistencia al cambio.' },
    { numero: '11', romano: 'XI', nombre: 'La Justicia', palabra: 'Verdad', historia: 'La ley de causa y efecto. Obtienes lo que mereces.', derecho: 'Justicia, equidad, verdad.', reves: 'Injusticia, deshonestidad.' },
    { numero: '12', romano: 'XII', nombre: 'El Colgado', palabra: 'Sacrificio', historia: 'Ver el mundo al revés para ganar una nueva perspectiva.', derecho: 'Pausa, rendición, nueva visión.', reves: 'Estancamiento, sacrificio inútil.' },
    { numero: '13', romano: 'XIII', nombre: 'La Muerte', palabra: 'Transformación', historia: 'El fin necesario de una etapa para que nazca algo nuevo.', derecho: 'Finales, cambio, transición.', reves: 'Resistencia al cambio.' },
    { numero: '14', romano: 'XIV', nombre: 'La Templanza', palabra: 'Equilibrio', historia: 'La mezcla alquímica de opuestos para encontrar la moderación.', derecho: 'Balance, paciencia, propósito.', reves: 'Desequilibrio, exceso.' },
    { numero: '15', romano: 'XV', nombre: 'El Diablo', palabra: 'Apegos', historia: 'Las cadenas que nosotros mismos nos ponemos por miedo o deseo.', derecho: 'Sombra, adicción, materialismo.', reves: 'Liberación, romper cadenas.' },
    { numero: '16', romano: 'XVI', nombre: 'La Torre', palabra: 'Revelación', historia: 'La destrucción de estructuras falsas por un rayo de verdad.', derecho: 'Cambio repentino, caos, despertar.', reves: 'Miedo al cambio, evitar el desastre.' },
    { numero: '17', romano: 'XVII', nombre: 'La Estrella', palabra: 'Esperanza', historia: 'La calma y sanación después de la tormenta.', derecho: 'Esperanza, fe, renovación.', reves: 'Falta de fe, desesperanza.' },
    { numero: '18', romano: 'XVIII', nombre: 'La Luna', palabra: 'Ilusión', historia: 'El camino confuso a través del miedo y el subconsciente.', derecho: 'Ilusión, miedo, intuición.', reves: 'Confusión, engaño descubierto.' },
    { numero: '19', romano: 'XIX', nombre: 'El Sol', palabra: 'Éxito', historia: 'La claridad absoluta, la alegría y la vitalidad.', derecho: 'Positividad, éxito, vitalidad.', reves: 'Tristeza temporal.' },
    { numero: '20', romano: 'XX', nombre: 'El Juicio', palabra: 'Renacer', historia: 'El llamado final para evaluar el pasado y ascender.', derecho: 'Juicio, renacimiento, llamado.', reves: 'Duda, ignorar el llamado.' },
    { numero: '21', romano: 'XXI', nombre: 'El Mundo', palabra: 'Completitud', historia: 'El fin del viaje, la integración total y el logro.', derecho: 'Completitud, logro, viajes.', reves: 'Falta de cierre, atajos.' },
  ];

  // --- ARCANOS MENORES (56 Cartas Completas) ---
  arcanosMenores = [
    // BASTOS (Fuego)
    { palo: 'Bastos', nombre: 'As de Bastos', palabra: 'Inspiración', historia: 'La chispa inicial de la creatividad.', derecho: 'Nuevo proyecto, pasión.', reves: 'Falta de energía.' },
    { palo: 'Bastos', nombre: 'Dos de Bastos', palabra: 'Planificación', historia: 'Mirar al horizonte y planear el futuro.', derecho: 'Decisiones, progreso.', reves: 'Miedo a lo desconocido.' },
    { palo: 'Bastos', nombre: 'Tres de Bastos', palabra: 'Expansión', historia: 'Esperar a que lleguen los barcos con los resultados.', derecho: 'Expansión, previsión.', reves: 'Retrasos, obstáculos.' },
    { palo: 'Bastos', nombre: 'Cuatro de Bastos', palabra: 'Celebración', historia: 'Alegría y estabilidad en el hogar.', derecho: 'Comunidad, hogar, felicidad.', reves: 'Conflicto en casa.' },
    { palo: 'Bastos', nombre: 'Cinco de Bastos', palabra: 'Conflicto', historia: 'Lucha y competencia caótica.', derecho: 'Competencia, rivalidad.', reves: 'Evitar conflictos.' },
    { palo: 'Bastos', nombre: 'Seis de Bastos', palabra: 'Victoria', historia: 'El regreso triunfal del héroe.', derecho: 'Reconocimiento, éxito público.', reves: 'Egotismo, caída.' },
    { palo: 'Bastos', nombre: 'Siete de Bastos', palabra: 'Defensa', historia: 'Defender la posición ganada contra todos.', derecho: 'Perseverancia, defensa.', reves: 'Rendirse.' },
    { palo: 'Bastos', nombre: 'Ocho de Bastos', palabra: 'Velocidad', historia: 'Movimiento rápido y noticias que llegan.', derecho: 'Acción rápida, movimiento.', reves: 'Retrasos, pánico.' },
    { palo: 'Bastos', nombre: 'Nueve de Bastos', palabra: 'Resiliencia', historia: 'Herido pero no vencido, la última guardia.', derecho: 'Persistencia, coraje.', reves: 'Agotamiento.' },
    { palo: 'Bastos', nombre: 'Diez de Bastos', palabra: 'Cargas', historia: 'Llevar demasiadas responsabilidades.', derecho: 'Carga pesada, estrés.', reves: 'Soltar cargas.' },
    { palo: 'Bastos', nombre: 'Sota de Bastos', palabra: 'Entusiasmo', historia: 'Un mensajero de noticias emocionantes.', derecho: 'Exploración, noticias.', reves: 'Malas noticias.' },
    { palo: 'Bastos', nombre: 'Caballo de Bastos', palabra: 'Aventura', historia: 'Acción impulsiva y apasionada.', derecho: 'Energía, pasión, lujuria.', reves: 'Impulsividad, ira.' },
    { palo: 'Bastos', nombre: 'Reina de Bastos', palabra: 'Confianza', historia: 'Carisma y determinación femenina.', derecho: 'Seguridad, vitalidad.', reves: 'Celos, inseguridad.' },
    { palo: 'Bastos', nombre: 'Rey de Bastos', palabra: 'Liderazgo', historia: 'Visión y emprendimiento maduro.', derecho: 'Gran visión, honor.', reves: 'Impulsividad, tiranía.' },

    // COPAS (Agua)
    { palo: 'Copas', nombre: 'As de Copas', palabra: 'Amor Puro', historia: 'El desborde emocional del corazón.', derecho: 'Nuevo amor, intuición.', reves: 'Amor bloqueado.' },
    { palo: 'Copas', nombre: 'Dos de Copas', palabra: 'Unión', historia: 'La conexión sagrada entre dos almas.', derecho: 'Pareja, atracción.', reves: 'Ruptura, desequilibrio.' },
    { palo: 'Copas', nombre: 'Tres de Copas', palabra: 'Amistad', historia: 'Celebración en comunidad.', derecho: 'Fiesta, amistad.', reves: 'Exceso, chismes.' },
    { palo: 'Copas', nombre: 'Cuatro de Copas', palabra: 'Apatía', historia: 'Rechazar ofertas por estar ensimismado.', derecho: 'Contemplación, aburrimiento.', reves: 'Nueva motivación.' },
    { palo: 'Copas', nombre: 'Cinco de Copas', palabra: 'Pérdida', historia: 'Llorar por la leche derramada.', derecho: 'Tristeza, duelo.', reves: 'Aceptación, perdón.' },
    { palo: 'Copas', nombre: 'Seis de Copas', palabra: 'Nostalgia', historia: 'Recuerdos de la inocencia del pasado.', derecho: 'Recuerdos, infancia.', reves: 'Vivir en el pasado.' },
    { palo: 'Copas', nombre: 'Siete de Copas', palabra: 'Ilusiones', historia: 'Muchas opciones, pero algunas son fantasía.', derecho: 'Opciones, sueños.', reves: 'Claridad, elección.' },
    { palo: 'Copas', nombre: 'Ocho de Copas', palabra: 'Abandono', historia: 'Dejar atrás lo que ya no sirve.', derecho: 'Búsqueda de sentido.', reves: 'Miedo a irse.' },
    { palo: 'Copas', nombre: 'Nueve de Copas', palabra: 'Deseos', historia: 'La carta de los deseos cumplidos.', derecho: 'Satisfacción, gratitud.', reves: 'Codicia, insatisfacción.' },
    { palo: 'Copas', nombre: 'Diez de Copas', palabra: 'Plenitud', historia: 'La felicidad familiar perfecta.', derecho: 'Armonía divina.', reves: 'Familia rota.' },
    { palo: 'Copas', nombre: 'Sota de Copas', palabra: 'Mensaje', historia: 'Un mensaje intuitivo o de amor.', derecho: 'Creatividad, romance.', reves: 'Inmadurez emocional.' },
    { palo: 'Copas', nombre: 'Caballo de Copas', palabra: 'Romance', historia: 'El caballero que trae ofertas de amor.', derecho: 'Encanto, idealismo.', reves: 'Decepción, mal humor.' },
    { palo: 'Copas', nombre: 'Reina de Copas', palabra: 'Empatía', historia: 'La madre emocional y psíquica.', derecho: 'Compasión, cuidado.', reves: 'Dependencia.' },
    { palo: 'Copas', nombre: 'Rey de Copas', palabra: 'Control', historia: 'Maestría sobre las emociones.', derecho: 'Equilibrio, consejo.', reves: 'Manipulación.' },

    // ESPADAS (Aire)
    { palo: 'Espadas', nombre: 'As de Espadas', palabra: 'Claridad', historia: 'La verdad corta como una espada.', derecho: 'Verdad, claridad mental.', reves: 'Confusión, caos.' },
    { palo: 'Espadas', nombre: 'Dos de Espadas', palabra: 'Bloqueo', historia: 'Negarse a ver la verdad.', derecho: 'Indecisión, estancamiento.', reves: 'Ver la verdad.' },
    { palo: 'Espadas', nombre: 'Tres de Espadas', palabra: 'Dolor', historia: 'Un corazón atravesado por la traición.', derecho: 'Pena, separación.', reves: 'Sanación, perdón.' },
    { palo: 'Espadas', nombre: 'Cuatro de Espadas', palabra: 'Descanso', historia: 'Retirarse para recuperar fuerzas.', derecho: 'Recuperación, paz.', reves: 'Agotamiento.' },
    { palo: 'Espadas', nombre: 'Cinco de Espadas', palabra: 'Derrota', historia: 'Ganar a cualquier costo es perder.', derecho: 'Conflicto, tensión.', reves: 'Resolución, perdón.' },
    { palo: 'Espadas', nombre: 'Seis de Espadas', palabra: 'Transición', historia: 'Moverse hacia aguas más calmas.', derecho: 'Viaje, recuperación.', reves: 'Resistencia al cambio.' },
    { palo: 'Espadas', nombre: 'Siete de Espadas', palabra: 'Estrategia', historia: 'Actuar con sigilo o engaño.', derecho: 'Astucia, secretos.', reves: 'Confesión.' },
    { palo: 'Espadas', nombre: 'Ocho de Espadas', palabra: 'Restricción', historia: 'Atrapado por sus propios pensamientos.', derecho: 'Miedo, prisión mental.', reves: 'Liberación.' },
    { palo: 'Espadas', nombre: 'Nueve de Espadas', palabra: 'Pesadillas', historia: 'La noche oscura del alma.', derecho: 'Ansiedad, culpa.', reves: 'Esperanza.' },
    { palo: 'Espadas', nombre: 'Diez de Espadas', palabra: 'Final', historia: 'Tocar fondo, no puede ir a peor.', derecho: 'Ruina, final dramático.', reves: 'Recuperación.' },
    { palo: 'Espadas', nombre: 'Sota de Espadas', palabra: 'Curiosidad', historia: 'Mente ágil y vigilante.', derecho: 'Vigilancia, mente aguda.', reves: 'Paranoia.' },
    { palo: 'Espadas', nombre: 'Caballo de Espadas', palabra: 'Rapidez', historia: 'Acción rápida y directa.', derecho: 'Ambición, prisa.', reves: 'Agresividad.' },
    { palo: 'Espadas', nombre: 'Reina de Espadas', palabra: 'Percepción', historia: 'Intelecto agudo y honestidad.', derecho: 'Independencia, claridad.', reves: 'Crueldad, frialdad.' },
    { palo: 'Espadas', nombre: 'Rey de Espadas', palabra: 'Autoridad', historia: 'Juicio intelectual y poder.', derecho: 'Verdad, lógica.', reves: 'Abuso de poder.' },

    // OROS (Tierra)
    { palo: 'Oros', nombre: 'As de Oros', palabra: 'Oportunidad', historia: 'El regalo material del universo.', derecho: 'Prosperidad, nuevo trabajo.', reves: 'Oportunidad perdida.' },
    { palo: 'Oros', nombre: 'Dos de Oros', palabra: 'Equilibrio', historia: 'Malabarismo con las responsabilidades.', derecho: 'Adaptabilidad.', reves: 'Desorganización.' },
    { palo: 'Oros', nombre: 'Tres de Oros', palabra: 'Maestría', historia: 'Trabajo en equipo y calidad.', derecho: 'Colaboración.', reves: 'Falta de equipo.' },
    { palo: 'Oros', nombre: 'Cuatro de Oros', palabra: 'Avaricia', historia: 'Aferrarse demasiado a lo material.', derecho: 'Seguridad, control.', reves: 'Codicia.' },
    { palo: 'Oros', nombre: 'Cinco de Oros', palabra: 'Pobreza', historia: 'Tiempos difíciles y soledad.', derecho: 'Dificultad financiera.', reves: 'Recuperación.' },
    { palo: 'Oros', nombre: 'Seis de Oros', palabra: 'Generosidad', historia: 'El flujo de dar y recibir.', derecho: 'Caridad, compartir.', reves: 'Egoísmo, deuda.' },
    { palo: 'Oros', nombre: 'Siete de Oros', palabra: 'Paciencia', historia: 'Esperar la cosecha del trabajo.', derecho: 'Inversión, espera.', reves: 'Trabajo sin fruto.' },
    { palo: 'Oros', nombre: 'Ocho de Oros', palabra: 'Esfuerzo', historia: 'Trabajar duro en los detalles.', derecho: 'Artesanía, enfoque.', reves: 'Perfeccionismo.' },
    { palo: 'Oros', nombre: 'Nueve de Oros', palabra: 'Lujo', historia: 'Disfrutar de los frutos del trabajo.', derecho: 'Abundancia, independencia.', reves: 'Dependencia.' },
    { palo: 'Oros', nombre: 'Diez de Oros', palabra: 'Legado', historia: 'Riqueza que pasa generaciones.', derecho: 'Herencia, familia.', reves: 'Fracaso financiero.' },
    { palo: 'Oros', nombre: 'Sota de Oros', palabra: 'Estudio', historia: 'El estudiante dedicado.', derecho: 'Manifestación, estudio.', reves: 'Procrastinación.' },
    { palo: 'Oros', nombre: 'Caballo de Oros', palabra: 'Rutina', historia: 'Trabajo lento pero seguro.', derecho: 'Eficiencia, responsabilidad.', reves: 'Estancamiento.' },
    { palo: 'Oros', nombre: 'Reina de Oros', palabra: 'Cuidado', historia: 'La madre que provee seguridad.', derecho: 'Practicidad, confort.', reves: 'Descuido.' },
    { palo: 'Oros', nombre: 'Rey de Oros', palabra: 'Éxito', historia: 'La cima del éxito material.', derecho: 'Riqueza, negocios.', reves: 'Codicia, corrupción.' },
  ];

  constructor() { }

  ngOnInit() {}

  cambiarSegmento(event: any) {
    this.segmentoActual = event.detail.value;
  }

  // --- MÉTODOS DEL MODAL ---
  abrirDetalle(carta: any) {
    this.cartaSeleccionada = carta;
    this.isModalOpen = true;
  }

  cerrarModal() {
    this.isModalOpen = false;
    this.cartaSeleccionada = null;
  }
}