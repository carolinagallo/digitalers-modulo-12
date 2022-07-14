let usuario=prompt("Ingrese su usuario")
let contraseña
if (usuario=="admin"){
    contraseña=prompt("Ingrese su contraseña")
        if (contraseña=="1234"){
            alert("Bienvenido")
        }       
        else{ alert("Error en contraseña")}
}       
else{ alert("Error en usuario")}