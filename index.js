console.log("javascript is connected");
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const tableBody = document.getElementById('tableBody');
    const undoContainer = document.getElementById('undoContainer');
    let guestCounter = 0;
    let lastDeletedGuest = null;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const guestNameInput = document.getElementById('guestName');
        const categoryInput = document.getElementById('category');
        const guestName = guestNameInput.value.trim();
        const category = categoryInput.value;

        if (!guestName || !category) return;

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
        guestNameInput.value = '';
        categoryInput.value = '';

        const deleteButton = row.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            lastDeletedGuest = row;
            tableBody.removeChild(row);
            showUndoOption(guestName);
        });

        const rsvpButton = row.querySelector('.rsvpButton');
        rsvpButton.addEventListener('click', () => {
            alert(`RSVP sent to ${guestName}`);
        });
    });

    function showUndoOption(guestName) {
        undoContainer.innerHTML = `
            ${guestName} was removed. <button id="undoButton">Undo</button>
        `;
        undoContainer.style.display = 'block';

        const undoButton = document.getElementById('undoButton');
        undoButton.addEventListener('click', () => {
            if (lastDeletedGuest) {
                tableBody.appendChild(lastDeletedGuest);
                lastDeletedGuest = null;
                undoContainer.innerHTML = '';
                undoContainer.style.display = 'none';
            }
        });
    }
});