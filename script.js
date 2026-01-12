document.getElementById('btnProcesar').addEventListener('click', function() {
    
    // 1. Recoger el valor del campo de texto
    var texto = document.getElementById('campoTexto').value;

    // 2. Comprobar que no esté vacío
    if (texto === "") {
        document.getElementById('resultado').innerText = "Escribe algo primero";
        document.getElementById('resultado').style.color = "red";
    } else {
        // 3. Mostrar el mensaje exacto que pediste
        document.getElementById('resultado').innerText = "hola: " + texto;
        
        // Pongo el color en negro o azul para que se lea bien
        document.getElementById('resultado').style.color = "blue";
    }
});