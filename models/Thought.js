const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const userSchema = require("./User");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userName: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});
