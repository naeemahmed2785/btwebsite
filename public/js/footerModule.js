define('footerModule', ['navigation'], function (navigation) {
    function _getFooter() {
        var container = document.getElementById('footerDiv');
        var fregmentId = 'footer';
        navigation.getContent(fregmentId, function (content) {
            container.innerHTML = content;
        })
    }

    return {
        footer: _getFooter
    }

});

