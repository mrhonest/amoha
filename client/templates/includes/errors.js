/**
 * Created by sanathshetty on 11/4/14.
 */

Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});


// .alert elements are disappearing visually, they’re still present in the
//DOM. We need to fix this.
Template.error.rendered = function() {
    var error = this.data;
    Meteor.setTimeout(function () {
        Errors.remove(error._id);
    }, 3000);
};