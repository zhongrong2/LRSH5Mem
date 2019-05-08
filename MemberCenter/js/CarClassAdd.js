$(function(){
    // 点击下拉框
    $(".checkBox").click(function(e){
        var ul = $(this).siblings('ul');
        if(ul.is(":hidden")){
            ul.slideDown('400', function() {
                $(this).find("li").bind("click",function(){
                    var selectLi=$(this).text();
                    $("#select span").text(selectLi);
                    $("#select ul").slideUp(400);
                })
                ul.mouseleave(function() {
                    $('#select ul').slideUp(400)
                });
            });
        }
        else{
            $(this).siblings('ul').slideUp(400)
        }
        e.stopPropagation();
    });
    $(document).bind("click",function(e){
        var target  = $(e.target);
        if(target.closest("#select ul").length == 0){
            $("#select ul").slideUp(400);
        }
    })
})