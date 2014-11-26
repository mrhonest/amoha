// Fixture data



Meteor.startup(function(){


    if (Customers.find().count() == 0) {
        //add sample data
        var custID = Customers.insert({
            name: 'Acme inc',
            msa: '123456',
            address: {
                'Street': '123 Main Street',
                'State': 'VA',
                'Zip': '22202',
                'Country': 'USA',
                'telephone': '1232312232',
                'fax': '3215343211'
            },

            contacts: [{
                type: "Technical Point of Contact",
                name: "Mike Tech",
                telephone: "123231234",
                email: "techy@acme.com"},

                {
                    type: "Administrative Point of Contact",
                    name: "Mike Admin",
                    telephone: "123231234",
                    email: "admin@acme.com"},

            ]


        });

        var custID = Customers.insert({
            name: 'Double Apex',
            msa: '123456',
            address: {
                'Street': '123 Main Street',
                'State': 'VA',
                'Zip': '22202',
                'Country': 'USA',
                'telephone': '1232312232',
                'fax': '3215343211'
            },

            contacts: [{
                type: "Technical Point of Contact",
                name: "Mike Tech",
                telephone: "123231234",
                email: "techy@acme.com"},

                {
                    type: "Administrative Point of Contact",
                    name: "Mike Admin",
                    telephone: "123231234",
                    email: "admin@acme.com"},

            ]


        });

        var custID = Customers.insert({
            name: 'Pepperidge Farms',
            msa: '123456',
            address: {
                'Street': '123 Main Street',
                'State': 'VA',
                'Zip': '22202',
                'Country': 'USA',
                'telephone': '1232312232',
                'fax': '3215343211'
            },

            contacts: [{
                type: "Technical Point of Contact",
                name: "Mike Tech",
                telephone: "123231234",
                email: "techy@acme.com"},

                {
                    type: "Administrative Point of Contact",
                    name: "Mike Admin",
                    telephone: "123231234",
                    email: "admin@acme.com"},

            ]


        });


    }



    if (Products.find().count() == 0) {
        //product_categories

        var prodCatID1 = ProductCategories.insert({
            name: 'Server Offering',
            categoryType: "Server",
            description: 'Category Description for this Category, blah blah blah blah',
            active: 'yes'
        });

        //now insert products under this category
        Products.insert({
            product_category_id: prodCatID1,
            productCategory: 'Server Offering',
            productType: "Server",
            name: 'Unitas Dedicated Server',
            description: 'A dedicated Unitas server for you',
            cost: 1000,
            loadedCost: 1200

        });

        Products.insert({
            product_category_id: prodCatID1,
            productCategory: 'Server Offering',
            productType: "Server",
            name: 'EPC Host Node',
            description: 'A EPC Host Node for you',
            cost: 500,
            loadedCost: 700

        });


        //cat 2
        var prodCatID2 = ProductCategories.insert({
            name: 'Operating System',
            description: 'Operating Systems offered by us',
            categoryType : "Server",
            active: 'yes'
        });

        Products.insert({
            product_category_id: prodCatID2,
            productCategory: 'Operating System',
            productType: "Server",
            name: 'Windows 2008 R2 Enterprise Edition 64 bit Managed Operating System',
            description: 'Windows 2008 R2 Enterprise Edition 64 bit Managed Operating System description',
            cost: 1000,
            loadedCost: 1200
        });

        Products.insert({
            product_category_id: prodCatID2,
            productCategory: 'Operating System',
            productType: "Server",
            name: 'Windows Server 2012 R2 Enterprise 64 bit Managed Operating System',
            description: 'Windows Server 2012 R2 Enterprise 64 bit Managed Operating System description',
            cost: 1000,
            loadedCost: 1200
        });

        //cat 3
        var prodCatID3 = ProductCategories.insert({
            name: 'Server Chassis',
            description: 'Server Chassis offered by us',
            active: 'yes'
        });



        Products.insert({
            product_category_id: prodCatID3,
            productCategory: 'Server Chassis',
            productType: "Server",
            name: 'Quanta QCT S210-X12RS',
            description: 'Dual proc E5-2600 v2, 24x memory slots, 10x 2.5" drives',
            cost: 1220,
            loadedCost: 1400,
            details: [{ "name": "Class",  "description": "Class Description", "value": "Small" },
                      { "name": "Rack Units",  "description": "Rack Units used", "value": "2" },]
        });



        Products.insert({
            product_category_id: prodCatID3,
            productCategory: 'Server Chassis',
            productType: "Server",
            name: 'Quanta QCT S210-X22RQ',
            description: 'Dual proc E5-2600 v2, 24x memory slots, 24x 2.5" drives',
            cost: 1390,
            loadedCost: 1500,
            details: [{ "name": "Class",  "description": "Class Description", "value": "Medium" },
                { "name": "Rack Units",  "description": "Rack Units used", "value": "4" },]

        });


        Products.insert({
            product_category_id: prodCatID3,
            productCategory: 'Server Chassis',
            productType: "Server",
            name: 'Quanta QCT S400-X44E',
            description: 'Quad proc E5-4600 v2, 48x memory slots, 8x 2.5" drives',
            cost: 2480,
            loadedCost: 3500,
            details: [{ "name": "Class",  "description": "Class Description", "value": "Large" },
                { "name": "Rack Units",  "description": "Rack Units used", "value": "4" },]
        });

        //cat 4
        //CPU subcategories present
        var prodCatID4 = ProductCategories.insert({
            name: 'CPU',
            categoryType: "Server",
            description: 'CPU Family offered by us',
            active: 'yes',
            parent: null
        });

        /*
        //subcat 1
        var prodCatID4a = ProductCategories.insert({
            productCategory: 'CPU Family',
            categoryType: "Server",
            name: 'E5-2600 CPU Family',
            description: 'ES-2600 CPU Family',
            active: 'yes',
            parent: prodCatID4
        });
;
*/

        Products.insert({
            product_category_id: prodCatID4,
            productCategory: 'CPU',
            productType: "Server",
            name: 'Single E5-2620 6-Core',
            description: 'Single E5-2620 6-Core',
            cost: 386,
            loadedCost: 434,
            details: [{ "name": "Cores",  "description": "Number of Cores", "value": 6 },
                { "name": "Threads",  "description": "Number of Threads", "value": 12 },
                { "name": "vCPU per core",  "description": "Virtual CPU Per Core", "value": 8 },
            ]

        });

        Products.insert({
            product_category_id: prodCatID4,
            productCategory: 'CPU',
            productType: "Server",
            name: 'Dual E5-2620 6-Core (12 cores total)',
            description: 'Dual E5-2620 6-Core (12 cores total)',
            cost: 386,
            loadedCost: 434,
            details: [{ "name": "Cores",  "description": "Number of Cores", "value": 6 },
                { "name": "Threads",  "description": "Number of Threads", "value": 12 },
                { "name": "vCPU per core",  "description": "Virtual CPU Per Core", "value": 8 },
            ]

        });

        Products.insert({
            product_category_id: prodCatID4,
            productCategory: 'CPU',
            productType: "Server",
            name: 'Dual E5-2650v2 8-Core (16 cores total)',
            description: 'Dual E5-2650v2 8-Core (16 cores total)',
            cost: 2265,
            loadedCost: 2941,
            details: [{ "name": "Cores",  "description": "Number of Cores", "value": 16 },
                { "name": "Threads",  "description": "Number of Threads", "value": 32 },
                { "name": "vCPU per core",  "description": "Virtual CPU Per Core", "value": 12 },
            ]

        });

/*
        //subcat 2
        var prodCatID4b = ProductCategories.insert({
            name: 'E5-4600 CPU Family',
            description: 'E5-4600 CPU Family',
            categoryType: "Server",
            active: 'yes',
            parent: prodCatID4
        })
*/
        Products.insert({
            product_category_id: prodCatID4,
            productCategory: 'CPU',
            productType: "Server",
            name: 'Dual E5-4620v2 8-Core (16 cores total',
            description: 'Dual E5-4620v2 8-Core (16 cores total',
            cost: 3065,
            loadedCost: 3449,
            details: [{ "name": "Cores",  "description": "Number of Cores", "value": 16 },
                { "name": "Threads",  "description": "Number of Threads", "value": 32 },
                { "name": "vCPU per core",  "description": "Virtual CPU Per Core", "value": 12 },
            ]

        });

        Products.insert({
            product_category_id: prodCatID4,
            productCategory: 'CPU',
            productType: "Server",
            name: 'Quad E5-4620v2 8-Core (32 cores total)',
            description: 'Quad E5-4620v2 8-Core (32 cores total)',
            cost: 3065,
            loadedCost: 6131,
            details: [{ "name": "Cores",  "description": "Number of Cores", "value": 32 },
                { "name": "Threads",  "description": "Number of Threads", "value": 64 },
                { "name": "vCPU per core",  "description": "Virtual CPU Per Core", "value": 12 },
            ]
        });


        //Disks
        var prodCatID5 = ProductCategories.insert({
            name: 'Disks',
            description: 'Disks offered by us',
            categoryType: "Server",
            active: 'yes'
        });


        Products.insert({
            product_category_id: prodCatID5,
            productCategory: 'Disks',
            productType: "Server",
            name: "300GB SAS 6G 2.5\"",
            description: "300GB SAS 6G 2.5\"",
            cost: 1220,
            loadedCost: 1400

        });


        Products.insert({
            product_category_id: prodCatID5,
            productCategory: 'Disks',
            productType: "Server",
            name:  "1TB SAS 7.2k 2.5\"",
            description:  "1TB SAS 7.2k 2.5\"",
            cost: 1220,
            loadedCost: 1400

        });


        Products.insert({
            product_category_id: prodCatID5,
            productCategory: 'Disks',
            productType: "Server",
            name:  "1.2TB SAS 6G 2.5\"",
            description:  "1.2TB SAS 6G 2.5\"",
            cost: 1220,
            loadedCost: 1400

        });

        Products.insert({
            product_category_id: prodCatID5,
            productCategory: 'Disks',
            productType: "Server",
            name: "2TB SAS 7.2k 2.5\"",
            description: "2TB SAS 7.2k 2.5\"",
            cost: 1220,
            loadedCost: 1400

        });

        Products.insert({
            product_category_id: prodCatID5,
            productCategory: 'Disks',
            productType: "Server",
            name: "2TB SAS 7.2k 2.5\"",
            description: "2TB SAS 7.2k 2.5\"",
            cost: 1220,
            loadedCost: 1400

        });

        Products.insert({
            product_category_id: prodCatID5,
            productCategory: 'Disks',
            productType: "Server",
            name:  "3TB SAS 7.2k 2.5\"",
            description:  "3TB SAS 7.2k 2.5\"",
            cost: 1220,
            loadedCost: 1400

        });


        //network
        var networkValues = ["Built-In 1GbE",
            "Optional 10GbE"];
        //Disks
        var prodCatID6 = ProductCategories.insert({
            name: 'Network',
            description: 'Networks offered by us',
            categoryType: "Server",
            active: 'yes'
        });


        Products.insert({
            product_category_id: prodCatID6,
            productCategory: 'Network',
            productType: "Server",
            name: "Built-In 1GbE",
            description: "Built-In 1GbE",
            cost: 1220,
            loadedCost: 1400

        });

        Products.insert({
            product_category_id: prodCatID6,
            productCategory: 'Network',
            productType: "Server",
            name: "Optional 10GbE",
            description: "Optional 10GbE description",
            cost: 1220,
            loadedCost: 1400

        });

        /*
        //model drivers all
        if (Drivers.find().count() == 0) {


        //corporate assumptions
            Drivers.insert({
               // name: 'Corporate Assumptions',
                productImpacted: "All",
                details: [{ "name": "Cost of Money",  "description": "Standard Corporate Assumption - Applied as a % of Revenue", "value": 10, "valueType": "% Percentage" },
                    { "name": "Sales & Marketing",  "description": "Standard Corporate Assumption - Applied as a % of Revenue", "value": 10, "valueType": "% Percentage" },
                    { "name": "General & Administrative",  "description": "Standard Corporate Assumption - Applied as a % of Revenue", "value": 5, "valueType": "% Percentage" },
                    { "name": "Contingency",  "description": "Standard Corporate Assumption - Applied as a % of Revenue", "value": 2.5, "valueType": "% Percentage" },
                    { "name": "Commissions Expense",  "description": "Standard Corporate Assumption - Applied as a % of Revenue", "value": 100, "valueType": "% Percentage" },
                    { "name": "Revenue Reserve",  "description": "Standard Corporate Assumption - Applied as a % of Revenue", "value": 1.5, "valueType": "% Percentage" },
                    { "name": "Benefits Load FTE",  "description": "Standard Corporate Assumption - Applied as a % of Revenue", "value": 18.5, "valueType": "% Percentage" }]
            })

            //TODO: Make individual drivers dynamic as well eg type: OPEX, CAPEX, COGS - recurring: Non Recurring, Monthly, Annual
        //COGS - Mission Control
            Drivers.insert({
                productImpacted: "Mission Control",
                cogsDrivers: [{ "name": "Direct COGS Installation Non Recurring Expense",  "description": "Vendor NRC", "value": 500, "valueType": "$ US Dollar" },
                    { "name": "Direct COGS Installation Non Recurring Expense",  "description": "Internal Resource Hours to Provision", "value": 100, "valueType": "$ US Dollar" },
                    { "name": "Direct COGS Annual Non Recurring Expense", "description": "", "value": 400, "valueType": "$ US Dollar" },
                    { "name": "Direct COGS Monthly Recurring Expense",  "description": "", "value": 23, "valueType": "$ US Dollar" },
                    { "name": "Direct COGS Monthly Cost to Manage a Device",  "description": "", "value": 150, "valueType": "$ US Dollar" }
                ],
                pricingDrivers: [{ "name": "One Time Install Opex - Internal Cost to Install",  "description": "", "value": 100, "valueType": "$ US Dollar" },
                    { "name": "One Time NRC - Monitoring Software",  "description": "", "value": 250, "valueType": "$ US Dollar" },
                    { "name": "Monthly Opex - Monitoring Software Maintenance", "description": "", "value": 13, "valueType": "$ US Dollar" },
                    { "name": "Annual Opex - Monitoring Software Maintenance", "description": "", "value": 150, "valueType": "$ US Dollar" },
                    { "name": "One Time NRC -Storage Management Software & Maintenance",  "description": "", "value": 250, "valueType": "$ US Dollar" },
                    { "name": "Monthly Opex -Storage Management Software & Maintenance",  "description": "", "value": 10, "valueType": "$ US Dollar" },
                    { "name": "Annual Opex -Storage Management Software & Maintenance",  "description": "", "value": 250, "valueType": "$ US Dollar" }
                ]

            })


    }


*/







//Server add
/*
        if (Servers.find().count() == 0) {

            var prod1 = Products.findOne({productCategory: "Network"});


            Servers.insert({
                    name: 'Server 1',
                    productsInServer:   [{ "productId": "1234451",  "productName": "Name of the product 1", "productCategory": "CPU", "productCost": 1200 },
                                            { "productId": "1234452",  "productName": "Name of the product 2", "productCategory": "CPU", "productCost": 1200 },
                                            { "productId": "1234453",  "productName": "Name of the product 3", "productCategory": "CPU", "productCost": 1200 },
                                            { "productId": "1234454",  "productName": "Name of the product 4", "productCategory": "CPU", "productCost": 1200 },
                                            { "productId": "1234455",  "productName": "Name of the product 5", "productCategory": "CPU", "productCost": 1200 },
                                            { "productId": "1234456",  "productName": "Name of the product 6", "productCategory": "CPU", "productCost": 1200 },
                                            { "productId": "1234457",  "productName": "Name of the product 7", "productCategory": "CPU", "productCost": 1200 },
                                        { "productId": "1234458",  "productName": "Name of the product 8", "productCategory": "CPU", "productCost": 1200 }],
                    totalServerPrice: 12999,
                    sessionID: "my session id",
                    status: "In-Cart"

                }
            );

            Servers.insert({
                    name: 'Server 2',
                    productsInServer:   [{ "productId": "1234451",  "productName": "Name of the product 1", "productCategory": "CPU", "productCost": 1200 },
                        { "productId": "1234452",  "productName": "Name of the product 2", "productCategory": "CPU", "productCost": 1200 },
                        { "productId": "1234453",  "productName": "Name of the product 3", "productCategory": "CPU", "productCost": 1200 },
                        { "productId": "1234458",  "productName": "Name of the product 8", "productCategory": "CPU", "productCost": 1200 }],
                    totalServerPrice: 2999,
                    sessionID: "my session id",
                    status: "In-Cart"

                }
            );

            Servers.insert({
                    name: 'Server 3',
                    productsInServer:   [{ "productId": "1234451",  "productName": "Name of the product 1", "productCategory": "CPU", "productCost": 1200 },
                        { "productId": "1234452",  "productName": "Name of the product 2", "productCategory": "CPU", "productCost": 1200 },
                        { "productId": "1234458",  "productName": "Name of the product 8", "productCategory": "CPU", "productCost": 1200 }],
                    totalServerPrice: 2999,
                    sessionID: "my session id",
                    status: "In-Cart"

                }
            );

        }

 */
    }

});




