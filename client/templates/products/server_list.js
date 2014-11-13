/**
 * Created by sanathshetty on 11/13/14.
 */
Template.serverList.helpers({


    userid: function(){
        return Meteor.userId()
    },

    servers: function(){

        return Servers.find();
    }
})
