/**
 * Created by sanathshetty on 11/19/14.
 */


Template.proposalSummary.helpers({


    userid: function(){
        return Meteor.userId()
    },

    servers: function(){

        return Servers.find();
    }
})