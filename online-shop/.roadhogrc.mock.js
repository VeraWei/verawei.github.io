export default {
    // Support type as Object and Array
    'GET /api/customer': {
        entity: [{
            id: 1,
            name: "Jack",
            category: "Home",
            phone: "7788996789",
            address: "8080 Rumble St.",
            city: "Vancouver",
            country: "Canada",
            zipCode: "V6J QS3",
        }, {
            id: 2,
            name: "Amy",
            category: "End",
            phone: "6048996759",
            address: "8080 Rumble St",
            city: "Vancouver",
            country: "Canada",
            zipCode: "V6J QS3",
        }, {
            id: 3,
            name: "John",
            category: "Corporation",
            phone: "6008965789",
            address: "8080 Rumble St.",
            city: "Vancouver",
            country: "Canada",
            zipCode: "V6J QS3",
        }]
    },

    'GET /api/customer/1': {
        entity: {
            id: 1,
            name: "Jack",
            category: "Home",
            phone: "7788996789",
            address: "8080 Rumble St.",
            city: "Vancouver",
            country: "Canada",
            zipCode: "V6J QS3",
            purchase: [{
                id: 1,
                name: "IBM 3000",
                count: 100,
                price: "$1000",
                createTime: "2019-10-21 13:09:00",
                customerId: 1001,
                total: 100000.00,
            }, {
                id: 2,
                name: "Apple Mac",
                count: 10,
                price: "$2008",
                createTime: "2019-12-25 13:09:00",
                customerId: 1005,
                total: 20080.00,
            }, {
                id: 3,
                name: "HuaWei P30",
                count: 50,
                price: "$789",
                createTime: "2020-01-01 8:09:00",
                customerId: 1009,
                total: 39450.00,
            }]
        }
    },
    'GET /api/sale': {
        entity: [{
            id: 1,
            name: "IBM 3000",
            count: 100,
            price: 1000,
            createTime: "2019-10-21 13:09:00",
            customerId: 1001,
        }, {
            id: 2,
            name: "Apple Mac",
            count: 10,
            price: 2008,
            createTime: "2019-12-25 13:09:00",
            customerId: 1005,
        }, {
            id: 3,
            name: "HuaWei P30",
            count: 50,
            price: 789,
            createTime: "2020-01-01 8:09:00",
            customerId: 1009,
        }]
    },
    'GET /api/inventory': {
        entity: [{
            id: 1,
            name: "IBM 3000",
            count: 100,
            price: 1000,
            updateTime: "2019-10-21 13:09:00",
        }, {
            id: 2,
            name: "Apple Mac",
            count: 10,
            price: 2008,
            updateTime: "2019-12-25 13:09:00",
        }, {
            id: 3,
            name: "HuaWei P30",
            count: 50,
            price: 789,
            updateTime: "2020-01-01 8:09:00",
        }]
    },
    'GET /api/companyinfo': {
        entity: {
            name: "Computer Whiz Store",
            organizationId: "F000000000",
            phone: "(010) 603-4698",
            address: "7878 Kingsway St.",
            city: "Vancouver",
            country: "Canada",
            zipCode: "V6J TP3",
        }
    },
    // Method like GET or POST can be omitted
    '/api/users/1': { id: 1 },

    // Support for custom functions, the API is the same as express@4
    'POST /api/users/create': (req, res) => { res.end('OK'); },
};