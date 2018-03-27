Ext.define('testProject.view.secondmain.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'secondlist',

    // requires: [
    //     'testProject.store.Customers'
    // ],

    // title: 'Personnel',

    // store: {
    //     type: 'customers'
    // },
    viewModel: 'secondmain',
    bind: {

        store: '{secondgroup}'
    },

    columns: [
        { text: 'Name', dataIndex: 'firstName' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Account', dataIndex: 'accountKey', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    },
   
});