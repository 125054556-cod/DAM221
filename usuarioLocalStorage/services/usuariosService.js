export const validarDatos = (nombre,edad)=>{
    if (!nombre) {
        return {valido:false,mensaje: "No pueden estar vacios los campos"};
    }
    if(!edad === 0 || !edad === null){
        return {valido:false, mensaje: "no puede estar vacio el campo"}
    }
    if(!edad || isNaN(edad) || Number(edad) < 0){
        return {valido: false, mensaje: "Esta vacio el campo o no es un numero"}
    }
    return {valido:true, mensaje:"Validado"};
};