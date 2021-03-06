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

    const tableRow = document.createElement('tr');
    
    tableRow.appendChild(amount);
    amount.value = "";

    tableRow.appendChild(date);
    date.value = "";

    tableRow.appendChild(amount);
    location.value = "";

    tableRow.appendChild(amount);
    description.value = "";
    
  }








  