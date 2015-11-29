//版权 北京智能社©, 保留所有权利

function getByClass(oParent, sName)
{
	if (oParent.getElementsByClassName)
	{
		return oParent.getElementsByClassName(sName);
	}
	else
	{
		var aChild=oParent.getElementsByTagName('*');
		var aRes=[];
		
		for (var i=0; i<aChild.length; i++)
		{
			var obj=aChild[i];
			var aTmp=obj.className.split(' ');
			if (findInArr(aTmp, sName) == true)
			{
				aRes.push(obj);
			}
		}

		return aRes;
	}	
}

/**
 * 从数组中查找
 * @param arr    array 被查找数组
 * @param value        被查找值
 *
 * @return 找到了true  没找到false
 */
function findInArr(arr, value)
{
	for (var i=0; i<arr.length; i++)
	{
		if (arr[i] == value)
		{
			return true;
		}
	}
	
	return false;
}

function getStyle(obj, sName)
{
	if (obj.currentStyle)
	{
		return obj.currentStyle[sName];
	}
	else
	{
		return getComputedStyle(obj, false)[sName];
	}
}

function rnd(n, m)
{
	return Math.floor(Math.random()*(m-n)+n);
}

function toDub(n)
{
	return n<10 ? '0'+n : ''+n;
}
/**
 * 到页面的距离
 * 元素到定位父级的距离+定位父级到body的距离
 *@obj 要计算的那个元素
 */
 function getPos(obj)
 {
	 var left=0;
	 var top=0;
	 while(obj)
	 {
		 left+=obj.offsetLeft;
		 top+=obj.offsetTop;
		 obj=obj.offsetParent
	 }
	 return{top:top,left:left};
 }

 /**
  *选项卡重用
  *
  * 
  */

 function tab(sClass)
 {
 	var aParent=document.getElementsByClassName(sClass);
 	for(var i=0; i<aParent.length; i++)
 	{
 		_tab(aParent[i]);
 	}
 	function _tab(oParent)
 	{
 		var aBtn=oParent.getElementsByClassName('btn');
 		var aCon=oParent.getElementsByClassName('con');
 		for(var i=0; i<aBtn.length; i++)
 		{
 			(function (index){
 				aBtn[index].onclick=function (){
 					for(var i=0; i<aBtn.length; i++)
 					{
 						aBtn[i].className='btn';
 						aCon[i].className='con';
 					}
 					this.className='active btn';
 					aCon[index].className='active con';
 				};
 			})(i);
 		}
 	}
 }

	function oNP(obj)
	{
		var oPrev=obj.getElementsByClassName('prev')[0];
	    var oNext=obj.getElementsByClassName('next')[0];
	    var aCon=obj.getElementsByClassName('con');
	    var aBtn=obj.getElementsByClassName('btn');
	    var n=0;
	    for(var i=0; i<aBtn.length; i++)
	    {
	    	(function (index){
	    		aBtn[index].onclick=function (){
	    			n=index;
	    			tab1();
	    		};

	    	})(i);
	    }
	    oNext.onclick=function (){
	        n++;
	        if(n == aCon.length )
	        {
	            n=0;
	        }
	       tab1();
	     };
	     oPrev.onclick=function (){
	        n--;
	        if(n < 0 )
	        {
	            n=aCon.length-1;
	        }
	        tab1();
	     };
	     function tab1 ()
	     {
	        for(var i=0; i<aCon.length; i++)
	        {
	            for(var i=0; i<aCon.length; i++)
	            {
	                aCon[i].className='con';
	                aBtn[i].className='btn'
	            }
	            aCon[n].className='active con';
	            aBtn[n].className='active btn'
	        }
	     }
	}

	function oNP1(obj)
	{
		var oPrev=obj.getElementsByClassName('prev')[0];
	    var oNext=obj.getElementsByClassName('next')[0];
	    var aCon=obj.getElementsByClassName('con');
	    var n=0;    
	    oNext.onclick=function (){
	        n++;
	        if(n == aCon.length )
	        {
	            n=0;
	        }
	       tab2();
	     };
	     oPrev.onclick=function (){
	        n--;
	        if(n < 0 )
	        {
	            n=aCon.length-1;
	        }
	        tab2();
	     };
	     function tab2 ()
	     {
	        for(var i=0; i<aCon.length; i++)
	        {
	            for(var i=0; i<aCon.length; i++)
	            {
	                aCon[i].className='con';
	                
	            }
	            aCon[n].className='active con';
	           
	        }
	     }
	}















