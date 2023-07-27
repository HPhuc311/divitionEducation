import Person from "./Person";

class Customer extends Person{
    constructor(id, type, name, address, email, nameofCompany, billInvoice,evaluate) {
        super(id, type, name, address, email);
        this.nameofCompany = nameofCompany
        this.billInvoice = billInvoice
        this.evaluate = evaluate
    }
}

export default Customer;