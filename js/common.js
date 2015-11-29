
	
	function addWheel(obj, fn)//定义函数
    {
        if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1)
        {
            //obj.addEventListener('DOMMouseScroll',fn,false);
            //不可这么写，因为调用处会传一个参数，必须套一层来接收参数。
            obj.addEventListener('DOMMouseScroll',function(ev){
                //判断参数
                var oEvent=ev||event;
              var down=oEvent.detail>0? true:false;//火狐大于零，向下。
              fn(down);

            }, false);
        }
        else
        {
            obj.onmousewheel=function(ev){
                var oEvent=ev||event;
                var down=oEvent.wheelDelta>0? false:true;
                fn(down);

            }
        }
    }//鼠标滚轮向下，true，向上false.
	
	
	