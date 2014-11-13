/**
 * Created by sanathshetty on 11/8/14.
 */

AmohaCore = {};
AmohaCore.Schemas = {};
AmohaCore.Collections = {};

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

AmohaCore.Schemas.Metafield = new SimpleSchema({
        serverOffering: {
            type: String,
            label: "Server Offerings",
            allowedValues: serverOfferingValues
        },
        key: {
            type: String,
            max: 30,
            optional: true
        },
        namespace: {
            type: String,
            max: 20,
            optional: true
        },
        scope: {
            type: String,
            optional: true
        },
        value: {
            type: String,
            optional: true
        },
        valueType: {
            type: String,
            optional: true
        },
        description: {
            type: String,
            optional: true
        }
    }
);


AmohaCore.Schemas.Products = new SimpleSchema({

        productCategory: {
            type: String,
            label: "Product Category",
            allowedValues: ["Server Offering",
                            "Support Type",
                            "Server Chassis",
                            "CPU Type/Quantity",
                            "Memory DIMM Size",
                            "Disk Type",
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
            allowedValues: ["Server","Add-On"]
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
//creating an metafields object array

        metafields: {
            type: [AmohaCore.Schemas.Metafield],
            optional: true

        },

        details: {
            type: Array,
            optional: true
        },
        'details.$': {
            type: Object
        },
        'details.$.cores': {
            type: Number,
            label: "Cores"
        },
        'details.$.threads': {
            type: Number,
            label: "Threads"
        },
        'details.$.vCPU': {
            type: Number,
            label: "Virtual CPUs Per Core"
        }
    }
);

//TODO: Figure out global object scope so that this does not need to happen
Products = AmohaCore.Collections.Products = new Mongo.Collection('products');
Products.attachSchema(AmohaCore.Schemas.Products);
/**
 * Created by sanathshetty on 11/12/14.
 */
