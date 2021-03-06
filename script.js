let row = 1;

const submitExpense = document.getElementById('submit');
submitExpense.addEventListener("click", displayExpense);

function displayExpense(){
    let amount = document.getElementById('amount')
    let date = document.getElementById('date')
    let location = document.getElementById('location')
    let description = document.getElementById('description')

    if(!amount || !date || !location || !description ){
      alert("Please complete your entry");
      return false; 
    };

    const tableRow = document.createElement('tr');
    
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

    
  }








  