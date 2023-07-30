class ListPerson {
    constructor() {
      this.personList = [];
    }
  
    addPerson(person) {
      this.personList.push(person);
    }
  
    deletePersonByCode(code) {
      this.personList = this.personList.filter(person => person.id !== code);
    }
  
    updatePersonByCode(code, updatedPerson) {
      const index = this.personList.findIndex(person => person.id === code);
      if (index !== -1) {
        this.personList[index] = updatedPerson;
      }
    }
  
    sortByFullName() {
      this.personList.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    filterByType(type) {
      return this.personList.filter(person => person instanceof type);
    }
  }

  export default ListPerson