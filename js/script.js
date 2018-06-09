$(window).on("load", function() {
  $(".loader")
    .delay(1000)
    .fadeOut("slow");
});

$(document).ready(function() {
  $("#currentYear").text(new Date().getFullYear());
  attachTopScroller(".scrollUp");
  //  Make Banner hight equal to the height off the viewport.
  var windowHeight = $(window).innerHeight();
  var viewportWidth = $(window).innerWidth();
  if (viewportWidth >= 768) {
    $("#main-banner").css("height", windowHeight);
  }
});

function attachTopScroller(elementId) {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $(elementId).fadeIn();
      $("#header").addClass("dark-bg");
    } else {
      $(elementId).fadeOut();
      $("#header").removeClass("dark-bg");
    }
  });
  // Scroll To Top Animation
  $(elementId).click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
    return false;
  });
}
