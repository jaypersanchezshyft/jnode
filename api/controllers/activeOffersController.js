//'use strict';
const fs = require('fs');
const web3 = require('web3');
const Tx = require('ethereumjs-tx');
const solc = require('solc');
const path = require('path');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*Infura HttpProvider Endpoint
web3js = new web3(new web3.providers.HttpProvider("https://rinkeby.infura.io/YOUR_API_KEY"));
*/
//Ganache-CLI
const web3js = new web3(new web3.providers.HttpProvider('http://localhost:7545'));
var mongoose = require('mongoose'),
ComfreeActiveOffers = mongoose.model('ComfreeActiveOffers');

exports.get_active_offers = async function(req, res) {
  console.log("Get active offers");
};

exports.set_accept_offer = async function(req, res) {
    console.log("Set accept or reject offer");
};

exports.create_offer_contract = async function(req, res) {
    console.log("Create Offer Contract");
    /*var saveOfferContract = new ComfreeActiveOffers(req.body);
    savePropertyProfile.save(function(err, task) {
      if (err) {
        res.send(err);
      }
      else {
        var property_id = req.query.property_id;
        var header_banner = req.query.header_banner;
        var property_address = req.query.property_address;
        var property_feature = req.query.property_feature;
        var listing_price = req.query.listing_price;
        var has_offer = req.query.has_offer;
        res.json(task);
        //console.log(task);
      }
    }());*/
};
  


