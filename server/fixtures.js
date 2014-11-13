// Fixture data
/*
Meteor.startup(function(){


    if (Customers.find().count() == 0) {
        //add sample data
        var custID = Customers.insert({
            name: 'Acme inc',
            msa: '123456',
            addressStreet: '123 Main Street',
            addressCity: 'Anytown',
            addressState: 'VA',
            addressZip: '22202',
            addressCountry: 'USA',
            telephone: '123-231-2232',
            fax: '321-534-3211',
            technicalPOC: 'Mike Tech',
            technicalPOCTel: '123-999-6666',
            technicalPOCEmail: 'techy@acme.com',
            administrativePOC: 'Mary Admin',
            administrativePOCTel: '123-333-4444',
            administrativePOCEmail: 'admin@acme.com',
            billingPOC: 'Jane Billing',
            billingPOCTel: '123-444-7777',
            billingPOCEmail: "billing@acme.com"

        });

        var custID = Customers.insert({
            name: 'Lucent Inc',
            msa: '123456',
            addressStreet: '123 Main Street',
            addressCity: 'Anytown',
            addressState: 'VA',
            addressZip: '22202',
            addressCountry: 'USA',
            telephone: '123-231-2232',
            fax: '321-534-3211',
            technicalPOC: 'Mike Tech',
            technicalPOCTel: '123-999-6666',
            technicalPOCEmail: 'techy@acme.com',
            administrativePOC: 'Mary Admin',
            administrativePOCTel: '123-333-4444',
            administrativePOCEmail: 'admin@acme.com',
            billingPOC: 'Jane Billing',
            billingPOCTel: '123-444-7777',
            billingPOCEmail: "billing@acme.com"

        });

        var custID = Customers.insert({
            name: 'DoubleApex inc',
            msa: '123456',
            addressStreet: '123 Main Street',
            addressCity: 'Anytown',
            addressState: 'VA',
            addressZip: '22202',
            addressCountry: 'USA',
            telephone: '123-231-2232',
            fax: '321-534-3211',
            technicalPOC: 'Mike Tech',
            technicalPOCTel: '123-999-6666',
            technicalPOCEmail: 'techy@acme.com',
            administrativePOC: 'Mary Admin',
            administrativePOCTel: '123-333-4444',
            administrativePOCEmail: 'admin@acme.com',
            billingPOC: 'Jane Billing',
            billingPOCTel: '123-444-7777',
            billingPOCEmail: "billing@acme.com"

        });

        var custID = Customers.insert({
            name: 'Tech Syndicate Group',
            msa: '123456',
            addressStreet: '123 Main Street',
            addressCity: 'Anytown',
            addressState: 'VA',
            addressZip: '22202',
            addressCountry: 'USA',
            telephone: '123-231-2232',
            fax: '321-534-3211',
            technicalPOC: 'Mike Tech',
            technicalPOCTel: '123-999-6666',
            technicalPOCEmail: 'techy@acme.com',
            administrativePOC: 'Mary Admin',
            administrativePOCTel: '123-333-4444',
            administrativePOCEmail: 'admin@acme.com',
            billingPOC: 'Jane Billing',
            billingPOCTel: '123-444-7777',
            billingPOCEmail: "billing@acme.com"

        });
    }



    if (Products.find().count() == 0) {
        //product_categories

        var prodCatID1 = ProductCategories.insert({
            name: 'Server Offering',
            description: 'Category Description for this Category, blah blah blah blah',
            active: 'yes'
        });

        //now insert products under this category
        Products.insert({
            product_category_id: prodCatID1,
            name: 'Unitas Dedicated Server',
            description: 'A dedicated Unitas server for you',
            cost: 1000,
            loadedCost: 1200

        });

        Products.insert({
            product_category_id: prodCatID1,
            name: 'EPC Host Node',
            description: 'A EPC Host Node for you',
            cost: 500,
            loadedCost: 700

        });


        //cat 2
        var prodCatID2 = ProductCategories.insert({
            name: 'Operating System',
            description: 'Operating Systems offered by us',
            active: 'yes'
        });

        Products.insert({
            product_category_id: prodCatID2,
            name: 'Windows 2008 R2 Enterprise Edition 64 bit Managed Operating System',
            description: 'Windows 2008 R2 Enterprise Edition 64 bit Managed Operating System description',
            cost: 1000,
            loadedCost: 1200
        });

        Products.insert({
            product_category_id: prodCatID2,
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
            name: 'Quanta QCT S210-X12RS',
            description: 'Dual proc E5-2600 v2, 24x memory slots, 10x 2.5" drives',
            cost: 1220,
            loadedCost: 1400,
            details: {
                class: 'Small',
                rack_units: 1
            }
        });

        Products.insert({
            product_category_id: prodCatID3,
            name: 'Quanta QCT S210-X22RQ',
            description: 'Dual proc E5-2600 v2, 24x memory slots, 24x 2.5" drives',
            cost: 1390,
            loadedCost: 1500,
            details: {
                class: 'Medium',
                rack_units: 2
            }
        });

        Products.insert({
            product_category_id: prodCatID3,
            name: 'Quanta QCT S400-X44E',
            description: 'Quad proc E5-4600 v2, 48x memory slots, 8x 2.5" drives',
            cost: 2480,
            loadedCost: 3500,
            details: {
                class: 'Large',
                rack_units: 4
            }
        });

        //cat 4
        //CPU subcategories present
        var prodCatID4 = ProductCategories.insert({
            name: 'CPU Family',
            description: 'CPU Family offered by us',
            active: 'yes',
            parent: null
        });

        //subcat 1
        var prodCatID4a = ProductCategories.insert({
            name: 'E5-2600 CPU Family',
            description: 'ES-2600 CPU Family',
            active: 'yes',
            parent: prodCatID4
        });
;

        Products.insert({
            product_category_id: prodCatID4a,
            name: 'Single E5-2620 6-Core',
            description: 'Single E5-2620 6-Core',
            cost: 386,
            loadedCost: 434,
            details: {
                Cores: 6,
                threads: 12,
                vCPU_per_core: 8
            }
        });

        Products.insert({
            product_category_id: prodCatID4a,
            name: 'Dual E5-2620 6-Core (12 cores total)',
            description: 'Dual E5-2620 6-Core (12 cores total)',
            cost: 386,
            loadedCost: 434,
            details: {
                Cores: 6,
                threads: 12,
                vCPU_per_core: 8
            }
        });

        Products.insert({
            product_category_id: prodCatID4a,
            name: 'Dual E5-2650v2 8-Core (16 cores total)',
            description: 'Dual E5-2650v2 8-Core (16 cores total)',
            cost: 2265.12,
            loadedCost: 2941.39,
            details: {
                Cores: 16,
                threads: 32,
                vCPU_per_core: 12
            }
        });


        //subcat 2
        var prodCatID4b = ProductCategories.insert({
            name: 'E5-4600 CPU Family',
            description: 'E5-4600 CPU Family',
            active: 'yes',
            parent: prodCatID4
        })

        Products.insert({
            product_category_id: prodCatID4b,
            name: 'Dual E5-4620v2 8-Core (16 cores total',
            description: 'Dual E5-4620v2 8-Core (16 cores total',
            cost: 3065.92,
            loadedCost: 3449.12,
            details: {
                Cores: 16,
                threads: 32,
                vCPU_per_core: 12
            }
        });

        Products.insert({
            product_category_id: prodCatID4b,
            name: 'Quad E5-4620v2 8-Core (32 cores total)',
            description: 'Quad E5-4620v2 8-Core (32 cores total)',
            cost: 3065.92,
            loadedCost: 6131.84,
            details: {
                Cores: 32,
                threads: 64,
                vCPU_per_core: 16
            }
        });


    }
});
*/
