Ext.define('testProject.store.Customers1', {
    extend: 'Ext.data.Store',

    alias: 'store.groups',

   
    data: {
        items: [
            {
                id: 268380,
                accountKey: "**********",

                firstName: "Patrick",

                email: "pat@gmail.com"
            },
            {
                id: 268381,
                accountKey: "505465",

                firstName: "Jimmy",

                email: "jim@test.com"
            },
            {
                id: 268382,
                accountKey: "505466",

                firstName: "yyy",

                email: "yyy@xxx.com"
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
