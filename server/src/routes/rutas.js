var express = require('express'),
    router = express.Router(),
    conn = require('../models/conn');

router.get('/', async (req, res) => {
    const tareas = await conn.find()
    res.json(tareas)
    console.log(tareas);
})

router.get('/:id', async (req, res) => {
    const tarea = await conn.findById(req.params.id)
    res.json(tarea)
})


router.post('/', async (req, res) => {
    const tarea = new conn(req.body)
    await tarea.save()
    res.json({
        status: 'tarea guardada'
    })
})

router.put('/:id', async (req, res) => {
    await conn.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status: 'tarea actualizada'
    })
    console.log(req.params);
})

router.delete('/:id', async (req, res) => {
    await conn.findByIdAndRemove(req.params.id)
    res.json({
        status: 'tarea eliminada'
    })
})

module.exports = router // devuelve un objeto