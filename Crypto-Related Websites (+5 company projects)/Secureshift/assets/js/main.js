$(document).ready(function () {
    var $block1 = $('.no-result-from');
    $(".exchange_from_input").keyup(function () {
        var val = $(this).val();
        var isMatch = false;

        $(".exchange_from_list li:not(:first)").each(function (i) {
            var content = $(this).text();
            if (content.toLowerCase().indexOf(val) == -1) {
                $(this).hide();
            } else {
                isMatch = true;
                $(this).show();
            }
        });
        $block1.toggle(!isMatch);
    });

    var $block2 = $('.no-result-to');
    $(".exchange_to_input").keyup(function () {
        var val = $(this).val();
        var isMatch = false;

        $(".exchange_to_list li:not(:first)").each(function (i) {
            var content = $(this).text();
            if (content.toLowerCase().indexOf(val) == -1) {
                $(this).hide();
            } else {
                isMatch = true;
                $(this).show();
            }
        });
        $block2.toggle(!isMatch);
    });

    $('.copy-to-clipboard').click(function() {
        var copyText = $('#address');
        copyToClipboard(copyText);
    });
    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).val()).select();
        document.execCommand("copy");
        $('.copy-to-clipboard span.icon').removeClass('icon-copy').addClass('icon-copied');
        $('.copy-text').text('Copied');
        setTimeout(() => {            
            $('.copy-to-clipboard span.icon').removeClass('icon-copied').addClass('icon-copy');
            $('.copy-text').text('Copy Address');
        }, 3000);
        $temp.remove();
    }
    
    $('.copy-to-clipboard.hash-out').click(function() {
        var copyText = $('#hash_out');
        copyToClipboardHash(copyText);
    });
    function copyToClipboardHash(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).val()).select();
        document.execCommand("copy");
        $('.copy-to-clipboard span.icon').removeClass('icon-copy').addClass('icon-copied');
        $('.copy-text').text('Copied');
        setTimeout(() => {            
            $('.copy-to-clipboard span.icon').removeClass('icon-copied').addClass('icon-copy');
            $('.copy-text').text('Copy');
        }, 3000);
        $temp.remove();
    }

});
//------------------------------------------ change the image according the clicks on steps--------------

document.addEventListener("DOMContentLoaded", function() {
    // Guide Row 1
    var guideRow = document.querySelector('.guide-row');
    var guideText = document.querySelector('.guide-text');
    var guideImg1 = document.getElementById('guide-img-1');
    var guideTextHd = document.querySelector('.guide-text-hd');

    guideImg1.style.display = 'none';

    guideRow.addEventListener('mouseover', function() {
        guideText.style.display = 'none';
        guideTextHd.style.display = 'none';
        guideImg1.style.display = 'block';
        guideRow.style.padding = '20px';
    });

    guideRow.addEventListener('mouseout', function() {
        guideText.style.display = 'block';
        guideTextHd.style.display = 'block';
        guideImg1.style.display = 'none';
    });

    // Guide Row 2
    var guideRow2 = document.querySelector('.guide-row-2');
    var guideText2 = document.querySelector('.guide-text-2');
    var guideImg2 = document.getElementById('guide-img-2');
    var guideTextHd2 = document.querySelector('.guide-text-hd-2');

    guideImg2.style.display = 'none';

    guideRow2.addEventListener('mouseover', function() {
        guideText2.style.display = 'none';
        guideTextHd2.style.display = 'none';
        guideImg2.style.display = 'block';
        guideRow2.style.padding = '20px';
    });

    guideRow2.addEventListener('mouseout', function() {
        guideText2.style.display = 'block';
        guideTextHd2.style.display = 'block';
        guideImg2.style.display = 'none';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Guide Row 3
    var guideRow3 = document.querySelector('.guide-row-3');
    var guideText3 = document.querySelector('.guide-text-3');
    var guideImg3 = document.getElementById('guide-img-3');
    var guideTextHd3 = document.querySelector('.guide-text-hd-3');

    guideImg3.style.display = 'none';

    guideRow3.addEventListener('mouseover', function() {
        guideText3.style.display = 'none';
        guideTextHd3.style.display = 'none';
        guideImg3.style.display = 'block';
        guideRow3.style.padding = '20px';
    });

    guideRow3.addEventListener('mouseout', function() {
        guideText3.style.display = 'block';
        guideTextHd3.style.display = 'block';
        guideImg3.style.display = 'none';
    });

    // Guide Row 4
    var guideRow4 = document.querySelector('.guide-row-4');
    var guideText4 = document.querySelector('.guide-text-4');
    var guideImg4 = document.getElementById('guide-img-4');
    var guideTextHd4 = document.querySelector('.guide-text-hd-4');

    guideImg4.style.display = 'none';

    guideRow4.addEventListener('mouseover', function() {
        guideText4.style.display = 'none';
        guideTextHd4.style.display = 'none';
        guideImg4.style.display = 'block';
        guideRow4.style.padding = '20px';
    });

    guideRow4.addEventListener('mouseout', function() {
        guideText4.style.display = 'block';
        guideTextHd4.style.display = 'block';
        guideImg4.style.display = 'none';
    });

    // Guide Row 5
    var guideRow5 = document.querySelector('.guide-row-5');
    var guideText5 = document.querySelector('.guide-text-5');
    var guideImg5 = document.getElementById('guide-img-5');
    var guideTextHd5 = document.querySelector('.guide-text-hd-5');

    guideImg5.style.display = 'none';

    guideRow5.addEventListener('mouseover', function() {
        guideText5.style.display = 'none';
        guideTextHd5.style.display = 'none';
        guideImg5.style.display = 'block';
        guideRow5.style.padding = '20px';
    });

    guideRow5.addEventListener('mouseout', function() {
        guideText5.style.display = 'block';
        guideTextHd5.style.display = 'block';
        guideImg5.style.display = 'none';
    });

    // Guide Row 6
    var guideRow6 = document.querySelector('.guide-row-6');
    var guideText6 = document.querySelector('.guide-text-6');
    var guideImg6 = document.getElementById('guide-img-6');
    var guideTextHd6 = document.querySelector('.guide-text-hd-6');

    guideImg6.style.display = 'none';

    guideRow6.addEventListener('mouseover', function() {
        guideText6.style.display = 'none';
        guideTextHd6.style.display = 'none';
        guideImg6.style.display = 'block';
        guideRow6.style.padding = '20px';
    });

    guideRow6.addEventListener('mouseout', function() {
        guideText6.style.display = 'block';
        guideTextHd6.style.display = 'block';
        guideImg6.style.display = 'none';
    });
});
