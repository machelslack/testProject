Ext.define('testProject.view.users.ViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.users',
    stores: {
        countries: {

            data: [
                    {
                        id: 'GBP',
                        name: 'GBP'
                    },
                    {
                        id: 'US',
                        name: 'US'
                    }
                ]
            },
    }

    //TODO - add data, formulas and/or methods to support your view
});