document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('guestForm');
  const tableBody = document.getElementById('tableBody');
  const undoContainer = document.getElementById('undoContainer');
  let guestCounter = 0;
  let lastDeletedGuest = null;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const guestName = document.getElementById('guestName').value.trim();
    const category = document.getElementById('category').value;

    if (!guestName || !category) {
      alert('Please fill in both fields.');
      return;
    }

    guestCounter++;
    const timeInvited = new Date().toLocaleTimeString();

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${guestCounter}</td>
      <td>${guestName}</td>
      <td>${timeInvited}</td>
      <td>${category}</td>
      <td><button class="rsvpButton">RSVP</button></td>
      <td><button class="deleteButton">Delete</button></td>
    `;

    tableBody.appendChild(row);
    form.reset();

    row.querySelector('.rsvpButton').addEventListener('click', () => {
      alert(RSVP sent to ${guestName});
    });

    row.querySelector('.deleteButton').addEventListener('click', () => {
      lastDeletedGuest = row;
      tableBody.removeChild(row);
      showUndoOption(guestName);
    });
  });

  function showUndoOption(guestName) {
    undoContainer.innerHTML = `
      <p>${guestName} has been deleted. <button id="undoButton">Undo</button></p>
    `;

    document.getElementById('undoButton').addEventListener('click', () => {
      if (lastDeletedGuest) {
        tableBody.appendChild(lastDeletedGuest);
        lastDeletedGuest = null;
        undoContainer.innerHTML = '';
      }
    });
  }
});