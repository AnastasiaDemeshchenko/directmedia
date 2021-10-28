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



