import { Request, Response } from "express";
import cloudinary from "../config/cloudinary.js";

export const uploadFile = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const base64 =
      req.file.buffer.toString(
        "base64"
      );

    const dataURI =
      `data:${req.file.mimetype};base64,${base64}`;

    const result =
      await cloudinary.uploader.upload(
        dataURI,
        {
          folder:
            "sylhet-pet-care",
        }
      );

    res.status(200).json({
      success: true,
      url: result.secure_url,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Upload failed",
    });
  }
};