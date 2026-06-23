import { Request, Response } from "express";
import { MedicalRecord } from "../models/medicalRecord.js";
import { QueryFeatures } from "../utils/queryFeatures.js";

export const createMedicalRecord =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const record =
        await MedicalRecord.create(
          req.body
        );

      res.status(201).json({
        success: true,
        data: record,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to create medical record",
      });
    }
  };

  export const getMedicalRecords =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const limit =
        Number(
          req.query.limit
        ) || 10;

      const page =
        Number(
          req.query.page
        ) || 1;

      const features =
        new QueryFeatures(
          MedicalRecord.find()
            .populate("pet")
            .populate(
              "doctor"
            ),
          req.query
        )
          .sort()
          .paginate();

      const records =
        await features.query;

      const total =
        await MedicalRecord.countDocuments();

      res.status(200).json({
        success: true,
        page,
        limit,
        total,
        totalPages:
          Math.ceil(
            total / limit
          ),
        count:
          records.length,
        data: records,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch records",
      });
    }
  };

  export const getPetMedicalHistory =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const records =
        await MedicalRecord.find({
          pet: req.params.petId,
        })
          .populate("pet")
          .populate("doctor");

      res.status(200).json({
        success: true,
        count: records.length,
        data: records,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch history",
      });
    }
  };

  export const updateMedicalRecord =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const record =
        await MedicalRecord.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res.status(200).json({
        success: true,
        data: record,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to update record",
      });
    }
  };

  export const deleteMedicalRecord =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      await MedicalRecord.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        success: true,
        message:
          "Medical record deleted",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to delete record",
      });
    }
  };