// Scripts

$(window).scroll(function(e) {
  var top = $(document).scrollTop();

  if (top > 100) {
    $("#go-to-top").fadeIn("slow");
  } else {
    $("#go-to-top").fadeOut("slow");
  }
});

$(function() {
  $("a[rel^='external']").each(function() {
    $(this).attr("target","_blank");
  });

  $("#go-to-top a").click(function (e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $("section").offset().top
    }, 1000);
  });

  $("#show-info").click(function(e) {
    e.preventDefault();
    $("p#about").toggle();
    $("header ul").toggle();
  });
});
