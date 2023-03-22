const validarInventario = (req) => {
    const validaciones = [];

    if(!req.body.serial){
        validaciones.push('Serial es requerido');
    }
    if(!req.body.modelo){
        validaciones.push('modelo es requerido');
    }
    if(!req.body.descripcion){
        validaciones.push('descripcion es requerido');
    }
    if(!req.body.foto){
        validaciones.push('foto es requerido');
    }
    if(!req.body.fechaCompra){
        validaciones.push('fecha compra es requerido');
    }
    if(!req.body.precio){
        validaciones.push('precio es requerido');
    }
    if(!req.body.usuario){
        validaciones.push('usuario es requerido');
    }
    if(!req.body.marca){
        validaciones.push('marca es requerido');
    }
    if(!req.body.tipoEquipo){
        validaciones.push('tipo equipo es requerido');
    }
    if(!req.body.estadoEquipo){
        validaciones.push('estado equipo es requerido');
    }
    return validaciones;

}

module.exports = {
    validarInventario,
}