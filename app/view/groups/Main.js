/**
 * This view is an example list of people.
 */
Ext.define('testProject.view.groups.Main', {
    extend: 'Ext.grid.Panel',
    xtype: 'groups',

    requires: [
        'testProject.store.Personnel'
    ],

    title: 'Groups',

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
