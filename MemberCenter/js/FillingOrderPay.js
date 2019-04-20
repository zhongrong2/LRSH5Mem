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

// 选择优惠券
$(".con-coupon").click(function () {
    window.location.href = 'MemberCoupon.html';
})

// 选择支付方式
var PayTypes = $(".con-payType ul li");
PayTypes.each(function () {
    $(this).click(function () {
        var lis = $(this).siblings();
        lis.css("background-color","white");
        $(this).css("background-color","#ffe0be");
        lis.find(".paybutton").removeClass("btnActive");
        $(this).find(".paybutton").addClass("btnActive");
        lis.find(".paybtn").removeClass("active");
        $(this).find(".paybtn").addClass("active");
    })
})

// 确认支付
$(".submit").click(function () {
    var data = $(".active").parent().attr("data");
    var pass = $("#payPassword_rsainput").val();
    console.log(data,pass);

    // 弹出支付密码弹窗
    if (data == 1){
        $("body").addClass("notScroll");
        $("#hint").addClass("hintactive");
        $("#showPass").addClass("hintactive");
        // 清空密码
        $("#payPassword_rsainput").focus();
    }
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
    $("#showPass").removeClass("hintactive");
    window.location.reload();
}
// 输入支付密码
    var payPassword = $("#payPassword_container"),
        _this = payPassword.find('i'),
        k=0,j=0,
        password = '' ,
        _cardwrap = $('#cardwrap');
    //点击隐藏的input密码框,在6个显示的密码框的第一个框显示光标
    payPassword.on('focus',"input[name='payPassword_rsainput']",function(){
        var _this = payPassword.find('i');
        if(payPassword.attr('data-busy') === '0'){
            //在第一个密码框中添加光标样式
            _this.eq(k).addClass("active");
            _cardwrap.css('visibility','visible');
            payPassword.attr('data-busy','1');
        }

    });
    //change时去除输入框的高亮，用户再次输入密码时需再次点击
    payPassword.on('change',"input[name='payPassword_rsainput']",function(){
        _cardwrap.css('visibility','hidden');
        _this.eq(k).removeClass("active");
        payPassword.attr('data-busy','0');
    }).on('blur',"input[name='payPassword_rsainput']",function(){

        _cardwrap.css('visibility','hidden');
        _this.eq(k).removeClass("active");
        payPassword.attr('data-busy','0');

    });

    //使用keyup事件，绑定键盘上的数字按键和backspace按键
    payPassword.on('keyup',"input[name='payPassword_rsainput']",function(e){

        var  e = (e) ? e : window.event;

        //键盘上的数字键按下才可以输入
        if(e.keyCode == 8 || (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)){
            k = this.value.length;//输入框里面的密码长度
            l = _this.length;//6

            for(;l--;){

                //输入到第几个密码框，第几个密码框就显示高亮和光标（在输入框内有2个数字密码，第三个密码框要显示高亮和光标，之前的显示黑点后面的显示空白，输入和删除都一样）
                if(l === k){
                    _this.eq(l).addClass("active");
                    _this.eq(l).find('b').css('visibility','hidden');

                }else{
                    _this.eq(l).removeClass("active");
                    _this.eq(l).find('b').css('visibility', l < k ? 'visible' : 'hidden');

                }

                if(k === 6){
                    j = 5;
                    CloseHint();
                }else{
                    j = k;
                }
                $('#cardwrap').css('left',j*1.1+'rem');

            }
        }
        else{
            //输入其他字符，直接清空
            var _val = this.value;
            this.value = _val.replace(/\D/g,'');
        }
    });