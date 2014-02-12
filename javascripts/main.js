$( document ).ready(function() {
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


  });

