
    var wrap = $(".wrap");
    var logo = $(".logo");

$(window).on("scroll", function(e) {
    // console.log(this.scrollY)
  if (this.scrollY > 45) {
    logo.addClass("logo2");
  } 
  else {
    logo.removeClass("logo2");
  }
  
});

