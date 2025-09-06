$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    $(".form-signup").toggleClass("form-signup-left");
    $(".frame").toggleClass("frame-long");
    $(".signup-inactive").toggleClass("signup-active");
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
	});
});

$(function() {
	$(".btn-signup").click(function() {
        // Since we changed the button type to submit, this block is not needed for the form to submit.
        // It's here for animation, but the form will handle the data submission to Formspree.
        // You can remove this block if it causes any issues.
  $(".nav").toggleClass("nav-up");
  $(".form-signup-left").toggleClass("form-signup-down");
  $(".success").toggleClass("success-left"); 
  $(".frame").toggleClass("frame-short");
	});
});

$(function() {
	$(".btn-signin").click(function() {
  const username = $(".form-signin input[name='username']").val();
  const password = $(".form-signin input[name='password']").val();

  if (username === "smart_door_system" && password === "1037") {
    // Correct credentials, redirect to abdelraouf.html
    window.location.href = "control.html";
  } else {
    // Incorrect credentials, show an alert
    alert("Incorrect username or password. Please try again.");
    // Optional: Keep the animation but prevent redirection.
    $(".btn-animate").toggleClass("btn-animate-grow");
    $(".welcome").toggleClass("welcome-left");
    $(".cover-photo").toggleClass("cover-photo-down");
    $(".frame").toggleClass("frame-short");
    $(".profile-photo").toggleClass("profile-photo-down");
    $(".btn-goback").toggleClass("btn-goback-up");
    $(".forgot").toggleClass("forgot-fade");
  }
	});
});

$(function() {
  $("#forgot-password-link").click(function(e) {
    e.preventDefault();
    alert("Hint: previous computer password");
  });
});
