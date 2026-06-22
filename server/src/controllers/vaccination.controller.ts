import { Request, Response } from "express";
import { Vaccination } from "../models/vaccination.js";

export const createVaccination =
    async (
        req: Request,
        res: Response
    ) => {
        try {
            const vaccination =
                await Vaccination.create(
                    req.body
                );

            res.status(201).json({
                success: true,
                data: vaccination,
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                success: false,
                message:
                    "Failed to create vaccination record",
            });
        }
    };

export const getVaccinations =
    async (
        req: Request,
        res: Response
    ) => {
        try {
            const vaccinations =
                await Vaccination.find()
                    .populate("pet")
                    .populate(
                        "administeredBy"
                    );

            res.status(200).json({
                success: true,
                count:
                    vaccinations.length,
                data: vaccinations,
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                success: false,
                message:
                    "Failed to fetch vaccinations",
            });
        }
    };

export const getPetVaccinations =
    async (
        req: Request,
        res: Response
    ) => {
        try {
            const vaccinations =
                await Vaccination.find({
                    pet: req.params.petId,
                });

            res.status(200).json({
                success: true,
                count:
                    vaccinations.length,
                data: vaccinations,
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                success: false,
                message:
                    "Failed to fetch vaccination history",
            });
        }
    };

export const getUpcomingVaccinations =
    async (
        req: Request,
        res: Response
    ) => {
        try {
            const today = new Date();

            const next30Days =
                new Date();

            next30Days.setDate(
                today.getDate() + 30
            );

            const vaccinations =
                await Vaccination.find({
                    nextDueDate: {
                        $gte: today,
                        $lte: next30Days,
                    },
                }).populate("pet");

            res.status(200).json({
                success: true,
                count:
                    vaccinations.length,
                data: vaccinations,
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                success: false,
                message:
                    "Failed to fetch upcoming vaccinations",
            });
        }
    };

export const updateVaccination =
    async (
        req: Request,
        res: Response
    ) => {
        try {
            const vaccination =
                await Vaccination.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {
                        new: true,
                    }
                );

            res.status(200).json({
                success: true,
                data: vaccination,
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                success: false,
                message:
                    "Failed to update vaccination",
            });
        }
    };

export const deleteVaccination =
    async (
        req: Request,
        res: Response
    ) => {
        try {
            await Vaccination.findByIdAndDelete(
                req.params.id
            );

            res.status(200).json({
                success: true,
                message:
                    "Vaccination deleted successfully",
            });
        } catch (error) {
            console.error(error);

            res.status(500).json({
                success: false,
                message:
                    "Failed to delete vaccination",
            });
        }
    };
