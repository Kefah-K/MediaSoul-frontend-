/*  global $ , alert , consul*/
$(function() {
  'use strict';

  $('.username').blur(function(){
    if($(this).val().length < 4){
      $(this).parent().find('.custom-alert').fadeIn(200); //200 msecond
    }
    else{
      $(this).parent().find('.custom-alert').fadeOut(200);
    }
  });


  $('.email').blur(function(){
    if($(this).val().length == 0 ){
      $(this).parent().find('.custom-alert1').fadeIn(200); 
    }
    else{
      $(this).parent().find('.custom-alert1').fadeOut(200);
    }
  });


  $('.message').blur(function(){
    if($(this).val().length < 10){
      $(this).parent().find('.custom-alert2').fadeIn(200); 
    }
    else{
      $(this).parent().find('.custom-alert2').fadeOut(200);
    }
  });


});

/* for fade in the rating message  and fade out the stars */
const btn = document.querySelector(".btn-sub");
const stars = document.querySelector(".stars");
const post = document.querySelector(".post");
btn.onclick = ()=>{
  stars.style.display="none";
  post.style.display="block";
  return false;
}
