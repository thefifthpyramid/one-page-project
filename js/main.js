$(function(){
//scroll to Top
$('#top-button').click(function(){
  $('body,html').animate({
    scrollTop : 0
  },1000);
});
//End scroll to top
//add fixed class to the nav bar
$(window).scroll(function(){
  if($(window).scrollTop() > 1000){
    console.log('visible');
    $('nav').addClass("fixed-top");
  }else{
    $('nav').removeClass('fixed-top');
  }
});
//end add fixed class to the nav bar function 

//pop up
$('.main-btn').click(function(e){
  
  e.preventDefault();
  $('.pop-up').fadeIn(1000);
  $('#popup-close').click(function(){
    $('.pop-up').fadeOut(1000);
  });
});
$(".pop-up").click(function(){
  $(this).fadeOut(1000);
});
$(".pop-up .cover").click(function(e){
  e.stopPropagation();
});
//$('.pop-up');
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  46000);
});