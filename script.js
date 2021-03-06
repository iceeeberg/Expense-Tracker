const submitExpense = document.getElementById('submit');
submitExpense.addEventListener("click", displayExpense);

function displayExpense(){
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    if(!amount || !date || !location || !description ){
      alert("Please complete your entry");
      return false; 
    };

    const table = document.getElementById('costs');
    const tableRow = document.createElement('tr');
    
    table.appendChild(tableRow);

    const newAmount = document.createElement('td');
    newAmount.textContent = amount
    tableRow.appendChild(newAmount);
    
    const newDate = document.createElement('td');
    newDate.textContent = date
    tableRow.appendChild(newDate);
    
    const newLocation = document.createElement('td');
    newLocation.textContent = location
    tableRow.appendChild(newLocation);
    
    const newDescription = document.createElement('td');
    newDescription.textContent = description
    tableRow.appendChild(newDescription);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X'
    newDescription.appendChild(deleteButton);
    
    deleteButton.addEventListener('click', () => {
      table.removeChild(tableRow);
    })
    
}

  
  