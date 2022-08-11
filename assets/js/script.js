const userList = [
  {
    name: 'Pratik',
    email: 'pratik.tandel@1rivet.com',
    phone: '999343241',
    website: 'pratiktandel.in',
    role: 'Developer'
  },
  {
    name: 'Shivam',
    email: 'shivam.singh@1rivet.com',
    phone: '999343241',
    website: 'shivamsingh.in',
    role: 'Developer'
  },
  {
    name: 'Hiren',  
    email: 'hiren.tandel@1rivet.com',
    phone: '999343241',
    website: 'hirentandel.in',
    role: 'Developer'
  },
  {
    name: 'Mitul',
    email: 'mitul.patel@1rivet.com',
    phone: '999343241',
    website: 'mitulpatel.in',
    role: 'Developer'
  },
];

generateTableRows(userList);
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
      if (['name', 'email', 'phone', 'website'].includes(key)) {
        const element = user[key]; /** get item from object */
        const tableCol = document.createElement('td'); /** create td element */
        tableCol.textContent = element; /** set value in table column */
  
        tableRow.appendChild(tableCol); /** append created table column to table row */
      }
    }
    userTableBody.appendChild(tableRow); /** append created table row to tbody */
  });
}

function filterUser() {
  const userTableBody = document.querySelector('#user-table-body'); /** get user tbody */
  const searchTerm = document.querySelector('#search-box');
  const noRecordDiv = document.querySelector('.no-records');
  const userTable = document.querySelector('#user-table');
  userTableBody.textContent = '';
  let filteredData = [];

  // if (searchTerm.value !== '') {
  //   filteredData = userList.filter((item) => {
  //     return item.name.toLowerCase() === searchTerm.value.toLowerCase();
  //   });
  // } else {
  //   filteredData = userList;
  // }

  filteredData = searchTerm.value ? userList.filter(item => item.name.toLowerCase().includes(searchTerm.value.toLowerCase())) : userList;
  
  if (!filteredData.length) {
    userTable.classList.add(['d-none']);
    noRecordDiv.classList.remove(['d-none']);
  } else {
    userTable.classList.remove(['d-none']);
    noRecordDiv.classList.add(['d-none']);
  }
  generateTableRows(filteredData);
}

function onKeyUp(event) {
  console.log(event);
}

function onScroll(event) {
  console.log(event);
}

function onMouseOver(event) {
  console.log(event);
}

const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

function openModal() {
  modal.classList.remove(['d-none']);
}

function closeModal() {
  modal.classList.add(['d-none']);
}