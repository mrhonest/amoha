/**
 * Created by sanathshetty on 11/25/14.
 */

/**
 * Created by sanathshetty on 11/25/14.
 */
/**
 * Created by sanathshetty on 11/25/14.
 */


AmohaCore = {};
AmohaCore.Schemas = {};
AmohaCore.Collections = {};


//driver details name/value pair used for everything
AmohaCore.Schemas.DriverDetails = new SimpleSchema({
    name: {
        type: String,
        label: "Driver Name",
        max: 100
    },
    description: {
        type: String,
        label: "Driver Description",
        max: 100,
        optional: true
    },
    value: {
        type: String,
        label: "Driver Value",
        optional: true
    },
    valueType: {
        type: String,
        label: "Driver Value Type",
        optional: true,
        allowedValues: ["Number", "$ US Dollar", "% Percentage", "Kw"]
    }
})



//pricing Drivers
AmohaCore.Schemas.PricingDrivers = new SimpleSchema({
    installInternalNRC: {
        type: Number,
        //label: "One Time Install Opex - Internal Cost to Install",
        optional: true
    },
    installNRC: {
        type: Number,
        label: "One Time NRC - Monitoring Software",
        optional: true
    },
    monthlyMonitorOpex: {
        type: Number,
        label: "Monthly Opex - Monotoring Software Maintenance",
        optional: true
    },
    annualMonitorOpex: {
        type: Number,
        label: "Annual Opex Monitoring Software Maintenance",
        optional: true
    },
    networkNRC: {
        type: Number,
        label: "One Time NRC Networking Device Management Software & Maintenance",
        optional: true
    },
    monthlyNetworkOpex: {
        type: Number,
        label: "Monthly Opex Networking Device Management Software & Maintenance",
        optional: true
    },
    annualNetworkOpex: {
        type: Number,
        label: "Annual Opex Networking Device Management Software & Maintenance",
        optional: true
    }


})

//COGS Drivers
AmohaCore.Schemas.COGSDrivers = new SimpleSchema({
    installNRC: {
        type: Number,
        label: "Installation Non Recurring Expense",
        optional: true
    },
    installInternalNRC: {
        type: Number,
        label: "Installation Internal Non Recurring Expense",
        optional: true
    },
    annualNRC: {
        type: Number,
        label: "Annual Non Recurring Recurring Expense",
        optional: true
    },
    monthlyRC: {
        type: Number,
        label: "Monthly Recurring Expense",
        optional: true
    },
    monthlyDeviceRC: {
        type: Number,
        label: "Monthly Cost to Manage a Device",
        optional: true
    }
})




//CAPX Drivers
AmohaCore.Schemas.CAPXDrivers = new SimpleSchema({
    capxDrivers: {
        type: [AmohaCore.Schemas.DriverDetails],
        label: "CAPX Drivers",
        optional: true
    }
})


AmohaCore.Schemas.DriversProduct = new SimpleSchema({
    /* name: {
     type: String,
     label: "Driver Type",
     allowedValues: ["Corporate Assumptions", "Pricing Drivers", "Calculations", "COGS", "CAPEX", "Allocated CAPEX"]
     },
     */
    productImpacted: {
        type: String,
        label: "Products Impacted",
        allowedValues: [ "Mission Control", "Dedicated Compute", "Cloud Host Node",
            "Virtual Cloud Server", "Storage", "Backup", "Load Balancer", "Security Services", "Router", "Switch",
            "Service Provider Infrastructure", "Customer Production Cabinet", "ALL RACK MOUNTED HARDWARE"]
    },
    /*
     details: {
     type: [AmohaCore.Schemas.DriverDetails],
     label: "Drivers",
     optional: true

     },
     */
    pricingDrivers: {
        type: AmohaCore.Schemas.PricingDrivers,
        optional: true
    },
    cogsDrivers: {
        type: AmohaCore.Schemas.COGSDrivers,
        optional: true
    }//,
    /*
     capxDrivers: {
     type: [AmohaCore.Schemas.DriverDetails],
     optional: true
     }
     */
})

DriversProduct = AmohaCore.Collections.DriversProduct = new Mongo.Collection('drivers_product');
DriversProduct.attachSchema(AmohaCore.Schemas.DriversProduct);


//add a create date hook on insert
DriversProduct.before.insert(function (userId, doc) {
    doc.createdAt = Date.now();
});

//add a update date hook on updates
DriversProduct.before.update(function (userId, doc) {
    doc.updatedAt = Date.now();
});

UI.registerHelper("AmohaCore.Collections.Drivers", AmohaCore.Collections.DriversProduct);
