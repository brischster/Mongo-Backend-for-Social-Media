const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
// const userSchema = require("./User");

const thoughtSchema = new Schema(
  {
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
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//Virtual for reactionCount
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reaction.length;
});

const Thought = model("thoughts", thoughtSchema);

// Thought.create({
//   thoughtText: "very interesting idea",
//   createdAt: new Date(),
//   userName: "Tom Ace",
// });

// Thought.create({
//   thoughtText: "I would not do it if I were you",
//   createdAt: new Date(),
//   userName: "Karl MacDonald",
// });

// Thought.create({
//   thoughtText: "Well if I were you and you were me I would use your body",
//   createdAt: new Date(),
//   userName: "Erinn Mcgrath",
// });

module.exports = Thought;
