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
    
    const newAmount = document.createElement('td');
    newAmount.textContent = amount
    inputAmount = table + tableRow.appendChild(newAmount);
    

    const newDate = document.createElement('td');
    newDate.textContent = date
    inputDate = table + tableRow.appendChild(newDate);
    

    const newLocation = document.createElement('td');
    newLocation.textContent = location
    inputLocation = table + tableRow.appendChild(newLocation);
    

    const newDescription = document.createElement('td');
    newDescription.textContent = description
    inputDescription = table + tableRow.appendChild(newDescription);
    

  
    
    };








  