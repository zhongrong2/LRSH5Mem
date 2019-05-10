//3条车牌号点击添加新车辆类型
function AddCarClass() {
    if (!$(".ShowCars").is(":hidden")){
        var length = $(".CarNums li").length;
        // console.log(length);
        if (length >= 3){
            $("#hint").show();
            $("#prompt").show();
        }
        else{
            window.location.href='CarClassAdd.html';
        }
    }
    else{
        window.location.href='CarClassAdd.html';
    }
}
// 弹窗确定
function Sure() {
    $("#hint").hide();
    $("#prompt").hide();
}
