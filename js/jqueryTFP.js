// JavaScript
// 
// Top Menu bar controls ------------------------------------------------------
$(document).ready(function () {	
    $('#barMenu li').hover(
        function () {
            $('ul', this).stop(true, true).slideDown(100); // show submenu

        }, 
        function () {
            $('ul', this).stop(true, true).slideUp(100); // hide submenu	
        }
        );
});

// Popups ----------------------------------------------------------------------

// eof