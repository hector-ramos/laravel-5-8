jQuery( window ).on( 'load', () => {
    let browserWindow = $( this ),
        html          = $( document.documentElement );
});

jQuery( document ).ready( ($) => {
    let browserWindow = $( this ),
        _window       = $( window ),
        currentDoc    = $( document ),
        html          = $( document.documentElement ),
        body          = $( document.body ),
        masthead      = $( '#masthead' ),
        footer        = $( '#footer' ),
        headNav       = $( '#head-navigation' ),
        mainContent   = $( '.main-content' ),
        smartForm     = html.find( '.smart-form' );

    // [LightGallery] ::start
    (() => {
        $( '#lightgallery' ).lightGallery(); 
    })();
    // [LightGallery] ::end

    // [Date Time Picker] ::start
    (() => {
        $('#datetimepicker1').datetimepicker();
    })();
    // [Date Time Picker] ::end


});