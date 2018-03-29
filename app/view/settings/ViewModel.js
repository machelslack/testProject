Ext.define("testProject.view.settings.ViewModel", {
  extend: "Ext.app.ViewModel",

  alias: "viewmodel.settings",

  data: {
    name: "testProject",

    loremIpsum:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  stores: {
    countries: {
      data: [
        {
          id: 123123,
          name: "GB"
        },
        {
          id: 456456,
          name: "USA"
        },
        {
          id: 456434,
          name: "NZL"
        }
      ]
    },
    secondgroup: {
      data: [
        {
          id: 268380,
          accountKey: "123123123",
          firstName: "Pat -GB",
          email: "pat@gmail.com",
          country: "GB"
        },
        {
          id: 268381,
          accountKey: "505465",
          firstName: "Jimmy - GB",
          email: "jim@test.com",
          country: "GB"
        },
        {
          id: 268382,
          accountKey: "505466",
          firstName: "yyy - NZL",
          email: "yyy@xxx.com",
          country: "NZL"
        },
        {
          id: 268383,
          accountKey: "123123123",
          firstName: "Patty - USA",
          email: "pat@gmail.com",
          country: "USA"
        },
        {
          id: 268384,
          accountKey: "505465",
          firstName: "Johnny - GB",
          email: "jim@test.com",
          country: "GB"
        },
        {
          id: 268385,
          accountKey: "505466",
          firstName: "yyy - USA",
          email: "yyy@xxx.com",
          country: "USA"
        }
      ]
    }
  }

  //TODO - add data, formulas and/or methods to support your view
});
