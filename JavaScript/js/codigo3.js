function procesar(){

    var hr = parseInt(document.getElementById("horas").value);
    var min = parseInt(document.getElementById("minutos").value);
    var seg = parseInt(document.getElementById("segundos").value);
    var valor = parseInt(document.getElementById("segOp").value);
    opc = document.getElementById("lstope").value;

    var nuevahora = 0;
    nuevahora += seg;
    nuevahora += min*60;
    nuevahora += hr*3600;

    if(opc=="+"){
        nuevahora += valor;
        const horasFinal    = (Math.floor(nuevahora / 3600)).toString();
        const minutosFinal  = (Math.floor(nuevahora / 60 )%60).toString();
        const segundosFinal = (Math.round(nuevahora % 60)).toString();    
        var cadena = horasFinal+":"+minutosFinal+":"+segundosFinal;
        
    }
    if(opc=="-"){
        nuevahora -= valor;
        const horasFinal    = (Math.floor(nuevahora / 3600)).toString();
        const minutosFinal  = (Math.floor(nuevahora / 60 )%60).toString();
        const segundosFinal = (Math.round(nuevahora % 60)).toString();   
        var cadena = horasFinal+":"+minutosFinal+":"+segundosFinal;
    }

    alert(cadena)
    
}





    
