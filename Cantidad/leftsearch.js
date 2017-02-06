elements = function ()
{
    var conexion1;
    var conexion2;
    var content;
    var content2;
    var content3;
    var idchoose;
    var vuelochoose;
    var idvuelo;
    var cantidad;
};

elements.prototype.conexion = function ()
{
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = function () {
        elements.prototype.firstconexion();
    };
    conexion1.open('GET', '/Avion/webresources/aerolinea', true);
    conexion1.send();
};

elements.prototype.firstconexion = function ()
{
    if (conexion1.readyState === 4)
    {
        content = JSON.parse(conexion1.responseText);
        elements.prototype.see();
    }
    else
    {
        //toast de cargando
    }
};

elements.prototype.see = function ()
{
    var aerolineas = $("#aerolineas");

    for (contador = 0; contador < content.length; contador++)
    {
        var opcion = $('<option value="' + content[contador].codigo + '">' + content[contador].nombre + '</option>');
        $(aerolineas).append(opcion);
    }

    $("#send").click(function ()
    {
        elements.prototype.revisionconexion();
    });
};

elements.prototype.revisionconexion = function ()
{
    var money = $("#money").val();
    var exit = $("#exit").val();
    var enter = $("#enter").val();
    var aerolinea = $("#aerolineas").val();

    todojson = {
        "precio": money,
        "horaSalida": exit,
        "horaLlegada": enter,
        "codAerolinea": aerolinea
    };

    var object = JSON.stringify(todojson);

    $.ajax({
        "url": "/Avion/webresources/search/",
        "type": "POST",
        "contentType": 'application/json',
        "data": object,
        "dataType": "json",
        "success": function (data, textStatus, jqXHR)
        {
            content = data;
            elements.prototype.see2();
        }

    });

};

elements.prototype.see2 = function ()
{
    document.getElementById("tablero").innerHTML = "";
    var tablero = $('<table id="busquedarealizada"></table>');
    var primerafila = $('<tr><th>Número de vuelo</th><th>Origen</th><th>Destino</th><th>Hora de salida</th><th>Hora de llegada</th><th>Aerolinea</th><th>Precio</th><th>Ver</th></tr>');
    $("#tablero").append(tablero);
    $("#busquedarealizada").append(primerafila);

    for (contador = 0; contador < content.length; contador++)
    {
        var fila = $('<tr><td>' + content[contador].nvuelo + '</td><td>' + content[contador].codOrigen + '</td><td>' + content[contador].codDestino + '</td><td>' + content[contador].horaSalida + '</td></td><td>' + content[contador].horaLlegada + '</td><td>' + content[contador].codAerolinea + '</td><td>' + content[contador].precio + '</td><td><input type="radio" id="'+contador+'" name="vista" value="' + content[contador].nvuelo + '"></td>');
        $("#busquedarealizada").append(fila);
    }

    $("input[name='vista']").click(function ()
    {
        var nvuelo = $(this).val();
        idchoose = $(this).attr("id");
        elements.prototype.conexionvuelo(nvuelo);
    });
};

elements.prototype.conexionvuelo = function(nvuelo)
{
        todojson = {
        "nvuelo": nvuelo
        };

        var object = JSON.stringify(todojson);
    
        $.ajax({
            "url": "/Avion/webresources/vuelo/",
            "type": "POST",
            "contentType": 'application/json',
            "data": object,
            "dataType": "json",
            "success": function (data, textStatus, jqXHR)
            {
                content2 = data;
                elements.prototype.fechareserva();
            }
         });
}

elements.prototype.fechareserva = function()
{
    document.getElementById("tablero").innerHTML = "";
    var suvuelo = $("<h2 style='margin-top:-30px;'>Ha elegido el vuelo con las siguientes características</h2><br></br>");
    $("#tablero").append(suvuelo);
    var tablero = $('<table id="busquedarealizada"></table>');
    var primerafila = $('<tr><th>Origen</th><th>Destino</th><th>Hora de salida</th><th>Hora de llegada</th><th>Aerolinea</th><th>Precio</th></tr>');
    $("#tablero").append(tablero);
    $("#busquedarealizada").append(primerafila);
    var fila = $('<tr><td>' + content[idchoose].codOrigen + '</td><td>' + content[idchoose].codDestino + '</td><td>' + content[idchoose].horaSalida + '</td></td><td>' + content[idchoose].horaLlegada + '</td><td>' + content[idchoose].codAerolinea + '</td><td>' + content[idchoose].precio + '</td>');
    $("#busquedarealizada").append(fila);
    
    
    var tablavuelo = $('<br></br><table id="tablavuelo"></table>');
    var primerafilavuelo = $('<tr><th>Fecha</th><th>Plazas libres</th><th>Reservar</th></tr>');
    $("#tablero").append(tablavuelo);
    $("#tablavuelo").append(primerafilavuelo);
    
    for (contador = 0; contador < content2.length; contador++)
    {
        var filavuelo = $('<tr><td>' + content2[contador].fecha + '</td><td>' + content2[contador].plazasLibres + '</td><td><input type="radio" id="'+contador+'" name="reserva" value="' + content2[contador].idVuelo + '"></td>');
        $("#tablavuelo").append(filavuelo);
    }
    
    $("input[name='reserva']").click(function ()
    {
        idvuelo = $(this).val();
        vuelochoose = $(this).attr("id");
        elements.prototype.reservavuelo();
    });
    
}

