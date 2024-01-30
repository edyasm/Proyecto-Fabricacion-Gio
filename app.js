//Control de inventario LIENA 2890 DE BASES X9
function main (){
    // Creo el array principal y le agrego algunas lamparas
    let lamparas =[];
    lamparas.push({nombre:'2890-1-BL',stock:0})
    lamparas.push({nombre:'2890-1-NE',stock:0})
    lamparas.push({nombre:'2890-2-BL',stock:0})
    lamparas.push({nombre:'2890-2-NE',stock:0})
    lamparas.push({nombre:'2890-3-BL',stock:0})
    lamparas.push({nombre:'2890-3-NE',stock:0})
    alert('Bienvenido al control de inventario de lamparas');
    let opcion = 0;
    // inicio el bucle para que el usuario pueda elegir que hacer
    do{
        opcion = mostrar('Ingrese 1 para tomar stock, 2 para agregar una lampara, 3 para mostrar stock actual y 4 para salir');
        if(opcion == 1){
             
            lamparas = tomaStock(lamparas);
            let mensaje = crearMensajeResultado(lamparas);
            alert(mensaje);
        }
        if(opcion == 2){
            lamparas = agregarLampara(lamparas);
            let mensaje = crearMensajeResultado(lamparas);
            alert(mensaje);
        }
        if(opcion == 3){
            let mensaje = crearMensajeResultado(lamparas);
            alert(mensaje);
        }
    }while(opcion != 4);
    alert('Gracias por usar el control de inventario de lamparas');
 
 }
//  muestra un mensaje al usuario y espera que ingrese un valor
 function mostrar(mensaje){
     return prompt (mensaje);
 }

//  toma el stock nuevo de las lamparas
 function tomaStock(lamparas){
    lamparas.forEach(lampara => {
        let stock = mostrar('Ingrese el stock de la lampara O presione S para saltar. '+lampara.nombre);
        
        if(stock.toUpperCase() != 'S'){
            lampara.stock = parseInt(stock);
        }
    });
    
    return  lamparas;
 }

//  crea un mensaje con el stock actual de las lamparas
 function crearMensajeResultado(lamparas){
    let mensaje = 'El stock de las lamparas es: \n';
    lamparas.forEach(lampara => {
        mensaje += lampara.nombre + ': ' + lampara.stock + '\n';
    });
    return mensaje;
 }

//  agrega una lampara al inventario
 function agregarLampara(lamparas){
    let nombre = mostrar('Ingrese el nombre de la lampara');
    let stock = mostrar('Ingrese el stock de la lampara');
    lamparas.push({nombre:nombre,stock:stock});
    return lamparas;
 }


main();