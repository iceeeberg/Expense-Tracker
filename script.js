const expenseArray = JSON.parse(localStorage.getItem('expenseArray')) || [];

const submitExpense = document.getElementById('submit');

submitExpense.addEventListener("click",(e) => {
  const amount = document.getElementById('amount')
  const date = document.getElementById('date')
  const location = document.getElementById('location')
  const description = document.getElementById('description')

  if(!amount.value || !date.value || !location.value || !description.value){
    alert("Please complete your entry");
    return false; 
  }

  const expense = {
    id: Math.random(),
    amount: amount.value,
    date: date.value,
    location: location.value,
    description: description.value,
  };

  displayExpense(expense);
  expenseArray.push(expense);
  pushToLocalStorage(expense);

  document.getElementById('form').reset();
})

function displayExpense(expense){
    const table = document.getElementById('costs');
    const tableRow = document.createElement('tr');
    
    table.appendChild(tableRow);

    const newAmount = document.createElement('td');
    newAmount.textContent = expense.amount
    tableRow.appendChild(newAmount);
    
    const newDate = document.createElement('td');
    newDate.textContent = expense.date
    tableRow.appendChild(newDate);
    
    const newLocation = document.createElement('td');
    newLocation.textContent = expense.location
    tableRow.appendChild(newLocation);
    
    const newDescription = document.createElement('td');
    newDescription.textContent = expense.description
    tableRow.appendChild(newDescription);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X'
    newDescription.appendChild(deleteButton);
    
    deleteButton.addEventListener('click', () => {
      deleteRow(deleteButton, expense.id)
    })
}

function pushToLocalStorage(expense) {
  localStorage.setItem('expenseArray', JSON.stringify(expenseArray));
}

window.addEventListener('load', (e) => {
  e.preventDefault();
  expenseArray.forEach(expense => {
    displayExpense(expense);
    });
});

function deleteRow(deleteButton, id){
  deleteButton.parentElement.parentElement.remove();
  for (let i = 0; i < expenseArray.length; i++){
    if (expenseArray[i].id === id){
      expenseArray.splice(i, 1);
      localStorage.setItem('expenseArray', JSON.stringify(expenseArray));
    }
  }
}

  
  