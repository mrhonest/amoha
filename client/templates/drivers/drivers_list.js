/**
 * Created by sanathshetty on 11/25/14.
 */



Template.driversList.helpers({


    userid: function(){
        return Meteor.userId()
    },

    drivers: function(){

        return Drivers.find();
    },
    //cal monthly costs
    divTotal: function(number, divVal){
        return parseFloat(Math.round(number / divVal).toFixed(2));
    }
})
