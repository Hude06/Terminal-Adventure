import chalk from 'chalk';
import inquirer from "inquirer";
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
console.clear()
console.log("TERMINAL-ADVENTURE")
console.log('This is Terminal Adventure, You are stuck in a virtual world and the only way to escape is to get the 5 diget code on a flash drive and type escape, But you have to be in the coffe shop to use the outlets.')
function Drawing() {
figlet.text('You Have complete Text adventure', {
    font: 'rectangles',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 80,
    whitespaceBreak: true
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
}

let bag = {
    items:[]

}
let kitchen = {
	name:"kitchen",
	description:"You are in a very ugly kitchen. With a fridge, pantri and a cat.",
    exits:['hatch']

}

let bedroom = {
	name:"bedroom",
	description:"You are in a dusty old bedroom with a bed TV and a door, There is nothing really in hear.", 
    exits: ["hatch"]
}

let lounge = {
	name:"lounge",
	description:"You are in a dark room, witch looks like a lounge that nobody has touched it in years. In the corner of the room you see a hatch and you wonder what is down there. You also see a sing that points to the exit witch goes to the CoffeeShop", 
    exits: ['hatch', 'CoffeeShop'],
}

let hatch = {
    name:"hatch",
	description:"You are in a high tech gameing room, With every type of game console, Every type of computer, A Gamers and Programmers dream lounge. There are multiple computer one of them has a flash drive, mabby it is the one you need. You can go back to the lounge, go to the kitchen or to the bedroom", 
    exits: ['bedroom', 'kitchen', 'lounge'],
    items: ['Flashdrive']
}

let CoffeeShop = {
    name:"CoffeeShop",
	description:"You are in the Happy Pearl Cafe, They sell all types of smoothies coffies and Boba. This is where you can plug the flash drive in, you just call escape when you have the flashdrive and you will escape", 
    exits: ['lounge'],

}
// You are in a high tech gameing room, With every type of game console, Every type of computer, A Gamers and Programmers dream lounge.
let rooms = [kitchen, bedroom, lounge, hatch, CoffeeShop]
let current = rooms[2]
console.log (current.description)
function process_input(verb, noun) {
    //console.log("Processing verb",verb,'noun',noun)
    //console.log("current is",current)
    if (verb === 'quit') {
        console.log("We are quitting")
        return false
    }
    if (verb === 'look') {
        if (noun === 'bag'){
            console.log(bag.items)
            return true
        }
        console.log(current.name)
        console.log(current.description)
        return true
    }
    if (verb === 'take') {
            if (noun === 'Flashdrive'){
        var removeditems = hatch.items.splice(0,1);
        console.log(removeditems)
        console.log(hatch.items)
        bag.items.push(removeditems[0])
        return true
    }
}
    if (verb === 'escape') {
        if (!bag.items.includes("Flashdrive")) {
            console.log("You don'y seem to have the flashdrive in your bag, Search around to find it.")
            return
        }
        if (current.name !== 'CoffeeShop') {
            console.log("You need to be in the coffe shop")
            return
        }
        console.clear()
        Drawing()
        return false
    }
    if (verb === 'go') {
        // is noun a valid exit for the current room
        if (current.exits.indexOf(noun) >= 0) {
            // console.log("we can move to the room: ", noun)
            current = rooms.find(rm => rm.name === noun)
            console.log("moving to",current.name)
            // console.log(current.description)  
            return
        } else {
            console.log("I don't know where ", noun, "is. Please try again.")
            return 
        }        
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


