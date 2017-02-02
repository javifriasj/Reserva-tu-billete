elements = function()
{
    var conexion1;
    var conexion2;
    var content;
}

elements.prototype.conexion = function()
{
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = function() {
        elements.prototype.firstconexion();
    };
    conexion1.open('GET', '/Strach/webresources/aero', true);
    conexion1.send();
}

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
}

elements.prototype.see = function()
{
    	var aerolineas = $("#aerolineas");
        
	for(contador = 0; contador < content.length; contador++)
	{
		var opcion = $('<option value="'+content[contador].codigo+'">'+content[contador].nombre+'</option>');
		$(aerolineas).append(opcion);
	}
        
        $( "#send" ).click(function() 
          {
            elements.prototype.revisionconexion();
          });
}

elements.prototype.revisionconexion = function()
{
    var money = $("#money").val();
    var exit = $("#exit").val();
    var enter = $("#enter").val();
    var aerolinea = $("#aerolineas").val();
    
    todojson = [{
		"precio":money,
		"horaSalida":exit,
		"horaLlegada":enter,
		"codAerolinea":aerolinea
                }];
            
    var object = JSON.stringify(todojson);

	conexion2 = new XMLHttpRequest();
  	conexion2.onreadystatechange = function(){ elements.prototype.evento2() };
  	conexion2.open('GET','/Avion/webresources/aero'+object, true);
  	conexion2.send();
}

elements.prototype.evento2 = function()
{
    if(conexion2.readyState == 4)
    {          
        content = JSON.parse(conexion2.responseText);
        alert(content);
    } 
}