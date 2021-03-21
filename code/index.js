//A "numero" lo sacamos calculando las cantidad de divs "tarea" tenemos.
function crearCheckTarea(numero, texto) {

    const $nodo = document.querySelector("#tareas");

    const div = document.createElement("div");
    div.id = `tarea-${numero}`;
    div.className = "tarea";

    const nodoInput = document.createElement("input");
    nodoInput.type = "checkbox";

    const nodoLabel = document.createElement("label");
    nodoLabel.textContent = texto;

    div.appendChild(nodoInput);
    div.appendChild(nodoLabel);
    $nodo.appendChild(div);
}

function limpiarInputTarea(){
    document.querySelector("#texto-tarea").value="";
}

function agregarTarea() {
    const textoTarea = document.querySelector("#texto-tarea").value;
    crearCheckTarea(1, textoTarea);
    limpiarInputTarea();
}

function limpiarTareas() {
    const listaTareas = document.querySelectorAll(".tarea");
    for (let i = 0; i < listaTareas.length; i++) {
        listaTareas[i].remove();
    }
}

const $botonAgregarTarea = document.querySelector("#boton-agregar-tarea");
$botonAgregarTarea.onclick = agregarTarea;

//En vez de usar el boton "Agregar tarea" puedo usar la tecla "Enter"
const input = document.querySelector("#texto-tarea");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.querySelector("#boton-agregar-tarea").click();
  }
});

const $botonLimpiarTareas = document.querySelector("#boton-limpiar-tareas");
$botonLimpiarTareas.onclick = limpiarTareas;

