// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function validarAgregarAmigo() {
    //Obtiene el valor del campo de entrada con el ID 'amigo'
    let agregarAmigo = document.getElementById('amigo').value;
    //Verificar si el campo esta vacio
    if (agregarAmigo == '') {
        alert('Inserte un nombre por favor.');
    } else {
        //Si no esta vacío agrega el amigo al array.
        amigos.push(agregarAmigo);
        //Limpia el campo de entrada
        limpiarCaja();
        console.log(amigos);
        //Actualiza la lista de amigos en la interfaz del usuario
        actualizarListaAmigos();
        //Enfoca el campo de entrada luego darle click al boton añadir.
        document.getElementById('amigo').focus();
    }
}

function sortearAmigo() {
    // 1. Valida que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega algunos nombres primero.");
        return;
    } else {
        // 2. qui se gener el indice
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // 3. Obtener el nombre sorteado
        let amigoSorteado = amigos[indiceAleatorio];
        listaAmigos.style.display = "none";

        // 4. Mostrar el resultado
        let resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
    }


}

//Limpia el campo de entrada.
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

/**Esta funcion actualiza la lista de amigos en la interfaz de usuario.
 * Recorre el array "amigos" y crea un elemento <li> por cada amigo,
 * agregandolo al contenedor de la lista 'listaAmigos'.
*/
function actualizarListaAmigos() {
    //Obtiene el contenedor de la lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = "";

    // Este bucle recorre el array y agrega cada nombre como un <li>
    for (let i = 0; i < amigos.length; i++) {
        //Crea un nuevo elemento <li> por cada amigo.
        let elementoLista = document.createElement("li");
        //Asigna el nombre del amigo actual como contenido del texto
        elementoLista.textContent = amigos[i];
        //Agrega el elemento <li> al contenedor de la lista ('listaAmigos').
        listaAmigos.appendChild(elementoLista);
    };
}