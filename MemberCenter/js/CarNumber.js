var provinces = new Array("京","津","冀","辽","吉","黑","蒙","鲁",
    "豫","沪","浙","苏","粤","晋","川","皖",
    "鄂","贵","云","桂","琼","青","新","藏",
    "渝","宁","甘","陕","闽","赣","湘");

var keyNums = new Array("0","1","2","3","4","5","6","7","8","9",
    "Q","W","E","R","T","Y","U","I","O","P",
    "A","S","D","F","G","H","J","K","L",
    "OK","Z","X","C","V","B","N","M","Del");
var next=0;
function showProvince(){
    $("#pro").html("");
    var ss="";
    for(var i=0;i<provinces.length;i++){
        ss=ss+addKeyProvince(i)
    }
    $("#pro").html("<ul class='clearfix ul_pro'>"+ss+"<li class='li_close' onclick='closePro();'><span>关闭</span></li><li class='li_clean' onclick='cleanPro1();'><span>清空</span></li></ul>");
}
function showKeybord(){
    $("#pro").html("");
    var sss="";
    for(var i=0;i<keyNums.length;i++){
        sss=sss+'<li class="ikey ikey'+i+' '+(i>9?"li_zm":"li_num")+' '+(i>28?"li_w":"")+'" ><span onclick="choosekey(this,'+i+');">'+keyNums[i]+'</span></li>'
    }
    $("#pro").html("<ul class='clearfix ul_keybord'>"+sss+"</ul>");
}
function addKeyProvince(provinceIds){
    var addHtml = '<li>';
    addHtml += '<span onclick="chooseProvince(this);">'+provinces[provinceIds]+'</span>';
    addHtml += '</li>';
    return addHtml;
}

function chooseProvince(obj){
    $(".carText1").val($(obj).text());
    $(".carText1").addClass("hasPro");

    $(".ppHas").removeClass("ppHas");
    next=0;
    showKeybord();
}

function choosekey(obj,jj){
    if(jj==29){
        var car =  $(".carText1").val();
        if (car.length==7){
            layer.closeAll();
        } else{
            layer.open({
                content: '请输入正确的车牌号',
                skin: 'msg',
                time: 1
            });
        }

    }else if(jj==37){
        var oDivHtml = $(".carText1").val();

        if(oDivHtml.length==1){
            $(".hasPro").find("span").text("");
            $(".hasPro").removeClass("hasPro");
            showProvince();
            next=0;
        }


        $(".carText1").val(oDivHtml.substring(0,oDivHtml.length-1));

        next=next-1;
        if(next<1){
            next=0;
        }
        console.log(next);
    }else{
        if(next>5){
            return
        }
        console.log(next);
        for(var i = 0; i<$(".carText1").length;i++){

            if(next==0 & jj<10 & !isNaN($(obj).text())){
                layer.open({
                    content: '车牌第二位为字母',
                    skin: 'msg',
                    time: 1
                });
                return
            }
            var carVal=$(".carText1").val();
            $(".carText1").val(carVal+$(obj).text());
            $(".carText1").addClass("ppHas");
            next=next+1;
            if(next>5){
                next=6;
            }
            getpai();
            return
        }

    }



}

function closePro(){
    layer.closeAll()
}

function cleanPro1(){
    // $(".ul_input").find("span").text("");
    $("#carnum1").val("");
    // console.log("清空");
    $(".hasPro").removeClass("hasPro");
    $(".ppHas").removeClass("ppHas");
    next=0;
}
function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
function getpai(){
    var pai=trimStr($(".carText1").val());
    $(".carText1").attr("data-pai",pai);
}
window.onload = function() {
	// 车牌号1
    $("#carnum1").click(function(e){
        layer.open({
            type: 1
            ,content: '<div id="pro"></div>'
            ,anim: 'up'
            ,shade :false
            ,style: 'position:fixed; bottom:0; left:0; width: 100%; height: auto; padding:0; border:none;'
        });
        showProvince();
        e.stopPropagation();
    })
    // 取消电子会员光标
    $("#carnum1").focus(function(){
        document.activeElement.blur();
    });


    // 车牌号2
    $("#carnum2").click(function(e){
        layer.open({
            type: 1
            ,content: '<div id="pro"></div>'
            ,anim: 'up'
            ,shade :false
            ,style: 'position:fixed; bottom:0; left:0; width: 100%; height: auto; padding:0; border:none;'
        });
        showProvince2();
        e.stopPropagation();
    })
    // 取消电子会员光标
    $("#carnum2").focus(function(){
        document.activeElement.blur();
    });


    // 车牌号3
    $("#carnum3").click(function(e){
        layer.open({
            type: 1
            ,content: '<div id="pro"></div>'
            ,anim: 'up'
            ,shade :false
            ,style: 'position:fixed; bottom:0; left:0; width: 100%; height: auto; padding:0; border:none;'
        });
        showProvince3();
        e.stopPropagation();
    })
    // 取消电子会员光标
    $("#carnum3").focus(function(){
        document.activeElement.blur();
    });

    // 关闭键盘
    $("#body").click(function () {
        closePro();
    });
}



