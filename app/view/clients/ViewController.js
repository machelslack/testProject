Ext.define("testProject.view.clients.ViewController", {
    extend: "Ext.app.ViewController",
  
    alias: "controller.clients",


    selectDepartment: function(combo, record, eOpts ){
        console.log(combo)
        console.log(record)

        

        let viewModel = this.getViewModel(),
        store = viewModel.getStore('clientInfo');

        console.log(viewModel)
        console.log(store)
        record.data.name === '~~Clear Filter~~' ? store.clearFilter() : store.filter('department', record.data.name )
        
    },

    onclickToolbarButton: function(button, e, eOpts) {
        var gridPanel = button.up("clients");
        let isHidden = gridPanel.dockedItems.items[3]

        {isHidden.hidden ? isHidden.show() : isHidden.hide()}
        
      },

      onItemSelected : function (RowModel, record, index, eOpts ){

        RowModel.view.up('clients').dockedItems.items[3].show()

        let form = RowModel.view.up('clients').down('clientsForm');
        form.loadRecord(record);

      },


});