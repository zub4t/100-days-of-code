import { Meteor } from 'meteor/meteor';
import { LeaderBoard } from '/imports/collections/leaderboard';

function insertResult(result) {
    LinksCollection.insert({...result, createdAt: new Date() });
}

Meteor.startup(() => {

});