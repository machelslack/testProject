Ext.define("testProject.view.clients.Main", {
    extend: "Ext.grid.Panel",
    xtype: "clients",
  
  
     title: "Clients",
  
//     layout: 'fit',
  
     controller:'clients',
     viewModel: "clients",
     bind: {
       store: "{clientInfo}"
     },


     

  
    dockedItems: [
      {
        xtype: "toolbar",
        dock: "top",
        items: [
          {
            xtype: "combobox",
            fieldLabel: 'Select Department',
            listeners: {
              select: 'selectDepartment'
            },
            bind: {
              store: "{department}"
            },
            displayField: "name",
            valueField: "id"
          },
          "->",
          {
            xtype: "button",
            text: "Add new Client",
            enableToggle: true,
            listeners: {
              click: 'onclickToolbarButton'
            }
          }
        ]
      },
      {
        xtype: "container",
        dock: "right",
        itemId: "clientsForm",
        width: 500,
        layout: 'fit',
        items: [{
              xtype: 'clientsForm'
        }],
        hidden: true
      }
    ],
  
     columns: [
       { text: "First Name", dataIndex: "firstName", flex: 1  },
       { text: "Last Name", dataIndex: "lastName",  flex: 1 },
       { text: "Email", dataIndex: "email", flex: 1 },
       { text: "Department", dataIndex: "department", flex: 1 },
       { text: "Company", dataIndex: "company", flex: 1 },
     ],
  
    listeners: {
      select: "onItemSelected"
    }
  });
  