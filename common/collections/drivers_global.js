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
AmohaCore.Schemas.DriversGlobalDetail = new SimpleSchema({
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


//driver details name/value pair used for everything
AmohaCore.Schemas.DriversCorporate = new SimpleSchema({
    costOfMoney: {
        type: Number,
        label: "Cost of Money",
        optional: true,
        max: 100

    },
    salesMarketing: {
        type: Number,
        label: "Sales & Marketing",
        optional: true,
        max: 100

    },
    generalAdministrative: {
        type: Number,
        label: "General & Administrative",
        optional: true,
        max: 100

    },
    contingency: {
        type: Number,
        label: "Contingency",
        optional: true,
        max: 100

    },
    commissionsExpense: {
        type: Number,
        label: "Commissions Expense",
        optional: true,
        max: 100

    },
    revenueReserve: {
        type: Number,
        label: "Revenue Reserve",
        optional: true,
        max: 100

    },
    mrcNetMarginTarget: {
        type: Number,
        label: "MRC Net Margin Target",
        optional: true,
        max: 100

    },
    benefitsLoadFTE: {
        type: Number,
        label: "Benefits Load FTE",
        optional: true,
        max: 100

    },

    salesTax: {
        type: Number,
        label: "Sales Tax",
        optional: true,
        max: 100

    },
    shippingHandling: {
        type: Number,
        label: "Shipping & Handling",
        optional: true,
        max: 100

    },
    hardwareMaintenanceCosts: {
        type: Number,
        label: "Hardware Maintenance Costs",
        optional: true,
        max: 100

    },
    averageManagedHostingTerm: {
        type: Number,
        label: "Average Managed Hosting Term",
        optional: true,
        max: 100

    },
    cloudServerUsefulLife: {
        type: Number,
        label: "Cloud Server Useful Life",
        optional: true,
        max: 100

    },
    monthsInYear: {
        type: Number,
        label: "Months in a Year",
        optional: true,
        max: 100

    },
    hoursInMonth: {
        type: Number,
        label: "Hours in a Month",
        optional: true,
        max: 1000

    },
    mRCSPMaxDiscount: {
        type: Number,
        label: "MRC SP Max Discount",
        optional: true,
        max: 100

    },
    nRCSPMaxDiscount: {
        type: Number,
        label: "NRC SP Max Discount",
        optional: true,
        max: 100

    },
    costToBuild1kWPower: {
        type: Number,
        label: "Cost to Build 1 kW of Power",
        optional: true


    },
    iDCRatedCapacity: {
        type: Number,
        label: "IDC Rated Capacity (Watts/Sqft)",
        optional: true


    },
    iDCRentPerSqft: {
        type: Number,
        label: "IDC Rent per Sqft",
        optional: true


    },
    kWHExpense: {
        type: Number,
        label: "kWH Expense",
        optional: true


    },
    coolingUpliftPUE: {
        type: Number,
        label: "Cooling Uplift - PUE",
        optional: true,
        max: 300

    },
    averageRackUnitsUtilized: {
        type: Number,
        label: "Average # of Rack Units Utilized",
        optional: true,
        max: 100

    },
    averageCostPerKvA: {
        type: Number,
        label: "Average $$/ KvA",
        optional: true

    },
    kWPerCabinet: {
        type: Number,
        label: "kW per Cabinet",
        optional: true

    },
    structuredCablingPerCabinet: {
        type: Number,
        label: "Capex - Structured Cabling Per Cabinet",
        optional: true

    }

})//end Corporate Assumptions


//Core global driver
AmohaCore.Schemas.DriversGlobal = new SimpleSchema({
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
    /*
    details: {
        type: [AmohaCore.Schemas.DriversGlobalDetail],
        label: "Driver Details",
        optional: true
    },
    */
    driversCorporate: {
        type: AmohaCore.Schemas.DriversCorporate,
        label: "Corporate Drivers",
        optional: true

    }
})

DriversGlobal = AmohaCore.Collections.DriversGlobal = new Mongo.Collection('drivers_global');
DriversGlobal.attachSchema(AmohaCore.Schemas.DriversGlobal);


//add a create date hook on insert
DriversGlobal.before.insert(function (userId, doc) {
    doc.createdAt = Date.now();
});

//add a update date hook on updates
DriversGlobal.before.update(function (userId, doc) {
    doc.updatedAt = Date.now();
});

UI.registerHelper("AmohaCore.Collections.DriversGlobal", AmohaCore.Collections.DriversGlobal);
UI.registerHelper("AmohaCore.Collections", AmohaCore.Collections);