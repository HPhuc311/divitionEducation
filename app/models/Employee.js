import Person from './Person.js';

class Employee extends Person {
    constructor(id, type, name, address, email,workDays,dailySalary){
        super(id, type, name, address, email,);
        this.workDays = workDays;
        this.dailySalary = dailySalary;
    }

    calSalary(){
        return (this.numberOfWorkingDays * this.dailyWage).toLocaleString('vi-VN');
    }
}

export default Employee;