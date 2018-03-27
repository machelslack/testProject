/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('testProject.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'testProject',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    stores: {
        groups: {

            data: [
                    {
                        id: 268380,
                        accountKey: "505464",
                        firstName: "000000",
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
    }

    //TODO - add data, formulas and/or methods to support your view
});
