'use strict';
module.exports = function(app) {

//Comfree routes
  //To save development time, routes will also be setup for Comfree contracts
  var comfree_PropertyListing = require('../controllers/propertyListingController');
  var comfree_ActiveOffers = require('../controllers/activeOffersController');
  var comfree_ActiveEscrows = require('../controllers/activeEscrowsController');
  /*var comfree_SaleConditionContract = require('../controllers/comfree/SaleConditionContract');
  var comfree_EscrowContract = require('../controllers/comfree/EscrowContract');
  var comfree_ComfreeToken = require('../controllers/comfree/ComfreeToken');*/

  //Property listings
  app.route('/get_properties')
    .get(comfree_PropertyListing.get_properties);

  app.route('/save_property_profile')
    .post(comfree_PropertyListing.save_property_profile);

  //@todo remove property from list

  //Active Offer listings
  app.route('/get_active_offers')
    .get(comfree_ActiveOffers.get_active_offers);

  app.route('/create_offer_contract')
    .post(comfree_ActiveOffers.create_offer_contract);

  app.route('/set_accept_offer')
    .post(comfree_ActiveOffers.set_accept_offer);

  //Active escrow listings
  app.route('/get_active_escrows')
    .get(comfree_ActiveEscrows.get_active_escrows);

  app.route('/set_accept_escrow')
    .post(comfree_ActiveEscrows.set_accept_escrow);

  app.route('/create_active_escrow_contract')
    .post(comfree_ActiveEscrows.create_active_escrow_contract);  
  
  
};