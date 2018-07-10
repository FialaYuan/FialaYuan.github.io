// 图书分类显示部分
$(function(){
	var bookType=JSON.parse(localStorage.getItem("bookTypes"));
	var k=0;
	for(var i in bookType){
		var div=$("<div class='details-fenlei-all'  onmouseover='doTurn("+k+")' onmouseout='doHid("+k+")'><div class='details-fenlei-xiao'><h1>"+bookType[i].title+"</h1><i class='iconfont icon-arrow-right-copy'></i><div class='clearfix'></div></div></div>");
		$(".head-left-top").append(div);
		var p=$("<p></p>");
		for(var j=0;j<bookType[i].list.length;j++){
			var li=$("<li><a href='#'>"+bookType[i].list[j].name+"</a></li>");
			p.append(li);
		}
		div.append(p);
		k++;
	}
	var p=$("<p><a href='#'>全部商品分类......</a></p>");
	p.addClass("lastp");
	$(".head-left-top").append(p);	
});
//事件
function doTurn(obj){
	$("#"+obj).show();
	$('.details-fenlei-all')[obj].style.background="#ffe4dc";
}
function doHid(obj){
	$("#"+obj).hide();
	$('.details-fenlei-all')[obj].style.background="white";
}

// 图书分类隐藏部分
$(function(){
	var bookType=JSON.parse(localStorage.getItem("bookTypes"));
	var w=0;
	for(var i in bookType){
		var div=$("<div class='details-fenlei-hid' id='"+w+"' onmouseover='doTurn("+w+")' onmouseout='doHid("+w+")'></div>");
		$(".head-left-top").append(div);
		for(var j=0;j<bookType[i].list.length;j++){
			var div2=$("<div><h2>"+bookType[i].list[j].name+"</div>");
			div.append(div2);
			for(var k=0;k<bookType[i].list[j].content.length;k++){
				var li=$("<li><a>"+bookType[i].list[j].content[k]+"</a></li>");
				div2.append(li);
			}
		}
		w++;
	}
});

// 轮播图
// 插入内容
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
//引用swiper框架
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

// 猜你喜欢
// 插入内容
$(function(){
	var guessLikes=JSON.parse(localStorage.getItem("guessLikes"));
	var selected=JSON.parse(localStorage.getItem("selected"));
	var recommend=JSON.parse(localStorage.getItem("recommend"));
	var arr=[guessLikes,selected,recommend];
	var arrs=["guessLikes","selected","recommend"];	
	for(var i=0;i<arr.length;i++){	
		var div=$("<div class='bottom-left-content'></div>");
		$($(".bottom-left-content")[0]).addClass("left-content-first");
		$(".right-bottom-left").append(div);		
		for(var j=0;j<arr[i].length;j++){
			var div1=$("<div class='bottom-left-top'><div class='left-top-img'><img src='imgs/"+arrs[i]+"/"+arr[i][0].img+"'></div><div class='left-top-cont'><p class='top-cont-title'>"+arr[i][0].title+"</p><p><span class='top-cont-newPrice'>￥"+arr[i][0].newPrice+"</span><span class='top-cont-oldPrice'>￥"+arr[i][0].oldPrice+"</span></p><p class='top-cont-desc'>"+arr[i][0].desc+"</p></div></div>");
			var div2=$("<div class='left-bottom'></div>");
			for(var k=1;k<arr[i].length;k++){
				var div3=$("<div class='left-bottom-child'></div>");
			 	div2.append(div3);
			 	var div4=$("<div class='child-img'><img src='imgs/"+arrs[i]+"/"+arr[i][k].img+"'></div></div>");
			 	var div5=$("<div class='child-cont'><p class='child-cont-title'>"+arr[i][k].title+"/"+arr[i][k].author+"</p><p><span class='child-cont-newPrice'>￥"+arr[i][k].newPrice+"</span><span class='child-cont-oldPrice'>￥"+arr[i][k].oldPrice+"</span></p></div>");
			 	div3.append(div4);
			 	div3.append(div5);
			}
		}	
		div.append(div1);
		div.append(div2);
	}		
	var div6=$("<div class='clearfix'></div>");
	$(".right-bottom-left").append(div6);
});
//向左平移效果以及隐藏效果
$(function(){
	$(".bottom-left-cont ul li").each(function(index){
		var liNode=$(this);
		$(this).click(function(){
			$(".bottom-left-content").css({
				position:"relative",
				left:"630px",
			});
			$(".bottom-left-content").animate({
				left:"0px"
			});
			$(".colorfirst").removeClass("colorfirst");			
			$(".left-content-first").removeClass("left-content-first");
			$(".left-cont-first").removeClass("left-cont-first");
			$(".bottom-left-content").eq(index).addClass("left-content-first");
			liNode.addClass("left-cont-first");
			$(".left-cont-color").eq(index).addClass("colorfirst");
		})	
	});
});

