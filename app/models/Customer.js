import Person from "./Person.js";

class Customer extends Person{
    constructor(id, name, address, email, companyName, orderValue, rating) {
        super(id, name, address, email);
        this.companyName = companyName
        this.orderValue = orderValue
        this.rating =  rating
    }
}

export default Customer;