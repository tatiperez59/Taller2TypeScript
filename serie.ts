export class Serie {
  id: number
  nombre: string;
  canal: string;
  numSeasons: number;
  descripcion: string;
  linkURL:string;
  imagenURL: string;

  constructor(id:number,nombre:string,canal:string,temp:number, des:string,link:string,imag:string){

    this.id=id;
    this.nombre=nombre;
    this.canal=canal;
    this.numSeasons=temp;
    this.descripcion=des;
    this.linkURL=link;
    this.imagenURL=imag;
  }


}

