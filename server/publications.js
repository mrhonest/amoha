/**
 * Created by sanathshetty on 11/4/14.
 */

//we create a publish() function that returns a cursor referencing all posts:

Meteor.publish('posts', function(options) {
    check(options, {
        sort: Object,
        limit: Number
    });
    return Posts.find({}, options);
});


Meteor.publish('comments', function(postId) {
    check(postId, String);
    return Comments.find({postId: postId});
});


Meteor.publish('notifications', function() {
    return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish('singlePost', function(id) {
    check(id, String)
    return Posts.find(id);
});

/**
* Added for amoha
*/

Meteor.publish('customers', function(){
    return Customers.find();
})