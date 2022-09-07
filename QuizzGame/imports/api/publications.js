import { Meteor } from 'meteor/meteor';
import LeaderBoard from '../collections/leaderboard'

Meteor.publish('board', function publishBoard() {
    console.log("publishBoard for ", this.userId)

    return LeaderBoard.find({ userId: this.userId })

});