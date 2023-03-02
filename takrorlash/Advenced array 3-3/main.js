let students = [
    { id: 1, year: 2002, name: "Iqboljon Yuldashev" },
    { id: 2, year: 2000, name: "Asilbek Tolipov" },
    { id: 3, year: 2002, name: "Najmiddin Nazorov" },
    { id: 4, year: 2002, name: "Abdullox Mominov" },
    { id: 5, year: 1995, name: "Sardor Turboyev" },
    { id: 6, year: 2002, name: "Mohichehra Hudoyberdiyeva" },
    { id: 7, year: 2007, name: "Muhammad Nurmirzayev" },
    { id: 8, year: 2002, name: "Shohruh Shukurov" }
];

// CRUD

// Create ========================================= 

// const addUser = (user) => {
//     students = [...students, { id: students.length + 1, ...user }]
// }
// addUser({ year: 2019, name: "Webbrain" })
// console.log(students);



// const sortByYear = () => {
//     let res = students.sort((a, b) => b.year - a.year);
//     students = res

// }
// sortByYear()



// Read ========================================= 
// const sortByAlphabet = () => {
//     let res = students.sort((a, b) => a.name.localeCompare(b.name))
//     students = res;
// }
// sortByAlphabet()
// console.log(students);


// Delete ========================================= 


// Read filter ====================================

// const deleteUser = (id) => {
//     let res = students.filter((value) => value.id !== id)
//     students = res
// }
// deleteUser(4);
// console.log(students);


// Update ========================================= 

// const updateUser = (data) => {
//     let res = students.map((value) =>
//         value.id === data.id ? { ...value, [data.type]: data.value } : value)
//     students = res
// }
// updateUser({ id: 2, type: "name", value: "Gulbashakar" })
// console.log(students);


// Read includes ===================================
// const names = (key) => {
//     let res = students.filter((value => value.name.includes(key)))
//     students = res
// }
// names("sardor")
// console.log(students);



// Takrorlash CRUD ===========================

// Read SORT =================================

// const sortByYear = () => {
//     let res = students.sort((a, b) => b.year - a.year)
//     students = res
// }
// const sortByAlphabet = () => {
//     let res = students.sort((a, b) => a.name.localeCompare(b.name))
//     students = res
// }
// sortByAlphabet()
// console.log(students);


// Delete Filter =====================================

// const deleteUser = (id) => {
//     let res = students.filter((value) => value.id !== id)
//     students = res
// }
// deleteUser(4)
// console.log(students);

// Create ============================================

// const addUser = (user) => {
//     students = [...students, { id: students.length + 1, ...user }]
// }
// addUser({ name: "Webbrain", year: 2019 })
// console.log(students);


// Update Map ============================================

const updateUser = (data) => {
    let res = students.map((students) =>
        students.id === data.id ? { ...students, [data.type]: data.value } : students)
    students = res
}
updateUser({ id: 2, type: "name", value: "Gulbashaker" })
updateUser({ id: 2, type: "year", value: 1999 })
// console.log(students);
