export class Pokemon {

    private _id: number;
    private _imagen: string;
    private _nombre: string;
    private _habilidades: Array<string>;


    constructor( nombre: string ) {
        this._id = 0;
        this._nombre = nombre;
        this._imagen = 'https://cdn4.iconfinder.com/data/icons/gaming-27/300/gaming-fun-entertainment-freetime-pokemon-512.png';
        this._habilidades = [];
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
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

    public get habilidades(): Array<string> {
        return this._habilidades;
    }
    public set habilidades(value: Array<string>) {
        this._habilidades = value;
    }
    
    



}
