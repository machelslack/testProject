Ext.define('testProject.store.Customers', {
    extend: 'Ext.data.Store',

    alias: 'store.customers',

   
    data: {
        items: [
            {
                id: 268380,
                accountKey: "505464",

                firstName: "Patrick",

                email: "pat@gmail.com",
                country: "GB"
            },
            {
                id: 268381,
                accountKey: "505465",

                firstName: "Jimmy",

                email: "jim@test.com",
                country: "GB"
            },
            {
                id: 268382,
                accountKey: "505466",

                firstName: "yyy",

                email: "yyy@xxx.com",
                country: "US"
            }
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
