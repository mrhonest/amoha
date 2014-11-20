/**
 * Created by sanathshetty on 11/8/14.
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

AmohaCore.Schemas.Details = new SimpleSchema({
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


//Known Product specific Details

//CPU
/*
AmohaCore.Schemas.Details.CPU = new SimpleSchema({

    cores: {
        type: Number,
        label: "Cores"
    },
    threads: {
        type: Number,
        label: "Threads"
    },
    vCPU: {
        type: Number,
        label: "Virtual CPUs Per Core"
    }
});
*/


AmohaCore.Schemas.Products = new SimpleSchema({

        productCategory: {
            type: String,
            label: "Product Category",
            allowedValues: ["Server Offering",
                "Support Type",
                "Server Chassis",
                "CPU",
                "Memory",
                "Disks",
                "Network",
                "Operating System"]
        },
        name: {
            type: String,
            label: "Product Name",
            max: 200
        },
        description: {
            type: String,
            label: "Description",
            max: 500
        },
        //define if this product goes into server config or add-on
        productType: {
            type: String,
            label: "Product Type",
            allowedValues: ["Server", "Add-On"]
        },

        cost: {
            type: Number,
            decimal: true,
            label: "Cost $"

        },
        loadedCost: {
            type: Number,
            decimal: true,
            optional: true,
            label: "Loaded Cost $"

        },

        //TODO: Use a product specfic detail object if we already know the details, eg: Server Chassis has a "Rack Unit" Detail attribute

        details: {
            type: [AmohaCore.Schemas.Details],
            optional: true
        }

        /*
         details: {
         type: Array,
         optional: true,
         label: "Details"


         }
         */
    }
);

//TODO: Figure out global object scope so that this does not need to happen
Products = AmohaCore.Collections.Products = new Mongo.Collection('products');
Products.attachSchema(AmohaCore.Schemas.Products);