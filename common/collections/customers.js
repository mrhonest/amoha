/**
 * Created by sanathshetty on 11/6/14.
 */

AmohaCore = {};
AmohaCore.Schemas = {};
AmohaCore.Collections = {};

//Schema to be used with autoform
AmohaCore.Schemas.Customers = new SimpleSchema({
        name: {
            type: String,
            label: "Company Name",
            max: 200
        },
        msa: {
            type: String,
            label: "MSA Number",
            max: 200
        },
        address: {
            type: Object
        },
        'address.Street': {
            type: String,
            label: "Street",
            max: 200
        },
        'address.State': {
            type: String,
            label: "State",
            allowedValues: ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA",
                            "ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK",
                            "OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"]


        },
        'address.Zip': {
            type: String,
            label: "Zip",
            max: 200
        },
        'address.Country': {
            type: String,
            label: "Country",
            max: 200
        },
        'address.telephone': {
            type: String,
            label: "Telephone",
            max: 10
        },
        'address.fax': {
            type: String,
            label: "Fax",
            max: 10
        },

    contacts: {
        type: Array,
        optional: true
    },
    'contacts.$': {
        type: Object,
        optional: true
    },
    'contacts.$.type': {
        type: String,
        label: "Contact Type",
        allowedValues: ["Technical Point of Contact","Administrative Point of Contact", "Billing Point of Contact"]
    },
    'contacts.$.name': {
        type: String
    },
    'contacts.$.telephone': {
        type: String,
        label: "Telephone"
    },
    'contacts.$.email': {
        type: String,
        label: "Email"
    }

});

Customers = AmohaCore.Collections.Customers = new Mongo.Collection('customers');
Customers.attachSchema(AmohaCore.Schemas.Customers);
