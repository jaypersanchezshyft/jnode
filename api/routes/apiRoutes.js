'use strict';
module.exports = function(app) {

//Comfree routes
  //To save development time, routes will also be setup for Comfree contracts
  var comfree_PropertyListing = require('../controllers/propertyListingController');
  var comfree_ActiveOffers = require('../controllers/activeOffersController');
  //var comfree_OfferContract = require('../controllers/comfree/OfferContract');
  /*var comfree_SaleConditionContract = require('../controllers/comfree/SaleConditionContract');
  var comfree_EscrowContract = require('../controllers/comfree/EscrowContract');
  var comfree_ComfreeToken = require('../controllers/comfree/ComfreeToken');*/

  app.route('/get_properties')
    .get(comfree_PropertyListing.get_properties);

  app.route('/save_property_profile')
    .post(comfree_PropertyListing.save_property_profile);

  app.route('/get_active_offers')
    .get(comfree_ActiveOffers.get_active_offers);

  app.route('/create_offer_contract')
    .post(comfree_ActiveOffers.create_offer_contract);

  app.route('/set_accept_offer')
    .post(comfree_ActiveOffers.set_accept_offer);

  /*
  
  app.route('/create_escrow_contract')
    .post(comfree_PropertyListing.create_escrow_contract);  
  
  */

  
};