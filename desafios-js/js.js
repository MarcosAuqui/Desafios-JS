
let computadora = prompt("Bienvenido a nuestro sistema de ayuda para presupuestos de computadoras gamers.\nPor el momento solo contamos con servicio para componentes de gama baja.\n¿Quiere que su computadora sea gama: baja / media / alta?")
while(computadora.toLowerCase() == "baja"){
    let mother = prompt("Elija el modelo de motherboard: a320 o b450")
    computadora = alert("El procesador sea el Ryzen 5 5600g")
    let procesador = "Ryzen 5 5600g"
    let almacenamiento = prompt("Elija entre un HDD o SDD")
    let ram = prompt("Elija entre 8gb o 16gb")
    computadora = alert("La fuente sea una generica de 600w")
    let Fuente = "Fuente generica de 600w"
    let gabinete = "El gabinete sera el Knight Black Fan RGB"
    
    computadora = prompt(`El resultado final seria este:\nMotherBoard:${mother}\nProcesador:${procesador}\nAlmacenamiento:${almacenamiento}\nRam:${ram}\nFuente:${Fuente}\nGabinete:${gabinete}\n¿Quiere confirmar? si/no`)
    if(computadora.toLowerCase() == "si"){
        alert("Muchas gracias por elegirnos.")
    }
}



