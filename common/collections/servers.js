/**
 * Created by sanathshetty on 11/12/14.
 */

AmohaCore = {};
AmohaCore.Schemas = {};
AmohaCore.Collections = {};

//build the options
var serverChassisCursor = Products.find({productCategory: "Server Chassis"});
//var serverChassisCursor = Products.find();
var scItems = [];

//TODO: Figure out why this array is not populating on the client side
serverChassisCursor.forEach(function(Products)
{
    scItems.push(Products.name.toString());

});

//TODO: Dynamically load values from the collections
/*
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

var supportTypeValues = ["Managed",
                        "Unmanaged"];


var serverChassisValues = ["Dual proc E5-2600 v2, 24x memory slots, 10x 2.5\" drives",
                    "Dual proc E5-2600 v2, 24x memory slots, 24x 2.5\" drives",
                    "Quad proc E5-4600 v2, 48x memory slots, 8x 2.5\" drives"];

var CPUValues = ["Dual E5-4620v2 8-Core (16 cores total)",
                "Quad E5-4620v2 8-Core (32 cores total)"];

var diskValues = ["300GB SAS 6G 2.5\"",
                    "900GB SAS 6G 2.5\"",
                    "1TB SAS 7.2k 2.5\"",
                    "1.2TB SAS 6G 2.5\"",
                    "2TB SAS 7.2k 2.5\"",
                    "3TB SAS 7.2k 2.5\"",
                    "400GB SSD SAS 2.5\""];

var networkValues = ["Built-In 1GbE",
                    "Optional 10GbE"];

var operatingSystemValues = ["Windows 2008 R2 Enterprise Edition 64 bit Managed Operating System",
                            "Windows Server 2008 R2 Enterprise 64 bit Managed Operating System"]

*/

AmohaCore.Schemas.Servers = new SimpleSchema({
    name: {
        type: String,
        label: "Server Name",
        optional: true
    },


    productsInServer: {
        type: Array,
        label: "Products List",
        optional: true
    },
        'productsInServer.$': {
            type: Object,
            optional: true
        },
        'productsInServer.$.productId': {
            type: String,
            label: "Product ID"
        },
        'productsInServer.$.productName': {
            type: String,
            label: "Product Name"
        },
        'productsInServer.$.productCategory': {
            type: String,
            label: "Product Category"
        },
        'productsInServer.$.productCost': {
            type: Number,
            label: "Product Cost"
        },

    totalServerPrice: {
        type: Number,
        label: "Total Price",
        optional: true
    },
    sessionID: {
        type: String,
        label: "Session ID",
        optional: true
    },
    status: {
        type: String,
        label: "Status",
        optional: true,
        allowedValues: ["In-Cart", "Check-Out", "Sold"]
    }

});

Servers = AmohaCore.Collections.Servers = new Mongo.Collection('servers');
Servers.attachSchema(AmohaCore.Schemas.Servers);


Meteor.methods({
    serverInsert: function(postAttributes) {


        productIDsInServer

        var serverID = Servers.insert({
                name: 'Server test post',
                productsInServer:   [{ "productId": "1234451",  "productName": "Name of the product 1", "productCategory": "CPU", "productCost": 1200 },
                    { "productId": "1234452",  "productName": "Name of the product 2", "productCategory": "CPU", "productCost": 1200 },
                    { "productId": "1234453",  "productName": "Name of the product 3", "productCategory": "CPU", "productCost": 1200 },
                    { "productId": "1234454",  "productName": "Name of the product 4", "productCategory": "CPU", "productCost": 1200 },
                    { "productId": "1234455",  "productName": "Name of the product 5", "productCategory": "CPU", "productCost": 1200 },
                    { "productId": "1234456",  "productName": "Name of the product 6", "productCategory": "CPU", "productCost": 1200 },
                    { "productId": "1234457",  "productName": "Name of the product 7", "productCategory": "CPU", "productCost": 1200 },
                    { "productId": "1234458",  "productName": "Name of the product 8", "productCategory": "CPU", "productCost": 1200 }],
                totalServerPrice: 12999,
                sessionID: "my session id",
                status: "In-Cart"

            }
        );

        console.log("In here" + productIDsInServer);

        return serverID;

        /*
        //validation: Serverside to make sure title and url is not blank
        var errors = validatePost(postAttributes);
        if (errors.title || errors.url)
            throw new Meteor.Error('invalid-post', "You must set a title and URL for your post");

        //checking to see if the same url has been posted before if so send the
        //user to the post
        var postWithSameLink = Posts.findOne({url: postAttributes.url});
        if (postWithSameLink) {
            return {
                postExists: true,
                _id: postWithSameLink._id
            }
        }
        */


        var user = Meteor.user();
        //_.extend() method is part of the Underscore library, and simply lets you “extend”
        // one object with the properties of another.

        /*
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var postId = Posts.insert(post);
        return {
            _id: postId
        };
        */
    }


});