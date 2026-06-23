import { Request, Response } from "express";
import { Doctor } from "../models/Doctor.js";
import { QueryFeatures } from "../utils/queryFeatures.js";

export const createDoctor = async (
  req: Request,
  res: Response
) => {
  try {
    const doctor = await Doctor.create(req.body);

    res.status(201).json({
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create doctor",
    });
  }
};

export const getAllDoctors = async (
  req: Request,
  res: Response
) => {
  try {
    const limit =
      Number(req.query.limit) || 10;

    const page =
      Number(req.query.page) || 1;

    const features = new QueryFeatures(
      Doctor.find(),
      req.query
    )
      .search([
        "name",
        "specialization",
        "email",
      ])
      .filter()
      .sort()
      .paginate();

    const doctors =
      await features.query;

    const total =
      await Doctor.countDocuments();

    res.status(200).json({
      success: true,
      page,
      limit,
      total,
      totalPages:
        Math.ceil(total / limit),
      count: doctors.length,
      data: doctors,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch doctors",
    });
  }
};

export const getDoctorById = async (
  req: Request,
  res: Response
) => {
  const doctor = await Doctor.findById(
    req.params.id
  );

  if (!doctor) {
    return res.status(404).json({
      success: false,
      message: "Doctor not found",
    });
  }

  res.status(200).json({
    success: true,
    data: doctor,
  });
};

export const updateDoctor = async (
  req: Request,
  res: Response
) => {
  const doctor =
    await Doctor.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

  if (!doctor) {
    return res.status(404).json({
      success: false,
      message: "Doctor not found",
    });
  }

  res.status(200).json({
    success: true,
    data: doctor,
  });
};

export const deleteDoctor = async (
  req: Request,
  res: Response
) => {
  const doctor =
    await Doctor.findByIdAndDelete(
      req.params.id
    );

  if (!doctor) {
    return res.status(404).json({
      success: false,
      message: "Doctor not found",
    });
  }

  res.status(200).json({
    success: true,
    message:
      "Doctor deleted successfully",
  });
};