/**
 * Created by sanathshetty on 11/4/14.
 */

//mapping the root / URL to the postsList template
//we’ve told the router to use the layout template we just
// created as the default layout for all routes.
Router.configure({
    layoutTemplate: 'layout',

    //SUBSCRIBE: we can ask it to wait on the subscription to provide user visual feedback
    // we need to subscribe to the publication

    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() { return Meteor.subscribe('notifications'); }
});


//homepage
Router.route('/', function () {
    this.layout('layout');

    this.render('homePage');

    //right
    //this.render('customerList', {to: 'rightContainer'});
});


//we’ve defined a new route named postsList and mapped it to the root / path
//Router.route('/', {name: 'postsList'});

/*
Router.route('/', {name: 'customerList',
                    waitOn: function(){ return Meteor.subscribe('customers')} });

Router.route('/customers', {name: 'customerList',
    waitOn: function(){ return Meteor.subscribe('customers')} });
*/

Router.route('/customers', function () {
    this.layout('layout');

    this.render('customerSubmit');

    //right
    this.render('customerList', {to: 'rightContainer'});
});

Router.route('/products', function () {
    this.layout('layout');
    //main
    this.render('productSubmit');
    //right
    this.render('productsList', {to: 'rightContainer'});
});

Router.route('/proposals', function () {
    this.layout('proposalLayout');
    //TODO: Swap out panle1 and 2 .. here for development ease
    //Step 1 - Customer
    this.render('productConfigurator', {to: 'panel1'});
    //Step 2 - Server Configurator
    this.render('productConfigurator', {to: 'panel2'});
    //Step 3 - Add Ons


    //right
    //TODO: Change this to an actual summary
    this.render('proposalSummary', {to: 'rightContainer'});
});

//TODO: Here for testing only, Remove
Router.route('/servers', function () {
    this.layout('layout');

    this.render('serverSubmit');

    //right
    //this.render('customerList', {to: 'rightContainer'});
});

//driver configurator
Router.route('/driversProduct', function () {
    this.layout('layout');

    this.render('driverProductSubmit');

    //right
   this.render('driverProductList', {to: 'rightContainer'});
   // this.data( Drivers.find );
});

/*
Router.route('/driversGlobal', function () {
    this.layout('layout');

    //this.render('driverGlobalSubmit');
    this.render('driverGlobalEdit');

    //right
    //this.render('productDriverList', {to: 'rightContainer'});
    // this.data( Drivers.find );
});
*/

//edit
Router.route('/driversGlobal', {
    name: 'driverGlobalEdit',

    data: function() { return DriversGlobal.findOne(); }
});





//Router.route('/customers', {name: 'customerList'});

Router.route('/customer_add', {name: 'customerSubmit'})

//Router.route('/products', {name: 'productsList'} );

Router.route('/product_add', {name: 'productSubmit'} );

//Router.route('/proposals', {name: 'proposalSubmit'} );

Router.route('setup', {path: '/setup/:step'});

Router.route('/setup', {name: 'setupWizard'});



/**
//post / Insert
Router.route('/posts/:_id', {
    name: 'postPage',

    //subscribe only to the comments for this post
    waitOn: function() {
        [
            Meteor.subscribe('singlePost', this.params._id),
            Meteor.subscribe('comments', this.params._id)
        ];
    },
    //we can get the proper data context by looking for our post based on the _id we goy
    // from the URL
    data: function() { return Posts.findOne(this.params._id); }
});

//edit
Router.route('/posts/:_id/edit', {
    name: 'postEdit',
    waitOn: function() {
        return Meteor.subscribe('singlePost', this.params._id);
    },
    data: function() { return Posts.findOne(this.params._id); }
});

//Router.route('/submit', {name: 'postSubmit'});

//pagation support
/**
PostsListController = RouteController.extend({
    template: 'postsList',
    increment: 5,
    postsLimit: function() {
        return parseInt(this.params.postsLimit) || this.increment;
    },
    findOptions: function() {
        return {sort: {submitted: -1}, limit: this.postsLimit()};
    },
    subscriptions: function() {
        this.postsSub = Meteor.subscribe('posts', this.findOptions());
    },
    posts: function() {
        return Posts.find({}, this.findOptions());
    },
    data: function() {
        var hasMore = this.posts().count() === this.postsLimit();
        var nextPath = this.route.path({postsLimit: this.postsLimit() + this.increment});
        return {
            posts: this.posts(),
            ready: this.postsSub.ready,
            nextPath: hasMore ? nextPath : null
        };
    }
});
*/

/**
//pagation support
CustomerListController = RouteController.extend({
    template: 'customerList',
    increment: 5,
    postsLimit: function() {
        return parseInt(this.params.postsLimit) || this.increment;
    },
    findOptions: function() {
        return {sort: {submitted: -1}, limit: this.postsLimit()};
    },
    subscriptions: function() {
        this.postsSub = Meteor.subscribe('customer', this.findOptions());
    },
  //  customers: function() {
  //      return Customers.find({}, this.findOptions());
    customers: function() {
              return Customers.find();
    },
    data: function() {
        var hasMore = this.customers().count()  === this.postsLimit();
        var nextPath = this.route.path({postsLimit: this.postsLimit() + this.increment});
        return {
            posts: this.customers(),
            ready: this.postsSub.ready,
            nextPath: hasMore ? nextPath : null
        };
    }
});


Router.route('/submit', {name: 'postSubmit'});


Router.route('/:postsLimit?', {
    name: 'postsList'
});
*/

//make sure the sure is logged in
var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

/*
Added for Amoha
 */

//Router.route('/customer', {name: 'customerList'});
/*
//valid route but no data found
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
//require login for this page
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});
    */