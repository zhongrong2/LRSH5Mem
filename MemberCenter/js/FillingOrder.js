// 选择导航栏
$(".con-nav-item").click(function () {
    $(this).siblings().children("span").removeClass("active");
    $(this).children("span").addClass("active");
    var data = $(this).attr("data");
    console.log(data);

    $.ajax({
        url:"data.json",
        method:"get",
        dataType:"json",
        success:function (result) {

        }
    })

})