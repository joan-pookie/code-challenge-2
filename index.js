
const form = document.getElementById('guestForm');
const guestNameInput = document.getElementById('guestName');
const guestList = document.getElementById('guestList');



document.getElementById("guestName").addEventListener("blur", function() {
  let inputValue = this.value;
  if (inputValue) {
    let capitalizedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    this.value = capitalizedValue;
  }
});



form.addEventListener('submit', function(event) {
  
  event.preventDefault();

  
  const guestName = guestNameInput.value;


  if (guestList.children.length >= 10) {
    alert("Guest list is full!  Maximum 10 guests.");
    return; 
  }

  
  const listItem = document.createElement('li');

  
  listItem.textContent = guestName ;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';

  
  removeButton.addEventListener('click', function() {
    listItem.remove(); 
  });


  const rsvpButton = document.createElement('button');
  rsvpButton.textContent = 'RSVP';

    
  rsvpButton.addEventListener('click', function() {
    if (rsvpButton.textContent === "RSVP"){
      rsvpButton.textContent = "Attending";
    } else if (rsvpButton.textContent === "Attending"){
      rsvpButton.textContent = "Not Attending";
    } else {
      rsvpButton.textContent = "RSVP"
    }
  });

  
  listItem.appendChild(removeButton);

   
  listItem.appendChild(rsvpButton);

  
  guestList.appendChild(listItem);

  
  guestNameInput.value = '';
});

