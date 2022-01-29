function validateEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "") {
    document.querySelector(".status").innerHTML = "Please enter your name";
    return false;
  }
  if (email == "") {
    document.querySelector(".status").innerHTML = "Please enter an email";
    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector(".status").innerHTML = "Email format invalid";
      return false;
    }
  }
  if (message == "") {
    document.querySelector(".status").innerHTML = "Please enter your message";
    return false;
  }
  document.querySelector(".status").innerHTML = "Sending...";

  sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
  // pull configs
  const myEmail = "";
  const myPassword = "";
  const fullMessage = 
    "Hello " + name + ",\n"
     + message;
  Email.send({
    Host : "smtp.yourisp.com",
    Username : myEmail,  
    Password : myPassword,
    To : email,
    From : myEmail,
    Subject : "Tocean Bot - Automated Email",
    Body : fullMessage
    }).then(
      () => alert("Email sent.")
    );
}
