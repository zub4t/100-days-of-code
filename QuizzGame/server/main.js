import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '../imports/api/methods';
import '../imports/api/publications';




Meteor.startup(() => {
    /*
    if (!Accounts.findUserByUsername(SEED_USERNAME)) {
        Accounts.createUser({
            username: SEED_USERNAME,
            password: SEED_PASSWORD,
        });
    }
    const user = Accounts.findUserByUsername(SEED_USERNAME);
    console.log(user)*/

    ServiceConfiguration.configurations.upsert({ service: 'github' }, {
        $set: {
            loginStyle: 'popup',
            clientId: '4be43e8b16ae5f3bbe75', // insert your clientId here
            secret: 'e6e4ce302ef0cfab7ef1b4be75a8332b6f475510', // insert your secret here
        },
    });
});