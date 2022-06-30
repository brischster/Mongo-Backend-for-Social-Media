const { Schema, model } = require("mongoose");
// const thoughtSchema = require("./Thought");
// const reactionSchema = require("./Reaction");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: "Email address is required",
    unique: true,
    // validate: [validateEmail, "Please enter a valid email address"],
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please enter a valid email address",
    // ],
  },
  //   thoughts: [thoughtSchema],
  //   friends: [
  //     {
  //       type: Number,
  //       ref: "User",
  //     },
  //   ],
  // },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  //   id: false,
});

//Virtual for friendCount
// userSchema.virtual("friendCount").get(function () {
//   return this.friends.length;
// });

const User = model("user", userSchema);

// User.create({
//   username: "Tom Ace",
//   email: "tom@ace.com",
// });

// User.create({
//   username: "Karl McDonald",
//   email: "k@micky.com",
// });

// User.create({
//   username: "Erinn McGrath",
//   email: "erinn@cooks.com",
// });

module.exports = User;
