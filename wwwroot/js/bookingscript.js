// Example JavaScript to update the booking summary with selected details
document.querySelector(".reservation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Collect form data
    const checkinDate = document.getElementById("checkin-date").value;
    const checkoutDate = document.getElementById("checkout-date").value;
    const guests = document.getElementById("guests").value;
    const roomType = document.getElementById("room-type").value;

    // Update the booking summary section
    document.getElementById("summary-checkin").textContent = checkinDate || "-";
    document.getElementById("summary-checkout").textContent = checkoutDate || "-";
    document.getElementById("summary-guests").textContent = guests || "-";
    document.getElementById("summary-room").textContent = roomType.charAt(0).toUpperCase() + roomType.slice(1) || "-";

    // Example price calculation (simple and static)
    let totalPrice = 100; // Default base price
    if (roomType === "deluxe") totalPrice = 150;
    else if (roomType === "suite") totalPrice = 200;

    // Show total price in summary
    document.getElementById("summary-price").textContent = `$${totalPrice.toFixed(2)}`;
});
