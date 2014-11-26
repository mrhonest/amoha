/**
 * Created by sanathshetty on 11/10/14.
 */



if (Meteor.isClient) {

    var checkOrX = function (value) {
        var html;
        // first, normalize the value to a canonical interpretation
        if (typeof value === 'boolean')
            value = {
                support: value
            };

        if (value === null || value === undefined) {
            html = '<span style="color: orange; font-weight: bold">?</span>';
        } else {
            if (value.support === true)
                html = '<span style="color: green">&#10004;</span>'
            else if (value.support === false)
                html = '<span style="color: red">&#10008;</span>';
            else
                html = '<span style="color: lightblue">' + value.support + '</span>';
            if (value.link)
                html += ' (<a href="' + value.link + '">more</a>)';
        }
        return new Spacebars.SafeString(html);
    };

    var calcLoadedCost = function (value) {

        var loadFactor = 1.1;
        return parseFloat(Math.round(value * loadFactor).toFixed(2));



    }

    Template.productsList.helpers({
        tables: function () {
            return Tables;
        },

        userid: function () {
            return Meteor.userId()
        },

        products: function () {

            return Products.find();
        },

        mySettings: function () {
            return {
                rowsPerPage: 15,
                showNavigation: 'auto',
                showColumnToggles: true,
                collection: Products.find(),
                useFontAwesome: false,
                showFilter: true,
                class: 'table no-border hover',
                fields: [{'key': 'productCategory', label: 'Category' },
                    {'key': 'name', label: 'Name' },
                    {'key': 'cost', label: 'Cost $'},
                    {'key': 'cost', label: 'Loaded $', fn: calcLoadedCost}
                ]
            };
        }

    });
}