const inquirer = require('inquirer');
const db = require('./queries');

async function mainMenu() {
    const { action } = await inquirer.prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'View all employees',
            'Add an employee',
            'Update an employee role',
            'View all roles',
            'Add a role',
            'View all departments',
            'Add a department',
            'Exit'
        ]
    });


    switch (action) {
        case 'View all employees':
            await db.viewAllEmployees();
            break;
        case 'Add an employee':
            await db.addEmployee();
            break;
        case 'Update an employee role':
            await db.updateEmployeeRole();
            break;
        case 'View all roles':
            await db.viewAllRoles();
            break;
        case 'Add a role':
            await db.addRole();
            break;
        case 'View all departments':
            await db.viewAllDepartments();
            break;
        case 'Add a department':
            await db.addDepartment();
            break;
        case 'Exit':
            console.log('Goodbye!');
            return;
    }

    mainMenu(); // Call mainMenu again to continue the loop
}

mainMenu();