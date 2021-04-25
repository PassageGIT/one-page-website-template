$(function () {
    var nav = $("nav");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            nav.addClass("nav-scroll");
        } else {
            nav.removeClass("nav-scroll");
        }
    });
});


var topbutton = document.getElementById("topBtn");
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    prevScrollpos = currentScrollPos;
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




$(document).ready(function () {
    $('.toggler-button').click(function () {
        $(this).toggleClass('open');
    });
});


$(document).ready(function () {
    $('.toggler-button').click(function () {
        $('#navbar').slideToggle();
    })
});


if (window.matchMedia('(max-width: 576px)').matches) {
    $(document).ready(function () {
        $('.nav-item').click(function () {
            $('#navbar').slideToggle();
            $('.toggler-button').toggleClass('open');
        });
    });
}



$(function () {
    setTimeout(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
        $('body').removeClass('loading');
    }, 1500);
});


$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 600 && 1100 >= scroll ) {
            $('#link1').addClass("active");
        } else {
            $('#link1').removeClass("active");
        }
    });
});

$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1100 && 1900 >= scroll) {
            $('#link2').addClass("active");
        } else {
            $('#link2').removeClass("active");
        }
    });
});

$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 1900) {
            $('#link3').addClass("active");
        } else {
            $('#link3').removeClass("active");
        }
    });
});