// 图书畅销榜
$(function(){
	var bestSelling=JSON.parse(localStorage.getItem("bestSelling"));
	for(var i=0;i<bestSelling.length;i++){
		if(i<9){
			var div=$("<div class='changxiaomulu'><div class='changxiao-details'><a href='#'>0"+(i+1)+"."+bestSelling[i]+"</a></div><i class='iconfont icon-arrow-right-copy'></i><div class='clearfix'></div></div>");
		}else{
			var div=$("<div class='changxiaomulu'><div class='changxiao-details'><a href='#'>"+(i+1)+"."+bestSelling[i]+"</a></div><i class='iconfont icon-arrow-right-copy'></i><div class='clearfix'></div></div>");
		}		
		$(".changxiao").append(div);
	}
});

// 淘书团热销
$(function(){
	var taoshutuan=JSON.parse(localStorage.getItem("taoshutuan"));
	for(var i=0;i<taoshutuan.length;i++){
		var div=$("<div class='taoshutuan-bottomkuang'></div>");
		var img=$("<a href='#'><img src='imgs/taoshu/"+taoshutuan[i].img+"'></a>");
		var p=$("<p><a href='#'>"+taoshutuan[i].desc+"</a></p>");
		var num=taoshutuan[i].newPrice/taoshutuan[i].oldPrice*10;
		var div2=$("<div><div class='youhuijia'>团购价:￥"+taoshutuan[i].newPrice+"<span class='yuanjia'>￥"+taoshutuan[i].oldPrice+"</span></div><div class='zhekoujia'>"+num.toFixed(1)+"折</div><div class='clearfix'></div></div>");
		div.append(img);
		div.append(p);
		div.append(div2);
		$(".taoshutuan-bottom").append(div);
	}
});

// 新书上架促销
$(function(){
	var newbooks=JSON.parse(localStorage.getItem("newbooks"));
	// console.log(newbooks);
	for(var i=0;i<newbooks.length;i++){
		var div=$("<div class='newbooks-bottom-cont'></div>");
		var p=$("<p class='cont-title'>"+newbooks[i].title+"</p><p class='cont-author'>"+newbooks[i].author+"</p><p class='cont-newPrice'>"+"￥"+newbooks[i].newPrice+"</p><p class='cont-oldPrice'>"+"￥"+newbooks[i].oldPrice+"</p>");
		var img=$("<img src='imgs/newbooks/"+newbooks[i].img+"'>");		
		div.append(p);
		div.append(img);
		$(".newbooks-bottom").append(div);
	}
	var div2=$("<div class='clearfix'></div>");
	div.append(div2);
});

