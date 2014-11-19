/**
 * Created by sanathshetty on 11/14/14.
 */

Template.productConfigurator.helpers({


    userid: function(){
        return Meteor.userId()
    },

    productsOfferings: function(catName){

        return Products.find({productCategory: catName});
    },

    productCats: function(){

        //get all product cat with type Sever
        return ProductCategories.find({categoryType: "Server"});
        /*
        var result = Products.distinct("productCategory")
        console.dir("this this" + result);
        return result;
*/
    }
})
