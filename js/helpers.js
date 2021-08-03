var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
    btn.addClass('show');
    } else {
    btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
});

// Back to top button

// Getbutton.io widget

    (function () {
    var options = {
    whatsapp: "+212606752313", // WhatsApp number
    call_to_action: "Message me", // Call to action
    position: "right", // Position may be 'right' or 'left'
};
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

// Getbutton.io widget
