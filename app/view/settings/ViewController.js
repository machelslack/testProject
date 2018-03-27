Ext.define("testProject.view.main.ViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.settings",

  onclickToolbarButton: function(button, e, eOpts) {
    var gridPanel = button.up("settings");
    // container = gridPanel
    let isHidden = gridPanel.dockedItems.items[3]

    {isHidden.hidden ? isHidden.show() : isHidden.hide()}
    
    console.log(isHidden.hidden);



  },

  onItemSelected : function (RowModel, record, index, eOpts ){

    let form = RowModel.view.up('settings').down('settingsForm');

    form.loadRecord(record);

    
    //console.log(RowModel.view.up('settings').down('settingsForm'))
    console.log(RowModel)

  }

});
