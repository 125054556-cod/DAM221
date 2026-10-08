export const listaDePedidos = [];

export function agregarPedido(producto, precio) {
    // El pedido inicia con estado 'recibido'
    listaDePedidos.push({ nombreAComprar: producto, costo: precio, estado: 'recibido' });
    console.log(`\n[Caja]: Se registro ${producto} con un costo inicial de $${precio}.`);
}

export function actualizarEstadoPedido(producto, nuevoEstado) {
    // Busca el último pedido de ese producto que no esté finalizado
    const pedido = listaDePedidos.findLast(p => p.nombreAComprar === producto && p.estado !== 'entregado' && p.estado !== 'cancelado');
    if (pedido) {
        pedido.estado = nuevoEstado;
        console.log(`[Cliente - Estado]: Tu pedido de '${producto}' esta *** ${nuevoEstado.toUpperCase()} ***`);
    }
}

export function notificarPedidoListo(producto) {
    console.log(`Tu pedido de ${producto} esta LISTO para entregarse`);
}

export function notificarPedidoCancelado(producto, razon) {
    console.log(`Tu pedido de ${producto} fue CANCELADO. Motivo: ${razon}`);    
    const pedido = listaDePedidos.findLast(p => p.nombreAComprar === producto && p.estado === 'cancelado');
    if (pedido) {
        pedido.costo = 0; 
    }
}

export function calcularTotales(tasaIVA = 0.16) {
    const subtotal = listaDePedidos.reduce((acumulado, { costo }) => acumulado + costo, 0);
    const iva = subtotal * tasaIVA;
    const total = subtotal + iva;

    return {
        subtotal,
        iva,
        total
    };
}