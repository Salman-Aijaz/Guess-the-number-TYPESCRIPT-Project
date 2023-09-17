import chalk from "chalk";
import inquirer from "inquirer";



let Num = Math.floor(Math.random() * 2)

let person = await inquirer.prompt({
    type:"list",
    message:"Select any Number ",
    choices :["0","1","2"],
    name:"Numbers",
});

if(Num == parseInt(person.Numbers)){
    console.log(chalk.bold.blueBright
        ("You  Won Buddy Have a nice day"));
}
else{
    
    console.log(chalk.bold.redBright
        ("You Lose Buddy Try again"));
}
