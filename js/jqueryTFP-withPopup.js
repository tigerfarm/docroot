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

$(function () {
    $('#contactPopup').modalPopLite({
        openButton: '#contactClicker', 
        closeButton: '#contactClose', 
        isModal: true
    });
});

// Required for ALL popup
(function (a) {
    var b = 0;
    a.fn.modalPopLite = function (c) {
        var c = a.extend({}, {
            openButton: "modalPopLite-open-btn", 
            closeButton: "modalPopLite-close-btn", 
            isModal: false
        }, c);
        return this.each(function () {
            b++;
            var d = b;
            var e = false;
            obj = a(this);
            triggerObj = c.openButton;
            closeObj = c.closeButton;
            isReallyModel = c.isModal;
            obj.before('<div id="modalPopLite-mask' + d + '" style="width:100%" class="modalPopLite-mask" />');
            obj.wrap('<div id="modalPopLite-wrapper' + d + '" style="left: -10000px;" class="modalPopLite-wrapper" />');
            obj.addClass("modalPopLite-child-" + d);
            a(triggerObj).live("click", function (b) {
                b.preventDefault();
                var c = a(window).width();
                var f = a(window).height();
                var g = a(".modalPopLite-child-" + d).outerWidth();
                var h = a(".modalPopLite-child-" + d).outerHeight();
                var i = c / 2 - g / 2;
                var j = f / 2 - h / 2;
                a("#modalPopLite-mask" + d).css("height", f + "px");
                a("#modalPopLite-mask" + d).fadeTo("slow", .6);
                a("#modalPopLite-wrapper" + d).css({
                    left: i + "px", 
                    top: j
                });
                a("#modalPopLite-wrapper" + d).fadeIn("slow");
                e = true
            });
            a(closeObj).live("click", function (b) {
                b.preventDefault();
                a("#modalPopLite-mask" + d).hide();
                a("#modalPopLite-wrapper" + d).css("left", "-10000px");
                e = false
            });
            if (!isReallyModel) {
                a("#modalPopLite-mask" + d).click(function (b) {
                    b.preventDefault();
                    a(this).hide();
                    a("#modalPopLite-wrapper" + d).css("left", "-10000px");
                    e = false
                })
            }
            a(window).resize(function () {
                if (e) {
                    var b = a(window).width();
                    var c = a(window).height();
                    var f = a(".modalPopLite-child-" + d).outerWidth();
                    var g = a(".modalPopLite-child-" + d).outerHeight();
                    var h = b / 2 - f / 2;
                    var i = c / 2 - g / 2;
                    a("#modalPopLite-wrapper" + d).css({
                        left: h + "px", 
                        top: i
                    })
                }
            })
        })
    };
    a.fn.modalPopLite.Close = function (b) {
        a("#modalPopLite-mask" + b).hide();
        a("#modalPopLite-wrapper" + thisPopID).css("left", "-10000px")
    };
    a.fn.modalPopLite.ShowProgress = function () {
        a('<div class="popBox-ajax-progress"></div>').appendTo("body")
    };
    a.fn.modalPopLite.HideProgress = function () {
        a(".popBox-ajax-progress").remove()
    }
})(jQuery)

// Sending "Contact Us" -------------------------------------------------------

$(document).ready(function() {
    $('#submit').click(function () {
        $('.sending').hide();
        //Get the data from all the fields
        var name = $('input[name=name]');
        var email = $('input[name=email]');
        var message = $('textarea[name=aMessage]');
        name.removeClass('hightlight');
        if (name.val()=='') {
            name.addClass('hightlight');
            return false;
        }
        email.removeClass('hightlight');
        if (email.val()=='') {
            email.addClass('hightlight');
            return false;
        }
        message.removeClass('hightlight');
        if (message.val()=='') {
            message.addClass('hightlight');
            return false;
        }
        var data = 'subject=' + name.val() +' : ' + email.val() + '&message='  + encodeURIComponent(message.val());
        $('.text').attr('disabled','true');  //disabled all the text fields
        $('.sending').show();                //show the sending sign
        // setInterval(function(){ myTimer() },1000);
        $.ajax({
            url: "../about/contactSend.php",	
            type: "GET",
            data: data,
            cache: false,
            success: function (html) {
                if (html==1) {
                    $('.form').hide();           //hide the form
                    $('.done').fadeIn('slow');   //show the success message
                // $('.text').attr('disabled','false');
                // $("name").text("");
                }
                else {
                    //if process.php returned 0/false (send mail failed)
                    alert('Unexpected error: '+html);
                }
            }
        });
        //cancel the submit button default behaviours
        return false;
    });
});


// eof