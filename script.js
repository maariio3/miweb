// Detectamos el click en el botón
document.getElementById('btnProcesar').addEventListener('click', function() {
    
    // 1. Recoger el valor del campo de texto
    var texto = document.getElementById('campoTexto').value;

    // 2. Procesar (Ejemplo: pasarlo a mayúsculas y validarlo)
    var respuesta = "";
    
    if (texto === "") {
        respuesta = "⚠️ El campo está vacío, escribe algo.";
        document.getElementById('resultado').style.color = "red";
    } else {
        respuesta = "✅ Procesado por JS: " + texto.toUpperCase();
        document.getElementById('resultado').style.color = "green";
    }

    // 3. Devolver la respuesta al HTML
    document.getElementById('resultado').innerText = respuesta;
});