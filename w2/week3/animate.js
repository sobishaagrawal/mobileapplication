$(document).ready(function () {

    var div1 = $("#div1");
    var div2 = $("#div2");
    var div3 = $("#div3");
    var div4 = $("#div4");

    div1.css("left", "0px");
    div2.css("left", "120px");
    div3.css("left", "240px");
    div4.css("left", "360px");

    $("#startBtn").click(function () {

        var p1 = div1.position().left;
        var p2 = div2.position().left;
        var p3 = div3.position().left;
        var p4 = div4.position().left;

        div1.css("background", "red")
            .animate({ left: p2, opacity: 0.5 }, 1000)
            .animate({ opacity: 1 }, 200);

        div2.css("background", "orange")
            .animate({ left: p3, opacity: 0.5 }, 1000)
            .animate({ opacity: 1 }, 200);

        div3.css("background", "blue")
            .animate({ left: p4, opacity: 0.5 }, 1000)
            .animate({ opacity: 1 }, 200);

        div4.css("background", "green")
            .animate({ left: p1, opacity: 0.5 }, 1000)
            .animate({ opacity: 1 }, 200);
    });
});
