//Control de inventario LIENA 2890 DE BASES X9
function main (){
    let lamparas =[];
    lamparas.push({nombre:'2890-1-BL',stock:0})
    lamparas.push({nombre:'2890-1-NE',stock:0})
    // lamparas.push({nombre:'2890-2-BL',stock:0})
    // lamparas.push({nombre:'2890-2-NE',stock:0})
    // lamparas.push({nombre:'2890-3-BL',stock:0})
    // lamparas.push({nombre:'2890-3-NE',stock:0})
    alert('Bienvenido al control de inventario de lamparas');
    let opcion = 0;
    do{
        opcion = mostrar('Ingrese 1 para tomar stock, 2 para salir');
        if(opcion == 1){
            let [mensaje, lamparasActualizadas] = tomaStock(lamparas);
            lamparas = lamparasActualizadas;
            alert(mensaje);
        }
    }while(opcion != 2);
    // let [mensaje, lamparasActualizadas] = tomaStock(lamparas);
    // lamparas = lamparasActualizadas;
    // alert(mensaje);
    alert('Gracias por usar el control de inventario de lamparas');
 
 }
 
 function mostrar(mensaje){
     return prompt (mensaje);
 }

 function tomaStock(lamparas){
    lamparas.forEach(lampara => {
        let stock = mostrar('Ingrese el stock de la lampara O presione S para saltar. '+lampara.nombre);
        console.log(stock);
        if(stock.toUpperCase() != 'S'){
            lampara.stock = parseInt(stock);
        }
    });
    let mensaje = 'El stock de las lamparas es: \n';
    lamparas.forEach(lampara => {
        mensaje += lampara.nombre + ': ' + lampara.stock + '\n';
    });
    return [mensaje, lamparas];
 }

main();