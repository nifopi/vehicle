const express = require('express');
const mongodb = require('mongodb');
var ObjectId = require('mongodb').ObjectID;
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;

// conexão com o banco mongodb
async function loadPostsCollection(table) {
    const DATABASE_NAME = 'vehicle',
        URL = `mongodb://vehicle:vehicle2019@kamino.mongodb.umbler.com:35413/${DATABASE_NAME}`
    const client = new MongoClient(URL, { useNewUrlParser: true })
    var db = null
    try {
        await client.connect()
        db = client.db(DATABASE_NAME).collection(table)
    } catch (err) {
        console.log(err.stack)
    }
    return db
}
// Api buscar dados
router.get('/:table', async (req, res) => {
    // verifica se é todos dados da tabelas especificada
    const posts = await loadPostsCollection(req.params.table);
    res.send(await posts.find().toArray());
})
// Api inserir dados
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection(req.body.table);
    await posts.insertOne(req.body.query, (err, result) => {
        if (err) res.send(err)
        res.send(result.result)
    });
})
// Api alterar dados
router.put('/:table,:id', async (req, res) => {
    const posts = await loadPostsCollection(req.params.table);
    res.send(await posts.updateOne({ _id: ObjectId(req.params.id) }, { $set: req.body }))
})
// Api deletar dados
router.delete('/:table,:id', async (req, res) => {
    const posts = await loadPostsCollection(req.params.table);
    res.send(await posts.deleteOne({ _id: ObjectId(req.params.id) }))
})

module.exports = router;