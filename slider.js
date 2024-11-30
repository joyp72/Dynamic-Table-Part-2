$().ready(function() {
    $("#minColSlider").slider({
      min: -50,
      max: 50,
      value: 0,
      slide: function( event, ui ) {
        $("#minCol").val(ui.value); 
        generateTable()
      }
    });
    // set default value to that of slider
    $("#minCol").val($("#minColSlider").slider("value"));
    // update slider to match input
    $("#minCol").on("input", function() {
        $("#minColSlider").slider("value", parseInt($(this).val(), 10));
    });

    $("#maxColSlider").slider({
        min: -50,
        max: 50,
        value: 0,
        slide: function( event, ui ) {
          $("#maxCol").val(ui.value); 
          generateTable()
        }
    });
    // set default value to that of slider
    $("#maxCol").val($("#maxColSlider").slider("value"));
    // update slider to match input
    $("#maxCol").on("input", function() {
        $("#maxColSlider").slider("value", parseInt($(this).val(), 10));
    });

    $("#minRowSlider").slider({
        min: -50,
        max: 50,
        value: 0,
        slide: function( event, ui ) {
          $("#minRow").val(ui.value); 
          generateTable()
        }
    });
    // set default value to that of slider
    $("#minRow").val($("#minRowSlider").slider("value"));
    // update slider to match input
    $("#minRow").on("input", function() {
        $("#minRowSlider").slider("value", parseInt($(this).val(), 10));
    });

    $("#maxRowSlider").slider({
        min: -50,
        max: 50,
        value: 0,
        slide: function( event, ui ) {
          $("#maxRow").val(ui.value); 
          generateTable()
        }
    });
    // set default value to that of slider
    $("#maxRow").val($("#maxRowSlider").slider("value"));
    // update slider to match input
    $("#maxRow").on("input", function() {
        $("#maxRowSlider").slider("value", parseInt($(this).val(), 10));
    });
})