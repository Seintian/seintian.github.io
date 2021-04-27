var sLeft = document.getElementById('nav-container').scrollLeft;

// scroll the topnav as long the buttons are pressed
var _timeout;
var rightBtn = document.getElementById('nav-right-button');
rightBtn.onmousedown = function () {
    _timeout = setInterval(function () {
        document.getElementById('nav-container').scrollLeft += 10;
    }, 50);
}
rightBtn.onmouseup = function () {
    clearInterval(_timeout);
}
var leftBtn = document.getElementById('nav-left-button');
leftBtn.onmousedown = function () {
    _timeout = setInterval(function () {
        document.getElementById('nav-container').scrollLeft -= 10;
    }, 50);
}
leftBtn.onmouseup = function () {
    clearInterval(_timeout);
}

loadSiteMetas();

function loadSiteMetas() {
    $("#learning-title").load("learning/ meta[name='title']", function(response, status, xhr) {
        var $meta = $("meta", this);
    
        $(this).text($meta.attr("content"));
    
        $meta.remove();
    });
    $("#learning-desc").load("learning/ meta[name='description']", function(response, status, xhr) {
        var $meta = $("meta", this);
    
        $(this).text($meta.attr("content"));
    
        $meta.remove();
    });

    $("#gothics-title").load("gotico_arte/ meta[name='title']", function(response, status, xhr) {
        var $meta = $("meta", this);
    
        $(this).text($meta.attr("content"));
    
        $meta.remove();
    });
    $("#gothics-desc").load("gotico_arte/ meta[name='description']", function(response, status, xhr) {
        var $meta = $("meta", this);
    
        $(this).text($meta.attr("content"));
    
        $meta.remove();
    });

    $("#microplastics-title").load("micro_plastiche/ meta[name='title']", function(response, status, xhr) {
        var $meta = $("meta", this);
    
        $(this).text($meta.attr("content"));
    
        $meta.remove();
    });
    $("#microplastics-desc").load("micro_plastiche/ meta[name='description']", function(response, status, xhr) {
        var $meta = $("meta", this);
    
        $(this).text($meta.attr("content"));
    
        $meta.remove();
    });
}