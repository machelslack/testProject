/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('testProject.view.users.ViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.users',

    selectCountry: function (combo, record, eOpts) {

       alert('country');
   
    }

});
