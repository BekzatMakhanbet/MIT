firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("test").style.display = "block";

  } else {
    // No user is signed in.
    document.getElementById("test").style.display = "none";
  }
});




function login() {
	var userEmail = document.getElementById	("user_email");
	var userPass = document.getElementById	("user_pass");

	
} 