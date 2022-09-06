import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import '/imports/api/methods';
import { LeaderBoard } from '/imports/collections/leaderboard';
const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';



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
            clientId: 'd849468976a7dcf325d6', // insert your clientId here
            secret: '068b86ba36b9e627e5ed905d8b338e662b4f9168', // insert your secret here
        },
    });
});