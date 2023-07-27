import Person from './Person.js';

class Student extends Person {
    constructor(id, type, name, address, email, math, physical, chemistry) {
        super(id, type, name, address, email);
        this.math = math;
        this.physical = physical;
        this.chemistry = chemistry;
    }

    calNumber() {
        return ((Number(this.math) + Number(this.physical) + Number(this.chemistry)) / 3).toLocaleString('vi-VN');
    }
}

export default Student;
