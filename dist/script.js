$(function() {
  // Switching between Sign in / Job application
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

// =====================
// Job Application
// =====================
$(function() {
  $("#jobForm").on("submit", function(e) {
    e.preventDefault();

    let valid = true;
    $("#jobForm input").each(function() {
      if ($(this).val().trim() === "") {
        valid = false;
      }
    });

    if (!valid) {
      alert("Please fill in all fields!");
      return;
    }

    // Animation
    $(".nav").addClass("nav-up");
    $(".form-signup-left").addClass("form-signup-down");
    $(".success").addClass("success-left");
    $(".frame").addClass("frame-short");

    // Send data to Formspree
    $.ajax({
      url: $("#jobForm").attr("action"),
      method: "POST",
      data: $("#jobForm").serialize(),
      dataType: "json",
      success: function() {
        console.log("Form sent successfully!");
      },
      error: function() {
        console.log("Error sending form!");
      }
    });
  });
});

// =====================
// Sign In
// =====================
$(function() {
  $(".btn-signin").click(function(e) {
    e.preventDefault();

    let username = $("input[name='username']").val().trim();
    let password = $("input[name='password']").val().trim();

    if (username === "smart_door_system" && password === "1037") {
      // Animation
      $(".btn-animate").addClass("btn-animate-grow");
      $(".welcome").addClass("welcome-left");
      $(".cover-photo").addClass("cover-photo-down");
      $(".frame").addClass("frame-short");
      $(".profile-photo").addClass("profile-photo-down");
      $(".btn-goback").addClass("btn-goback-up");
      $(".forgot").addClass("forgot-fade");

      // Redirect after 2s
      setTimeout(function() {
  window.location.href = "https://smartdoorsystem.github.io/smart-door-system/dist/profile-abdelraouf.html";
}, 2000);
      
    } else {
      alert("❌ Wrong username or password!");
    }
  });
});
