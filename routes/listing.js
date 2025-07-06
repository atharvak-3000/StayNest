const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//index Route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  //create route
  .post(
    isLoggedIn,
    validateListing,
    upload.single("listing[image]"),
    wrapAsync(listingController.createNewListing)
  );

//New Route
router.get("/new", isLoggedIn, listingController.newListingForm);

router;

router
  .route("/:id")
  //Show route
  .get(wrapAsync(listingController.showNewListing))
  //UPDATE
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  //DELETE
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

//Edit
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.editListingForm)
);

module.exports = router;
