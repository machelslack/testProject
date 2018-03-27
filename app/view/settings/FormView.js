Ext.define("testProject.view.settings.FormView", {
  extend: "Ext.form.Panel",

  xtype: "settingsForm",
 
  //renderTo: document.body,
  title: "User Form",
  height: 350,
  width: 300,
  bodyPadding: 10,
  defaultType: "textfield",
  items: [
    {
      fieldLabel: "First Name",
      name: "firstName"
    },
    {
      fieldLabel: "Email",
      name: "email"
    },
    {
      fieldLabel: "Account Key",
      name: "accountKey"
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
