import { Router } from 'express'
import AWS from 'aws-sdk'
import config from '../config.js'

const router = Router()

const spacesEndpoint = new AWS.Endpoint(`https://${config.Endpoint}`)

const s3 = new AWS.S3({
    endpoint: spacesEndpoint
})

router.post('/api/images/upload', async (req, res) => {

    const { image } = req.files
    console.log(image)

    try {
        const uploadObject = await s3.putObject({
            ACL: 'public-read',
            Bucket: config.BucketName,
            Body: image.data,
            Key: image.name
        }).promise()
        const urlImage = `https://${config.BucketName}.${config.Endpoint}/${image.name}`; // Corrección
        console.log(uploadObject)
        console.log(urlImage)
    } catch (error) {
        console.log(error);
        res.send(error)
    }

    return res.json('Recibido ')
})

router.get('/api/images', async (req, res) => {

})

router.get('/api/images/:id', async (req, res) => {

})

router.delete('/api/images/:id', async (req, res) => {

})

export default router
