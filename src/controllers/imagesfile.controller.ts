import { Request, Response } from "express"
import { ImageDocument } from "../models/image.model"
import { getAllImage, createImage } from "../services/image.service"
const { cloudinary } = require('./../../config/cloudinary')

export const uploadImagesController = async (req: Request, res: Response) => {
    try {
        const { fileUpload, title } = req.body
        const uploadResource = await cloudinary.uploader.upload(fileUpload, {
            upload_preset: 'ml_default'
        })
        const modelUpload: any = {
            title,
            urlImage: uploadResource.url
        }
        const imageUpload = await createImage(modelUpload)
        return res.status(201).json({
            "Error": false,
            "Message": "Success",
            "obj": imageUpload
        })
    } catch (error) {
        return res.status(201).json({
            "Error": true,
            "Message": "Fail",
            "obj": error
        })
    }
}

export const getAllImageController = async (req: Request, res: Response) => {
    const Images = await getAllImage({ valid: true })
    return res.status(200).json({
        "Error": false,
        "Message": "Query Success",
        "object": Images
    })
}