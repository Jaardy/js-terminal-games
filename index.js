

import chalk from 'chalk';
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import chalkAnimation from 'chalk-animation'
import figlet from 'figlet'
import { createSpinner} from 'nanospinner'

let playerName
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms))

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        "Let's Play!\n"
    )
    await sleep()
    rainbowTitle.stop

    console.log(`
    ${chalk.bgBlue('HOW TO PLAY')}
    
    `)
}

await welcome()