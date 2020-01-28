export class Pokemon {

    private _id: number;
    private _imagen: string;
    private _nombre: string;

    constructor( nombre: string ) {
        this._id = 0;
        this._nombre = nombre;
        this._imagen = 'https://cdn4.iconfinder.com/data/icons/gaming-27/300/gaming-fun-entertainment-freetime-pokemon-512.png';
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = ( value !== undefined && value !== '' ) ? value : 'sin nombre';
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get nombre_1(): string {
        return this._nombre;
    }
    public set nombre_1(value: string) {
        this._nombre = value;
    }



}
