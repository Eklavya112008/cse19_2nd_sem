// Array to store employee objects
  let employees = [];

  // Add employee
  function addEmployee() {
    let name = document.getElementById("empName").value;
    let id = document.getElementById("empId").value;
    let salary = Number(document.getElementById("empSalary").value);
    let dept = document.getElementById("empDept").value;

    let employee = {
      name: name,
      id: id,
      salary: salary,
      department: dept
    };

    employees.push(employee);
    document.getElementById("output").innerHTML = 
      `<p>Employee ${name} added successfully!</p>`;
  }

  // Display all employees
  function displayEmployees() {
    let html = "<h3>All Employees</h3><table><tr><th>Name</th><th>ID</th><th>Salary</th><th>Department</th></tr>";
    employees.forEach(emp => {
      html += `<tr><td>${emp.name}</td><td>${emp.id}</td><td>${emp.salary}</td><td>${emp.department}</td></tr>`;
    });
    html += "</table>";
    document.getElementById("output").innerHTML = html;
  }

  // Filter employees with salary > 50000
  function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 50000);
    let html = "<h3>Employees with Salary > 50000</h3><ul>";
    filtered.forEach(emp => {
      html += `<li>${emp.name} (${emp.department}) - ₹${emp.salary}</li>`;
    });
    html += "</ul>";
    document.getElementById("output").innerHTML = html;
  }

  // Calculate total salary payout
  function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    document.getElementById("output").innerHTML = 
      `<h3>Total Salary Payout: ₹${total}</h3>`;
  }

  // Calculate average salary
  function averageSalary() {
    if (employees.length === 0) {
      document.getElementById("output").innerHTML = "<p>No employees added yet.</p>";
      return;
    }
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;
    document.getElementById("output").innerHTML = 
      `<h3>Average Salary: ₹${avg.toFixed(2)}</h3>`;
  }

  // Count employees in a specific department
  function countDepartment() {
    let dept = prompt("Enter department name to count:");
    let count = employees.filter(emp => emp.department.toLowerCase() === dept.toLowerCase()).length;
    document.getElementById("output").innerHTML = 
      `<h3>Employees in ${dept}: ${count}</h3>`;
  }