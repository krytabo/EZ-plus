$(function () {
    $(".header").load("head.html", function () {
        var url = location.href;
        var href = url.substr(url.lastIndexOf("/") + 1);
        $("a[href='" + (href || "index.html") + "']").addClass("selected");
    });
});
