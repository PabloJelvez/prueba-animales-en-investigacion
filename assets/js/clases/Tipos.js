import Animal from "./Animal.js";

export default class Tipos extends Animal{
    constructor(nombre, edad, comentario, imagen, sonido){
        super(nombre, edad, comentario, imagen, sonido);
    };
};