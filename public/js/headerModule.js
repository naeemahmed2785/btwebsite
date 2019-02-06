define('headerModule', ['navigation'], function (navigation) {
    function _getHeader() {
        var container = document.getElementById('navigationDiv');
        var fregmentId = 'navigation';
        navigation.getContent(fregmentId, function (content) {
            container.innerHTML = content;
        })
     
    }

    return {
        header: _getHeader
    }

});
