(function(global){
	var top=0;
	var iSpeed=0;
	var timer=null;
	global.startMove=function(obj,iTarget){
		clearInterval(timer);
		timer=setInterval(function(){
			iSpeed+=(iTarget-top)/5;	
			iSpeed*=0.7;
			
			top+=iSpeed;
			obj.style.top=Math.round(top)+'px';
			
			if(Math.round(iSpeed)==0 && Math.round(top)==iTarget){
				clearInterval(timer);
			}
			
		},30);	
	}
})(window);