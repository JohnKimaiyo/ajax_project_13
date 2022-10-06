const { Router, response } = require('express');
const express = require('express');
const router = express.Router();

// employee data
let employees = [
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'joh@gmail.com',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
    {
        id: '_a',
        first_name: 'janet',
        last_name: 'wilson',
        email: 'janet@gmail.com',
        gender: 'female',
        ip_address: '127.0.0.1'
    }
];

// get id
let getID = () => {
    return '_' + Math.random().toString(36).substr(2, 9)
}

// get empoyee
router.get('/employee', (request, reponse) => {
    let employee = {
        id: getID(),
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.gender,
        gender: request.body.gender,
        ip_address: request.body.ip_address
    }
    employee.push(employee);
    console.log(`post request received at server .. ${new Date().tolocate}`);
    reponse.json(employee);
});

// put request
router.put('/employee/:id', (request, response) => {
    let empID = request.params.id;
    let updateEmployee = {
        id: empID,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.gender,
        ip_addres: request.body.ip_address
    };
    let existingEmployee = employees.find((employees) => {
        return employees.id === empID;
    });
    employees.splice(employees.indexOf(existingEmployee), 1, updateEmployees);
    console.log(`put request received at server ..${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'PUT request is success' });
});

// delete request
router.delete('/employees/:id', (request, reponse) => {
    let empID = request.params.id;
    employees = employees.filter((employee) => {
        return employee.id !== empID;
    });
    console.log(`delete request received at server ..${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'delete request i success' });
});

module.exports = router;