// 平台自营
// 插入内容
$(function(){
	var selfSupport=JSON.parse(localStorage.getItem("selfSupport"));
	var arrs=["novel","poetry","suspense","youth"];
	for(var i=0;i<selfSupport.length;i++){
		var li=$("<li class='ziying-li'>"+selfSupport[i].title+"</li>");
		$($(".ziying-li")[0]).addClass("ziying-li-first");	
		$(".ziying-fenlei").append(li);			
		var div=$("<div class='tuijian'><div class='tuijian-img'><img src='imgs/selfSupport/"+arrs[i]+"/"+selfSupport[i].list[8].img+"'></div><div><p class='tuijian-title'>"+selfSupport[i].list[8].title+"</p><div class='tuijian-price'><p class='tuijian-newPrice'>￥"+selfSupport[i].list[8].newPrice+"<span class='tuijian-oldPrice'>￥"+selfSupport[i].list[8].oldPrice+"</span></p></div></div>");
		$($(".tuijian")[0]).addClass("tuijian-first");
		$(".ziying-tuijian").append(div);
	}
	for(var j=0;j<selfSupport.length;j++){
		var div2=$("<div class='shu-child'></div>");
		$($(".shu-child")[0]).addClass("shu-child-first")
		for(var m=0;m<selfSupport[j].list.length;m++){
			var div3=$("<div class='child-f'></div>");
			div2.append(div3);
			var div4=$("<div class='child-fn-img'><img src='imgs/selfSupport/"+arrs[j]+"/"+selfSupport[j].list[m].img+"'></div><div><p class='child-f-title'>"+selfSupport[j].list[m].title+"</p><div class='child-f-price'><p class='child-f-newPrice'>￥"+selfSupport[j].list[m].newPrice+"<span class='child-f-oldPrice'>￥"+selfSupport[j].list[m].oldPrice+"</span></p></div>");
			div3.append(div4);
		}
		var div5=$("<div class='clearfix'></div>");
		$(".shu-child").append(div5);
		$(".ziying-shu").append(div2);
	}
});
//隐藏效果
var timer;
$(function(){
	$(".ziying-li").each(function(index){
		var liNode=$(this);
		$(this).mouseover(function(){
			timer=setTimeout(function(){
				$(".ziying-li-first").removeClass("ziying-li-first");
				$(".tuijian-first").removeClass("tuijian-first");
				$(".shu-child-first").removeClass("shu-child-first");
				$(".tuijian").eq(index).addClass("tuijian-first");
				$(".shu-child").eq(index).addClass("shu-child-first")
				liNode.addClass("ziying-li-first");
			},300);
		}).mouseout(function(){
			clearTimeout(timer);
		});
	});
});

// 出版社直销
// 插入内容
$(function(){
	var pressList=JSON.parse(localStorage.getItem("pressList"));
	var div=$("<div class='jianjie-all'></div>");
	for(var i=0;i<pressList.length;i++){		
		var li=$("<div class='sethover'><li class='chubansheli'>"+pressList[i].name+"</li><div class='chubanshei'><i class='iconfont icon-arrow-right-copy'></i></div><div class='clearfix'></div></div>");
		$($(".chubanshei")[0]).addClass("chubansheifirst");
		$(".chubansheul").append(li);		
		$($(".sethover")[0]).addClass("sethoverfirst")
		$(".jianjie").append(div);
		var div6=$("<div class='jianjie-cont'></div>");
		$($(".jianjie-cont")[0]).addClass("jianjie-cont-first");
		div.append(div6);
		var div2=$("<div class='jianjie-head'><p class='head-name'>"+pressList[i].name+"</p><p class='head-desc'>"+pressList[i].desc+"</p></div>");
		var div3=$("<div class='jianjie-bottom'></div>");
		div6.append(div2);
		div6.append(div3);
		var div4=$("<div class='jianjie-bottom-child'></div>");
		for(var j=0;j<pressList[i].list.length;j++){
			var div5=$("<div class='bottom-child-img'><div class='jianjie-img'><img src='imgs/press/"+pressList[i].list[j].img+"'></div><p class='p-title'>"+pressList[i].list[j].title+"</p><p class='p-newPrice'>￥"+pressList[i].list[j].newPrice+"<span class='p-oldPrice'>￥"+pressList[i].list[j].oldPrice+"</span></p></div>");
			div4.append(div5);
		}
		var div7=$("<div class='clearfix'></div>");
		div4.append(div7);
		div3.append(div4);
	}	
	var i=$("<div class='changei'><div class='fonti1'><i class='iconfont icon-icon_arrow_top'></i></div><div class='fonti2'><i class='iconfont icon-icon_arrow_bottom'></i></div></div>");
	$(".chubanshe").append(i);	
});
//左边向上滑动效果
$(function(){
	$(".fonti1").mouseover(function(){
		$(".chubansheul").animate({
			top:"0px"
		}).fadeIn("fast");
	});
	$(".fonti2").mouseover(function(){
		$(".chubansheul").animate({
			top:"-400px"
		}).fadeIn("fast");
	});	
});
//右边隐藏效果
$(function(){
	$(".sethover").each(function(index){
		var liNode=$(this);		
		$(this).mouseover(function(){
			$(".chubansheifirst").removeClass("chubansheifirst");
			$(".sethoverfirst").removeClass("sethoverfirst");
			$(".jianjie-cont-first").removeClass("jianjie-cont-first");
			$(".jianjie-cont").eq(index).addClass("jianjie-cont-first");
			liNode.addClass("sethoverfirst");
			$(".chubanshei").eq(index).addClass("chubansheifirst");		
		})
	});
});