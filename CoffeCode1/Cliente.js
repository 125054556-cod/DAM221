// app.mjs
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { inventarioCocina } from './Cocina.mjs';
const rl = readline.createInterface({ input, output });
const nota = [];
function mostrarMenu() {
    console.log(`\n========================= MENU DEL DIA ====================`);
    const produtosDisponibles = inventarioCocina.map((producto)=>{
        return `${producto.id}. ${producto.nombre} - $${producto.precio}`;
    });
    console.log("PRODUCTOS DISPONIBLES");
    productosDisponibles.forEach((texto)=>{
        console.log(texto);
    });
    console.log(`==============================================================`);
}
console.log(`\nPromociiones`);
inventarioCocina.forEach((producto)=>{
    if(producto.precio >= 50){
        const precioPromo = producto.precio -10;
        console.log(`\n${producto.nombre} en promocion: $${precioPromo}`);
    }
});
function mostrarResumenPedido() {
    console.log(`\n========================= TU TICKET ========================`);
    let totalPagar = 0;
    
    nota.forEach((item) => {
        console.log(`- ${item.nombreAComprar}: $${item.costo}`);
        totalPagar = totalPagar + item.costo; 
    });

    console.log(`\nEl total a pagar es: $${totalPagar}`);
    console.log(`==========================================================`);
}
async function iniciarVenta() {
    let quieroSeguirComprando = "si";

    while (quieroSeguirComprando === "si") {
        
+        mostrarMenu();

        const entradaUsuario = await rl.question('\n¿que te gustaria ordenar?:');
        const idBuscado = parseInt(entradaUsuario);
        
        const productoElegido = inventarioCocina.find((item) => item.id === idBuscado);
        
        if (productoElegido) {
            const { nombre, precio } = productoElegido; 
            console.log(`\nPreparando tu ${nombre}...`);
            nota.push({ nombreAComprar: nombre, costo: precio });
            console.log(`Agregado a tu cuenta Llevas ${nota.length} articulo`);
        } else {
            console.log(`\nEl producto ${entradaUsuario} no lo tenemos.`);
        }
        const respuesta = await rl.question('\nQuieres ordenar algo mas? (si / no): ');
        quieroSeguirComprando = respuesta.toLowerCase(); 
    }
    mostrarResumenPedido();
    console.log(`\nGracias por tu compra`);
    
    rl.close();
}

iniciarVenta();