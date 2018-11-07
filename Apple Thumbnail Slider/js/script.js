$(document).ready(function(){

    $('.image1').hide();
    $('.image2').hide();
    $('.image3').hide();
    $('.image4').hide();
    
    $('.image1').addClass('acive').css({'display':'inline-block' });

$('.click1').on('click',function(){
  $('.image1').fadeIn();
  
  $('.image2').hide();
  $('.image3').hide();
  $('.image4').hide();
  
});


$('.click2').on('click',function(){
    $('.image2').fadeIn();
    $('.image1').hide();
    
    $('.image3').hide();
    $('.image4').hide();
    
  });

  
$('.click3').on('click',function(){
    $('.image3').fadeIn();
    $('.image1').hide();
    $('.image2').hide();
    
    $('.image4').hide();
    
  });
  
$('.click4').on('click',function(){
    $('.image4').fadeIn();
    $('.image1').hide();
    $('.image2').hide();
    $('.image3').hide();

    
  });
});

