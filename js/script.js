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
  
  $(document).ready(function(){ //Вызов функции по загрузке интерфейса
    var tempScrollTop, currentScrollTop = $(window).scrollTop(); //объявление переменных и присвоение им значений
    $(window).scroll(function(){ //Вызов функции при прокрутке страницы
      currentScrollTop = $(window).scrollTop(); //присвоение переменной нового значения
        if (currentScrollTop > $('header').height()) { //Проверка условия 'переменная больше высоты шапки'
          $('body').addClass('fixed-header'); // создание класса 'fixed-header' в селекторе 'body'
          if ( tempScrollTop > currentScrollTop ) { //Проверка условия 'значение переменной до вызова функции больше значения после её вызова'
            $('header').addClass('show'); //создание класса 'show' в селекторе 'header'
          } else { // выполнение, если второе условие не прошло проверку
            $('header').removeClass('show'); //удаление класса 'show' в селекторе 'header'
          }
        } else { // выполнение, если первое условие не прошло проверку
          $('body').removeClass('fixed-header'); // удаление класса 'fixed-header' в селекторе 'body'
          $('header').removeClass('show'); //удаление класса 'show' в селекторе 'header'
        }
          tempScrollTop = currentScrollTop; //присвоение одной переменной значение другой
    });
  });

