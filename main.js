#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let toDos = [];
let condition = true;
while (condition) {
    let todo = await inquirer.prompt([
        {
            name: "todoOptions",
            type: "list",
            message: "What would you like to do in your ToDos?",
            choices: ["View list", "Add item", "Discard last item", "Update last item"],
        }
    ]);
    if (todo.todoOptions === "View list") {
        console.log(chalk.bgRed("Your todo list:"));
        for (let task of toDos) {
            console.log(chalk.bgMagenta(task));
        }
        ;
    }
    else if (todo.todoOptions === "Add item") {
        let addTask = await inquirer.prompt([
            {
                name: "Add",
                type: "input",
                message: "What you like to add in your ToDos?"
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to add more?",
                default: "true"
            }
        ]);
        toDos.push(addTask.Add);
        condition = addTask.addMore;
        console.log(toDos);
    }
    else if (todo.todoOptions === "Discard last item") {
        let poppedTask = toDos.pop();
        console.log(chalk.bgBlueBright(`${poppedTask} is discarded`));
    }
    else if (todo.todoOptions === "Update last item") {
        let popped = toDos.pop();
        let replace = await inquirer.prompt([
            {
                name: "change",
                type: "input",
                message: "Write here:"
            }
        ]);
        toDos.push(replace.change);
        console.log(chalk.bgGrey(`${popped} is replace.`));
        console.log(toDos);
    }
}
;
