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
        if(selectedValue === "Student"){
            showInputFields('#math')
            showInputFields('#physical')
            showInputFields('#chemistry')
        }else if(selectedValue === "Employee"){
            showInputFields('#numberofDays')
            showInputFields('#dailyofWage')
        }else if(selectedValue === "Customer"){
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

getElement('#btnThemPerson').onclick = () => {
    addUser()
}

const addUser = () => {
    const id = getElement('#id').value
    const name = getElement('#name').value
    const address = getElement('#address').value
    const email = getElement('#email').value
    const type = getElement('#loai')
    
    let newUser = {};
    
    // displayUsers()
    
    type.addEventListener('change' , (event) =>{
        const selectedValue = event.target.value;
        console.log("selectedValue", selectedValue);
        if(selectedValue === "Student"){
            console.log(123)
           const math = getElement('#input1').value
           const physical = getElement('#input2').value
           const chemistry = getElement('#input3').value
           newUser = new Student(id, name, address, email, math, physical, chemistry)
           console.log("newUser", newUser);
        }else if(selectedValue === "Employee"){
            console.log(124)
            const workDays = getElement('#input4').value
            const dailySalary = getElement('#input5').value
            newUser = new Employee(id, name, address, email, workDays, dailySalary)
            console.log("newUser", newUser);
        }else if(selectedValue === "Customer"){
            console.log(126)
            const companyName = getElement('#input6').value
            const orderValue = getElement('#input7').value
            const rating = getElement('#input8').value
            newUser = new Customer(id, name, address, email, companyName, orderValue, rating)
            console.log("newUser", newUser);
        }
    })
    personList.addPerson(newUser);
 }


 function displayUsers(users = personList.personList) {
    const userListElement = getElement("#tbodyList");
    userListElement.innerHTML = "";
  
    for (const user of users) {
      const li = document.createElement("li");
  
      if (user instanceof Student) {
        li.textContent = `Học viên: ${user.name}, Điểm TB: ${user.calculateAverage()}`;
      } else if (user instanceof Employee) {
        li.textContent = `Nhân viên: ${user.name}, Lương: ${user.calculateSalary()}`;
      } else if (user instanceof Customer) {
        li.textContent = `Khách hàng: ${user.name}, Đánh giá: ${user.rating}`;
      }
  
      userListElement.appendChild(li);
    }
  }