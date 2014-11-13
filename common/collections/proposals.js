/**
 * Created by sanathshetty on 11/12/14.
 */

Proposals = new Mongo.Collection('proposals');


Proposals.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Proposal Name",
        max: 200
    },
        product : {
            type: [AmohaCore.Schemas.Servers],
            label: "Server Configuration",
            max: 100

        }
})
);
