

$( document ).ready(function() {
  $(document).foundation();


  // Handler for .ready() called.
  var wood =$('.wood li');
  wood.wookmark({
          
          autoResize: true, // This will auto-update the layout when the browser window is resized.
          container: $('.wood-parent'), // Optional, used for some extra CSS styling
          offset:20 , // Optional, the distance between grid items
          // outerOffset: 10, // Optional, the distance to the containers border
          itemWidth: 300 // Optional, the width of a grid item
      });


//funcion para bajar el bookin, al hacer click se deve ejcutar
 // $('.popUp').siblings('.booking-form').css('z-index','500');

    //
    //AAviso legal para traer al frent, page:aviso-legal
    //

     $('.popUp').siblings('.booking-form').css('z-index','500');


    //
    // hover del submenu hotel y destinos, page:capa-menu
    //

    var subMenuhotel = $('#subMenuOfertas'),
    capaHotel = $('.capaHoteles'),
    subMenuODestinos = $('#subMenuODestinos'),
    capaDestinos = $('.capaDestinos');
    
  
      //hover hotel
      subMenuhotel.hover(
    function() {
      capaDestinos.slideUp();
      capaHotel.slideDown();
    }
  );

  //hover hotel
      capaHotel.hover(
    function() {
      //nada q hacer
    } , function() {
      capaHotel.slideUp();
    }
  );

       //hover destinos
      subMenuODestinos.hover(
    function() {
      capaHotel.slideUp();
      capaDestinos.slideDown();
    }
  );

  //hover destinos
      capaDestinos.hover(
    function() {
      //nada q hacer
    } , function() {
      capaDestinos.slideUp();
    }
  );


      //
      //xcontacto
      //

      $('#body select').change(function(){
        $('#footer').show();
    });


      //
      //date-picker
      //

      var datePicker =  $( ".datepicker" );
      
     datePicker.datepicker();
     
     datePicker.focus(function(){
        // $('.booking-form').css('z-index','500');
         $('#mask2').css('opacity',1);
         // $('.booking-form').css('z-index','500');
     });//realizar onfucos para quitar


  });//end jquery

