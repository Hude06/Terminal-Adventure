import chalk from 'chalk';
import inquirer from "inquirer";
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';

console.log("TERMINAL-ADVENTURE")
console.log('In Terminal Adventure you can move with go, and you can take items with take.')
let bag = {

}
let kitchen = {
	name:"kitchen",
	description:"You are in a very ugly kitchen. With a fridge and a pantri.",
}

let bedroom = {
	name:"bedroom",
	description:"You are in a dusty old bedroom with a bed TV and a door.", 
    exit: ""
}

let lounge = {
	name:"lounge",
	description:"You are in a high tech gameing room, With every type of game console, Every type of computer, A Gamers and Programmers dream lounge", 
    exit: ""
}

let rooms = [kitchen, bedroom, lounge]

let current = rooms[2]
console.log current.description
function process_input(verb, noun) {
    if (verb === 'quit') {
        console.log("We are quitting")
        return false
    }
    if (verb === 'go') {
        if (noun === 'kitchen') {
            let current = rooms[0]
            console.log(current.description)  
            return true
        }
        if (noun === 'bedroom') {
            let current = rooms[1]
            console.log(current.description)  
            return true
        }
        console.log("I don't know where ", noun, "is. Please try again.")
    } else {
        console.log ('I dont know what ',verb,'means. Please try again.')
    }
    //console.log('your noun is', noun)

}

function ask() {
    inquirer
    .prompt([
        {
        name: "user_input",
        type: "input",
        message: "What do you want to do?",
        },
    ])
    .then((answer) => {
        let parts = answer.user_input.split(" ")
        let verb = parts[0]
        let noun = parts[1]
        let result = process_input(verb,noun)
        if(result === false) return
        ask()
    });
}

ask()

// function Drawing() {
//     console.clear
//     const msg = `Congrats ${playerName}`;

//     figlet(msg, (err, data) =>{
//         console.log(gradient.pastel.multiline(data));
//     })
// }

// Drawing();


