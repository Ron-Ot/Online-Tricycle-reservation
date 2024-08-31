// script.js
document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const departureTime = document.getElementById('departureTime').value;
    const payment = document.getElementById('payment').value;

    // Generate a virtual ticket
    const ticketDetails = `
        Name: ${name}<br>
        Contact: ${contact}<br>
        Pickup Point: ${pickup}<br>
        Destination: ${destination}<br>
        Departure Date: ${departureDate}<br>
        Departure Time: ${departureTime}<br>
        Payment Method: ${payment === 'gcash' ? 'GCash' : 'Credit Card'}<br>
        Reservation Time: ${new Date().toLocaleString()}<br>
        <strong>Total Cost: PHP 25.00</strong>
    `;

    // Save the ticket details to localStorage
    localStorage.setItem('ticketDetails', ticketDetails);

    // Redirect to the ticket page
    window.location.href = 'ticket.html';
});


