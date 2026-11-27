export const guardarDatos = async(clave, valor) =>{
    try {
        const jsonValor = JSON.stringify(valor);
        localStorage.setItem(clave,jsonValor);
    } catch (error) {
        console.error("Error al guardar",error);
    }
};

export const obtenerDatos = async(clave)=>{
    try {
        const jsonValor = localStorage.getItem(clave); 
        return JSON.parse(jsonValor);
    } catch (error) {
        console.log("No existe el dato", error);
    }

};

export const eliminarDatos = async (clave)=>{
    try {
        localStorage.removeItem(clave);
    } catch (error) {
        console.log(error);
    }
};