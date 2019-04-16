// 显示弹窗
function UndevelopedModule() {
    $("body").addClass("notScroll");
    $("#hint").addClass("active");
    $("#showBox").addClass("active");
    // 自动关闭弹窗
    setTimeout(function () {
        CloseHint();
    },1000)
}
// 关闭弹窗
function CloseHint() {
    $("body").removeClass("notScroll");
    $("#hint").removeClass("active");
    $("#showBox").removeClass("active");
}
