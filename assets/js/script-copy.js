// {
//   var userList = [];
//   /** fetch data from api (https://jsonplaceholder.typicode.com/users)*/
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then((data) => {
//     userList = data;
//     generateTableRows(userList);
//   });

//   /** fetch data from json-server (http://localhost:3000/users)*/
//   // fetch('http://localhost:3000/users')
//   // .then(response => response.json())
//   // .then((data) => {
//   //   userList = data.map((item) => {
//   //     item.fullName = `${item.firstName} ${item.lastName}`;
//   //     return item;
//   //   });
//   //   generateTableRows(userList);
//   // });
// }

let userList = [];
async function getUserList() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  userList = await response.json();
  generateTableRows(userList);
}

getUserList();

/**
 * generate table rows from data
 * @param data data array
 */
function generateTableRows(data) {
  const userTableBody = document.querySelector('#user-table-body'); /** get user tbody */

  /** loop data and create table row */
  data.forEach((user) => {
    const tableRow = document.createElement('tr'); /** create tr element */
    /** loop data item and create table columns */
    for (const key in user) {
      if (Object.hasOwnProperty.call(user, key)) {
        if (['name', 'username', 'email', 'phone'].includes(key)) {
          const element = user[key]; /** get item from object */
          const tableCol = document.createElement('td'); /** create td element */
          tableCol.textContent = element; /** set value in table column */
  
          tableRow.appendChild(tableCol); /** append created table column to table row */
        }
      }
    }
    userTableBody.appendChild(tableRow); /** append created table row to tbody */
  });
}

function filterUser() {
  const userTableBody = document.querySelector('#user-table-body'); /** get user tbody */
  const searchTerm = document.querySelector('#search-box');
  userTableBody.textContent = '';
  let filteredData = [];

  if (searchTerm.value !== '') {
    filteredData = userList.filter((item) => {
      return item.username.toLowerCase() === searchTerm.value.toLowerCase();
    });
  } else {
    filteredData = userList;
  }

  // filteredData = searchTerm.value !== '' ? userList.filter(item => item.name.toLowerCase().includes(searchTerm.value.toLowerCase())) : userList;
  
  generateTableRows(filteredData);
}

async function addUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name: 'Pratik'})
  })
}

addUser();