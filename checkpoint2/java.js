function determineTicketPrice() {
  const age = document.getElementById("age").value;
  const price = document.getElementById("price");

  let ticketPrice;
  if (age>0 &&  age<= 12) {
    ticketPrice = "$10";
  } else if (age > 0 &&  age <= 17) {
    ticketPrice = "$15";
  } else if ( age >= 18) {
    ticketPrice = "$20";
  } else {
    ticketPrice = "Invalid age";
  }
  price.innerHTML = ticketPrice;
}