define('app', ['navigation', 'headerModule', 'footerModule'], function (navigation, headerModule, footerModule) {
    function _registerEventHandlers() {
        // this line would get executed on every hashchange. (meanu click)
        window.addEventListener("hashchange", navigation.navigate)
    }

    return {
        init: function () {
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
