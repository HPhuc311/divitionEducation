class ListP {
    constructor(){
        this.empty = []
    }

    addUser(u){
        this.empty.push(u)
    }
    delUser(i){
        this.empty = this.empty.filter(f => f.i !== i);
    }
    editUser(n,i){
        const index = this.empty.findIndex(f => f.i === i);
        this.empty[index] = n;
    }

    sortByName() {
        this.empty.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    filterByType(type) {
        return this.empty.filter(empty => empty instanceof type);
    }

}

export default ListP