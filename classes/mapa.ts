import { Marcador } from './marcador';

export class Mapa {
  private marcadores: { [key: string]: Marcador } = {
    "1": {
      id: "1", // ID Estatico 
      nombre: "Alexis", // Name random
      lng: 0, // -97.0123132 Colocar aquí alguna lng para setear en el mapa.
      lat: 0, // 18.123123 Colocar aquí alguna lat para setear en el mapa
      color: "#dd8fee" // Color random
    }
  };
  constructor() {}

  getMarcadores() {
    return this.marcadores;
  }

  agregarMarcador (marcador: Marcador) {
    this.marcadores[marcador.id] = marcador;
  }

  borrarMarcador(id: string) {
    // Metodo para eliminar objetos
    delete this.marcadores[id];
    return this.getMarcadores();
  }

  moverMarcador(marcador: Marcador) {
    this.marcadores[marcador.id].lng = marcador.lng;
    this.marcadores[marcador.id].lat = marcador.lat;
  }
}
