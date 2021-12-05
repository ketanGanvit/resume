$(window).on('scroll',function(){
            if ($(window).scrollTop()){
                $("#nav").addClass("menuEffect");
                $(".fcol").css('color','black')
            }
            else{
                $("#nav").removeClass("menuEffect");
                $(".fcol").css('color','black')
            }
        })


$(document).ready(function(){
    $("#mtech").click(function(){
        $("#mt").addClass("active");
    });

    $("#btech").click(function(){
        $("#bt").addClass("active");
    });

    $("#twl").click(function(){
        $("#tw").addClass("active");
    });

    $("#ten").click(function(){
        $("#tn").addClass("active");
    });

    $("#proj1").click(function(){
        $("#eCit").addClass("active");
    });

    $("#proj2").click(function(){
        $("#OnShop").addClass("active");
    });


    $(".boxClose").click(function(){
        $(".box").removeClass("active");
    });
});