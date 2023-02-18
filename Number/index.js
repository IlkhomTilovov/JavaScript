function plus() {
    openClose(true)
}
function openClose(argument) {
    document.getElementById("form").style.display = argument ? "block" : "none"
}
function objectCreate() {
    return ({
        id: getData() === null ? 1 : getData().length + 1,
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        gmail: document.getElementById("gmail").value
    })
}
function saveform() {
    let arr = getData() === null ? [] : getData()
    arr.push(objectCreate())
    saveLocal(arr)
    clearInput()
    chizish(getData())
    openClose(false)
}
function getData() {
    return JSON.parse(localStorage.getItem("data"))
}
function saveLocal(argument) {
    localStorage.setItem("data", JSON.stringify(argument))
}
function clearInput() {
    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("gmail").value = ""
}
function chizish(data) {
    let list = ""
    for (let i of data) {
        list += `
        <tr>
          <td>${i.firstName}</td>
          <td>${i.lastName}</td>
          <td>${i.gmail}</td>
        </tr>
        `
    }
    document.getElementById("tbody").innerHTML = list
}
function closeform() {
    openClose(false)
}


