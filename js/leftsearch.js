elements = function()
{
    conexion1 = "";

    content = "";
}

elements.prototype.conexion = function()
{
    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange = function() {
        elements.prototype.firstconexion();
    };
    conexion1.open('GET', '/Avion/webresources/aero', true);
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
}