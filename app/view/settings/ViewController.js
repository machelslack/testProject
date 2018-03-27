Ext.define("testProject.view.main.ViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.settings",

  onclickToolbarButton: function(button, e, eOpts) {
    var gridPanel = button.up("settings");
    // container = gridPanel
    let isActive = gridPanel.dockedItems.items[3]

   
    
    
    console.log(gridPanel);



  }
});
