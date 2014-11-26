/**
 * Created by sanathshetty on 11/25/14.
 */

/**
 * Created by sanathshetty on 11/25/14.
 */


Template.driverProductList.helpers({


    userid: function(){
        return Meteor.userId()
    },

    driverProducts: function(){

        return DriversProduct.find();
    },
    //cal monthly costs
    divTotal: function(number, divVal){
        return parseFloat(Math.round(number / divVal).toFixed(2));
    }
})
