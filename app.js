/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'testProject.Application',

    name: 'testProject',

    requires: [
        // This will automatically load all classes in the testProject namespace
        // so that application classes do not need to require each other.
        'testProject.*'
    ],

    // The name of the initial view to create.
    mainView: 'testProject.view.main.Main'
});
