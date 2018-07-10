// 轮播图
$(function(){
	var slides=JSON.parse(localStorage.getItem("slides"));
	for(var i=0;i<slides.length;i++){
		var div=$("<div></div>");
		div.addClass("swiper-slide");
		$(".swiper-wrapper").append(div);
		var img=$("<img>");
		img.attr("src","imgs/slides/"+slides[i]);
		div.append(img);
	}
});

$(function(){
	new Swiper(".swiper-container",{
		autoplay:true,
		loop:true,
		pagination:{
			el:".swiper-pagination"
		},
		navigation:{
			nextEl:".swiper-button-next",
			prevEl:".swiper-button-prev"
		}

	});
});

// 图书分类
$(function(){
	var bookType=JSON.parse(localStorage.getItem("bookTypes"));
	for(var i in bookType){
		var div=$("<div class='classify-cont'></div>");
		var div2=$("<div class='cont-left'></div>");
		var div3=$("<div class='cont-right'></div>");
		div.append(div2);
		div.append(div3);
		var p=$("<p class='left-title'>"+bookType[i].title+"</p>");
		var ul=$("<ul class='left-name'></ul>");
		div2.append(p);
		div2.append(ul);
		var img=$("<img src='imgs/types/"+bookType[i].img+"'>");
		div3.append(img);		
		for(var j=0;j<bookType[i].list.length;j++){
			var li=$("<li>"+bookType[i].list[j].name+"</li>");
			ul.append(li);
		}
		$(".classify-content").append(div);
	}
	var div6=("<div class='clearfix'></div>");
	$(".classify-content").append(div6);
	$(".classify-cont:even").css({
		"border-right":"1px solid #ccc"
	});
	$(".classify-cont:last").css({
		"border-bottom":"1px solid #ccc"
	});
	$(".classify-cont:nth-child(5)").css({
		"border-bottom":"1px solid #ccc"
	});
});


// 淘书团
$(function(){
	var taoshutuan=JSON.parse(localStorage.getItem("taoshutuan"));
	for(var i=0;i<taoshutuan.length;i++){
		var div=$("<div class='bottomkuang'></div>");
		var img=$("<div class='kuang-img'><img src='imgs/taoshu/"+taoshutuan[i].img+"'></div>");
		var p=$("<p>"+taoshutuan[i].desc+"</p>");
		var num=taoshutuan[i].newPrice/taoshutuan[i].oldPrice*10;
		var div2=$("<div><div class='youhuijia'>团购价：￥"+taoshutuan[i].newPrice+"<span class='yuanjia'>￥"+taoshutuan[i].oldPrice+"</span></div><div class='zhekoujia'>"+num.toFixed(1)+"折</div><div class='clearfix'></div></div>");
		div.append(img);
		div.append(p);
		div.append(div2);
		$(".taoshutuan-bottom").append(div);
	}
	var div2=$("<div class='clearfix'></div>");
	$(".taoshutuan-bottom").append(div2);
});


// 新书上架
$(function(){
	var newbooks=JSON.parse(localStorage.getItem("newbooks"));
	for(var i=0;i<newbooks.length;i++){
		if(i==0){
			var p=$("<p class='p-title'>"+newbooks[i].title+"</p><p class='p-author'>"+newbooks[i].author+"</p>");
			var img=$("<div class='up-left-img'><img src='imgs/newbooks/"+newbooks[i].img+"''></div>");
			$(".up-left").append(p);
			$(".up-left").append(img);
		}else if(i==1||i==2){
			var div=$("<div class='right-cont2'><div class='up-right-left'><p class='p-title2'>"+newbooks[i].title+"</p><p class='p-author2'>"+newbooks[i].author+"</p></div><div class='up-right-right'><img src='imgs/newbooks/"+newbooks[i].img+"''></div><div class='clearfix'></div></div>");
			$(".up-right").append(div);
		}else{
			var div2=$("<div class='bottom-down-cont'><p class='p-title3'>"+newbooks[i].title+"</p><p class='p-author3'>"+newbooks[i].author+"</p><div class='bottom-down-img'><img src='imgs/newbooks/"+newbooks[i].img+"''></div></div>");			
			$(".bottom-down").append(div2);		
		}		
	}
	var div3=$("<div class='clearfix'></div>");
	$(".bottom-down").append(div3);
	$(".bottom-down-cont:first").css({
		width:"33%"
	});
	$(".bottom-down-cont:nth-child(2)").css({
		width:"34%"
	});
	$(".bottom-down-cont:last").css({
		width:"33%"
	});
	$(".bottom-down-cont:not(:last)").css({
		"box-sizing":"border-box",
		"border-right":"1px solid #ccc"
	});

	$(".right-cont2:first").css({
		"box-sizing":"border-box",
		"border-bottom":"1px solid #ccc"
	});
});

// 猜你喜欢
$(function(){
	var guessLikes=JSON.parse(localStorage.getItem("guessLikes"));
	for(var i=0;i<guessLikes.length;i++){
		var div=$("<div class='guess-bottom-cont'></div>");
		$(".guess-bottom").append(div);
		var img=$("<div class='bottom-cont-img'><img src='imgs/guessLikes/"+guessLikes[i].img+"'></div>");
		div.append(img);
		var num=guessLikes[i].newPrice/guessLikes[i].oldPrice*10;
		var div2=$("<div class='right-cont'><p class='right-title'>"+guessLikes[i].title+"</p><p class='shuji'>"+guessLikes[i].author+"/"+guessLikes[i].publishDate+"/"+guessLikes[i].publishing+"</p><p class='right-newPrice'>￥"+guessLikes[i].newPrice+"<span class='right-zhekou'>("+num.toFixed(1)+"折)</span><span class='right-dingjia'>定价：</span><span class='right-oldPrice'>￥"+guessLikes[i].oldPrice+"</span></p><p class='p-icon'><i class='iconfont icon-cart-to'></i></p></div>");
		div.append(div2);
		var div3=$("<div class='clearfix'></div>");
		div.append(div3);
	}
	$(".guess-bottom-cont:not(:last)").css({
		"box-sizing":"border-box",
		"border-bottom":"1px solid #ccc"
	});
});