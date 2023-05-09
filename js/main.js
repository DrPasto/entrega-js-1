// alert("bienvenido al sitio")
let savedpin = "12345";
let login = false;
for(let i=5; i>0; i--){
    let loginpin = prompt('ingresa tu pin, tenes ' + (i)+ ' oportunidades')
    if(loginpin===savedpin){
        alert("bienvenido al sitio");
        login = true;
        break;
    }else{
        alert("pin erroneo")
    }
}

if(login){
    let money = 1000;
    let opcion = prompt(
        "elige una opcion:\n1- saldo \n2- comprar \n3- vender \nPresiona X para salir"
    );
    while (opcion !="x"){
        switch(opcion){
            case "1":
                alert("tu saldo es: $"+ money);
                break;
            case "2":
                }
        
    }
    
}else{
    alert("El sitio a sido bloqueado. Comunicate con un administrador")
}


