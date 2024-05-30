const inputTarea = document.getElementById('tarea');
const inputAutor = document.getElementById("autor");
const buttonAgregar = document.getElementById('agregar_tarea');
var cantidad = document.getElementById('cantidad');


var total = 0;


buttonAgregar.onclick = function almacenar(almacenar) {
    confirm('Desea agregar esta tarea');

    var elemento = inputTarea.value;

    var li = document.createElement('li');
    li.textContent = elemento

    listado.appendChild(li);

    total++;
    cantidad.innerHTML = total;
}

// almacenar = function(){
//     var elemento = inputTarea;

//     var li = document.createElement('li');
//     li.textContent = elemento

//     listado.appendChild(li);
// }


