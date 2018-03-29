Ext.define("testProject.view.clients.FormView", {
    extend: "Ext.form.Panel",
  
    xtype: "clientsForm",

    //renderTo: document.body,
    title: "User Form",
    height: 600,
    width: 300,
    bodyPadding: 10,
    defaultType: "textfield",
    items: [
      {
        fieldLabel: "First Name",
        name: "firstName"
      },
      {
        fieldLabel: "Last Name",
        name: "lastName"
      },
      {
        fieldLabel: "Email",
        name: "email"
      },
      {
        fieldLabel: "Department",
        name: "department"
      },
      {
        fieldLabel: "Company",
        name: "company"
      }
    ],
    dockedItems: [
      {
        xtype: "toolbar",
        dock: "bottom",
        items: [
          {
            xtype: "button",
            text: "save"
            
          }
        ]
      }
    ]
  });
  