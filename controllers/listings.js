const Listing = require("../models/listing.js")

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.newListingForm = (req, res) => {
  console.log(req.user);
  res.render("listings/new.ejs");
};

module.exports.showNewListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id).populate({path:"reviews",populate:{
    path:"author",
  }}).populate("owner");
  if(!listing){
    req.flash("error","Listing requested does not Exist !");
    return res.redirect("/listings");
  }
  console.log(listing)
  res.render("listings/show.ejs", { id, listing });
}

module.exports.createNewListing = async (req, res) => {
  // let {title,description,image,price,location,country} = req.body;
  let url = req.file.path;
  let filename = req.url.filename;
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = {url,filename};
  await newListing.save();
  req.flash("success","New Listing Created !");
  res.redirect("/listings");
};

module.exports.editListingForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if(!listing){
    req.flash("error","Listing requested does not Exist !");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250");
  res.render("listings/edit.ejs", { listing ,originalImageUrl});
};

module.exports.updateListing = async (req, res) => {
  if(!req.body.listing){
    throw new ExpressError(400,"Send Valid data for listing")
  }
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if(typeof req.file!="undefined"){
    let url = req.file.path;
  let filename = req.file.filename;
  listing.image = {url,filename}
  await listing.save();
}
  

  
  req.flash("success","Listing Updated !");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success"," Listing Deleted !");
  res.redirect("/listings");
};