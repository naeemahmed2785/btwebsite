require.config({
    paths: {
        'jquery': 'jquery-3.3.1.min'
    }
});

require(['app'], function (app) {
    app.init();
});
