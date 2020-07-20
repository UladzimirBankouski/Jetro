$(function(){
    
    $('.slider__inner').slick({
        arrows:true,
        prevArrow: '<button class="slick-prev"><img src="./images/icons/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button class="slick-next"><img src="./images/icons/arrow-next.svg" alt=""></button>',
        
        asNavFor: '.slider__nav'
      });
      $('.slider__nav').slick({
        arrows:false,
        
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider__inner',
        // infinity: true,
        focusOnSelect: true,  
       
      }); 


      $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();

      });
















     });