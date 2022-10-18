import { brainhttp } from './brainhttp';
const serverURL = `http://127.0.0.1:3001/api/employees`
// getbutton
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click', function () {
    fetchEmployees();
});

let fetchEmployees = () => {
    let http = new brainhttp();
    let url = `${serverURL}/employees`;
    http.get(url, (err, employees) => {
        if (err) throw err;
        let tableRows = '';
        for (let employee of employees) {


            tableRows += `<tr>
                <td>${employee.id}</td>
                <td>${employee.first_name}</td>
                <td>${employee.last_name}</td>
                <td>${employee.email}</td>
                <td>${employee.gender}</td>
                <td>${employee.ip_address}</td>
                </tr>
                `
        }
        document.querySelector('#table-body').innerHTML = tableRows
    });
    console.log(users);
}

// put request
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click', function () {
    let empID = '_abcde',
        let employee = {
            id: empID,
            first_name: 'john',
            last_name: 'wilson',
            email: 'johnwislon@gmail.com',
            gender: 'male',
            ip_address: '255.255.255.255'
        }
    let url = `${serverURL}/employee/${empID}`;
    let http = new brainhttp();
    http.put(url, employee, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    })
})


// delete button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', function () {
    let employeeID = `_xwxyz`
    let url = `${serverURL}/employees`;
    let http = new brainhttp();
    http.delete(url, (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    })
})










