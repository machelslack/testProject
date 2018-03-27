/**
 * This view is an example list of people.
 */
Ext.define('testProject.view.main.List1', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist1',

    requires: [
        'testProject.store.Personnel'
    ],

    title: 'Personnel',

    // store: {
    //     type: 'groups'
    // },

    bind: {

        store: '{groups}'

    },

    columns: [
        { text: 'Name', dataIndex: 'firstName' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Account', dataIndex: 'accountKey', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
