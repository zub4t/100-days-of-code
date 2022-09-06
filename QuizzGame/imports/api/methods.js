import { Meteor } from 'meteor/meteor';
import LeaderBoard from '../collections/leaderboard';
Meteor.methods({

    'test' ({ rGuess, wGuess }) {

        console.log("test")
        console.log(rGuess)
        console.log(wGuess)
        console.log(this)

    },
    'leaderboard.action' ({ rGuess, wGuess }) {
        if (!this.userId) {
            throw new Meteor.Error('Not authorized.');
        }
        if (LeaderBoard.find({ userId: this.userId }).count() > 0) {
            console.log("Atualizando")
            LeaderBoard.update({ userId: this.userId }, {
                $set: {
                    rGuess: rGuess,
                    wGuess: wGuess,
                },
            }, )
        } else {
            console.log("Inserindo")
            LeaderBoard.insert({
                userId: this.userId,
                rGuess: rGuess,
                wGuess: wGuess,
            })
        }



    }


})