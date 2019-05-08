// 选择汽油柴油导航栏
$(".nav-item").click(function () {
    $(this).siblings().removeClass("navactive");
    $(this).addClass("navactive");
    var data = $(this).attr("data");
    console.log(data);

    if (data == "1"){
        $(".account-title").html("汽油账户余额（元）");
        return false;
    }
    if (data == "2"){
        $(".account-title").html("柴油账户余额（元）");
        return false;
    }
    //获取账户余额
    $.ajax({
        url:"data.json",
        method:"post",
        dataType:"json",
        success:function (result) {

        },
        error:function () {

        }
    });
    return true;

})
// 选择加油充值导航栏
$(".con-nav-item").click(function () {
    $(this).siblings().removeClass("conNavAct");
    $(this).addClass("conNavAct");
    var data = $(this).attr("data");
    // console.log(data);
    if (data == 1){
        $(".consume-body").show();
        $(".recharge-body").hide()
        return false;
    }
    if (data == 2){
        $(".recharge-body").show();
        $(".consume-body").hide()
        return false;
    }
    //获取数据列表
    $.ajax({
        url:"data.json",
        method:"post",
        dataType:"json",
        success:function (result) {

        },
        error:function () {

        }
    });
    return true;
})
//加载更多
$(".loadmore").click(function () {

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