$(document).ready(function(){
    // $('div#d2').hide();
    // $('button#click').on('click',function(){
    //     $('div#d1').hide(2000,function(){
    //         $('div#d2').show(2000,function(){
    //             $('div#d3').toggle(2000);
    //         });            
    //     });        

    //     $('div#d2').fadeIn(3000);
    //     $('div#d1').fadeOut(3000);
    //     $('div#d3').fadeToggle(3000);
    //     $('div#d4').fadeTo(3000, 0.5);

    //     $('div#d2').slideUp(3000);
    //     $('div#d1').slideDown(3000);
    //     $('div#d3').slideToggle(3000);

    //     $('div#d4').animate({
    //         'width': '300px',
    //         'height': '300px',
    //         'left' : '500px',
    //     },3000,function(){
    //         $(this).animate({'top' : '500px',},3000);
    //     });
    // });


    // $('#click').on('click',function(){
    //     $('#d1').html("<h1>Ammar</h1>");
    //     $('#d1').text("<h1>Ammar</h1>");
    //     $('#d1').css({
    //         'background-color' : 'red',
    //     });

    //     $('div')
    //         .html('55')
    //         .css({'color': 'blue',});
    // });


    // $('#click').on('click',function(){
    //     $('#d1').before($('#d2'));
    // });



    $("#mm").on("keyup", function() {
        //alert($(this).val());
        var value = $(this).val().toLowerCase();
        $("#content *").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

    });
});