(function(){
	window.onload=window.onresize=function()
{	var oBox=document.getElementById('box');
	var oNav=document.getElementsByClassName('side_btn')[0];
	var aDiv=oBox.getElementsByTagName('section');
	var clientH=document.documentElement.clientHeight;
	var clientW=document.documentElement.clientWidth;
	var iNow=0;
	var y=0;//首屏图片展index
	var N=8;
	//var j=0;
	var scrollFlag=true;
	//头像
	var oPerBtn=document.querySelector('.personage');
	var oPerBox=document.querySelector('.person');
	oPerBtn.onclick=function()
	{
		oPerBox.style.display='block';
		setTimeout(function(){
			oPerBox.style.opacity=1;
			oPerBox.style.transform='scale(1)';
		},0);

	}
	//头像关闭
	var oPerClose=document.querySelector('.close_per');
	oPerClose.onclick=function()
	{
		
		oPerBox.style.opacity=0;
		oPerBox.style.transform='scale(4)';
		function tEnd()
		{
			oPerBox.removeEventListener('transitionend',tEnd,false);
			oPerBox.style.display='none';
		}
		oPerBox.addEventListener('transitionend',tEnd,false);
		aDiv[0].style.WebkitFilter='blur(0px)';
		aDiv[0].style.filter='blur(0px)';
	}
	//导航栏按钮
	var aNavBtn=document.querySelectorAll('.nav li a');
	//js根据浏览器可视区设置页面大小
	for(var i=0; i<aDiv.length; i++)
	{
		
		aDiv[i].style.width=clientW+'px';
		aDiv[i].style.height=clientH+'px';
	}

	if(scrollFlag)
	{
				//绑定滚轮事件
		addWheel(document,function(down)
		{
			//alert(scrollFlag);
			
			scrollFlag=false;
			if(down)//滚轮往下滑
			{
				iNow++;
				if(iNow==aDiv.length)iNow=aDiv.length-1;
			}
			else
			{
				iNow--;
				if(iNow<0)iNow=0;
			}

				//alert(iNow);
				if(iNow!=0)
				{
					//alert('收首页');
					for(var i=0; i<aLi.length; i++)
					{	

						aLi[i].style.transform='rotateY(0deg) translateZ(0)';
					}
				}else {
					//alert('展开首页')
					y=0;
					setTimeout(function(){
						for(var i=0; i<aLi.length; i++)
						{
							(function(index){
								setTimeout(function(){
									aLi[index].style.transform='rotateY('+(360/N*index+y)+'deg) translateZ(350px)';

									var d=Math.abs((360/N*index+y)%360);
									if(d>180)d=360-d;
									d=180-d;
									
									var scale=d/180;
									scale<0.3 && (scale=0.3);
									//aLi[i].innerHTML=scale;
									aLi[index].style.opacity=scale;
								},200*(N-index));
								})(i);
						}	
						//
					},500);
				}

				//erping
				if(iNow==2)
				{
					//三屏
					scrollFlag=false;
					var oPare=document.querySelector('.title');
					oPare.innerHTML='';
					var str='本该拼命努力的年龄，就不要留下“想的太多，做的太少”的憾事。————致自己！';
					for(var i=0; i<str.length; i++)
					{
						var oSpan=document.createElement('span');
						oSpan.innerHTML=str.charAt(i);
						oPare.appendChild(oSpan);
					}
					var num=0; 
					var timer=null;
					var aSpan=oPare.children;
					timer=setInterval(function(){
						aSpan[num].className='on';
						num++;
						if(num==aSpan.length-1)
						{
							clearInterval(timer);
							scrollFlag=true;

						}
					},150);
				}
				
				tab(aDiv[iNow],iNow);
		});
	}
	//创建3d图片展
	homePage();
	var aLi=document.querySelectorAll('.fir_con li');
//切换div块
	function tab(obj)
	{
		//if(iNow<0)iNow=0;
		//if(iNow>aDiv.length-1)iNow=0;
		/*for(var i=0; i<aDiv.length; i++)
		{
			aDiv[i].style.display='none';
		}
		obj.style.display='block';*/
		//oBox.style.top=-iNow*clientH+'px';
		for(var i=0; i<aNavBtn.length; i++)
		{
			aNavBtn[i].classList.remove('active');
		}
		aNavBtn[iNow].classList.add('active');
		startMove(navMoveBox,iNow*navLi[0].offsetHeight);
		move(oBox,{top:-iNow*clientH},{'complete':function(){
			scrollFlag=false;
			
		}});
	}


	
	//弹性导航菜单
	var navLi=oNav.querySelectorAll('ul li');
	var navMoveBox=navLi[navLi.length-1];

	for(var i=0; i<navLi.length-1; i++)
	{
		(function(index){
			aNavBtn[i].onclick=navLi[i].onclick=function()
			{
				iNow=index;
				tab(aDiv[iNow]);
			};
			navLi[i].onmouseover=function()
			{
				startMove(navMoveBox,this.offsetTop);
			};
			navLi[i].onmouseout=function()
			{
				startMove(navMoveBox,iNow*navLi[0].offsetHeight);
			};
		})(i);
	}

	
	//var aLi=document.querySelectorAll('.fir_con li');
	//第二屏点击事件
	var aSli=document.querySelectorAll('.sec .case li');
	//日历 弹球 网页聊天 
	var aSliRef=['calendar/calendar.html','dragball/dragball.html','chat_room/chat.html','appdrag/appdrag.html','scrollbar/scrollbar.html','screen/screen.html','boom/index.html','jp_baidu/baidu.html'];
	for(var i=0; i<aSli.length; i++)	
	{
		(function(index){
			aSli[index].onclick=function()
			{
				window.open(aSliRef[index]);
			};
		})(i);
	}


//
function homePage()
	{
		
		/*3d图片展*/
		var oUl=document.querySelector('.fir .fir_con');	
		
		
		window.change=function(){
			aLi[0].removeEventListener('transitionend',change,false);
			for(var i=0; i<aLi.length; i++){
				aLi[i].style.transform='rotateY('+(360/N*i+y)+'deg) translateZ(350px)';
				
				var d=Math.abs((360/N*i+y)%360);
				if(d>180)d=360-d;
				d=180-d;
				
				var scale=d/180;
				scale<0.3 && (scale=0.3);
				//aLi[i].innerHTML=scale;
				
				aLi[i].style.opacity=scale;
			}	

		};
		//360kan 美丽说 美图  360 音悦台 oppo 小米 聚划算 
		var aIcon=['&#xe612','&#xe605','&#xe666','&#xe612','&#xe833','&#xe60d','&#xe609','&#xe601'];
		var aLink=['360kan/index.html','meilishuo/index.html','meituan/index.html','360/index.html','yinyuetai/index.html','oppo/index.html','mi/index.html','juhuasuan/index.html'];
		for(var i=0; i<N; i++){
			var oLi=document.createElement('li');
			oLi.innerHTML='<a href="'+aLink[i]+'"><i class="iconfont">'+aIcon[i]+'</i></a>';
			//oLi.style.backgroundImage='url(img1/'+i+'.jpg)';
			oUl.appendChild(oLi);
			
			(function(oLi,index){
				setTimeout(function(){
					oLi.style.transform='rotateY('+360/N*index+'deg) translateZ(350px)';
				},200*(N-index));
			})(oLi,i);
		}

		var aLi=oUl.children;
		//最后一个
		aLi[0].addEventListener('transitionend',change,false);

		//键盘事件
		//var y=0;
		
		
		document.onkeydown=function(ev){
			if(ev.keyCode==37){
				y+=360/N;
				change();
			}
			if(ev.keyCode==39){
				y-=360/N;
				change();
			}
		};
		//首屏左右按钮事件
		var fPrev=document.querySelector('.fir .prev');
		var fNext=document.querySelector('.fir .next');
		fPrev.onclick=function()
		{
			y-=360/N;
			change();
		};
		fNext.onclick=function()
		{
			y+=360/N;
			change();
		};
		
		
		/*3d图片展*/
		
		};



};
	
})();