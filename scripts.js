var form = document.getElementById('contact-form');

// Adds a listener for the "submit" event.
form.addEventListener('submit', function(e) {
  e.preventDefault();
});

function validateEmail() {
  var message = document.getElementById("message").value;
  var status = document.querySelector(".status");
  if (message == "") {
    status.innerHTML = "Please enter your message";
    return false;
  }
  status.innerHTML = "";

  sendEmail(message);
}

function sendEmail(message) {
  myEmail = "info@toceans.ca";
  window.open("mailto:" + myEmail + "?subject=Toceans Customer&body=" + message);
}
