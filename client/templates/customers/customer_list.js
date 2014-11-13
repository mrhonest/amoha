/**
 * Created by sanathshetty on 11/6/14.
 */


Template.customerList.helpers({
        userid: function(){
            return Meteor.userId()
        },

        customers: function(){
             return Customers.find();
        }
})
