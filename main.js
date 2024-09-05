let employees = [];

        function addEmployee() {
            const name = document.getElementById('name').value;
            const profession = document.getElementById('profession').value;
            const age = document.getElementById('age').value;

            if (name === '' || profession === '' || age === '') {
                document.getElementById('errorMessage').innerText = 'Error:Please Make Sure All the fields are filled before adding in an employeee!';
                document.getElementById('errorMessage').style.display = 'block';
                document.getElementById('successMessage').style.display = 'none';
                document.getElementById('employeeCountMessage').textContent='You have 0 Employees.';
            } else {
                const newEmployee = {
                    id: employees.length + 1,
                    name: name,
                    profession: profession,
                    age: age
                };
                employees.push(newEmployee);
                displayEmployees();
                document.getElementById('successMessage').innerText = 'Success:Employee added!';
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('errorMessage').style.display = 'none';
            }
        }

        function displayEmployees() {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = '';
            employees.forEach(employee => {
                const li = document.createElement('li');
                li.innerHTML = `Name:${employee.name} &nbsp Profession:${employee.profession} &nbsp Age:${employee.age} 
                <button onclick="deleteEmployee(${employee.id})">Delete User</button>`;
                employeeList.appendChild(li);
            });
                    document.getElementById('employeeCountMessage').textContent='';
                }
   

        function deleteEmployee(id) {
            employees = employees.filter(employee => employee.id !== id);
            displayEmployees();
        }