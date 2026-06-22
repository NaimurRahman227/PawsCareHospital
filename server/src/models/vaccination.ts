import mongoose from "mongoose";

const vaccinationSchema = new mongoose.Schema(
  {
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },

    vaccineName: {
      type: String,
      required: true,
    },

    doseNumber: {
      type: Number,
      default: 1,
    },

    administeredDate: {
      type: Date,
      required: true,
    },

    nextDueDate: {
      type: Date,
      required: true,
    },

    administeredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    manufacturer: {
      type: String,
    },

    batchNumber: {
      type: String,
    },

    notes: {
      type: String,
    },

    status: {
      type: String,
      enum: [
        "Completed",
        "Due",
        "Overdue"
      ],
      default: "Completed",
    },
  },
  {
    timestamps: true,
  }
);

export const Vaccination =
  mongoose.model(
    "Vaccination",
    vaccinationSchema
  );