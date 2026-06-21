import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },

    weight: {
      type: Number,
    },

    temperature: {
      type: Number,
    },

    symptoms: [
      {
        type: String,
      },
    ],

    diagnosis: {
      type: String,
      required: true,
    },

    treatment: {
      type: String,
    },

    notes: {
      type: String,
    },

    visitDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const MedicalRecord =
  mongoose.model(
    "MedicalRecord",
    medicalRecordSchema
  );