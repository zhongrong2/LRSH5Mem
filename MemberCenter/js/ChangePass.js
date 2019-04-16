$("#submit").click(function () {
    var oldPass = $("#oldPass").val();
    var newPass1 = $("#newPass1").val();
    var newPass2 = $("#newPass2").val();
    var datas = [oldPass,newPass1,newPass2];
    console.log(datas)
    // 判断旧密码不为空
    if (oldPass.length == 0){
        $.myToast("请输入旧密码");
        return false;
    }
    // 判断新密码不为空
    if (newPass1.length == 0){
        $.myToast("请输入新密码");
        return false;
    }
    // 请确认新密码不为空
    if (newPass2.length == 0){
        $.myToast("请确认新密码");
        return false;
    }
    // 判断两次密码一致
    if (newPass1 !== newPass2){
        $.myToast("两次密码输入不一致");
        return false;
    }
    //发送数据
    $.ajax({
        url:"aaaaaaaaaaa",
        method:"post",
        data:"datas",
        dataType:"json",
        success:function (data) {

        },
        error:function () {

        }
    });
    return true;
})