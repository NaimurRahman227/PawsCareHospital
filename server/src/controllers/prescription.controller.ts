import { Request, Response } from "express";
import { Prescription } from "../models/Prescription.js";
import { QueryFeatures } from "../utils/queryFeatures.js";

export const createPrescription = async (
  req: Request,
  res: Response
) => {
  try {
    const prescription =
      await Prescription.create(req.body);

    res.status(201).json({
      success: true,
      data: prescription,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to create prescription",
    });
  }
};

export const getPrescriptions =
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
          Prescription.find()
            .populate("pet")
            .populate(
              "doctor"
            ),
          req.query
        )
          .sort()
          .paginate();

      const prescriptions =
        await features.query;

      const total =
        await Prescription.countDocuments();

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
          prescriptions.length,
        data: prescriptions,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch prescriptions",
      });
    }
  };

export const getPrescriptionById =
  async (
    req: Request,
    res: Response
  ) => {
    const prescription =
      await Prescription.findById(
        req.params.id
      )
        .populate("pet")
        .populate("doctor")
        .populate("appointment");

    if (!prescription) {
      return res.status(404).json({
        success: false,
        message:
          "Prescription not found",
      });
    }

    res.status(200).json({
      success: true,
      data: prescription,
    });
  };

export const updatePrescription =
  async (
    req: Request,
    res: Response
  ) => {
    const prescription =
      await Prescription.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    if (!prescription) {
      return res.status(404).json({
        success: false,
        message:
          "Prescription not found",
      });
    }

    res.status(200).json({
      success: true,
      data: prescription,
    });
  };

export const deletePrescription =
  async (
    req: Request,
    res: Response
  ) => {
    const prescription =
      await Prescription.findByIdAndDelete(
        req.params.id
      );

    if (!prescription) {
      return res.status(404).json({
        success: false,
        message:
          "Prescription not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Prescription deleted successfully",
    });
  };