export const inventarioCocina = [
    { id: 1, nombre: "Café Americano", categoria: "bebidas", precio: 45, disponible: true },
    { id: 2, nombre: "Capuchino", categoria: "bebidas", precio: 55, disponible: true },
    { id: 3, nombre: "Croissant con Jamón", categoria: "postres", precio: 40, disponible: true },
    { id: 4, nombre: "Cheesecake con Frutilla", categoria: "postres", precio: 70, disponible: true },
    { id: 5, nombre: "Espresso Doble", categoria: "bebidas", precio: 35, disponible: true },
    { id: 6, nombre: "Muffin con Chispas", categoria: "postres", precio: 30, disponible: true }
];

export function simularPreparacion(productoNombre) {
    return new Promise((resolve, reject) => {
        console.log(`[Cocina]: Preparando ${productoNombre}...`);
        
        setTimeout(() => {
            const probabilidad = Math.random();
            
            if (probabilidad < 0.15) {
                reject("Falta de ingredientes en inventario");
            } else if (probabilidad < 0.30) {
                reject("Error en cocina.");
            } else {
                resolve("Preparacion exitosa.");
            }
        }, 2000); 
    });
}

// FILTROS REQUERIDOS
export function buscarProductosBaratos(limitePrecio = 45) {
    return inventarioCocina.filter(producto => producto.precio <= limitePrecio);
}

export function buscarProductosCaros(limitePrecio = 45) {
    return inventarioCocina.filter(producto => producto.precio > limitePrecio);
}

export function buscarBebidas() {
    return inventarioCocina.filter(producto => producto.categoria.toLowerCase() === "bebidas");
}

export function buscarPostres() {
    return inventarioCocina.filter(producto => producto.categoria.toLowerCase() === "postres");
}

// OPERACIONES CRUD
export function agregarProducto(nuevoProducto) {
    inventarioCocina.push(nuevoProducto);
    console.log(`Producto "${nuevoProducto.nombre}" agregado.`);
}

export function editarProducto(id, nuevosDatos) {
    const producto = inventarioCocina.find(item => item.id === id);
    if (producto) {
        Object.assign(producto, nuevosDatos);
        console.log(`Producto ${id} actualizado.`);
    }
}

export function eliminarProducto(id) {
    const indice = inventarioCocina.findIndex(item => item.id === id);
    if (indice !== -1) {
        inventarioCocina.splice(indice, 1);
    }
}

export function obtenerProductos() {
    return inventarioCocina;
}