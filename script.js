document.getElementById('btnProcesar').addEventListener('click', function() {

    // 1. Recoger el valor del campo de texto
    var texto = document.getElementById('campoTexto').value;

    // 2. Comprobar que no esté vacío
    if (texto === "") {
        document.getElementById('resultado').innerText = "Escribe algo primero";
        document.getElementById('resultado').style.color = "red";
    } else {
        // --- AQUÍ EMPIEZA LA MAGIA ---
        
        // A. Definimos la lista de posibles saludos
        var listaSaludos = [
            "Hola", 
            "Bienvenido", 
            "Un placer verte", 
            "Qué tal estás", 
            "Saludos cordiales", 
            "Hey"
        ];

        // B. Elegimos uno al azar
        // Math.random() da un número aleatorio y Math.floor lo redondea para obtener una posición válida de la lista
        var saludoAleatorio = listaSaludos[Math.floor(Math.random() * listaSaludos.length)];

        // 3. Mostrar el mensaje combinando el saludo aleatorio con el nombre
        document.getElementById('resultado').innerText = saludoAleatorio + ": " + texto;
        
        // Pongo el color en azul
        document.getElementById('resultado').style.color = "blue";
    }
});