/**
 * Created by sanathshetty on 11/14/14.
 */

AmohaCore = {};
AmohaCore.Schemas = {};
AmohaCore.Collectaions = {};

Session.setDefault('productIDsInServer', null);
//Session.setDefault('serverIDList', null);



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

        Session.setDefault('serverIDList', null);

        //Ids of all the products selected
        var productIDsInServer = [];
        var Servers = AmohaCore.Collections.Servers;

        //build the product IDs Array
        //TODO Iterate thur the hashmap of radio controls instead of hardcording the names

/*
        var formResult = {};
        formResult = document.getElementById('productConfigurator').elements;

        for (var i=0; i < formResult.length; i++) {

            var controlName = formResult[i].name;
            var controlType = formResult[i].type;
            var controlValue =formResult[i].value;

            if (controlType == "radio"){



            }

            console.log("Type " + formResult[i].type);
            console.log("Name " + formResult[i].name);
            console.log("Value " + formResult[i].value);

            var checkedValue = $('input:radio[name=\"'+controlName+'\"]:checked').val();
            if (checkedValue)
            {
                productIDsInServer.push(checkedValue);
                console.log("checkedValue " + checkedValue);
            }

        }
*/
        //Server Offering
        var serverOffering = $('input:radio[name="Server Offering"]:checked').val();

        if (serverOffering){

            console.log("Server Offering  " + serverOffering);
            //
            productIDsInServer.push(serverOffering);
            console.log(productIDsInServer);

        }else{

            throwError("Server Offering Not Checked");
        }

        //Operating System
        var OS = $('input:radio[name="Operating System"]:checked').val();

        if (OS){

            console.log("OS  " + OS);
            //add the ID
            productIDsInServer.push(OS);
            console.log(productIDsInServer);

        }else{

            throwError("OS Server Offering Not Checked");
        }

        //CPU
        var cpu = $('input:radio[name="CPU"]:checked').val();

        if (cpu){

            console.log("cpu  " + cpu);
            //add the ID
            productIDsInServer.push(cpu);
            console.log(productIDsInServer);

        }else{

            throwError("CPU Not Checked");
        }

        //Disks
        var disks = $('input:radio[name="Disks"]:checked').val();

        if (disks){

            console.log("Disk  " + disks);
            //add the ID
            productIDsInServer.push(disks);
            console.log(productIDsInServer);

        }else{

            throwError("Disks Not Checked");
        }

        //Network
        var network = $('input:radio[name="Network"]:checked').val();

        if (network){

            console.log("network  " + network);
            //add the ID
            productIDsInServer.push(network);
            console.log(productIDsInServer);

        }else{

            throwError("Network Option not chosen");
        }

        //set this value in the Session
        Session.set("productIDsInServer", productIDsInServer);

        //add to server testing
        var productIDList = {
            prodlist: productIDsInServer
        }

        var newServerID = "";
        var result = "";
        var serverIDList = [];

          Meteor.call('serverInsert', productIDList, function(error, result) {
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

              //a

              //add serverID to session to keep track of all servers created in this session

              newServerID = result;

              console.log("result " + result);
              console.log("newServerID " + newServerID);

/*
              if (Session.get("serverIDList")) {

                  serverIDList = Session.get("serverIDList");
                  Session.set ("serverIDList", serverIDList.push([newServerID]));
                  console.log("serverIDList "+serverIDList);



                  //iterate thru the session list
                  for (var i in Session.get("serverIDList")) {
                     // console.log("serverIDList " + Session.get("serverIDList")[i]);
                  }


              } else {
                  console.log("Session blank");

                  //init vars
                  Session.set("serverIDList", [newServerID]);


              }

                //  console.log("Session.get(serverIDList) "+ Session.get("serverIDList"));
              console.log("newServerID here " + newServerID);

*/
        });



    }//end of submit form


});