elements.prototype.reservavuelo = function()
{
    document.getElementById("tablero").innerHTML = "";
    var titulo = $("<h2 style='margin-top:-30px;'>Formulario de Reserva</h2><br></br>");
    var nombre = $('<label>Nombre:</label><input type="text" required value="" id="nombre"><br>');
    var apellidos = $('<label>Apellidos:</label><input type="text" required value="" id="apellidos"><br>');
    var telefono = $('<label>Teléfono:</label><input type="number" required value="" id="telefono"><br>');
    var tarjeta = $('<label>Tarjeta de crédito:</label><input type="number" required value="" id="tarjeta" maxlength="16"><br>');
    var asientos = $('<label>Billetes:</label><select id="asientos"></select><br>');
    var envio = $('<input type="button" id="envioformulario" value="Enviar">');
    $("#tablero").append(titulo);
    $("#tablero").append(nombre);
    $("#tablero").append(apellidos);
    $("#tablero").append(telefono);
    $("#tablero").append(tarjeta);
    $("#tablero").append(asientos);
    for(contador2=1; contador2 <= content2[vuelochoose].plazasLibres; contador2++)
    {
        var numero = $('<option value="'+contador2+'">'+contador2+'</option>');
        $("#asientos").append(numero);
    }
    $("#tablero").append(envio);
    
    $("#envioformulario").click(function ()
    {
        elements.prototype.insertar();
    });
}

elements.prototype.insertar = function()
{
        var nombre = $("#nombre").val();
        var apellidos = $("#apellidos").val();
        var telefono = $("#telefono").val();
        var tarjeta = $("#tarjeta").val();
        var precio = content[idchoose].precio;
        var nvuelo = idvuelo;
        cantidad = $("#asientos").val();
        
        todojson = {
            "nombre": nombre,
            "apellidos": apellidos,
            "telefono": telefono,
            "tarjeta": tarjeta,
            "nvuelo": nvuelo,
            "importe": precio,
            "cantidad":cantidad
        };

        var object = JSON.stringify(todojson);
    
        $.ajax({
            "url": "/Avion/webresources/insert/",
            "type": "POST",
            "contentType": 'application/json',
            "data": object,
            "dataType": "json",
            "success": function (data, textStatus, jqXHR)
            {
                content3 = data;
                elements.prototype.print(todojson.nombre, todojson.apellidos);
            }
         });
}

elements.prototype.print = function()
{
    document.getElementById("tablero").innerHTML = "";
    document.getElementById("busquedaizquierda").innerHTML = "";
    var titulo = $("<h2 style='margin-top:-30px;'>Su reserva se ha efectuado con exito, este es su ticket de reserva</h2><br></br>");
    $("#tablero").append(titulo);
    var datos = $('<br></br><ul id="tabladatos"></ul>');
    $("#tablero").append(datos);
    var filadatos = $('<li>' + todojson.nombre + '</li><li>' + todojson.apellidos + '</li><li>' + content2[vuelochoose].fecha + '</li><li>' + content[idchoose].codOrigen + '</li><li>' + content[idchoose].codDestino + '</li><li>' + content[idchoose].horaSalida + '</li><li>' + content[idchoose].horaLlegada + '</li><li>' + content[idchoose].codAerolinea + '</li><li>' + content[idchoose].precio + '</li><li>'+cantidad+'</li>');
    $("#tabladatos").append(filadatos);
    var print = $('<input type="button" name="imprim" value="Imprimir" id="imprimir">');
    $("#tabladatos").append(print);
    
    $("input[name='imprim']").click(function ()
    {
        $('#containercenter').printArea();
    });
}
