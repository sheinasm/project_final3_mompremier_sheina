$( document ).ready(function() {


    //JSSOR Slider-------------------------------------------------------->
    if ( $( "#slider1_container" ).length) {

        $( "#slider1_container" ).show();




    var options = { };
        var jssor_slider1 = new $JssorSlider$( "slider1_container", options );

        //responsive code begin
        //you can remove responsive code if you don"t want the slider scales
        //while window resizes
        function ScaleSlider( ) {
            var parentWidth = $("#slider1_container").parent( ).width( );
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

       }

        //jssor_slider1_starter("slider1_container");
    //END JSSOR SLIDER--------------------------------------------------->

    //FANCYBOX PLUGIN---------------------------------------------------->
    if ( $( ".fancybox" ).length ) {

        $( ".fancybox" ).show( );




        $( ".fancybox" ).fancybox( );
    }
    //END FANCYBOX PLUGIN----------------------------------------------->

    //MEANMENU PLUGIN--------------------------------------------------->

    $("header nav").meanmenu();
    //END MEANMENU PLUGIN----------------------------------------------->

    //FORM JS CODE------------------------------------------------------>
    var theForm = document.forms["gusteau-form"];

    var entree_prices = new Array();
        entree_prices["poulet"]= 14;
        entree_prices["quiches"]= 11;
        entree_prices["steak"]= 13;
        entree_prices["tilapia"]= 13;
        entree_prices["grille"]= 15;
        entree_prices["provencale"]= 14.5;
        entree_prices["fromage"]= 11;
        entree_prices["brie"]= 11;
        entree_prices["vegetarian"]= 10;
        entree_prices["prosciutto"]= 13;

    function getEntreePrice() {
        var entreePrice=0;
        var theForm = document.forms["gusteau-form"];
        var selectedEntree = theForm.elements["entree"];

        entreePrice = entree_prices[selectedEntree.value];

        return entreePrice;
    }

    function getQuantity() {
        var theForm = document.forms["gusteau-form"];

        var quantity = theForm.elements["quantity"];
        var howmany = 0;

        if(quantity.value !=" ") {
            howmany = parseInt(quantity.value);
        }

        return howmany;
    }

    function calculateTotal() {
        var entreePrice = getEntreePrice();
        var divobj = getElementById('totalPrice');
        divobj.style.display='block';
        divobj.innerHTML="Total price for you order is $"+ entreePrice;
    }

    //or...

    function getTotal() {
        var entreePrice = getEntreePrice();

        document.getElementById('totalPrice').innerHTML = "Total price for you order is $" + entreePrice;
    }



});




