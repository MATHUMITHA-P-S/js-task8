let bookings = [];
const movie = document.getElementById("movie");
const showtime = document.getElementById("showtime");
const tickets = document.getElementById("tickets");
const email = document.getElementById("email");
const bookBtn = document.getElementById("bookBtn");
const bookingList = document.getElementById("bookingList");
function isValidEmail(mail) {
  return mail.includes("@") && mail.includes(".");
}
function showBookings() {
  bookingList.innerHTML = "";
  for (let i = 0; i < bookings.length; i++) {
    let b = bookings[i];
    let item = document.createElement("li");
    item.innerHTML = 
      b.movie + " | " + b.showtime + " | " + b.tickets + " tickets | Rs " + b.total +
      " <button onclick='cancelBooking(" + i + ")'>Cancel</button>";
    bookingList.appendChild(item);
  }
}
function addBooking(movie, showtime, tickets, email, total) {
  bookings.push({ movie: movie, showtime: showtime, tickets: tickets, email: email, total: total });
  showBookings();
  alert("Booking confirmed\nMovie: " + movie + "\nShowtime: " + showtime + "\nTickets: " + tickets + "\nTotal: Rs " + total);
}
function cancelBooking(index) {
  bookings.splice(index, 1);
  showBookings();
  alert("Booking cancelled");
}
bookBtn.onclick = function () {
  let selectedMovie = movie.value;
  let price = parseInt(movie.options[movie.selectedIndex].dataset.price);
  let selectedShowtime = showtime.value;
  let ticketCount = parseInt(tickets.value);
  let userEmail = email.value;
  if (!ticketCount || ticketCount <= 0) {
    alert("Enter a valid ticket number");
    return;
  }
  if (!isValidEmail(userEmail)) {
    alert("Enter a valid email");
    return;
  }
 let totalPrice = price * ticketCount;
  addBooking(selectedMovie, selectedShowtime, ticketCount, userEmail, totalPrice);
};
