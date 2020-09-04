$(document).ready(function(){
    
   $(window).scroll(function(){
       
       if ($(window).scrollTop() > 728){
           $('.navbar').addClass('fixed-top');
       }
       if ($(window).scrollTop() < 728){
           $('.navbar').removeClass("fixed-top");
       }
   });
});

$(".navbar-dark ul li a[href^='#']").on('click',function(e){
   
    e.preventDefault();
    
    var hash = this.hash;
    $('html,body').animate({
       scrollTop: $(hash).offset().top 
    }, 300, function(){
        window.location.hash;
    });
});

$("#section-parallax col-sm-8  a[href^='#']").on('click',function(e){
   
    e.preventDefault();
    
    var hash = this.hash;
    $('html,body').animate({
       scrollTop: $(hash).offset().top 
    }, 300, function(){
        window.location.hash;
    });
});



$(".footer .scroll-to-top-button  a[href^='#']").on('click',function(e){
   
    e.preventDefault();
    
    var hash = this.hash;
    $('html,body').animate({
       scrollTop: $(hash).offset().top 
    }, 300, function(){
        window.location.hash;
    });
});


$('.js-wp-1').waypoint(function() {
      $('.js-wp-1').addClass('animated fadeInDown');
  }, { offset: '50%' });

$('.js-wp-2').waypoint(function() {
      $('.js-wp-2').addClass('animated fadeInLeft');
  }, { offset: '50%' });

$('.js-wp-3').waypoint(function() {
      $('.js-wp-3').addClass('animated fadeInRight');
  }, { offset: '50%' });

$('.js-wp-4').waypoint(function() {
      $('.js-wp-4').addClass('animated fadeInUp');
  }, { offset: '50%' });

$('.js-wp-5').waypoint(function() {
      $('.js-wp-5').addClass('animated bounceInDown');
  }, { offset: '50%' });

$('.js-wp-6').waypoint(function() {
      $('.js-wp-6').addClass('animated zoomIn');
  }, { offset: '50%' });

$('.js-wp-7').waypoint(function() {
      $('.js-wp-7').addClass('animated rollIn');
  }, { offset: '50%' });


$('.js-wp-8').waypoint(function() {
      $('.js-wp-8').addClass('animated zoomIn');
  }, { offset: '50%' });

$('.js-wp-9').waypoint(function() {
      $('.js-wp-9').addClass('animated lightSpeedIn');
  }, { offset: '50%' });

$('.js-wp-10').waypoint(function() {
      $('.js-wp-10').addClass('animated zoomIn');
  }, { offset: '50%' });

$('.js-wp-11').waypoint(function() {
      $('.js-wp-11').addClass('animated fadeInUp');
  }, { offset: '50%' });









































