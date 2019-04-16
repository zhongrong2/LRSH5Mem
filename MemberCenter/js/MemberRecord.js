// 选择导航栏
$(".nav-item").click(function () {
    $(this).siblings().removeClass("navactive");
    $(this).addClass("navactive");
    var data = $(this).attr("data");
    console.log(data);

    if (data == "1"){
        $(".recharge-body").css("display","block");
        $(".consume-body").css("display","none");
        return false;
    }
    if (data == "2"){
        $(".recharge-body").css("display","none");
        $(".consume-body").css("display","block");
        return false;
    }
    return true;

    $.ajax({
        url:"data.json",
        method:"get",
        dataType:"json",
        success:function (result) {

        },
        error:function () {
            
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