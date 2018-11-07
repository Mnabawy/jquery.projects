$(document).ready(function(){
    $('p').hide();
    $('.num1').on('click',function(){
        $('.text1').slideToggle();
        $('.text2').slideUp();
        $('.text3').slideUp();
        $('.text4').slideUp();
        $('.text5').slideUp();
        $('.text6').slideUp();
        $('.text7').slideUp();

    });

    $('.num2').on('click',function(){
        $('.text2').slideToggle();
        $('.text1').slideUp();
        $('.text3').slideUp();
        $('.text4').slideUp();
        $('.text5').slideUp();
        $('.text6').slideUp();
        $('.text7').slideUp();

    });
    $('.num3').on('click',function(){
        $('.text3').slideToggle();
        $('.text2').slideUp();
        $('.text1').slideUp();
        $('.text4').slideUp();
        $('.text5').slideUp();
        $('.text6').slideUp();
        $('.text7').slideUp();

    });
    $('.num4').on('click',function(){
        $('.text4').slideToggle();
        $('.text2').slideUp();
        $('.text3').slideUp();
        $('.text1').slideUp();
        $('.text5').slideUp();
        $('.text6').slideUp();
        $('.text7').slideUp();

    });
    $('.num5').on('click',function(){
        $('.text5').slideToggle();
        $('.text2').slideUp();
        $('.text3').slideUp();
        $('.text4').slideUp();
        $('.text1').slideUp();
        $('.text6').slideUp();
        $('.text7').slideUp();

    });
    $('.num6').on('click',function(){
        $('.text6').slideToggle();
        $('.text2').slideUp();
        $('.text3').slideUp();
        $('.text4').slideUp();
        $('.text5').slideUp();
        $('.text1').slideUp();
        $('.text7').slideUp();

    });
    $('.num7').on('click',function(){
        $('.text7').slideToggle();
        $('.text2').slideUp();
        $('.text3').slideUp();
        $('.text4').slideUp();
        $('.text5').slideUp();
        $('.text6').slideUp();
        $('.text1').slideUp();

    });


});