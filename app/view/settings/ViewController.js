Ext.define("testProject.view.settings.ViewController", {
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

    //console.log(record)
    
    //console.log(RowModel.view.up('settings').down('settingsForm'))
    console.log('this ' , this)
     console.log('RowModel ', RowModel)
     console.log('RowModel.view ', RowModel.view)
     console.log('RowModel.view.up(settings) ', RowModel.view.up('settings'))
     console.log('RowModel.view.up(settings).down(settingsForm) ', form)

  },

  selectCountry : function  ( combo, record, eOpts ) {
    
    var viewModel = this.getViewModel(),
    store = viewModel.getStore('secondgroup');
    //debugger;
    store.filter('country', record.data.name )

  }

});
