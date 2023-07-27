import Person from './Person.js';

class Employee extends Person {
    constructor(id, name, address, email, numberOfWorkingDays, dailyWage){
        super(id, type, name, address, email, userType);
        this.numberOfWorkingDays = numberOfWorkingDays;
        this.dailyWage = dailyWage
    }

    calSalary(){
        return (this.numberOfWorkingDays * this.dailyWage).toLocaleString('vi-VN');
    }
}

export default Employee;