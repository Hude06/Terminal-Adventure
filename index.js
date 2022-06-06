import chalk from 'chalk';
import inquirer from "inquirer";
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner  } from 'nanospinner'


let playerName
async function input() {
    const answers = await inquirer.prompt({
        name: 'Players_Name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });
    playerName = answers.Players_Name;
}
await input();


function Drawing() {
    console.clear
    const msg = `Congrats ${playerName}`;

    figlet(msg, (err, data) =>{
        console.log(gradient.pastel.multiline(data));
    })
}

Drawing();