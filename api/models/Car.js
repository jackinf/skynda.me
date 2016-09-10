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
    VIN: 'string',
    Price: 'string',
    Transmission: 'string',
    Mileage: 'string',
    InitialReg: 'string',
    RegistrationNumber: 'string',
    Engine: 'string',
    HorsePower: 'string',
    Drive: 'string',
    Doors: 'string',
    Seats: 'string',
    Brand: 'string',
    Model: 'string',
    Color: 'string',
    BodyType: 'string',
    CityFuel: 'string',
    HighWayFuel: 'string',
    images: 'text',
    IsSold: 'boolean',
    DescriptionBrand: 'text',
    DescriptionModel: 'text',
    Archived: 'datetime'
  }
};

