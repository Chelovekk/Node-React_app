const{Router} = require('express')
const Photo = require('../models/Photo')
const PhotoNew = require('../models/PhotoNew')
const PhotoLightbox = require('../models/PhotoLightbox')

const router = Router()


router.post('/send', async(req,res)=>{
    try {
        const {drive, tip} = req.body
        const photo = new Photo({drive:drive, tip:tip})
        await photo.save()
        res.status(201).json({messege:"Готово"})
    } catch (e) {
        console.log(e)
        res.status(500).json({messege:"Ошибка"})
    }
})
router.post('/sendlightbox', async(req,res)=>{
    try {
        const {src, tip, number} = req.body
        const photo = new PhotoLightbox({src:src, tip:tip, number:number})
        console.log(photo)
        await photo.save()
        res.status(201).json({messege:"Готово"})
    } catch (e) {
        console.log(e)
        res.status(500).json({messege:"Ошибка"})
    }
})
router.get('/photo', async(req,res)=>{
    try {
        const tip = req.headers.tip;
        const photos = await Photo.find({tip:tip})
        res.json(photos)
    } catch (e) {
        
    }
})
router.get('/lightbox', async(req,res)=>{
    try {
        const tip = req.headers.tip;
        const photos = await PhotoLightbox.find({tip:tip})
        res.json(photos)
    } catch (e) {
        
    }
})


module.exports = router 