/**
 * Created by sanathshetty on 11/10/14.
 */


Template.productsList.helpers({


    userid: function(){
        return Meteor.userId()
    },

    products: function(){

        return Products.find();
    }
})
