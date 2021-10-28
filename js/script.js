$(function () {
    $('#first_contact_btn').click(function () {
      $('.modal').addClass('modal_active');
      $(".modal_tittle").text("Contact us");
    });
   
    $('.modal_close').click(function () {
      $('.modal').removeClass('modal_active');
    });
  });

$(function () {
    $('#second_contact_btn').click(function () {
      $('.modal').addClass('modal_active');
    });
   
    $('.modal_close').click(function () {
      $('.modal').removeClass('modal_active');
    });
  });


$(function () {
    $('#third_contact_btn').click(function () {
      $('.modal').addClass('modal_active');
      $(".modal_tittle").text("For Advertisers");
    });
   
    $('.modal_close').click(function () {
      $('.modal').removeClass('modal_active');
    });
  });

  $(function () {
    $('#fourth_contact_btn').click(function () {
      $('.modal').addClass('modal_active');
      $(".modal_tittle").text("For Career");
    });
   
    $('.modal_close').click(function () {
      $('.modal').removeClass('modal_active');
    });
  });

// Шапка
  
  $(document).ready(function(){
    var tempScrollTop, currentScrollTop = $(window).scrollTop();
    $(window).scroll(function(){
      currentScrollTop = $(window).scrollTop();
        if (currentScrollTop > $('header').height()) {
          $('body').addClass('fixed-header');
          if ( tempScrollTop > currentScrollTop ) {
            $('header').addClass('show');
          } else {
            $('header').removeClass('show');
          }
        } else {
          $('body').removeClass('fixed-header');
          $('header').removeClass('show');
        }
          tempScrollTop = currentScrollTop;
    });
  });

