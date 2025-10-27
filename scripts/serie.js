export class Serie {
    id;
    nombre;
    canal;
    numSeasons;
    descripcion;
    linkURL;
    imagenURL;
    constructor(id, nombre, canal, temp, des, link, imag) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.numSeasons = temp;
        this.descripcion = des;
        this.linkURL = link;
        this.imagenURL = imag;
    }
}
