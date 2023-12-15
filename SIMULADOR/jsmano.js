$(document).ready(function(){
    var selectedHand = null;
    var selectedNailDesign = null;

    // Función para mostrar las opciones de mano y uña
    function showHandOptions(hand) {
            // Lógica para mostrar las opciones de mano y uña
            if(hand === "images/Manobasico/MB.jpg") {
                $(".hand-option").hide();
                $(".manobasico-option").show();
            } else if(hand === "images/Manobasico/MM.jpg") {
                $(".hand-option").hide();
                $(".manocompleta-option").show();
            } else {
                $(".hand-option").hide();
            }
        
    }

    // Botón "Mano 1"
    $("#opcion-1").click(function(){
        $("#nail1").attr("src", "images/uñas/MB1.jpg");
        selectedNailDesign = 1;
        updateNailDesigns();
    });

    // Botón "Mano 2"
    $("#opcion-2").click(function(){
        $("#nail1").attr("src", "images/uñas/MB2.jpg");
        selectedNailDesign = 2;
        updateNailDesigns();
    });

    // Botón "Mano 3"
    $("#opcion-3").click(function(){
        $("#nail1").attr("src", "images/uñas/MB3.jpg");
        selectedNailDesign = 3;
        updateNailDesigns();
    });

    // Botón "Mano 4"
    $("#opcion-4").click(function(){
        $("#nail1").attr("src", "images/uñas/MB4.jpg");
        selectedNailDesign = 4;
        updateNailDesigns();
    });

    // Botón "Mano 5"
    $("#opcion-5").click(function(){
        $("#nail1").attr("src", "images/uñas/MB5.jpg");
        selectedNailDesign = 5;
        updateNailDesigns();
    });

    // Botón "Mano 6"
    $("#opcion-6").click(function(){
        $("#nail1").attr("src", "images/uñas/MB6.jpg");
        selectedNailDesign = 6;
        updateNailDesigns();
    });

    // Botón "Mano 7"
    $("#opcion-7").click(function(){
        $("#nail1").attr("src", "images/uñas/MB7.jpg");
        selectedNailDesign = 7;
        updateNailDesigns();
    });

    // Botón "Mano 8"
    $("#opcion-8").click(function(){
        $("#nail1").attr("src", "images/uñas/MB8.jpg");
        selectedNailDesign = 8;
        updateNailDesigns();
    });

    // Botón "Mano 9"
    $("#opcion-9").click(function(){
        $("#nail1").attr("src", "images/uñas/MB9.jpg");
        selectedNailDesign = 9;
        updateNailDesigns();
    });

    // Botón "Mano 10"
    $("#opcion-10").click(function(){
        $("#nail1").attr("src", "images/uñas/MB10.jpg");
        selectedNailDesign = 10;
        updateNailDesigns();
    });

    
    // Botón "Restablecer"
    $("#opcion-restablecer").click(function(){
        $("#nail1").attr("src", "images/Manobasico/MB.jpg");
    });

    $("#download-image").click(function(){
        // Create an anchor element
        var link = document.createElement('a');
        
        link.href = document.getElementById('nail1').src;
        
        link.download = 'Diseño-Uña.jpg';
        
        link.click();
    });

    var handSelect = document.getElementById('mano');
    handSelect.addEventListener('change', function() {
        // Llama a la función "showHandOptions" con el valor seleccionado de la mano
        showHandOptions(this.value);

        // Llama a la función "addHandOptionButtons" con el valor seleccionado de la mano
        addHandOptionButtons(this.value);
    });
});
