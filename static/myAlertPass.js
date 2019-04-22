(function() {
	$.extend({
		myAlert: function(options) {//参数格式{title:'Title',message:'message',callback:function(){alert('callback')}}or"需要提示的话"
			var option={title:"提示",message:"程序员太傻，忘记输入提示内容啦……",callback:function(){}}
			if(typeof(options)=="string"){
				option.message=options
			}else{
				option=$.extend(option,options);
			}
			var top=$(window).height()*0.3;
			$('body').append('<div class="myModa"><div class="myAlertBox"  style="margin-top:'+top+'px"><h6>'+option.title+'</h6><p>'+option.message+'</p><div class="btn sure">确定</div></div></div>');
			$('.btn.sure').click(function(){
				$('.myModa').remove();
				option.callback();
			})
		},
		myConfirm: function(options) {//参数格式{title:'Title',message:'message',callback:function(){alert('callback')}}or"需要提示的话"$.myConfrim()
			var option={title:"提示",message:"程序员太傻，忘记输入提示内容啦……",callback:function(){}}
			if(typeof(options)=="string"){
				option.message=options
			}else{
				option=$.extend(option,options);
			}
			var top=$(window).height()*0.3;
			$('body').append('<div class="myModa"><div class="myAlertBox"><h6>'+option.title+'</h6><p>'+option.message+'</p><div class="col2"><div class="col"><div class="btn sure">忘记密码</div></div><div class="col exitBox"><div class="btn exit">重新输入</div></div></div></div></div>');
			$('.btn.exit').click(function(){
				$('.myModa').remove();
                setTimeout(function (){
                    $("#Scpassword ul li").each(function (){
                        $(this).children('img').remove();
                    })
                    pdIndex =0;
                },400)
                numArr.splice(0,numArr.length);
                window.show = true;
			})
			$('.btn.sure').click(function(){
				$('.myModa').remove();
				option.callback();
			})
		},
		myToast:function(message){
			var top=$(window).height()*0.3;
			$('body').append('<div class="myToast">'+message+'</div>');
			console.log($('.myToast').outerWidth())
			var top=($(window).height()-$('.myToast').height())/2;
			var left=($('body').width()-$('.myToast').width())/2;
			$('.myToast').css({'top':top+'px','left':left+'px'});
			setTimeout(function(){
				$('.myToast').fadeOut(500);
				setTimeout(function(){
					$('.myToast').remove();
				},3000)
			},3000)
		}
	});
})(jQuery)

