$(document).ready(function() {
    var ready = null;

    ready = new elements();

    var money = $('<label>Precio</label><input type="number" value="750" id="money"><label>€</label><br>');
    var exit = $('<label>Hora Salida</label><input type="time" value="00:00" id="exit"><br>');
    var enter = $('<label>Hora Llegada</label><input type="time" value="12:00" id="enter"><br>');
    var selector = $('<label>Aerolineas</label><select id="aerolineas"></select><br>');
    var send = $('<input type="button" value="Buscar" id="send">');

    $("#busquedaizquierda").append(money);
    $("#busquedaizquierda").append(exit);
    $("#busquedaizquierda").append(enter);
    $("#busquedaizquierda").append(selector);
    $("#busquedaizquierda").append(send);
    
    ready.conexion();
});