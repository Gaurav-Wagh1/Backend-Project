import mongoose from "mongoose";

const subscriptionSchema = mongoose.Schema({

    // who is subscribing;
    subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    // to whom subscriber is subscribing;
    channel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

export const Subscription = await mongoose.model("Subscription", subscriptionSchema);