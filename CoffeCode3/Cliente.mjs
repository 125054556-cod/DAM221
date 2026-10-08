import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { inventarioCocina, buscarProductosCaros, simularPreparacion } from './Cocina.mjs';
import { agregarPedido, listaDePedidos, calcularTotales, actualizarEstadoPedido, notificarPedidoListo, notificarPedidoCancelado } from './caja.mjs';
const rl = readline.createInterface({ input, output });
const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));
function mostrarMenu() {
    console.log(`\n========================= MENÚ DEL DÍA ====================`);
    const productosDisponibles = inventarioCocina.map((producto) => {
        return `${producto.id}. ${producto.nombre} (${producto.categoria}) - $${producto.precio}`;
    });
    console.log("PRODUCTOS DISPONIBLES:");
    productosDisponibles.forEach((texto) => {
        console.log(texto);
    });
    console.log(`==============================================================`);
}
function mostrarPromociones() {
    console.log(`\n====================== PROMOCIONES ======================`);
    const productosEnPromo = buscarProductosCaros(49);

    if (productosEnPromo.length > 0) {
        productosEnPromo.forEach((producto) => {
            const precioPromo = producto.precio - 10;
            console.log(`• ${producto.nombre} en promocion: $${precioPromo} (Precio regular: $${producto.precio})`);
        });
    } else {
        console.log("No hay promociones por el momento");
    }
}
function mostrarResumenPedido() {
    console.log(`\n========================= TU TICKET ========================`);
    listaDePedidos.forEach((item) => {
        // Indica visualmente si el producto no se cobró
        const nota = item.estado === 'cancelado' ? " (CANCELADO - No cobrado)" : "";
        console.log(`- ${item.nombreAComprar}${nota}: $${item.costo}`);
    });

    const { subtotal, iva, total } = calcularTotales();

    console.log(`----------------------------------------------------------`);
    console.log(`Subtotal:    $${subtotal.toFixed(2)}`);
    console.log(`IVA (16%):   $${iva.toFixed(2)}`);
    console.log(`Total pagar: $${total.toFixed(2)}`);
    console.log(`==========================================================`);
}

async function iniciarVenta() {
    mostrarPromociones();

    let quieroSeguirComprando = "si";

    while (quieroSeguirComprando === "si") {
        mostrarMenu();

        const entradaUsuario = await rl.question('\n¿Que te gustaria ordenar?');
        const idBuscado = parseInt(entradaUsuario);
        const productoElegido = inventarioCocina.find((item) => item.id === idBuscado);
        if (productoElegido) {
            const precioFinal = productoElegido.precio >= 50 ? productoElegido.precio - 10 : productoElegido.precio;
            agregarPedido(productoElegido.nombre, precioFinal);
            actualizarEstadoPedido(productoElegido.nombre, 'recibido');
            await esperar(1000);
            actualizarEstadoPedido(productoElegido.nombre, 'preparando');
            try {
                await simularPreparacion(productoElegido.nombre);
                actualizarEstadoPedido(productoElegido.nombre, 'empacado');
                await esperar(1000);
                actualizarEstadoPedido(productoElegido.nombre, 'entregado');
                notificarPedidoListo(productoElegido.nombre);
            } catch (error) {
                actualizarEstadoPedido(productoElegido.nombre, 'cancelado');
                notificarPedidoCancelado(productoElegido.nombre, error);
            }
        } else {
            console.log(`\nEl producto con ID "${entradaUsuario}" no existe en el menu`);
        }
        const respuesta = await rl.question('\n¿Quieres ordenar otra cosa? (si / no): ');
        quieroSeguirComprando = respuesta.toLowerCase().trim();
    }

    mostrarResumenPedido();
    console.log(`\n¡Gracias por tu compra!`);

    rl.close();
}

iniciarVenta();