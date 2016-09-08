/*
   美丽说:js代码


*/
/*触发我的订单显示下面的二维码的显示与隐藏开始*/
$(".topCon_right a.down").hover(function(){
      $(".topCon_right a.down .downApp_box").stop(true,true).slideDown("slow");
},function(){
      $(".topCon_right a.down .downApp_box").stop(true,true).slideUp("slow");
});
/*触发我的订单显示下面的二维码的显示与隐藏结束*/
/*点击输入框文字隐藏开始*/
var oValue=$(".search input.txt").val();
$(".search input.txt").click(function(){
    if($(this).val()==oValue){
       $(this).val("");
	}
});
$(".search input.txt").blur(function(){
      if($(this).val()==""){
          $(this).val(oValue);
	  }
});
/*点击输入框文字隐藏结束*/
/*点击宝贝和店铺时，进行文字颜色的替换开始*/
var oValue=$(".search input.txt").val();
$(".search span.com").click(function(){
    $(this).addClass("hover").siblings().removeClass("hover");
	$(".search input.txt").val("");
});
$(".search span.com").blur(function(){
     $(".search span.com").addClass("hover").siblings().removeClass("hover");
	 $(".search input.txt").val();
	
});
/*点击宝贝和店铺时，进行文字颜色的替换结束*/
/*导航滑动效果开始*/
$("#case .nav ul li").not(".last").hover(function(){
    // 鼠标划上去的效果
	var _left=$(this).position().left;    // this代表的是当前的这个li与它相对定位元素ul左边的一个距离
	var _width=$(this).width();           // 获取到li的宽度，把这个带颜色显示的小滑块也变成当前的这个宽度
	//document.title=_left+"--"+_width;   // document.title代表的是网页的一个标题，把这个值赋给网页的标题
    $("#case .nav ul li.last").show().css("width",_width).stop().animate({left:_left},200); // 动态的改变滑块的宽度，获取滑块与它ul左边的距离，同时滑块与li的宽度相同
},function(){
    // 鼠标移开
    $("#case .nav ul li.last").hide();  // 鼠标移开时，滑块消失
});      // 找到ul li不带.last的li
/*导航滑动效果结束*/
/*吸顶盒导航开始*/
$(window).scroll(function(){
  
  var _top= $(window).scrollTop();       // 获取到浏览器的一个滚动的高度
  //var _height=$("#case").offset().top;   // 获取导航上浏览器上面的距离
  //document.title=_top;
  //document.title=_height;
  //document.title=_top;
  if(_top>=200){                 // 浏览器的高度大于162时
     $("#case").addClass("gd");  // 加上样式class="gd"
  }else{                         // 当回去小于162时，移除样式固定样式
     $("#case").removeClass("gd"); 
  }
});   // 获取到浏览器的一个滚动的高度，滚动到一定的高度的时候，才会触发,scroll代表的是浏览器的一个滚动事件
/*吸顶盒导航结束*/
/*轮播的效果开始*/
/*方法1
$(".banner ul.Part_ScrollBut li").mouseover(function(){
   $(this).addClass("hover").siblings().removeClass("hover");
   var _index=$(this).index();
   $(".part_imgCon .Part_ScrollCon img").eq(_index).fadeIn().siblings().fadeOut();

});

/*轮播的效果结束*/
// 方法2
var _index=0;  // 声明序列号的变量，刚开始进来是第一个张图片
var timeInterval=null; // 设定一个定时器刚开始时为空
$("ul.Part_ScrollBut li").hover(function(){
    clearInterval(timeInterval); // 清除定时器
	$(this).addClass("hover").siblings().removeClass("hover");
    _index=$(this).index();  // 获取当期li（按钮）的序列号
    $(".part_imgCon .Part_ScrollCon img").eq(_index).fadeIn().siblings().fadeOut();
	//$(".part_imgCon .Part_ScrollCon img").animate({left:"-"+_index*972+"px"},1000);
},function(){
    autoPlay();  // 重新启动定时器
});
// 自动轮播：声明函数，，函数实现自动轮播
function autoPlay(){
  timeInterval=setInterval(function(){
  if(_index<=4){ if(_index==4){_index=-1}   // 注意这里一定要加上这个判断，因为当_index=4时，他还会执行第5张
     _index++;     // 序列号加1
  $(".banner ul.Part_ScrollBut li").eq(_index).addClass("hover").siblings().removeClass("hover"); // 注意这里的li必须要单独的写好，不能用this
  $(".part_imgCon .Part_ScrollCon img").fadeIn().eq(_index).siblings().fadeOut();
  // $(".part_imgCon .Part_ScrollCon img").animate({left:"-"+_index*972+"px"},1000);
    }else(_index=-1)
  },3000);

};  // 分号不能少
autoPlay();
/*自动轮播结束*/
/*时尚美妆选项卡开始*/
$("div.select span").click(function(){
   $(this).addClass("hover").siblings().removeClass("hover");
   var _index=$(this).index();
   $("div.select_Con .select_conImg").eq(_index).show().siblings().hide();
});
$("div.select_Con .select_conImg dl").hover(function(){
   $(this).find("dt .cover").addClass("hover").slideDown();
},function(){
   $(this).find("dt .cover").addClass("hover").slideUp();
});

/*时尚美妆选项卡结束*/
/*为你精选开始*/
var mark=0;  // 刚开始进来是显示的是第0个图片
var clearProductTime=null; //定义一个变量清除定时器，当鼠标放到按钮上面时，暂停自动播放
$(".newselect h2 a").click(function(){  // 找到按钮，进行点击事件
    product_autoPlay();
});
//产品的自动播放
function product_autoPlay(){
   if(mark==0){
     mark=1;
   }else{
     mark=0;
   }
   $(".newselect .bigbox .bigbox_case").eq(mark).fadeIn().siblings(".bigbox_case").fadeOut();
}
$(".newselect h2 a").hover(function(){
    clearInterval(clearProductTime);  // 鼠标放上去时清除定时器
},function(){
    // 鼠标移开时，启动定时器
	clearProductTime=setInterval(product_autoPlay,2000);
});
/*为你精选结束*/
