/**
 * Created by sanathshetty on 11/6/14.
 */

Customers = new Mongo.Collection('customers');

//Schema to be used with autoform
Customers.attachSchema(new SimpleSchema({
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

}));


Meteor.methods({
    customerInsert: function (customerAttributes) {


        check(Meteor.userId(), String);
        check(customerAttributes, {
            name: String,
            msa_number: String
        });


        //checking to see if the same customer name  has been posted before if so send the
        //user to the post

        var existCustomer = Customers.findOne({name: customerAttributes.name});
        if (existCustomer) {
            return {
                customerExists: true

            }
        }


        var user = Meteor.user();
        //_.extend() method is part of the Underscore library, and simply lets you “extend”
        // one object with the properties of another.
        var customer = _.extend(customerAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });
        var customerID = Customers.insert(customer);
        return {
            _id: customerID
        };
    }
});
