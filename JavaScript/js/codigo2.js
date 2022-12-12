function procesar(){

    var hr = parseInt(document.getElementById("horas").value);
    var min = parseInt(document.getElementById("minutos").value);
    var seg = parseInt(document.getElementById("segundos").value);

    var horaAux=(parseInt(hr,10))*15;
    var minutosAux=(parseInt(min,10))*0.25;
    var segundosAux=(parseInt(seg,10))*0.00416666667;

    var grados=horaAux+minutosAux+segundosAux;
    var minutos=grados*60;
    const segundos=minutos*60;

    var cadena= "Resultado :\n"+grados+"° \n"+minutos+"'\n" +segundos+"''\n";

    alert(cadena)
    
}