/**
 * Created by sanathshetty on 11/14/14.
 */

AmohaCore = {};
AmohaCore.Schemas = {};
AmohaCore.Collections = {};



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
});


//bind an event handler to the form submit event.
Template.productConfigurator.events({
    'submit form': function(event) {

        //prevents the form from refreshing
        event.preventDefault();

        //Ids of all the products selected
        var productIDsInServer = [];
        var Servers = AmohaCore.Collections.Servers;

        //build the product IDs Array

        //Server Offering
        var serverOffering = $('input:radio[name="Server Offering"]:checked').val();

        if (serverOffering){

            console.log("Server Offering  " + serverOffering);
            //
            productIDsInServer.push(serverOffering);
            console.log(productIDsInServer);

        }else{

            alert("Server Offering Not Checked");
        }

        //Operating System
        var OS = $('input:radio[name="Operating System"]:checked').val();

        if (OS){

            console.log("OS  " + OS);
            //add the ID
            productIDsInServer.push(OS);
            console.log(productIDsInServer);

        }else{

            alert("Server Offering Not Checked");
        }

        //CPU
        var cpu = $('input:radio[name="CPU"]:checked').val();

        if (cpu){

            console.log("cpu  " + cpu);
            //add the ID
            productIDsInServer.push(cpu);
            console.log(productIDsInServer);

        }else{

            alert("Not Checked");
        }

        //add to server testing

         Meteor.call('serverInsert', productIDsInServer, function(error, result) {
            // display the error to the user and abort
            if (error)
                return throwError(error.reason);
            //else
               // alert("Server Added");

            // validation: to see if url already exists
            // show this result but route to existing url post
            /*
            if (result.postExists)
                throwError('This link has already been posted');
            */
        });

        console.log("Server ID" + servID);

        //set this value in the Session
        Session.set("productIDsInServer", productIDsInServer);



    }
});