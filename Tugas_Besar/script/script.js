$(document).ready(function () {
  $(".2020").hide();
  $(".2019").hide();
  $(".2018").hide();
  $(".2017").hide();
  $(".live").hide();
  $(".band").hide();
  $(".old").hide();
  $(".eross").hide();
  $(".duta").hide();
  $(".adam").hide();
});

$(document).ready(function () {
  $("#video").click(function () {
    $(".youtubee").slideToggle("slow");
  });

  $("#live").click(function () {
    $(".live").slideToggle("slow");
  });

  $("#band").click(function () {
    $(".band").slideToggle("slow");
  });

  $("#old").click(function () {
    $(".old").slideToggle("slow");
  });

  $("#2020").click(function () {
    $(".2020").slideToggle("slow");
  });

  $("#2019").click(function () {
    $(".2019").slideToggle("slow");
  });

  $("#2018").click(function () {
    $(".2018").slideToggle("slow");
  });

  $("#2017").click(function () {
    $(".2017").slideToggle("slow");
  });

  $("#brian").click(function () {
    $(".brian").slideToggle("slow");
  });

  $("#eross").click(function () {
    $(".eross").slideToggle("slow");
  });

  $("#duta").click(function () {
    $(".duta").slideToggle("slow");
  });

  $("#adam").click(function () {
    $(".adam").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("header").delay("1000").fadeIn();
  // hide #back-top first
  $(".back-top").hide();
  // fade in #back-top
  $(function () {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 10) {
              $('#back-top').fadeIn();
          } else {
              $('#back-top').fadeOut();
    
          }
      });
      // scroll body to 0px on click
      $('a#back-top').click(function () {
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
  });
});

function cekButton() {
  alert("Terimakasih Telah Mengisi Feedback");
}