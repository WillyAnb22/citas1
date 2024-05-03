

    function enviar() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nom').value;
    var propietario = document.getElementById('propi').value;
    var telefono = document.getElementById('tel').value;
    var fechaCita = document.getElementById('date').value;
    var horaCita = document.getElementById('hora').value;
    var tipoMascota = document.getElementById('tm').value;
    var sintomas = document.getElementById('sintom').value;

    // Crear la estructura de la tarjeta con los datos del formulario
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <h2>Nombre: ${nombre}</h2>
    <p>Propietario: ${propietario}</p>
    <p>Teléfono: ${telefono}</p>
    <p>Fecha de Cita: ${fechaCita}</p>
    <p>Hora de Cita: ${horaCita}</p>
    <p>Tipo de Mascota: ${tipoMascota}</p>
    <p>Síntomas: ${sintomas}</p>
    `;

    // Agregar la tarjeta al contenedor de tarjetas
    document.getElementById('tarjetas-container').appendChild(card);
}

    // Llamar a la función para enviar y crear la tarjeta al hacer clic en el botón
    function pintar() {
        enviar();
}


