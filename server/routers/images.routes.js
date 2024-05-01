import { Router } from 'express'
import AWS from 'aws-sdk'
import config from '../config.js'
import Image from '../models/images.js'

const router = Router()

const spacesEndpoint = new AWS.Endpoint(`https://${config.Endpoint}`)

const s3 = new AWS.S3({
    endpoint: spacesEndpoint
})

router.post('/api/images/upload', async (req, res) => {

    const { image } = req.files
    

    try {
        await s3.putObject({
            ACL: 'public-read',
            Bucket: config.BucketName,
            Body: image.data,
            Key: image.name
        }).promise()
        
        const urlImage = `https://${config.BucketName}.${config.Endpoint}/${image.name}`; // Corrección
        const imageInf =new Image({
            url: urlImage,
            key: image.name,
            descripcion: req.body.descripcion,
            price: req.body.price,
            nameUser: req.body.nameUser,
            available: req.body.available
        })
        await imageInf.save();
        //console.log(uploadObject)
        return res.json(imageInf)

    } catch (error) {
        console.log(error);
        res.send(error)
    }

   // return res.json('Recibido ')
})

router.get('/api/images', async (req, res) => {
    const imageGet = await Image.find()
    return res.json(imageGet)
})

router.get('/api/images/:id', async (req, res) => {
    const image=await Image.findById(req.params.id)
    return res.json(image)

})

router.delete('/api/images/:id', async (req, res) => {
    const deleteImage=await Image.findByIdAndDelete(req.params.id)

    await s3.deleteObject({
        Bucket:config.BucketName,
        Key:deleteImage.key

    }).promise();
    
    
})

export default router
