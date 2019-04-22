// 添加车牌号
function AddCar() {
    $(".CarNums").slideDown("3s");
}
// 关闭添加车牌号
function CloseAddCar() {
    $(".CarNums").slideUp("3s");
}
// 显示性别弹窗
function SexHint(e) {
    $("body").addClass("notScroll");
    $("#hint").addClass("hintactive");
    $("#showSexBox").animate({
        bottom:0,
    },200);
    // e.stopPropagation();
}
// 关闭弹窗
function CloseHint(e) {
    $("body").removeClass("notScroll");
    $("#hint").removeClass("hintactive");
    $("#showSexBox").animate({
        bottom:-650,
    },200);
    $("#showBirBox").animate({
        bottom:-650,
    },200);
    // e.stopPropagation();
}

// 选择性别
$(".SexBox-con li").click(function () {
    var sex = $(this).html();
    $(this).siblings().removeClass("SexHtml");
    $(this).addClass("SexHtml");
    console.log(sex);
})
//性别确定
function Sure() {
    var data = $(".SexHtml").attr("data");
    // console.log(data);
    SubmitSex(data);
    CloseHint();
}
// 提交数据
function SubmitSex(data) {
    if (data == "1"){
        $(".sex").val(result[1].sex)
    }
    if (data == "2"){
        $(".sex").val(result[2].sex)
    }
    $.ajax({
        url:"",
        data:"data",
        dataType:"json",
        method:"post",
        success:function (result) {
            // console.log(result);
            if (data == "1"){
                $(".sex").val(result[1].sex)
            }
            if (data == "2"){
                $(".sex").val(result[2].sex)
            }
        },
        error:function () {
            
        }
    })
}