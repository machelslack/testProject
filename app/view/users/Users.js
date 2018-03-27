/**
 * This view is an example list of people.
 */
Ext.define('testProject.view.users.Users', {
    extend: 'Ext.grid.Panel',
    xtype: 'userlist',
    requires: [
        'testProject.store.Customers'
    ],
    title: 'Users',
    controller: 'users',
    store: {
        type: 'customers'
    },
    viewModel:'users',
    columns: [
        { text: 'Name', dataIndex: 'firstName' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'accountKey', flex: 1 }
    ],
    dockedItems: [


        {
            xtype: 'toolbar',
            dock: 'top',
            items: [{
                xtype: 'combobox',
                fieldLabel: 'Country',
                bind: {
                    store: '{countries}'
                },
                selectFirstOption: true,
                name: 'countryId',
                displayField: 'name',
                valueField: 'id',
                listeners: {

                    change: 'selectCountry'
                },
            },

                '->', {
                xtype: 'button',
                ui: 'default',
                id: 'sidePanelBtn',
                text: 'Add new user',
                handler: 'onClickNewUser'
            }
            ]},
        {
            xtype: 'container',
            //style: 'background-color:red;',
            dock: 'right',
            itemId: 'installationFormContainer',
            width: 500,
            //layout: 'fit',
            items: [{
                ///xtype: 'epos-new-installation-form',

            }],
            hidden: false
        }
    ],
});
