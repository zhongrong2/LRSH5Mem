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


// 选择优惠券
$(".con-couponNum").click(function () {
    window.location.href = 'MemberCoupon.html';
})

// 确认支付
$(".submit").click(function () {
    var data = $(".btnActive").attr("data");
    console.log(data);

    // 显示余额支付
    if(data == 1){
        $("body").addClass("notScroll");
        $("#hint").addClass("hintactive");
        $("#showPass").addClass("hintactive");
        $("#Scpassword ul li").each(function (){
            $(this).children('img').remove();
        })
        pdIndex =0;
    }
    // 显示微信支付弹窗
    if(data == 2){
        $("body").addClass("notScroll");
        console.log("调用摄像头扫一扫");
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
    $(".myModa").css("display","none");
}


// 支付密码
var pdIndex = 0;//密码长度
var numArr = [];//密码
window.pdNum = 0;//输入密码的次数
window.show = true;
// 点击数字键盘
$(".passub_num ul li.subnum").click(function (){
    var index = $(this).attr("name");
    // console.log(index);
    // 点击.不输入
    if (index == undefined){
        return
    }
    // 点击数字输入
    else{
        // 输入密码3次以内
        if (window.pdNum < 2){
            if(pdIndex<=6){
                // 输入第二个数把上一次数放入numArr数组中
                numArr.push(index);
                $("#Scpassword ul li").eq(pdIndex).append('<img src="../img/MemberCenter/dian.png" />');
                if(pdIndex==5){
                    window.pdNum++;
                    console.log(window.pdNum);
                    //密码转换格式
                    var numVal = numArr.toString();//数组转换为字符串
                    var numPass = numVal.replace(/,/g,"");//字符串转换为数字
                    console.log(numPass);
                    if (numPass == "123456"){
                        $(".PassPrompt").html("支付密码正确");
                        window.location.href = 'PaySuccess.html';
                    }
                    else{
                        $(".PassPrompt").html("支付密码错误，请重新输入");
                        setTimeout(function (){
                            $("#Scpassword ul li").each(function (){
                                $(this).children('img').remove();
                            })
                            pdIndex =0;
                        },400)
                        numArr.splice(0,numArr.length);
                    }
                    // 给后端传密码
                    /*$.ajax({
                        url:"aaaa",
                        method:"get",
                        data:"numPass",
                        dataType:"json",
                        success:function () {
                            if (numPass == "123456"){
                                $(".PassPrompt").html("支付密码正确");
                                window.location.href = 'PaySuccess.html';
                            }
                            else{
                                $(".PassPrompt").html("支付密码错误，请重新输入");
                                setTimeout(function (){
                                    $("#Scpassword ul li").each(function (){
                                        $(this).children('img').remove();
                                    })
                                    pdIndex =0;
                                },400)
                                numArr.splice(0,numArr.length);
                            }
                        },
                        error:function () {
                            $.myToast("服务器出错")
                        }
                    })*/
                    // 密码长度为6清空密码
                }
                pdIndex++;
            }else{
                return;
            }
        }
        // 输入密码第3次
        else if (window.pdNum == 2){
            console.log("密码次数3次");
            if(pdIndex<=6){
                // 输入第二个数把上一次数放入numArr数组中
                numArr.push(index);
                $("#Scpassword ul li").eq(pdIndex).append('<img src="../img/MemberCenter/dian.png" />');
                if(pdIndex==5){
                    pdNum++;
                    console.log(pdNum);
                    //密码转换格式
                    var numVal = numArr.toString();//数组转换为字符串
                    var numPass = numVal.replace(/,/g,"");//字符串转换为数字
                    console.log(numPass);
                    // 给后端传密码
                    $.ajax({
                        url:"aaaa",
                        method:"get",
                        data:"numPass",
                        dataType:"json",
                        success:function () {
                            if (numPass == "123456"){
                                $(".PassPrompt").html("支付密码正确");
                                window.location.href = 'PaySuccess.html';
                            }
                            else{
                                $.myConfirm({title:"提示",message:"支付密码输入不正确，已经连续输入3次错误密码，如果忘记密码请点击重设密码或者重新输入",callback:function(){window.location.href='EditPass.html'}})
                            }
                        },
                        error:function () {
                            $.myToast("服务器出错")
                        }
                    })
                    // 密码长度为6清空密码
                }
                pdIndex++;
            }else{
                return;
            }
        }
        // 输入密码第4次
        else if (window.pdNum == 3){
            console.log("密码次数4次");
            if(pdIndex<=6){
                // 输入第二个数把上一次数放入numArr数组中
                numArr.push(index);
                $("#Scpassword ul li").eq(pdIndex).append('<img src="../img/MemberCenter/dian.png" />');
                if(pdIndex==5){
                    pdNum++;
                    console.log(pdNum);
                    //密码转换格式
                    var numVal = numArr.toString();//数组转换为字符串
                    var numPass = numVal.replace(/,/g,"");//字符串转换为数字
                    console.log(numPass);
                    // 给后端传密码
                    $.ajax({
                        url:"aaaa",
                        method:"get",
                        data:"numPass",
                        dataType:"json",
                        success:function () {
                            if (numPass == "123456"){
                                $(".PassPrompt").html("支付密码正确");
                                window.location.href = 'PaySuccess.html';
                            }
                            else{
                                $.myConfirm({title:"提示",message:"支付密码输入多次不正确，账户已经锁定，请点击忘记密码进行密码重置或者30分钟后重试",callback:function(){window.location.href='EditPass.html'}})
                            }
                        },
                        error:function () {
                            $.myToast("服务器出错")
                        }
                    })
                    // 密码长度为6清空密码
                }
                pdIndex++;
            }else{
                return;
            }
        }
        // 输入密码4次以上
        else{
            if (window.show == true){
                $.myConfirm({title:"提示",message:"您的支付账户已锁定，请30分钟后尝试或者点击忘记密码进行密码重置",callback:function(){window.location.href='EditPass.html'}});
                window.show = false;
            }
            else{

            }
        }
    }
})
$("#delcre").click(function (){
    if(pdIndex==0){
        return;
    }
    $("#Scpassword ul li").eq(pdIndex-1).children('img').remove();
    numArr.remove(pdIndex-1);
    pdIndex--;
})
Array.prototype.remove=function(obj){
    for(var i =0;i <this.length;i++){
        var temp = this[i];
        if(!isNaN(obj)){
            temp=i;
        }
        if(temp == obj){
            for(var j = i;j <this.length;j++){
                this[j]=this[j+1];
            }
            this.length = this.length-1;
        }
    }
}
