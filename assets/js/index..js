import Tipos from "./clases/tipos.js";
import data from "./data.js";

let animales = [];
let imagenSrc;
let sonidoOrg;

const cardCreate = () => {
    try {
        const template = document.getElementById('Animales');
        template.innerHTML = ``;
        animales.forEach((key, i) => {
            template.innerHTML += `
            <div class="px-3 pb-2">
            <div class="bg-dark text-white">
              <img
                height="200"
                src="./assets/imgs/${key.imagen}" 
                data-bs-toggle="modal"  
                data-bs-target="#exampleModal" 
                onclick="modalDetails('${i}')" 
              />
              <div>
                <button onclick="playSound('${key.sonido}')" class="btn btn-secondary w-100"> <img height="30" src="assets/imgs/audio.svg" /> </button>
              </div>
            </div>
          </div>
            `
        })
    } catch (error) {
        console.log(error);
    }
}
window.playSound = (sonido) => {
    try {
        let musica = new Audio(`./assets/sounds/${sonido}`);
        musica.play();
    } catch (error) {
        console.log(error);
    }
}
window.modalDetails = (i) => {
    try {
        const modalBody = document.getElementsByClassName('modal-body')[0];
        const animal = animales[i];
        modalBody.innerHTML = `
        <div class="px-3 pb-2">
        <div class="card w-50 m-auto bg-dark text-white border-0">
          <img
            src="./assets/imgs/${animal.imagen}"
            class="d-block m-auto w-100"
          />
          <div class="card-body text-center">
            <h6 class="card-text ">${animal.edad}</h6>
            <h6 class="card-text m-0">Comentarios</h6>
            <hr/>
            <p>${animal.comentario}</p>
          </div>
        </div>
        </div>
        `
    } catch (error) {
        console.log(error)
    }
};


document.getElementById('animal').addEventListener('change', async (e) => {
    try {
        const animalSelected = e.target.value;
        const animales = await data.getData()
        const animalObject = await animales.find((animal)=>{
            return animal.name === animalSelected;
        })
        imagenSrc = `${animalObject.imagen}`;
        sonidoOrg = `${animalObject.sonido}`;
        const preview = document.getElementById('preview');
        preview.parentElement.classList.remove('p-5')
        preview.style.backgroundImage = `url(./assets/imgs/${imagenSrc})`;
    } catch (error) {
        console.log(error);
    }
});

document.getElementById('btnRegistrar').addEventListener('click', () =>{
    try {
        const nombre = document.getElementById('animal').value;
        const edad = document.getElementById('edad').value;
        const comentario = document.getElementById('comentarios').value;
        if(nombre && edad && comentario){
            let animal = new Tipos(nombre, edad, comentario, imagenSrc, sonidoOrg);
            animales.push(animal);
            cardCreate();
            const formulario = document.getElementById("formulario");
            formulario.reset();
            const preview = document.getElementById("preview");
            preview.style.backgroundImage = "";
        } else{
            alert('Faltan datos')
        }
    } catch (error) {
        console.log(error)
    }
});