//--------- Login-signup page ---------------------


$(document).ready(function() {
    // Show sign up form and hide sign in form when "Sign up" link is clicked
    $("#signup-link").click(function() {
        $("#signin-form").hide();
        $("#signup-form").show();
    });

    // Show sign in form and hide sign up form when "Sign in" link is clicked
    $("#signin-link").click(function() {
        $("#signup-form").hide();
        $("#signin-form").show();
    });
});




function generateCaptcha() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var captchaLength = 6;
    var captcha = '';
    for (var i = 0; i < captchaLength; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Draw the captcha on canvas
    var canvas = document.getElementById('captchaCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set maximum and minimum font sizes
    var maxFontSize = 65; // Change this to your desired maximum font size
    var minFontSize = 65; // Change this to your desired minimum font size
    var fontSize = Math.min(Math.max(4 * canvas.width / 100, minFontSize), maxFontSize);

    ctx.font = fontSize + 'px Arial';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(captcha, canvas.width / 2, canvas.height / 2);

    return captcha;
}


function validateForm() {
    var userInput = document.getElementById('captcha').value;
    var captchaText = generateCaptcha();
    if (userInput.toLowerCase() === captchaText.toLowerCase()) {
        return true;
    } else {
        alert("Incorrect CAPTCHA! Please try again.");
        generateCaptcha(); // Regenerate CAPTCHA
        return false;
    }
}


window.onload = function () {
    generateCaptcha();
};





//////////////////////////////////////////////////////////////////


$(document).ready(function () {

    /*Tooltip*/    
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    /*Tooltip*/

    /*Search You Send*/
    var $block1 = $('.no-result-from');

    $(document).on("input keyup", "#search_from", function() {
        var val = $(this).val().toLowerCase();
        var isMatch = false;

        $("#exchange_from_list li:not('.exclude-search')").each(function (i) {
            var content = $(this).text();
            if (content.toLowerCase().indexOf(val) == -1) {
                $(this).hide();
                $('.exclude-search').hide();
            } else {
                isMatch = true;
                $(this).show();
                $('.exclude-search').show();
            }
        });
        $block1.toggle(!isMatch);
    });
    /*Search You Send*/

    /*Search You Get*/
    var $block2 = $('.no-result-to');

    $(document).on("input keyup", "#search_to", function() {
        var val = $(this).val().toLowerCase();
        var isMatch = false;

        $("#exchange_to_list li:not('.exclude-search')").each(function (i) {
            var content = $(this).text();
            if (content.toLowerCase().indexOf(val) == -1) {
                $(this).hide();
                $('.exclude-search').hide();
            } else {
                isMatch = true;
                $(this).show();
                $('.exclude-search').show();
            }
        });
        $block2.toggle(!isMatch);
    });
    /*Search You Get*/

    /*Close Respectively*/
    $('#exchange_from, #exchange_from').change(function () {
        if($('#exchange_from').is(':checked')){
            $('#exchange_to').prop('checked', false);
            console.log('close to');
        }
        else if($('#exchange_to').is(':checked')){
            $('#exchange_from').prop('checked', false);
            console.log('close from');
        }
        else{
            $('#exchange_to').prop('checked', false);
            $('#exchange_from').prop('checked', false);
            console.log('close all');
        }
    });
    /*Close Respectively*/

    /*Copy Text*/
    $('.copy-to-clipboard').click(function() {
        var copyText = $('.copy-text');
        copyToClipboard(copyText);
    });
    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $('.copy-to-clipboard i').removeClass('fa-copy').addClass('fa-clipboard');
        $('.copy-to-clipboard').attr('data-bs-original-title','Copied').tooltip('show');
        setTimeout(() => {            
            $('.copy-to-clipboard i').removeClass('fa-clipboard').addClass('fa-copy');
            $('.copy-to-clipboard').attr('data-bs-original-title','Copy');
        }, 3000);
        $temp.remove();
    }
    /*Copy Text*/
});

