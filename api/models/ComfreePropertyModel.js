'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComfreePropertyListingSchema = new Schema({
  property_id:String,
  header_banner:String,
  property_address:String,
  property_feature:String,
  listing_price:String,
  has_offer:String
});

module.exports = mongoose.model('ComfreePropertyListing', ComfreePropertyListingSchema);