/**
 * Created by sanathshetty on 11/20/14.
 */

//common methods

Meteor.methods({
    getSessionId: function() {
        return this.connection.id;
    }
});