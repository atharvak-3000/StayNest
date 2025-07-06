const Listing = require("../models/listing.js")
const Review = require("../models/review.js")


module.exports.createReview = async(req,res)=>{
  let listing = await Listing.findById(req.params.id);
  let newRev = new Review(req.body.review);
  newRev.author = req.user._id;

  listing.reviews.push(newRev);

  await newRev.save();
  await listing.save();
  console.log("new review saved!");
  req.flash("success","New review Created !");
  res.redirect(`/listings/${listing._id}`)
};

module.exports.deleteReview = async(req,res)=>{
    let {reviewId,id} = req.params;

    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted !");
    res.redirect(`/listings/${id}`);
  };