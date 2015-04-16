$( document ).ready(function() {


    //JSSOR Slider-------------------------------------------------------->
    if ( $( "slider1_container" ).length ) {

        $( "slider1_container" ).show( );

    }

    var options = { };
        var jssor_slider1 = new $JssorSlider$( 'slider1_container', options );

        //responsive code begin
        //you can remove responsive code if you don't want the slider scales
        //while window resizes
        function ScaleSlider( ) {
            var parentWidth = $('#slider1_container').parent( ).width( );
            if ( parentWidth ) {
                jssor_slider1.$ScaleWidth( parentWidth );
            }
            else
                window.setTimeout( ScaleSlider, 30 );
        }
        //Scale slider after document ready
        ScaleSlider( );

        //Scale slider while window load/resize/orientationchange.
        $( window ).bind( "load" , ScaleSlider );
        $( window ).bind( "resize" , ScaleSlider );
        $( window ).bind( "orientationchange" , ScaleSlider );
        //responsive code end

        //------Trigger-----

        //jssor_slider1_starter('slider1_container');
    //END JSSOR SLIDER--------------------------------------------------->

    //FANCYBOX PLUGIN---------------------------------------------------->
    if ( $( ".fancybox" ).length ) {

        $( ".fancybox" ).show( );

    }


    $( ".fancybox" ).fancybox( );
    //END FANCYBOX PLUGIN----------------------------------------------->

    //MEANMENU PLUGIN--------------------------------------------------->

    jQuery('header nav').meanmenu();
    //END FANCYBOX PLUGIN----------------------------------------------->




});
