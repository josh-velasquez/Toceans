function validateForm() {
  var name = document.getElementById("name").value;
  
  console.log(name)

  if (name == "") {
    document.querySelector(".status").innerHTML = "Name cannot be empty";
    return false;
  }
  var email = document.getElementById("email").value;
  if (email == "") {
    document.querySelector(".status").innerHTML = "Email cannot be empty";
    return false;
  } else {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector(".status").innerHTML = "Email format invalid";
      return false;
    }
  }
  var subject = document.getElementById("subject").value;
  if (subject == "") {
    document.querySelector(".status").innerHTML = "Subject cannot be empty";
    return false;
  }
  var message = document.getElementById("message").value;
  if (message == "") {
    document.querySelector(".status").innerHTML = "Message cannot be empty";
    return false;
  }
  document.querySelector(".status").innerHTML = "Sending...";
}

function validateEmail() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name == "") {
    document.querySelector(".status").innerHTML = "Please enter your name";
    return false;
  }
  if (email == "") {
    document.querySelector(".status").innerHTML = "Please enter an email"
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
    document.querySelector(".status").innerHTML = "Please enter your message"
    return false;
  }
  document.querySelector(".status").innerHTML = "Sending...";

  // send here
}

// <h2 class="text-center">Contact us</h2>
//     <div>
//       <form id="contact-form" name="contact-form" method="POST">
//         <div class="row">
//           <div class="col-md-6">
//             <div class="md-form mb-0">
//               <input type="text" id="name" name="name" class="form-control">
//               <label for="name" class="">Your name</label>
//             </div>
//           </div>
//           <div class="col-md-6">
//             <div class="md-form mb-0">
//               <input type="text" id="email" name="email" class="form-control">
//               <label for="email" class="">Your email</label>
//             </div>
//           </div>
//         </div>
//         <div class="row">
//           <div class="col-md-12">
//             <div class="md-form mb-0">
//               <input type="text" id="subject" name="subject" class="form-control">
//               <label for="subject" class="">Subject</label>
//             </div>
//           </div>
//         </div>
//         <div class="row">
//           <div class="col-md-12">
//             <div class="md-form">
//               <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
//               <label for="message">Your message</label>
//             </div>
//           </div>
//         </div>
//       </form>
//       <div class="text-center text-md-left">
//         <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
//       </div>
//       <div class="status"></div>
//     </div>