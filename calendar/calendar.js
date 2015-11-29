//版权 北京智能社©, 保留所有权利

(function (){
	var added=false;

	window.calendar=function (oT){
		// 引入css
		if ( ! added)
		{
			added=true;
			var oLink=document.createElement('link');
			oLink.href='calendar.css';
			oLink.rel='stylesheet';
			var oHead=document.getElementsByTagName('head')[0];
			var oScript=document.getElementsByTagName('script')[0];
			oHead.insertBefore(oLink, oScript);
		}


		oT.onfocus=function (){
			oDiv.style.display='block';
		};

		oT.onclick=function (ev){
			var oEvent=ev || event;
			oEvent.cancelBubble=true;
		};

		var oDiv=document.createElement('div');
		oDiv.style.left=oT.offsetLeft+'px';
		oDiv.style.top=oT.offsetTop+oT.offsetHeight+5+'px';
		oDiv.className='calendar';
		oDiv.innerHTML='<a href="javascript:;" class="prev">←</a>'+
			'<a href="javascript:;" class="next">→</a>'+
			'<span>xxx年xxx月</span>'+
			'<ol>'+
				'<li>一</li>'+
				'<li>二</li>'+
				'<li>三</li>'+
				'<li>四</li>'+
				'<li>五</li>'+
				'<li class="week">六</li>'+
				'<li class="week">日</li>'+
			'</ol><ul></ul>';
		oT.parentNode.insertBefore(oDiv, oT);

		// 日历
		var oSpan=oDiv.getElementsByTagName('span')[0];
		var oUl=oDiv.getElementsByTagName('ul')[0];

		// 本月
		var now=0;
		create();

		// 下个月
		var oNext=oDiv.getElementsByClassName('next')[0];
		oNext.onclick=function (ev){
			var oEvent=ev || event;
			now++;
			create();
			oEvent.cancelBubble=true;
		};

		// 上个月
		var oPrev=oDiv.getElementsByClassName('prev')[0];
		oPrev.onclick=function (ev){
			var oEvent=ev || event;
			now--;
			create();
			oEvent.cancelBubble=true;
		};

		function create()
		{
			oUl.innerHTML='';

			var oDate=new Date(); // ?
			oDate.setMonth(oDate.getMonth()+now);

			var y=oDate.getFullYear();
			var m=oDate.getMonth();
			oSpan.innerHTML=y+'年'+toDub(m+1)+'月';

			// 空格
			var oDate=new Date(); // ?
			oDate.setMonth(oDate.getMonth()+now);
			oDate.setDate(1);
			var week=oDate.getDay();
			(week==0) && (week=7);
			for (var i=0; i<week-1; i++)
			{
				var oLi=document.createElement('li');

				oUl.appendChild(oLi);
			}

			// 真实日期
			var oDate=new Date(); // ?
			oDate.setMonth(oDate.getMonth()+now);
			oDate.setMonth(oDate.getMonth()+1, 1);
			oDate.setDate(0);
			var total=oDate.getDate();
			for (var i=0; i<total; i++)
			{
				var oLi=document.createElement('li');
				oLi.innerHTML=toDub(i+1);

				oUl.appendChild(oLi);
			}

			// 周末
			var aLi=oUl.children;
			for (var i=0; i<aLi.length; i++)
			{
				if (i%7==5 || i%7==6)
				{
					aLi[i].className='week';
				}
			}

			// 今天
			if (now == 0)
			{
				var oDate=new Date();
				var today=oDate.getDate();
				for (var i=0; i<aLi.length; i++)
				{
					if (aLi[i].innerHTML == today)
					{
						aLi[i].className='today';
						aLi[i].innerHTML='今天';
					}
					else if (aLi[i].innerHTML < today)
					{
						aLi[i].className='past';
					}
				}
			}
			else if (now < 0)
			{
				for (var i=0; i<aLi.length; i++)
				{
					aLi[i].className='past';
				}
			}

			// 加事件
			if (now > 0)
			{
				for (var i=0; i<aLi.length; i++)
				{
					aLi[i].onclick=function (){
						oT.value=oSpan.innerHTML+this.innerHTML+'日';
					};
				}
			}
			else if (now == 0)
			{
				var today=new Date().getDate();
				for (var i=0; i<aLi.length; i++)
				{
					if (aLi[i].innerHTML == '今天')
					{
						aLi[i].onclick=function (){
							oT.value=oSpan.innerHTML+toDub(today)+'日';
						};
					}
					else if (aLi[i].innerHTML > today)
					{
						aLi[i].onclick=function (){
							oT.value=oSpan.innerHTML+this.innerHTML+'日';
						};
					}
				}
			}
		}
		//补0
		function toDub(n)
		{
			return n<10 ? '0'+n : ''+n;
		}

		// 消失
		document.onclick=function (){
			oDiv.style.display='none';
		};
	};
})();












