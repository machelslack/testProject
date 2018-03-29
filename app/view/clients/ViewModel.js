Ext.define('testProject.view.clients.ViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.clients',

    data: {
        name: 'testProject',
    },
    stores: {
        department : {
            data: [
                {
                    id: 121111,
                    name: '~~Clear Filter~~',
                    
                },
                {
                    id: 123123,
                    name: 'Development',
                    
                },
                {
                    id: 456456,
                    name : 'HR'    
                },
                {
                    id: 456434,
                    name : 'QA'    
                },
                {
                    id: 456411,
                    name : 'Support'    
                },
                {
                    id: 456422,
                    name : 'CEO'    
                },
                {
                    id: 456333,
                    name : 'CFO'    
                }

            ]
        },
        clientInfo: {

            data: [
                {
                    id: 268380,
                    firstName: "Patrick",
                    lastName : "Weasley",
                    email: "pat@gmail.com",
                    department: "Development",
                    company: "Google",
                },
                {
                    id: 268381,
                    firstName: "Sam",
                    lastName : "Tollee",
                    email: "sam@gmail.com",
                    department: "Development",
                    company: "Facebook",
    
                },
                {
                    id: 268382,
                    firstName: "Tony",
                    lastName : "Woolley",
                    email: "Tony@gmail.com",
                    department: "HR",
                    company: "Google",
    
                },
                {
                    id: 268383,
                    firstName: "Simon",
                    lastName : "Weasley",
                    email: "Simon@gmail.com",
                    department: "Development",
                    company: "Google",
    
                },
                {
                    id: 268384,
                    firstName: "Borris",
                    lastName : "Borrison",
                    email: "Borr@gmail.com",
                    department: "QA",
                    company: "Google",
    
                },
                {
                    id: 268385,
                    firstName: "Penelope",
                    lastName : "Wilson",
                    email: "pen@gmail.com",
                    department: "Development",
                    company: "Facebook",
    
                },
                {
                    id: 268386,
                    firstName: "Sally",
                    lastName : "Baxtor",
                    email: "sally@gmail.com",
                    department: "HR",
                    company: "Google",
    
                },
                {
                    id: 268387,
                    firstName: "Marge",
                    lastName : "Simpson",
                    email: "m@gmail.com",
                    department: "Support",
                    company: "Google",
    
                },
                {
                    id: 268388,
                    firstName: "Homer",
                    lastName : "Simpson",
                    email: "homer@gmail.com",
                    department: "CEO",
                    company: "Google",
    
                },
                {
                    id: 268389,
                    firstName: "Tim",
                    lastName : "Sindop",
                    email: "tim@gmail.com",
                    department: "Development",
                    company: "Facebook",
    
                },
                {
                    id: 268398,
                    firstName: "Jeff",
                    lastName : "Jefferson",
                    email: "jeff@gmail.com",
                    department: "Development",
                    company: "Google",
    
                },
                {
                    id: 268378,
                    firstName: "Alex",
                    lastName : "Wilson",
                    email: "Al@gmail.com",
                    department: "CFO",
                    company: "Facebook",
                },
            ]
            },
    }

    //TODO - add data, formulas and/or methods to support your view
});