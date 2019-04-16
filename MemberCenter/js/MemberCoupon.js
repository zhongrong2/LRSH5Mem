// 选择导航栏
$(".con-nav-item").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
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

$.ajax({
    url:"data.json",
    method:"get",
    dataType:"json",
    success:function (data) {
        var item = data[0];
        // console.log(item);
        var price = item.Price;
        var CoupPrefer = item.CoupPrefer;
        var CoupName = item.CoupName;
        var CoupTime = item.CoupTime;
        $(".Price").html(price);
        $(".CoupPrefer").html(CoupPrefer);
        $(".CoupName").html(CoupName);
        $(".CoupTime").html(CoupTime);
    }
})