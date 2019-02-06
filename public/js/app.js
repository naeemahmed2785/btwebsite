define('app', ['navigation', 'headerModule', 'footerModule'], function (navigation, headerModule, footerModule) {
    function _registerEventHandlers() {
        // this line would get executed on every hashchange. (meanu click)
        window.addEventListener("hashchange", navigation.navigate);



    }

    return {
        init: function () {
            $(document).ready(function () {
                var stickyNavTop = $('#nav__top').offset();
                console.log("Top: " + stickyNavTop.top + " Left: " + stickyNavTop.left);
                var stickyNav = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > stickyNavTop) {
                        $('#nav_top').addClass('sticky');
                    } else {
                        $('#nav_top').removeClass('sticky');
                    }

                };
                stickyNav();
                $(window).scroll(function (){
                    stickyNav();
                })
            })
           
            _registerEventHandlers();
            headerModule.header();
            footerModule.footer();

            if (!location.hash) {
                location.hash = "#home";
            }
            navigation.navigate()
        }
    }
})
