$.ajax({
    url:"data.json",
    method:"get",
    dataType:"json",
    success:function (data) {
        $("#static").html(data.static);
        $("#oil").html(data.oil);
        $("#count").html(data.count);
        $("#number").html(data.number);
        $(".couponNum").html(data.couponNum);
        $("#payCount").html(data.payCount);
        $("#payMem").html(data.payMem);
        $(".payCoupon").html(data.payCoupon);
        $(".pay").html(data.pay);
    }
});

// 选择支付方式
$(".paybutton").click(function () {
    var data = $(this).attr("data");
    var lis = $(this).parent().siblings();
    lis.each(function () {
        $(this).find(".paybtn").removeClass("active");
    })
    $(this).children(".paybtn").addClass("active");
    // console.log(data);
});

// 选择优惠券
$(".ChoseCoup").click(function () {
    window.location.href = 'CouponList.html';
})

// 确认支付
$(".submit").click(function () {
    var data = $(".active").parent().attr("data");
    console.log(data);

    // 显示微信支付弹窗
    if(data == 3){
        $("body").addClass("notScroll");
        $("#hint").addClass("hintactive");
        $("#showBox").addClass("hintactive");
        $(".img").attr("src","http://www.longruisen.com/payQR/gh_cfecc9d6d5f9/3.jpg")
    }

    $.ajax({
        url:"",
        method:"post",
        data:"data",
        dataType:"json",
        success:function () {

        },
        error:function () {

        }
    })
});
// 关闭弹窗
function CloseHint() {
    $("body").removeClass("notScroll");
    $("#hint").removeClass("hintactive");
    $("#showBox").removeClass("hintactive");
}