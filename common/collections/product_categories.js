/**
 * Created by sanathshetty on 11/10/14.
 */

AmohaCore = {};
AmohaCore.Schemas = {};
AmohaCore.Collections = {};

//TODO: Do not hardcode here, should be a pull from the collection
var serverOfferingValues =  ["Dedicated Compute",
    "Cloud Host Node",
    "Virtual Server Instance",
    "Monitoring & Management",
    "Managed Applications",
    "Storage",
    "Managed Backup",
    "Security Services",
    "Professional Services",
    "Internet Bandwidth"]


//Generic Details
AmohaCore.Schemas.ProductCategories = new SimpleSchema({
    name: {
        type: String,
        max: 30,
        optional: true
    },
    description: {
        type: String,
        max: 50,
        optional: true
    },
    value: {
        type: String,
        optional: true
    },
    categoryType :{
        type: String,
        optional: true
    },
    sortOrder: {
        type: Number,
        optional: true
    }

    /*
     scope: {
     type: String,
     optional: true
     },

     valueType: {
     type: String,
     optional: true
     }
     */
});



ProductCategories = new Mongo.Collection('product_categories');