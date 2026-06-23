import { Request, Response } from "express";
import { Pet } from "../models/Pet.js";
import { AuthRequest } from "../middleware/auth.middleware.js";
import { QueryFeatures } from "../utils/queryFeatures.js";

// CREATE
export const createPet = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const pet = await Pet.create({
      ...req.body,
      owner: req.user?.userId,
    });

    res.status(201).json({
      success: true,
      data: pet,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create pet",
    });
  }
};

// GET ALL PETS OF LOGGED IN USER
export const getMyPets = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    const limit =
      Number(req.query.limit) || 10;

    const page =
      Number(req.query.page) || 1;

    const features = new QueryFeatures(
      Pet.find({
        owner: req.user?.userId,
      }),
      req.query
    )
      .search([
        "name",
        "breed",
        "species",
      ])
      .filter()
      .sort()
      .paginate();

    const pets =
      await features.query;

    const totalPets =
      await Pet.countDocuments({
        owner: req.user?.userId,
      });

    res.status(200).json({
      success: true,
      page,
      limit,
      total: totalPets,
      totalPages: Math.ceil(
        totalPets / limit
      ),
      count: pets.length,
      data: pets,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch pets",
    });
  }
};

// GET SINGLE PET
export const getPetById = async (
  req: AuthRequest,
  res: Response
) => {
  const pet = await Pet.findOne({
    _id: req.params.id,
    owner: req.user?.userId,
  });

  if (!pet) {
    return res.status(404).json({
      success: false,
      message: "Pet not found",
    });
  }

  res.status(200).json({
    success: true,
    data: pet,
  });
};

// UPDATE PET
export const updatePet = async (
  req: AuthRequest,
  res: Response
) => {
  const pet = await Pet.findOneAndUpdate(
    {
      _id: req.params.id,
      owner: req.user?.userId,
    },
    req.body,
    {
      new: true,
    }
  );

  if (!pet) {
    return res.status(404).json({
      success: false,
      message: "Pet not found",
    });
  }

  res.status(200).json({
    success: true,
    data: pet,
  });
};

// DELETE PET
export const deletePet = async (
  req: AuthRequest,
  res: Response
) => {
  const pet = await Pet.findOneAndDelete({
    _id: req.params.id,
    owner: req.user?.userId,
  });

  if (!pet) {
    return res.status(404).json({
      success: false,
      message: "Pet not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Pet deleted successfully",
  });
};