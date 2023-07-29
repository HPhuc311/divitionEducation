import Customer from '../../app/models/Customer.js'
import Employee from '../../app/models/Employee.js'
import Student from '../../app/models/Student.js'
import ListPerson from '../../app/models/ListPerson.js'
// ----------------------------------------------------------------
const getElement = (element) => document.querySelector(element)

const getChoose = () => {

    const l = getElement('#loai')
    // Lắng nghe sự kiện thay đổi
    l.addEventListener('change' , (event) =>{
        hideAllInputFields()
        const selectedValue = event.target.value;
        if(selectedValue === "1"){
            showInputFields('#math')
            showInputFields('#physical')
            showInputFields('#chemistry')
        }else if(selectedValue === "2"){
            showInputFields('#numberofDays')
            showInputFields('#dailyofWage')
        }else if(selectedValue === "3"){
            showInputFields('#nameofCompany')
            showInputFields('#invoice')
            showInputFields('#evaluate')
        }
    })
    // Ẩn tất các ô
     const hideAllInputFields = () => {
        const inputs = document.querySelectorAll('.inputField');
        inputs.forEach(input => {
          input.style.display = 'none';
        });
    }
    const showInputFields = (num) => {
        getElement(num).style.display = 'block'
    }

    return hideAllInputFields()
}


getChoose()
//  ----------------------------------------------------------------
 getElement('#btnThem').onclick = () => {
    getElement('#btnCapNhat').style.display = 'none'
 }

//  ----------------------------------------------------------------


const personList = new ListPerson()
console.log('personList', personList.personList)

getElement('#btnThemPerson').onclick = () => {
    addUser()
}

const addUser = () => {
    const id = getElement('#id').value
    const name = getElement('#name').value
    const address = getElement('#address').value
    const email = getElement('#email').value
    const type = getElement('#loai')
    
    let newUser;
    personList.addPerson(newUser);

    type.addEventListener('change' , (event) =>{
        const selectedValue = event.target.value;
        if(selectedValue === "1"){
           const math = getElement('#input1').value
           const physical = getElement('#input2').value
           const chemistry = getElement('#input3').value
           newUser = new Student(id, name, address, email, math, physical, chemistry)
        }else if(selectedValue === "2"){
            const workDays = getElement('#input4').value
            const dailySalary = getElement('#input5').value
            newUser = new Employee(id, name, address, email, workDays, dailySalary)
        }else if(selectedValue === "3"){
            const companyName = getElement('#input6').value
            const orderValue = getElement('#input7').value
            const rating = getElement('#input8').value
            newUser = new Customer(id, name, address, email, companyName, orderValue, rating)
        }
    })
    // displayUsers()
 }


//  const displayUsers = (users = personList.personList) => {
//     const userListElement = getElement("#tbodyList");
//     userListElement.innerHTML = ""; 
// }