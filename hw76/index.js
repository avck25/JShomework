const mongoose = require('mongoose'),
    Employee = require('./employee'),
    Departments = require('./departments');

mongoose.connect('mongodb://127.0.0.1:27017/company');

mongoose.connection.on('error', err => {
    console.error(err);
});

mongoose.connection.on('open', () => {
    console.log('connected');

    const donald = new Employee({
        name: {
            first: 'Donald',
            last: 'Trump'
        },
        salary: '120000',
    }),

        bernie = new Employee({
            name: {
                first: 'Bernie',
                last: 'Sanders'
            },
            salary: '60000',
        }),
        mike = new Employee({
            name: {
                first: 'Mike',
                last: 'Pence'
            },
            salary: '95000',
        });

    donald.save((err, result) => {
        const realEstate = new Departments({
            name: 'Real Estate'
        });
        realEstate.employees.push(donald);


        realEstate.save((err, res) => {
        });

    });
    bernie.save((err, result) => {

        const engineering = new Departments({
            name: 'Engineering'
        });
        engineering.employees.push(bernie);


        engineering.save((err, res) => {

        });

    });
    mike.save((err, result) => {

        const sales = new Departments({
            name: 'Sales'
        });
        sales.employees.push(mike);


        sales.save((err, res) => {


            Departments.find().populate('employees').exec((err, lists) => {
                lists.forEach(list => {
                    list.print();
                });
            });
        });

    });
    //donald.print();

    /*const noLastName = new Contact({
        name: {
            first: 'Donald'
        },
        email: 'dtrump@whitehouse.gov',
        phone: '123-456-7890'
    });

    noLastName.save((err, res) => {
        console.error(err);
    });*/

    /*Contact.find({ 'name.last': 'Clinton' }, (err, contacts) => {
        if (err) {
            console.error(err);
        } else {
            contacts.forEach(contact => {
                console.log(contact);
            });
        }
    });*/

    /*Contact.find({ 'name.last': 'Clinton' }).limit(2).exec((err, contacts) => {
        if (err) {
            console.error(err);
        } else {
            contacts.forEach(contact => {
                console.log(contact);
            });
        }
    });*/
});