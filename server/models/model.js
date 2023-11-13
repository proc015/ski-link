const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/skilink";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database using Mongoose");
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  resort: {
    type: String,
    enum: ["Arapahoe", "Aspen", "Breckenridge", "Keystone", "Vail"],
    required: true,
  },
  level: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "PENDING",
  },
});

const Lesson = mongoose.model("Lesson", lessonSchema);

const ratingSchema = new Schema({
    name: {
        type: String,
        required: true
        },
    score: {
            type: Number,
            required: true
            },
    comment: {
      type: String,
      required: true
      },
        });

const Rating = mongoose.model('Rating', ratingSchema);


module.exports = { Lesson, Rating };
