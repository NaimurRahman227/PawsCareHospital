import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
  {
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      required: true,
    },

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

    diagnosis: {
      type: String,
      required: true,
      trim: true,
    },

    medicines: [
      {
        name: {
          type: String,
          required: true,
        },

        dosage: {
          type: String,
          required: true,
        },

        duration: {
          type: String,
          required: true,
        },
      },
    ],

    advice: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const Prescription = mongoose.model(
  "Prescription",
  prescriptionSchema
);