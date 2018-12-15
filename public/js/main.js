
function setActiveLink(fragmentId) {
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
$(document).ready (function() {
    $("#divWorldRecord").load("worldRecord.html");
    $("#divBranches").load("branches.html")
});

function getContent(fragmentId, callback) {
    var request = new XMLHttpRequest();

    request.onload = function (res) {
        var data = request.responseText;
        callback(data);
    }
    request.open("GET", fragmentId + ".html");
    request.send();
}

function navigate() {
    var container = document.getElementById("contentDiv");
    fragmentId = location.hash.substr(1)
    getContent(fragmentId, function (content) {
        container.innerHTML = content;
    });
    // setActiveLink(fragmentId);
}


if (!location.hash) {
    location.hash = "#home";
}
getHeader();
getFooter();
navigate();


window.addEventListener("hashchange", navigate)

function getHeader() {
    var container = document.getElementById('navigationDiv');
    var fregmentId = 'navigation';
    getContent(fregmentId, function (content) {
        container.innerHTML = content;
    })
}

function getFooter() {
    var container = document.getElementById('footerDiv');
    var fregmentId = 'footer';
    getContent(fregmentId, function (content) {
        container.innerHTML = content;
    })
}


// function world() {
//     var container = document.getElementById('divWorldRecord');
//     var fregmentId = 'worldRecord';
//     getContent(fregmentId, function (content) {
//         container.innerHTML = content;
//     })
// }
    // function toggleChevron(){
    //     var container= document.querySelectorAll('.pull-right');
    //     container.classList.add("rotate-180");
    
    // }

    $(function() {
        $("#my").click(function() {   
           $("this").toggleClass("rotate-180");
        });
    });
