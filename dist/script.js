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
      window.location.href = "abdelraouf.html";
    } else {
      alert("Incorrect username or password. Please try again.");
    }
  });
});

$(function() {
  $("#forgot-password-link").click(function(e) {
    e.preventDefault();
    alert("Hint: previous computer password");
  });
});
