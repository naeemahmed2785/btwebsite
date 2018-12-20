define('navigation', ['jquery'], function ($) {
    'use strict'

    function _setActiveLink(fragmentId) {
        var navBar = document.querySelector(".navbar-nav");
        links = navBar.children;
        for (var i = 0; i < links.length; i++) {
            var lnk = links[i].children[0];
            var href = lnk.getAttribute("href").substr(1);
            console.log("substr :", href, lnk);
            if (href === fragmentId) {
                lnk.setAttribute("class", "active")
            } else {
                lnk.removeAttribute("class");
            }
        }
    }

    function _navigate() {
        var container = document.getElementById("contentDiv");
        var fragmentId = location.hash.substr(1)
        _getContent(fragmentId, function (content) {
            container.innerHTML = content;
            $(document).ready(function () {

                $("#divWorldRecord").load("worldRecord.html");
                $("#divBranches").load("branches.html")
                $("#divTermsConditions").load("terms&Conditions.html")

                $(function () {
                    $("#my").click(function () {
                        $("this").toggleClass("rotate-180");
                    });
                });

            });
        });
        // _setActiveLink(fragmentId);
    }

    function _getContent(fragmentId, callback) {
        var request = new XMLHttpRequest();

        request.onload = function (res) {
            var data = request.responseText;
            callback(data);
        }
        request.open("GET", fragmentId + ".html");
        request.send();
    }

    return {
        getContent: _getContent,
        navigate: _navigate
    }

});
