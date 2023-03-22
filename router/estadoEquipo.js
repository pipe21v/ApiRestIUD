const { Router } = require ('express');
const router = Router();
const EstadoEquipo = require ('../models/EstadoEquipo');
const { validarEstadoEquipo } = require('../helpers/validar-estadoEquipo');

router.post('/',async function (req, res){
    try{
        const validaciones = validarEstadoEquipo(req);

        if (validaciones.length > 0){
            return res.status(400).send(validaciones);
        }

        let estadoEquipo = new EstadoEquipo();
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaCreacion = new Date ();
        estadoEquipo.fechaActualizacion = new Date();
        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo);
    }catch(error){
        console.log(error);
        res.status(500).send('ocurrio un error');
    }
});

router.get('/',async function (req, res){
    try{
        const tipos = await EstadoEquipo.find();
        res.send(tipos);
    }catch(error){
        console.log(error);
        res.status(500).send('ocurrio un error');
    }
});

router.put('/:estadoEquipoId',async function (req, res){
    try{
        let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId);
        if(!EstadoEquipo){
            return res.status(400).send('No existado estado')
        }
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaActualizacion = new Date();
        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo);
    }catch(error){
        console.log(error);
        res.status(500).send('ocurrio un error');
    }
});

module.exports = router;