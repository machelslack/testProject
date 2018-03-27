Ext.define("testProject.view.settings.Main", {
  extend: "Ext.grid.Panel",
  xtype: "settings",

  // requires: [
  //     'testProject.store.Customers'
  // ],

  title: "Settings",

  // layout: 'fit',

  // store: {
  //     type: 'customers'
  // },
  controller:'settings',
  viewModel: "settings",
  bind: {
    store: "{secondgroup}"
  },

  dockedItems: [
    {
      xtype: "toolbar",
      dock: "top",
      items: [
        {
          xtype: "combobox",
          listeners: {
            select: 'selectCountry'
          },
          bind: {
            store: "{countries}"
          },
          displayField: "name",
          valueField: "id"
        },
        "->",
        {
          xtype: "button",
          text: "Add new setting",
          enableToggle: true,
          listeners: {
            click: 'onclickToolbarButton'
          }
        }
      ]
    },
    {
      xtype: "container",
      style: "background-color:green;",
      dock: "right",
      itemId: "settingsForm",
      width: 500,
      layout: 'fit',
      items: [{
            xtype: 'settingsForm'
      }],
      hidden: true
    }
  ],

  columns: [
    { text: "Name", dataIndex: "firstName" },
    { text: "Email", dataIndex: "email", flex: 1 },
    { text: "Account", dataIndex: "accountKey", flex: 1 }
  ],

  listeners: {
    select: "onItemSelected"
  }
});
