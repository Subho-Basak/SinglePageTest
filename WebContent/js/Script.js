/**
 * Created by TUKAi on 9/24/2016.
 */

ans = new Array(5);

$('#getName').click(function(){
    var n= $('#name').val();

    if(n=="" || n.match(/^\s+$/)){
        $('.namePanel label').css({'opacity':'1'})
    }
    else {
        $('#fade').css({'display': 'none'});
        $('#slidein').animate({'margin-left': '50px', 'margin-top': '20px'}, "fast");
    }

});


$('.start').click(function(){
   $('.namePanel').css({'display':'none'});
    $('fieldset:nth-of-type(1)').animate({'margin-left':'150px','opacity':'1'},"fast");

});


/* query for ripple effect*/
var parent, ink, d, x, y;
$("ul li a").click(function(e){
    parent = $(this).parent();
    //create .ink element if it doesn't exist
    if(parent.find(".ink").length == 0)
        parent.prepend("<span class='ink'></span>");

    ink = parent.find(".ink");
    //incase of quick double clicks stop the previous animation
    ink.removeClass("animate");

    //set size of .ink
    if(!ink.height() && !ink.width())
    {
        //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
        d = Math.max(parent.outerWidth(), parent.outerHeight());
        ink.css({height: d, width: d});
    }

    //get click coordinates
    //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
    x = e.pageX - parent.offset().left - ink.width()/2;
    y = e.pageY - parent.offset().top - ink.height()/2;

//set the position and add class .animation


    //set the position and add class .animate
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});

i=0;



$('fieldset ul li a').click(function(){
    $(this).closest("fieldset").fadeOut().next().animate({'margin-left':'150px','opacity':'1'},"fast");

    var x=$(this).text();

    ans[i]=x;
    i++;
});


/* calculation of result*/
$('.getRes').click(function () {

    $totalCorrect = 0;

    if (ans[0].substring(1,2) == "A") { $totalCorrect++; }
    if (ans[1].substring(1,2) == "C") { $totalCorrect++; }
    if (ans[2].substring(1,2) == "B") { $totalCorrect++; }
    if (ans[3].substring(1,2) == "A") { $totalCorrect++; }
    if (ans[4].substring(1,2) == "B") { $totalCorrect++; }


    $(this).closest("fieldset").fadeOut().next().animate({'margin-left':'150px','opacity':'1'},"fast");

    $('.showRes p strong').text($totalCorrect);

    $('#correct').text('Correct ('+ $totalCorrect+')');
    $('#wrong').text('Incorrect ('+ (5-$totalCorrect)+')');

    $('#correct').css({'width':$totalCorrect*81+'px'});
    $('#wrong').css({'width':(5-$totalCorrect)*81+'px'});

    for(var a=0;a<5;a++) {
        $('.review ul li:nth-child('+(a+1)+') ul span').text(ans[a]);

    }
});


