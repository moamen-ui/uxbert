
$( function() {
    $(".tabs label").click(function() {
        var ele = $(this).attr("for");

        $(".tabs-content .active").removeClass("active");
        $(".tabs-content").find("." + ele).addClass("active");
    });
    $("#zoom_05").elevateZoom({
        zoomType	: "inner",
        cursor: "crosshair"
    });
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
        $("#price-start span").html($( "#slider-range" ).slider( "values", 0 ));
        $("#price-end span").html($( "#slider-range" ).slider( "values", 1 ));
        }
    });
    
    $("#price-start span").html($( "#slider-range" ).slider( "values", 0 ));
    $("#price-end span").html($( "#slider-range" ).slider( "values", 1 ));
} );