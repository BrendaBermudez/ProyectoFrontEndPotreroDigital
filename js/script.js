// MENU HAMB
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})

// GENERANDO FORM

function GeneraForm() {
  
  //Crear el objeto formulario
  let formulario = document.createElement("form");
  // Crear el objeto label de titulo (dentro de form)
  let titulo = document.createElement("label");
  // Crear el objeto caja de texto NOMBRES
  let cajaNombres = document.createElement("input");
  // Crear el objeto caja de texto APELLIDOS
  let cajaApellidos = document.createElement("input");
  // Crear el objeto caja de texto EMAIL
  let cajaCorreo = document.createElement("input");
  // Crear el objeto caja de texto ASUNTO DEL MENSAJE
  let cajaAsunto = document.createElement("input");
  // Crear el objeto area de texto del MENSAJE
  let cajaMensaje = document.createElement("textarea");
  // Crear el objeto BOTON
  let boton = document.createElement("input");

  // ASIGNAR ATRIBUTOS AL OBJETO FORMULARIO
  formulario.setAttribute('method', "post"); //Asignar el atributo method
  formulario.setAttribute('action', "../index.html") // Asignar el atributo action
  

  // ASIGNAR ATRIBUTOS AL OBJETO CAJA DE TEXTO DE NOMBRES
  cajaNombres.setAttribute('class', "formText");
  cajaNombres.setAttribute('type', "text"); //Asignar el atributo type
  cajaNombres.setAttribute('placeholder', "Escribi tu nombre aquí:") // Asignar el atributo placeholder
  cajaNombres.setAttribute('style', "width:100%;");//Asignar el atributo style

  // ASIGNAR ATRIBUTOS AL OBJETO CAJA DE TEXTO DE APELLIDOS
  cajaApellidos.setAttribute('class', "formText");
  cajaApellidos.setAttribute('type', "text") //Asignar el atributo type
  cajaApellidos.setAttribute('placeholder', "Escribi tu apellido aquí:") // Asignar el atributo placeholder
  cajaApellidos.setAttribute('style', "width:100%;"); //Asignar el atributo style

  // ASIGNAR ATRIBUTOS AL OBJETO CAJA DE TEXTO DE CORREO
  cajaCorreo.setAttribute('class', "formText");
  cajaCorreo.setAttribute('type', "text");//Asignar el atributo type
  cajaCorreo.setAttribute('placeholder', "Email");//Asignar el atributo placeholder
  cajaCorreo.setAttribute('style', "width:100%;");//Asignar el atributo style

  // ASIGNAR ATRIBUTOS AL OBJETO CAJA DE TEXTO DE Asunto
  cajaAsunto.setAttribute('class', "formText");
  cajaAsunto.setAttribute('type', "text");//Asignar el atributo type
  cajaAsunto.setAttribute('placeholder', "Asunto");//Asignar el atributo placeholder
  cajaAsunto.setAttribute('style', "width:100%");//Asignar el atributo style

  // ASIGNAR ATRIBUTOS AL OBJETO CAJA DE TEXTO DE Mensaje

  cajaMensaje.setAttribute('placeholder', "Mensaje");//Asignar el atributo placeholder
  cajaMensaje.setAttribute('style', "width:100%;");//Asignar el atributo style

  // ASIGNAR ATRIBUTOS AL OBJETO BOTON

  boton.setAttribute('type', "button");//Asignar el atributo type
  boton.setAttribute('value', "Enviar");//Asignar el atributo value
  boton.setAttribute('style', "width:24vw;margin: 10px 0px;padding: 10px;background:#faa765b5;color:#444444;border:solid 1px #000;");//Asignar el atributo style
  boton.setAttribute('onclick', "alert('Se envio el mensaje')");//Asignar el metodo onclick

  titulo.innerHTML = '<h1>Contacto</h1>'; // Asignar el texto de titulo en el objeto titulo
  formulario.appendChild(titulo);//Agregar el objeto titulo al objeto formulario
  formulario.appendChild(cajaNombres);//Agregar el objeto caja de texto Nombres al objeto formulario
  formulario.appendChild(cajaApellidos);//Agregar el objeto caja de texto Apellidos al objeto formulario
  formulario.appendChild(cajaCorreo);//Agregar el objeto caja de texto Email al objeto formulario
  formulario.appendChild(cajaAsunto);//Agregar el objeto caja de texto Asunto al objeto formulario
  formulario.appendChild(cajaMensaje);//Agregar el objeto area de texto del Mensaje al objeto formulario
  formulario.appendChild(boton);//Agregar el objeto boton al objeto formulario

  document.getElementById("contenido-formulario").appendChild(formulario); //Agregar el formulario a la etiquete con el ID

}


function hide(){
    document.getElementById("botonForm").style.display="none";
    document.getElementById("instrucciones").style.display="none";
}


function GeneraryOcultar(){
  GeneraForm();
  hide();
}
// SLIDER CONOCENOS
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section") [0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout (function(){
      slider.style.transition = "none";
      slider.insertAdjacentElement('beforeend', sliderSectionFirst);
      slider.style.marginLeft = "-100%";
  },500);

}
function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout (function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);

}

btnRight.addEventListener('click', function(){
    Next();
});

btnLeft.addEventListener('click', function(){
    Prev();
});