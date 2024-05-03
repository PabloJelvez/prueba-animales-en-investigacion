export default class Animal{
    constructor(nombre, edad, comentario, imagen, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._imagen = imagen;
        this._comentario = comentario;
        this._sonido = sonido;
    };

    get nombre(){
        return this._nombre;
    };

    get edad(){
        return this._edad;
    };

   
    get comentario(){
        return this._comentario;
    };

    get imagen(){
        return this._imagen;
    };

    get sonido(){
        return this._sonido;
    };
}