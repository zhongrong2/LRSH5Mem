//点击添加新车辆类型
function AddCarClass() {
    if (!$(".ShowCars").is(":hidden")){
        var length = $(".CarNums li").length;
        // console.log(length);
        if (length == 3){
            $(".promptTxt").html("您已添加了3条车辆信息，如需继续添加请联系加油站的工作人员");
            $(".prompt-middle").css("height","2.39rem");
            $(".cancel").hide();
            $(".sure").addClass("surActive");
        }
    }
    $("#hint").show();
    $("#prompt").show();
}
//确定添加车辆类型
function Sure() {
    if (!$(".ShowCars").is(":hidden")){
        var length = $(".CarNums li").length;
        // console.log(length);
        if (length == 3){
            Cancel();
        }
        else{
            window.location.href='CarClassAdd.html';
        }
    }
    else{
        window.location.href='CarClassAdd.html';
    }
}
// 取消添加车辆类型
function Cancel() {
    $("#hint").hide();
    $("#prompt").hide();
}