const { Thought, User } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findONe({ _id: req.params.thoughtiD })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that iD" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create new thought
  createThought(req, res) {
    Thought.create(req.body).then((thought) => {
      return User.findOneAndUpdate(
        {
          _id: req.body.userId,
        },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );
    });
  },
};
