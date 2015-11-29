/* 
* @Author: anchen
* @Date:   2015-09-03 21:49:47
* @Last Modified by:   anchen
* @Last Modified time: 2015-09-05 21:02:05
*/

window.onload=function (){
    tab('tab');
    var oCose=document.getElementById('close');
    var oAd=document.getElementById('advertisement');
    oCose.onclick=function (){
        oAd.style.display='none';
    }; 
    var oTabn=document.getElementById('tab_new');
    oNP1(oTabn);
    /**
    *box  -prev  -next
     */
     
     var oBox=document.getElementById('box');
     oNP1(oBox);

    /*
    
     */
    var oNav=document.getElementById('g_nav');
    var aList=oNav.getElementsByClassName('nav_list');
    var timer=null;
    for(var i=0; i<aList.length; i++)
    {
        (function (index){
            aList[index].onmouseover=function (){
                timer=setTimeout(function(){
                    var oPos=aList[index].getElementsByClassName('nav_pos')[0];
                    if(oPos)
                    {
                        aList[index].className='active nav_list';
                        oNav.style.borderLeftColor='#bdbdc7';
                        oNav.style.borderBottomColor='#bdbdc7';
                    }
                    else
                    {
                        aList[index].style.backgroundColor='#fff';
                    }

                },300);
                
            };
        })(i);
        (function (index){
            aList[index].onmouseout=function (){
                    clearTimeout(timer);
                    this.className='nav_list';
                    oNav.style.borderLeftColor='';
                    oNav.style.borderBottomColor='';
                    aList[index].style.backgroundColor='';       
                    
            };
        })(i);
    }
    
     /*
     
      */
     var oElevator=document.getElementById('elevator');
     var height=getPos(oElevator).top;
     window.onscroll=function (){
        var scroll=document.documentElement.scrollTop || document.body.scrollTop;
        if(scroll > height )
        {
            oElevator.className='elevator_follow elevator';

        }
        else
        {
            oElevator.className=' elevator';
        }
     };
     

};