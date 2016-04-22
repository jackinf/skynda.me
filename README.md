# Angular sails base

a [Sails](http://sailsjs.org) application

sudo apt-get install git npm nodejs mongodb

sudo npm install bower -g

bower install

mkdir config/ssl

cd config/ssl

openssl genrsa -out key.pem

openssl req -new -key key.pem -out csr.pem

openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

db config

use legislator

db.createUser(

user: "admin",

pwd: "12345678",

roles: [

{ role: "readWrite", db: "legislator" }

create file local.js in the folder config/ and add to the file


module.exports = {

port: process.env.PORT || 1337,

environment: process.env.NODE_ENV || 'development',

key: require('fs').readFileSync(__dirname + '/ssl/key.pem'),

cert: require('fs').readFileSync(__dirname + '/ssl/cert.pem')

connections: {

'default': 'mongo',

mongo: {

adapter : 'sails-mongo',

host : 'localhost',

port : 27017,

user : 'admin',

password : '12345678',

database : 'admin'

}, 
module: 'sails-disk'

Install sails and grunt

sudo npm install -g sails

sudo npm install -g grunt

sails lift --silly

port: 1337
