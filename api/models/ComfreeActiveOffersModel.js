'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComfreeActiveOffersSchema = new Schema({
  property_id:String,
  offer_id:String
});

module.exports = mongoose.model('ComfreeActiveOffers', ComfreeActiveOffersSchema);