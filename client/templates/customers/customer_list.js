/**
 * Created by sanathshetty on 11/6/14.
 */


Template.customerList.helpers({
        userid: function(){
            return Meteor.userId()
        },



    mySettings: function () {
        return {
            rowsPerPage: 15,
            showNavigation: 'auto',
            showColumnToggles: true,
            collection: Customers.find(),
            useFontAwesome: false,
            showFilter: true,
            class: 'table no-border hover',
            fields: [
                {'key': 'name', label: 'Company' },
                {'key': 'msa', label: 'MSA'},
                {'key': 'address.Street', label: 'Street Address', hidden: true},
                {'key': 'address.State', label: 'State', hidden: true},
                {'key': 'address.Zip', label: 'Zip', hidden: true},
                {'key': 'address.Country', label: 'Country', hidden: false},
                {'key': 'address.telephone', label: 'Tel'},
                {'key': 'address.fax', label: 'Fax', hidden: true}
            ]
        };
    }

})
