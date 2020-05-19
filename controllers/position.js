const Position = require('../models/Position')
const errorHandler = require('../utils/errorHandler')

module.exports.getByCategoryId = async function(req, res){
    try{
        const positions = Position.find({
            category: req.params.categoryId,
            user: req.user.id
        })
        setTimeout(() => {
            res.sstatus(200).json(positions)
        }, 2000)

    }
    catch(e)
    {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res){
    try{
        const position = await new Position({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save()
        res(201).json(position)
    }
    catch(e)
    {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res){
    try{
        await Position.remove({
            _id: req.params.id
        })
        res.status(200).json({message: 'Position was removed'})
    }
    catch(e)
    {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res){
    try{
        const position = await Position.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: req.body
        },
        {new: true})
        res.status(200).json(position)
    }
    catch(e)
    {
        errorHandler(res, e)
    }
}

