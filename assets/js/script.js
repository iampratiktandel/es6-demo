{
  let userList = [];
  /** fetch data from api (https://jsonplaceholder.typicode.com/users)*/
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((data) => {
    userList = data;
    generateTableRows(userList);
  });

  /** fetch data from json-server (http://localhost:3000/users)*/
  // fetch('http://localhost:3000/users')
  // .then(response => response.json())
  // .then((data) => {
  //   userList = data;
  //   generateTableRows(userList);
  // });
}

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
        if (['name', 'email', 'phone', 'website'].includes(key)) {
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