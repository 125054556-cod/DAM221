// app.mjs
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { inventarioCocina } from './Cocina.mjs';
const rl = readline.createInterface({ input, output });
const nota = [];

async function iniciarVenta() {
    console.log(`\n=========================MEN DEL DIA=========================`);
    
    inventarioCocina.forEach((producto) => {
        console.log(`${producto.id}. ${producto.nombre} - $${producto.precio}`);
    });
    const entradaUsuario = await rl.question('\nQue te guataria ordenar?');
    const idBuscado = parseInt(entradaUsuario);
    const productoElegido = inventarioCocina.find((item) => item.id === idBuscado);
    if (productoElegido) {
        const { nombre, precio } = productoElegido; 
        console.log(`\nPreparando tu ${nombre}...`);
        nota.push({ nombreAComprar: nombre, costo: precio });
        console.log('\nEl pedido es:');
        console.log(nota);
    } else {
        console.log(`\nEl producto ${entradaUsuario} no existe en el inventario.`);
    }
    }
    rl.close();
iniciarVenta();