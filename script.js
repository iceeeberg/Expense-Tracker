let row = 1;

const submitExpense = document.getElementById('submit');
submitExpense.addEventListener("click", displayExpense);

function displayExpense(){
    let amount = document.getElementById('amount').value;
    let date = document.getElementById('date').value;
    let location = document.getElementById('location').value;
    let description = document.getElementById('description').value;

    if(!amount || !date || !location || !description ){
      alert("Please complete your entry");
      return false; 
    };

    const costs = document.getElementById('costs');
    const delteBtn = document.createElement("button");

    let newRow = costs.insertRow(row);
    let newAmount = newRow.insertCell(0);
    let newDate = newRow.insertCell(1);
    let newLocation = newRow.insertCell(2);
    let newDescription = newRow.insertCell(3);
   
    newAmount.textContent = amount;
    newDate.textContent= date;
    newLocation.textContent = location;
    newDescription.textContent = description;

    row++;
  };

  
 









  