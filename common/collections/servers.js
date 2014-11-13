/**
 * Created by sanathshetty on 11/12/14.
 */

//build the options
var serverChassisCursor = Products.find({productCategory: "Server Chassis"});
var scItems = [];

serverChassisCursor.forEach(function(Products)
{
    scItems.push(Products.name);
});

//TODO: Dynamically load values from the collections

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


AmohaCore.Schemas.Servers = new SimpleSchema({
    name: {
        type: String,
        label: "Server Name"
    },
    serverOffering: {
        type: String,
        label: "Server Offerings",
        allowedValues: serverOfferingValues
    },
    supportType: {
        type: String,
        label: "Support Type",
        allowedValues: supportTypeValues,
        max: 200
    },
    chassis: {
        type: String,
        label: "Server Chassis",
        allowedValues: serverChassisValues

    },
    cpu: {
        type: String,
        label: "CPU Type",
        allowedValues: CPUValues,
        max: 500
    },
    disk: {
        type: String,
        label: "Disk Type",
        allowedValues: diskValues,
        max: 500
    },
    network: {
        type: String,
        label: "Network",
        allowedValues: networkValues,
        max: 500
    },
    operatingSystem: {
        type: String,
        label: "Operating System",
        allowedValues: operatingSystemValues,
        max: 500
    }
});

Servers = AmohaCore.Collections.Servers = new Mongo.Collection('servers');
Servers.attachSchema(AmohaCore.Schemas.Servers);