// 车牌号2
function showProvince2(){
    $("#pro").html("");
    var ss="";
    for(var i=0;i<provinces.length;i++){
        ss=ss+addKeyProvince2(i)
    }
    $("#pro").html("<ul class='clearfix ul_pro'>"+ss+"<li class='li_close' onclick='closePro();'><span>关闭</span></li><li class='li_clean' onclick='cleanPro2();'><span>清空</span></li></ul>");
}
function showKeybord2(){
    $("#pro").html("");
    var sss="";
    for(var i=0;i<keyNums.length;i++){
        sss=sss+'<li class="ikey ikey'+i+' '+(i>9?"li_zm":"li_num")+' '+(i>28?"li_w":"")+'" ><span onclick="choosekey2(this,'+i+');">'+keyNums[i]+'</span></li>'
    }
    $("#pro").html("<ul class='clearfix ul_keybord'>"+sss+"</ul>");
}
function addKeyProvince2(provinceIds){
    var addHtml = '<li>';
    addHtml += '<span onclick="chooseProvince2(this);">'+provinces[provinceIds]+'</span>';
    addHtml += '</li>';
    return addHtml;
}

function chooseProvince2(obj){
    $(".carText2").val($(obj).text());
    $(".carText2").addClass("hasPro");

    $(".ppHas").removeClass("ppHas");
    next=0;
    showKeybord2();
}

function choosekey2(obj,jj){
    if(jj==29){
        var car =  $(".carText2").val();
        if (car.length==7){
            layer.closeAll();
        } else{
            layer.open({
                content: '请输入正确的车牌号',
                skin: 'msg',
                time: 1
            });
        }

    }else if(jj==37){
        var oDivHtml = $(".carText2").val();

        if(oDivHtml.length==1){
            $(".hasPro").find("span").text("");
            $(".hasPro").removeClass("hasPro");
            showProvince2();
            next=0;
        }


        $(".carText2").val(oDivHtml.substring(0,oDivHtml.length-1));

        next=next-1;
        if(next<1){
            next=0;
        }
        console.log(next);
    }else{
        if(next>5){
            return
        }
        console.log(next);
        for(var i = 0; i<$(".carText2").length;i++){

            if(next==0 & jj<10 & !isNaN($(obj).text())){
                layer.open({
                    content: '车牌第二位为字母',
                    skin: 'msg',
                    time: 1
                });
                return
            }
            var carVal=$(".carText2").val();
            $(".carText2").val(carVal+$(obj).text());
            $(".carText2").addClass("ppHas");
            next=next+1;
            if(next>5){
                next=6;
            }
            getpai2();
            return
        }

    }



}

function cleanPro2(){
    // $(".ul_input").find("span").text("");
    $("#carnum2").val("");
    $(".hasPro").removeClass("hasPro");
    $(".ppHas").removeClass("ppHas");
    next=0;
}
function trimStr2(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
function getpai2(){
    var pai=trimStr2($(".carText2").val());
    $(".carText2").attr("data-pai",pai);
}




// 车牌号3
function showProvince3(){
    $("#pro").html("");
    var ss="";
    for(var i=0;i<provinces.length;i++){
        ss=ss+addKeyProvince3(i)
    }
    $("#pro").html("<ul class='clearfix ul_pro'>"+ss+"<li class='li_close' onclick='closePro();'><span>关闭</span></li><li class='li_clean' onclick='cleanPro3();'><span>清空</span></li></ul>");
}
function showKeybord3(){
    $("#pro").html("");
    var sss="";
    for(var i=0;i<keyNums.length;i++){
        sss=sss+'<li class="ikey ikey'+i+' '+(i>9?"li_zm":"li_num")+' '+(i>28?"li_w":"")+'" ><span onclick="choosekey3(this,'+i+');">'+keyNums[i]+'</span></li>'
    }
    $("#pro").html("<ul class='clearfix ul_keybord'>"+sss+"</ul>");
}
function addKeyProvince3(provinceIds){
    var addHtml = '<li>';
    addHtml += '<span onclick="chooseProvince3(this);">'+provinces[provinceIds]+'</span>';
    addHtml += '</li>';
    return addHtml;
}

function chooseProvince3(obj){
    $(".carText3").val($(obj).text());
    $(".carText3").addClass("hasPro");

    $(".ppHas").removeClass("ppHas");
    next=0;
    showKeybord3();
}

function choosekey3(obj,jj){
    if(jj==29){
        var car =  $(".carText3").val();
        if (car.length==7){
            layer.closeAll();
        } else{
            layer.open({
                content: '请输入正确的车牌号',
                skin: 'msg',
                time: 1
            });
        }

    }else if(jj==37){
        var oDivHtml = $(".carText3").val();

        if(oDivHtml.length==1){
            $(".hasPro").find("span").text("");
            $(".hasPro").removeClass("hasPro");
            showProvince3();
            next=0;
        }


        $(".carText3").val(oDivHtml.substring(0,oDivHtml.length-1));

        next=next-1;
        if(next<1){
            next=0;
        }
        console.log(next);
    }else{
        if(next>5){
            return
        }
        console.log(next);
        for(var i = 0; i<$(".carText3").length;i++){

            if(next==0 & jj<10 & !isNaN($(obj).text())){
                layer.open({
                    content: '车牌第二位为字母',
                    skin: 'msg',
                    time: 1
                });
                return
            }
            var carVal=$(".carText3").val();
            $(".carText3").val(carVal+$(obj).text());
            $(".carText3").addClass("ppHas");
            next=next+1;
            if(next>5){
                next=6;
            }
            getpai3();
            return
        }

    }



}

function cleanPro3(){
    // $(".ul_input").find("span").text("");
    $("#carnum3").val("");
    $(".hasPro").removeClass("hasPro");
    $(".ppHas").removeClass("ppHas");
    next=0;
}
function trimStr3(str){return str.replace(/(^\s*)|(\s*$)/g,"");}
function getpai3(){
    var pai=trimStr3($(".carText3").val());
    $(".carText3").attr("data-pai",pai);
}



