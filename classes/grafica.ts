/*  
    Este código va en el backend
    Es la nueva clase de GraficaData

    Si este archivo ya existe, reemplazarlo por este nuevo.
    Esta simplificado pero funciona de la misma manera
    que en la sección anterior.
*/

export class GraficaData {

    private labels: string[] = [];
    private valores: number[] = [0, 0, 0, 0];

    constructor() { }

    setLabels( labels: string[] ) {
        this.labels = labels;
    }

    getDataGrafica() {
        return [
            { data: this.valores, label: 'Preguntas' }
        ];
    }


    incrementarValor( opcion: number, valor: number ) {

        this.valores[opcion] += valor;
        return this.getDataGrafica();

    }

}