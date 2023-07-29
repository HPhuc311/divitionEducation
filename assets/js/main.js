import Customer from '../../app/models/Customer.js'
import Employee from '../../app/models/Employee.js'
import Student from '../../app/models/Student.js'
import ListPerson from '../../app/models/ListPerson.js'
import Person from '../../app/models/Person.js'
// ----------------------------------------------------------------
const getElement = (element) => document.querySelector(element)

const personList = new ListPerson()

let selectedValue;
const getChoose = () => {

    const l = getElement('#loai')
    // Lắng nghe sự kiện thay đổi
    l.addEventListener('change', (event) => {
        hideAllInputFields()
        selectedValue = event.target.value;
        if (selectedValue === "Student") {
            showInputFields('#math')
            showInputFields('#physical')
            showInputFields('#chemistry')
        } else if (selectedValue === "Employee") {
            showInputFields('#numberofDays')
            showInputFields('#dailyofWage')
        } else if (selectedValue === "Customer") {
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
// ====================== EVENT CLICK =========================
getElement('#btnThem').onclick = () => {
    getElement('#btnCapNhat').style.display = 'none'

}

getElement('#btnThemPerson').onclick = () => {
    addUser()
    setLocalStorages(personList.personList)
    displayUsers()

}

// ====================== ADD USER =========================

const addUser = () => {
    const id = getElement('#id').value
    const name = getElement('#name').value
    const address = getElement('#address').value
    const email = getElement('#email').value
    const type = getElement('#loai')

    let newUser = {};

    // displayUsers()

    // type.addEventListener('change' , (event) =>{
    //     const selectedValue = event.target.value;
    //     console.log("selectedValue", selectedValue);

    if (selectedValue === "Student") {
        const math = getElement('#input1').value
        const physical = getElement('#input2').value
        const chemistry = getElement('#input3').value
        newUser = new Student(id, 'Student', name, address, email, math, physical, chemistry)
        console.log(newUser)
    } else if (selectedValue === "Employee") {
        // console.log(124
        const workDays = getElement('#input4').value
        const dailySalary = getElement('#input5').value
        newUser = new Employee(id, 'Employee' ,name, address, email, workDays, dailySalary)
        console.log(newUser)
        // console.log("newUser", newUser);
    } else if (selectedValue === "Customer") {
        // console.log(126)
        const companyName = getElement('#input6').value
        const orderValue = getElement('#input7').value
        const rating = getElement('#input8').value
        newUser = new Customer(id, 'Customer' ,name, address, email, companyName, orderValue, rating)
        console.log(newUser)
        // console.log("newUser", newUser);
    }
    // })
    personList.addPerson(newUser);

}
// ====================== RENDER RA UI =========================
const displayUsers = (users = personList.personList) => {
    const userListElement = getElement("#tbodyList");
    userListElement.innerHTML = "";

    const userElements = users.map(user => {
        if (user instanceof Student) {
          return `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.type}</td>
                    <td>${user.name}</td>
                    <td>${user.address}</td>
                    <td>${user.email}</td>
                    <td><button class='btn btn-success'>DELETE</button></td>
                    <td><button class='btn btn-primary'>EDIT</button></td>
                </tr>
                `
        } else if (user instanceof Employee) {
          return `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.type}</td>
                    <td>${user.name}</td>
                    <td>${user.address}</td>
                    <td>${user.email}</td>
                    <td><button class='btn btn-success'>DELETE</button></td>
                    <td><button class='btn btn-primary'>EDIT</button></td>
                </tr>
                `
        } else if (user instanceof Customer) {
          return ` 
                <tr>
                    <td>${user.id}</td>
                    <td>${user.type}</td>
                    <td>${user.name}</td>
                    <td>${user.address}</td>
                    <td>${user.email}</td>
                    <td><button class='btn btn-success'>DELETE</button></td>
                    <td><button class='btn btn-primary'>EDIT</button></td>
                </tr>
                `
        }
      });   

      userListElement.innerHTML = userElements.join("");
}
// for (const user of users) {
//     const li = document.createElement("li");

//     if (user instanceof Student) {
//         li.textContent = `Học viên: ${user.name}, Điểm TB: ${user.calNumber()}`;
//     } else if (user instanceof Employee) {
//         li.textContent = `Nhân viên: ${user.name}, Lương: ${user.calSalary()}`;
//     } else if (user instanceof Customer) {
//         li.textContent = `Khách hàng: ${user.name}, Đánh giá: ${user.rating}`;
//     }

//     userListElement.appendChild(li);
// }

// ====================== DELETE PERSON =========================


const deleteUser = (id) => {
    personList.deletePerson(id);

    displayUsers();

}


// ====================LOCAL STORAGE================
// lưu thông tin nhân viên vào local storage:
function setLocalStorages(v) {
    localStorage.setItem('personList', JSON.stringify(v));
}
// đưa danh sách sinh viên từ local lên lại UI
const getLocalStorage = () => {
    // B1: lấy data từ local
    const data = localStorage.getItem('personList') ? JSON.parse(localStorage.getItem('personList')) : [];
    personList.personList = data.map(p =>{
            const {id,name, address, email, math, physical, chemistry,  workDays, dailySalary, companyName, orderValue, rating} = p
            if(p.type === "Student"){
                return new Student(id, 'Student', name, address, email, math, physical, chemistry)
            }else if(p.type === "Employee"){
                return new Employee(id, 'Employee' ,name, address, email, workDays, dailySalary)
            }else if(p.type === "Customer"){
                return new Customer(id, 'Customer' ,name, address, email, companyName, orderValue, rating)
            }
        });
        displayUsers()
}
getLocalStorage()
