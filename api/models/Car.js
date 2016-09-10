/**
 * Car.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  identity: 'car',
  connection: 'skyndaPostgresqlServer',
  attributes: {
    id: {
      type: 'text',
      defaultsTo: function () {
        return uuid.v4();
      }
    },
    created: 'datetime',
    vin: 'string',
    price: 'string',
    transmission: 'string',
    mileage: 'string',
    initialReg: 'string',
    registrationNumber: 'string',
    engine: 'string',
    horsePower: 'string',
    drive: 'string',
    doors: 'string',
    seats: 'string',
    brand: 'string',
    model: 'string',
    color: 'string',
    bodyType: 'string',
    cityFuel: 'string',
    highWayFuel: 'string',
    images: 'text',
    isSold: 'boolean',
    descriptionBrand: 'text',
    descriptionModel: 'text',
    archived: 'datetime'
  }
};

