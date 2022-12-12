function calcularRetiro(){
    var valor = parseInt(document.getElementById("txtn1").value);
    if (valor % 5000 == 0){
        var contador = valor;
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        var e = 0;
        while (contador != 0){
            if (contador >= 100000){
                a ++;
                contador = contador - 100000;
            }else if (contador >= 50000){
                b ++;
                contador = contador - 50000;
            }else if (contador >= 20000){
                c ++;
                contador = contador - 20000;
            }else if (contador >= 10000){
                d ++;
                contador = contador - 10000;
            }else if (contador >= 5000){
                e ++;
                contador = contador - 5000;
            }
        }
        var cadena = "";
        if (a > 0){cadena = cadena + a + " billetes de 100000 \n";}
        if (b > 0){cadena = cadena + b + " billetes de 50000 \n ";}
        if (c > 0){cadena = cadena + c + " billetes de 20000 \n";}
        if (d > 0){cadena = cadena + d + " billetes de 10000 \n";}
        if (e > 0){cadena = cadena + e + " billetes de 5000 \n";}
        cadena = cadena + "el valor retirado es : " + valor;
        alert(cadena)
    }else{
        alert("no se puede retirar ese valor")
    }
}