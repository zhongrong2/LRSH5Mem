var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;//手机号正则
var count = 60; //间隔函数，1秒执行
var InterValObj1; //timer变量，控制时间
var curCount1;//当前剩余秒数
/*第一*/
function sendMessage1() {
    curCount1 = count;
    var phone = $.trim($('#phone').val());
    console.log(phone);
    if (!phoneReg.test(phone)) {
        // alert(" 请输入有效的手机号码");
        $.myToast("请输入有效手机号码");
        return false;
    }
    else{
        //设置button效果，开始计时
        $("#btnSendCode1").css("pointer-events", "none"); //禁止点击
        $("#btnSendCode1").addClass("sendBtn");//添加样式
        $("#btnSendCode1").html( + curCount1 + "秒再获取");//倒计时
        InterValObj1 = window.setInterval(SetRemainTime1, 1000); //启动计时器，1秒执行一次
        //向后台发送处理数据
    }
}
function SetRemainTime1() {
    if (curCount1 == 0) {
        window.clearInterval(InterValObj1);//停止计时器
        $("#btnSendCode1").removeClass("sendBtn");//移除样式
        $("#btnSendCode1").css("pointer-events", "auto");//启用按钮
        $("#btnSendCode1").html("重新发送");
    }
    else {
        curCount1--;
        $("#btnSendCode1").html( + curCount1 + "秒再获取");
    }
}