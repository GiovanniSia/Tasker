
function crearCheckTarea(numero, texto, fechaHora) {

    const $nodo = document.querySelector("#tareas");

    const div = document.createElement("div");
    div.id = `tarea-${numero}`;
    div.className = "tarea";

    const nodoInput = document.createElement("input");
    nodoInput.type = "checkbox";

    const nodoLabel = document.createElement("label");
    nodoLabel.textContent = texto;

    const nodoFechaHora = document.createElement("input");
    nodoFechaHora.type = "datetime-local";
    nodoFechaHora.disabled = true;
    nodoFechaHora.value = fechaHora;

    div.appendChild(nodoInput);
    div.appendChild(nodoLabel);
    div.appendChild(nodoFechaHora);
    $nodo.appendChild(div);

}

function limpiarInputsTarea() {
    document.querySelector("#texto-tarea").value = "";
    document.querySelector("#fecha-hora-tarea").value = "";
}

function cantidadDeTareas() {
    const listaTareas = document.querySelectorAll(".tarea");
    let contador = 0;
    for (let i = 0; i < listaTareas.length; i++) {
        contador++;
    }
    return contador;
}

function agregarTarea() {
    const texto = document.querySelector("#texto-tarea").value;
    const numero = cantidadDeTareas();
    const fechaHora = document.querySelector("#fecha-hora-tarea").value;
    crearCheckTarea(numero, texto, fechaHora);
    limpiarInputsTarea();

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
input.addEventListener("keyup", function (event) {
    enter(event);
});

//En vez de usar el boton "Agregar tarea" puedo usar la tecla "Enter"
const input2 = document.querySelector("#fecha-hora-tarea");
input2.addEventListener("keyup", function (event) {
    enter(event);
});

function enter(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector("#boton-agregar-tarea").click();
    }
}
const $botonLimpiarTareas = document.querySelector("#boton-limpiar-tareas");
$botonLimpiarTareas.onclick = limpiarTareas;


