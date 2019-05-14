'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComfreeActiveEscrowsSchema = new Schema({
  property_id:String,
  offer_id:String,
  escrow_id:String
});

module.exports = mongoose.model('ComfreeActiveEscrows', ComfreeActiveEscrowsSchema);