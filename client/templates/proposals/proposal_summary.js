/**
 * Created by sanathshetty on 11/19/14.
 */


Template.proposalSummary.helpers({


    userid: function(){
        return Meteor.userId()
    },

    servers: function(){

        return Servers.find();
    },
    //cal monthly costs
    divTotal: function(number, divVal){
        return parseFloat(Math.round(number / divVal).toFixed(2));
    }
})

