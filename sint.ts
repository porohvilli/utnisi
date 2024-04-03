type Employee = {
  id: number;
  name: string;
  salary: number;
};

class EmployeeDatabase {
  private employees: Employee[] = [];

  constructor(employees: Employee[]) {
    this.employees = employees;
  }

  public getEmployeeProperty(employeeId: number, property: keyof Employee): number | string {
    const employee = this.employees.find(emp => emp.id === employeeId);
    if (!employee) {
      throw new Error('Employee not found.');
    }
    return employee[property];
  }

  public setEmployeeProperty(employeeId: number, property: keyof Employee, value: number | string): void {
    const employee = this.employees.find(emp => emp.id === employeeId);
    if (!employee) {
      throw new Error('Employee not found.');
    }
    employee[property] = value;
  }
}

// Example usage:
const employees: Employee[] = [
  { id: 1, name: 'John Doe', salary: 50000 },
  { id: 2, name: 'Jane Smith', salary: 60000 }
];

const db = new EmployeeDatabase(employees);
const prop: keyof Employee = "salary";

try {
  const salary = db.getEmployeeProperty(1, prop);
  console.log(`Employee salary: ${salary}`);
  
  db.setEmployeeProperty(2, prop, 65000);
  console.log(`Updated employee salary: ${db.getEmployeeProperty(2, prop)}`);
} catch (error) {
  console.error(error);
}
