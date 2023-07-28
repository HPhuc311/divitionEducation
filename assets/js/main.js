const getElement = (element) => document.querySelector(element)

getElement('#btnThem').onclick = () => {
    getElement('#btnCapNhat').style.display = 'none'
    // lấy thông tin từ form
    getInfor()
}

const getInfor = () => {
    const element = document.querySelectorAll("#listForm input, #listForm select")
    console.log("element", element);
}
