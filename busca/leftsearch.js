elements = function ()
{
    var conexion1;
    var conexion2;
    var content;
    var content2;
    var idchoose;
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
        //elements.prototype.conexionvuelo(nvuelo);
        elements.prototype.fechareserva();
    });
};

elements.prototype.conexionvuelo = function(nvuelo)
{
        todojson = {
        "nvuelo": nvuelo
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
                content2 = data;
                elements.prototype.fechareserva();
            }
         });
}

elements.prototype.fechareserva = function()
{
    document.getElementById("tablero").innerHTML = "";
    var suvuelo = $("<h2>Ha elegido el vuelo con estas características</h2>");
    $("#tablero").append(suvuelo);
    var tablero = $('<table id="busquedarealizada"></table>');
    var primerafila = $('<tr><th>Origen</th><th>Destino</th><th>Hora de salida</th><th>Hora de llegada</th><th>Aerolinea</th><th>Precio</th></tr>');
    $("#tablero").append(tablero);
    $("#busquedarealizada").append(primerafila);
    var fila = $('<tr><td>' + content[idchoose].codOrigen + '</td><td>' + content[idchoose].codDestino + '</td><td>' + content[idchoose].horaSalida + '</td></td><td>' + content[idchoose].horaLlegada + '</td><td>' + content[idchoose].codAerolinea + '</td><td>' + content[idchoose].precio + '</td>');
    $("#busquedarealizada").append(fila);
    
    
    var tablavuelo = $('<table id="tablavuelo"></table>');
    var primerafilavuelo = $('<tr><th>Fecha</th><th>Plazas libres</th><th>Reservar</th></tr>');
    $("#tablero").append(tablavuelo);
    $("#tablavuelo").append(primerafilavuelo);
    
    for (contador = 0; contador < content.length; contador++)
    {
        var filavuelo = $('<tr><td>' + content2[contador].fecha + '</td><td>' + content2[contador].plazasLibres + '</td><td><input type="radio" id="'+contador+'" name="reserva" value="' + content[contador].codVuelo + '"></td>');
        $("#tablavuelo").append(filavuelo);
    }
    
    $("input[name='reserva']").click(function ()
    {
        alert("prueba");
    });
    
}