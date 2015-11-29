//版权 北京智能社©, 保留所有权利

function addEvent(obj, sEv, fn)
{
	if (obj.addEventListener)
	{
		obj.addEventListener(sEv, fn, false);
	}
	else
	{
		obj.attachEvent('on'+sEv, fn);
	}
}

function removeEvent(obj, sEv, fnName)
{
	if (obj.removeEventListener)
	{
		obj.removeEventListener(sEv, fnName, false);
	}
	else
	{
		obj.detachEvent('on'+sEv, fnName);
	}
}

function ready(fn)
{
	if (document.addEventListener)
	{
		document.addEventListener('DOMContentLoaded', fn, false);
	}
	else
	{
		document.attachEvent('onreadystatechange', function (){
			if (document.readyState == 'complete')
			{
				fn();
			}
		});
	}
}




















