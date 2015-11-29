//getByClass(),findArr(),getStyle(),rnd(),toDub()
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

//jsonp开始
function json2url(json){
	var arr=[];
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	return arr.join('&');
}
function jsonp(json){
	json=json || {};
	if(!json.url)return;
	json.data=json.data || {};
	json.cbName=json.cbName || 'cb';

	var fnName='jsonp_'+Math.random();
	fnName=fnName.replace('.','');

	window[fnName]=function(data){
		json.success && json.success(data);

		//删除
		oHead.removeChild(oS);
	};

	json.data[json.cbName]=fnName;  //往数据里面添加回调名称

	var oS=document.createElement('script');
	oS.src=json.url+'?'+json2url(json.data);
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oS);
}
//jsop结束
//
//addweel
function addWheel(obj, fn)
	{
		if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1)
		{
			obj.addEventListener('DOMMouseScroll', function (ev){
					var down=ev.detail>0 ? true : false;
					fn(down);

					ev.preventDefault();
			}, false);
		}
		else
		{
			obj.onmousewheel=function (){
				var down=event.wheelDelta>0 ? false : true;
				fn(down);

				return false;
			};
		}
	}

	//结束













