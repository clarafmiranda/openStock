const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const App = require("./App.model");

const ratingSchema = new Schema(
  {
    value: Number,
    app: {
        type: Schema.Types.ObjectId,
        ref: App,
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: User,
    // }
  },
    {
        timestamps: true, 
    }
);

const Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;