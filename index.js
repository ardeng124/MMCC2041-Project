$(document).ready(function () {
    $("main").hide()
    $("main").fadeIn(500)
            
    $(".next-page-btn").hide()
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(document).height() - $(window).height() - 100) {
            $(".next-page-btn").stop().fadeIn(600)
        } else {
            $(".next-page-btn").stop().fadeOut(200)
        }
    })
    // $("footer").hide()
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > $(document).height() - $(window).height() - 100) {
    //         $("footer").stop().fadeIn(600)
    //     } else  {
    //         $("footer").stop().fadeOut(100)
    //     }
    // })

    //figure caption for images
    $("figcaption").hide()
    $(".imgHolder").mouseenter(function () {
        $(this).find("figcaption").stop().slideDown(130)
    })
    $(".imgHolder").mouseleave(function () {
        $(this).find("figcaption").stop().slideUp(130)
    })
})

function scrollCalculate() {
    var scrollAmt = document.body.scrollTop || document.documentElement.scrollTop;
    var scrollPos = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scrollAmt / scrollPos) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}
window.onscroll = function () { 
    scrollCalculate() 
}