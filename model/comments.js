let mongoose = require("mongoose");

let commentSchema = mongoose.Schema({
    name: String,
    email: String,
    comment: String,
    productId:String,
    image:String,
    date1:Date,
    date: {
        type: Date,
        default: Date.now,
    },
});

let Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;
