const { validationResult } = require('express-validator');

class MusicController {
    constructor({ music }) {
        this.musicService = music
    }

    async findOne(req, res, next){
        const { id } = req.params

        let music;

        try{
            music = await this.musicService.findOne({
                query: {
                    _id: id
                }
            })
        }
        catch(e){
            return next(e)
        }

        return res.json({
            music
        })
    }

    async findAll(req, res, next){
        
        let musicItems

        const { category } = req.query

        try{
            musicItems = typeof(category) === 'undefined' ? 
            await this.musicService.findMany({}) : 
            await this.musicService.findMany({
                query: {
                    category
                }
            }) 
        }
        catch(e){
            return next(e)
        }

        return res.json({
            musicItems
        })
    }

    async findByCategory(req, res, next) {
        let musicItems;
        const { category } = req.body;

        try{
            musicItems = await this.musicService.findMany({
                query:{
                    category
                }
            })
        }
        catch(e){
            return next(e)
        }
        return res.json({
            musicItems
        })
    }

    async createOne(req, res, next){
        
        let hike

        try{
            hike = await this.musicService.createOne({
                query: {
                    ...req.body
                }
            })
        }
        catch(e){
            return next(e)
        }

        return res.json({
            hike
        })
    }

    async createMany(req, res, next){
       const { list } = req.body
       
       let musics;
       try{
            musics = await this.musicService.createMany({
                list
            })
       }
       catch(e){
           return next(e)
       }

       return res.json({
        musics
       })
    }

    async updateOne(req, res, next){

    }
}

module.exports = MusicController;
