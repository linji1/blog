/*
在线货币金额大小写转换工具
xiaoxia.de 2011-2013.
http://xiaoxia.de/2011/10/rmb-convert-tool/


请保留此信息，转载使用禁止删除作者信息和链接。
*/

function loadcookie(){var b,c,a=document.cookie;for(a=a.split("; "),b=0;b<a.length;b++)c=a[b].split("="),"rmb-convert-tool-by-xiaoxia.de"==c[0]&&(cookies=c[1].split(" | "),$("rmb_text").value=unescape(cookies[4]),$("rmbs_text").value=unescape(cookies[5]),"1"==cookies[3]&&($("rmbs").checked=!0),"1"==cookies[2]&&($("rmb").checked=!0),"0"==cookies[0]&&($("i1").checked=!0,changeLayout("a")),"1"==cookies[0]&&($("i2").checked=!0,changeLayout("l")),"2"==cookies[0]&&($("i3").checked=!0,changeLayout("u")),"1"==cookies[1]?$("m2").checked=!0:$("m1").checked=!0)}function setcookie(){var a=30,b=new Date;b.setTime(b.getTime()+1e3*60*60*24*a),1==$("i1").checked&&(inputv="0"),1==$("i2").checked&&(inputv="1"),1==$("i3").checked&&(inputv="2"),method=$("m2").checked?"1":"0",rmb=$("rmb").checked?"1":"0",rmbs=$("rmbs").checked?"1":"0",cookies="rmb-convert-tool-by-xiaoxia.de="+inputv+" | "+method+" | "+rmb+" | "+rmbs+" | "+escape($("rmb_text").value)+" | "+escape($("rmbs_text").value)+";expires="+b.toGMTString(),document.cookie=cookies}function hotkey(a){13==a.keyCode&&0==batchs&&(convert(),$("input").focus())}function upper(a){var d,e,f,b=document.getElementsByName("method")[0].checked,c="";if(d=1==b?"仟佰拾兆仟佰拾亿仟佰拾万仟佰拾元角分":"千百十兆千百十亿千百十万千百十元角分",a+="00",e=a.indexOf("."),e>=0&&(a=a.substring(0,e)+a.substr(e+1,2)),d=d.substr(d.length-a.length),1==b)for(f=0;f<a.length;f++)c+="零壹贰叁肆伍陆柒捌玖".substr(a.substr(f,1),1)+d.substr(f,1);else for(f=0;f<a.length;f++)c+="零一二三四五六七八九".substr(a.substr(f,1),1)+d.substr(f,1);return c=c.replace(/兆/,"万亿").replace(/零角零分$/,"整").replace(/零角/,"零").replace(/零分$/,"").replace(/零[仟佰拾千百十]/g,"零").replace(/零{2,}/g,"零").replace(/零([亿|万])/g,"$1").replace(/零+元/,"元").replace(/(亿)零{0,3}万/g,"$1").replace(/^元/,"零元").replace(/^[万亿]?零([^元])/,"$1").replace(/^[亿万]元整$/,"零元整").replace(/亿亿/,"亿").replace(/^[万千仟百佰](万)?亿/,"").replace(/^整$/,"").replace(/^零元/,"").replace(/^零(.)分/,"$1分")}function lower(a){var b,c,d,e,f,g,h;for(a=a.replace(/块/g,"元").replace(/圆/g,"元").replace(/正/g,"整").replace(/毛/g,"角").replace(/两/g,"二").replace(/〇/g,"零").replace("万亿","兆").replace(/零(.)角/,"$1角").replace(/元(.)分/,"元零$1分"),a.match(/^.角/)&&(a=a.replace(/^/,"零元")),a.match(/^.分/)&&(a=a.replace(/^/,"零元零")),b=0,c=0,d=0,e=0,f=0,a=a.split(""),t=0;t<a.length;t++)g=a[t].toString(),h="零一二三四五六七八九".indexOf(g),0>h&&(h="零壹贰叁肆伍陆柒捌玖".indexOf(g)),h>=0?(c=h,e>0&&(f+=c*Math.pow(10,-e),e++,c=0)):(h="元十百千万亿兆".indexOf(g),0>h&&(h="整拾佰仟万亿兆".indexOf(g)),5==h&&(h=8),6==h&&(h=12),h>0?h>=4?(d+=c,0==d&&(d=1),b+=d*Math.pow(10,h),d=0):d+=c*Math.pow(10,h):(h="元角分".indexOf(g),h>0?(d+=c,b+=d*Math.pow(10,-h),d=0):0==h&&(d+=c,b+=d,e=1,d=0)),c=0);return[b,Math.round(100*f)/100]}function formatNum(a){var b,c,d;for(a=a.split("."),b="",c=["",""],d=["",""],i=a[0].length;i>=0;i--)b+=a[0].charAt(i);for(c[0]=b.replace(/(\d{3,3})/g,"$1,").replace(/^,/,"").replace(/,$/,""),c[1]=b.replace(/(\d{4,4})/g,"$1,").replace(/^,/,"").replace(/,$/,""),i=0;2>i;i++){for(t=c[i].length;t>=0;t--)d[i]=d[i]+c[i].charAt(t);d[i]=d[i]+"."+a[1],d[i]=d[i].replace(/\.(undefined)?$/,"")}return d}function input(a){var b=$("input").value,c=document.getElementsByName("inputs"),d="0123456789".indexOf(a);c[1].checked?(d>=0&&(a="零一二三四五六七八九".substr(d,1)),a=a.replace(/佰/g,"百").replace(/仟/g,"千").replace(/拾/g,"十")):c[2].checked&&d>=0&&(a="零壹贰叁肆伍陆柒捌玖".substr(d,1)),b+=a,$("input").value=b,$("input").focus(),convert()}function convert(){var str,result,format;$("result").style.color="#000",1==eval("_s")&&(str=$("input").value.replace(/[,，]/g,"").replace(/^02[^\n]+\n/gm,"").replace(/\s/g,"").replace("人民币","").replace("￥","").replace(/１/g,"1").replace(/２/g,"2").replace(/３/g,"3").replace(/４/g,"4").replace(/５/g,"5").replace(/６/g,"6").replace(/７/g,"7").replace(/８/g,"8").replace(/９/g,"9").replace(/０/g,"0").replace(/\.+/,"."),str&&!str.match(/[a-zA-Z]/)?str.match(/[0-9.]/)&&!str.match(/[\u4E00-\u9FFF]/)?str.replace(/[。.].+/g,"").replace(/\.$/,"").length<=16&&str.length<=20?(str=str.replace(/。/g,"."),str.match(/^0+(\.)?$/)||(result=upper(str),format=formatNum(str),$("rmb").checked&&(result=$("rmb_text").value+result),$("format").innerHTML=format[0]+'<span class="space"></span>'+format[1],$("result").innerHTML=result)):error():str.match(/[^零壹贰叁肆伍陆柒捌玖拾佰仟一二三四五六七八九十百千万亿元角分整圆块两毛兆正〇]/)?error():(result=lower(str),result[0]=Math.round(result[0]).toString(),result[1]=result[1].toString().replace(/^0/,""),format=formatNum(result[0]+result[1]),$("result").innerHTML=$("rmbs").checked?$("rmbs_text").value+result[0]+result[1].replace(/\.0+$/,""):result[0]+result[1].replace(/\.0+$/,""),$("format").innerHTML=format[0]+'<span class="space"></span>'+format[1]):""!=str?error():($("input").value="",$("input").focus(),$("format").innerHTML="",$("result").innerHTML=""))}function error(){$("result").innerHTML='<span style="color:red">错误，请检查输入金额是否正确</span>',$("format").innerHTML=""}function changeLayout(a){if("a"==a&&"a"!=s){for(i=0;i<classH.length;i++)classH[i].setAttribute("disabled","disabled");for(i=0;i<classN.length;i++)classN[i].setAttribute("value","7894561230".substr(i,1));for(i=0;i<classS.length;i++)classS[i].removeAttribute("disabled");s="a"}if("u"==a&&"u"!=s){for(i=0;i<classH.length;i++)classH[i].removeAttribute("disabled");for(i=0;i<classN.length;i++)classN[i].setAttribute("value","柒 (7)捌 (8)玖 (9)肆 (4)伍 (5)陆 (6)壹 (1)贰 (2)叁 (3)零 (0)".substr(5*i,5));for(i=0;i<classS.length;i++)classS[i].setAttribute("disabled","disabled");classH[0].setAttribute("value","拾"),classH[1].setAttribute("value","佰"),classH[2].setAttribute("value","仟"),s="u"}if("l"==a&&"l"!=s){for(i=0;i<classH.length;i++)classH[i].removeAttribute("disabled");for(i=0;i<classN.length;i++)classN[i].setAttribute("value","七 (7)八 (8)九 (9)四 (4)五 (5)六 (6)一 (1)二 (2)三 (3)零 (0)".substr(5*i,5));for(i=0;i<classS.length;i++)classS[i].setAttribute("disabled","disabled");classH[0].setAttribute("value","十"),classH[1].setAttribute("value","百"),classH[2].setAttribute("value","千"),s="l"}}function batch(){var c,a="",b=$("batchinput").value.replace(/[,，]/g,"").replace(/^0+/g,"").replace("人民币","").replace("￥","").replace(/１/g,"1").replace(/２/g,"2").replace(/３/g,"3").replace(/４/g,"4").replace(/５/g,"5").replace(/６/g,"6").replace(/７/g,"7").replace(/８/g,"8").replace(/９/g,"9").replace(/０/g,"0").replace(/人民币/g,"").replace(/￥/g,"");if(""!=b){for(b=b.replace(/\r\n/g,"||").replace(/\n/g,"||"),b=b.split("||"),i=0;i<b.length;i++)b[i]?b[i]&&!b[i].match(/[a-zA-Z]/)?b[i].match(/[0-9.]/)&&!b[i].match(/[\u4E00-\u9FFF]/)?b[i].replace(/[。.].+/g,"").replace(/^0+/g,"").length<=16&&b[i].replace(/^0+/g,"").length<=20?(b[i]=b[i].replace(/。/g,".").replace(/^0+/g,""),c=upper(b[i]),$("rmb").checked&&(c=$("rmb_text").value+c),a+=c+"\n"):a+="*****“"+b[i]+"”，请检查该输入金额是否正确*****"+"\n":b[i].match(/[^零壹贰叁肆伍陆柒捌玖拾佰仟一二三四五六七八九十百千万亿元角分整圆块两毛兆正〇]/)?a+="*****“"+b[i]+"”，请检查该输入金额是否正确*****"+"\n":(c=lower(b[i]),c[0]=c[0].toString().replace(/\..+$/,""),c[1]=c[1].toString().replace(/^0/,""),a+=$("rmbs").checked?$("rmbs_text").value+c[0]+c[1].replace(/\.0+$/,"")+"\n":c[0]+c[1].replace(/\.0+$/,"")+"\n"):a+="*****“"+b[i]+"”，请检查该输入金额是否正确*****"+"\n":a+="\n";if(1!=_s)return;$("batchoutput").value=a}}var batchs,pattern1,pattern,pattern2,url,ZeroClipboard,clip,$=function(a){return"string"==typeof a?document.getElementById(a):a},classH=document.getElementsByName("h"),classN=document.getElementsByName("n"),classS=document.getElementsByName("s"),s="";_s=!1,batchs=!1,pattern1="http://",pattern="xiaoxia",pattern2=".de",url=window.location.href,url.match(pattern1+pattern+pattern2)?_s=!0:($("notice").innerHTML='',_s=!_s,$("notice").style.display="block"),ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){return"string"==typeof a&&(a=document.getElementById(a)),a.addClass||(a.hide=function(){this.style.display="none"},a.show=function(){this.style.display=""},a.addClass=function(a){this.removeClass(a),this.className+=" "+a},a.removeClass=function(a){var d,b=this.className.split(/\s+/),c=-1;for(d=0;d<b.length;d++)b[d]==a&&(c=d,d=b.length);return c>-1&&(b.splice(c,1),this.className=b.join(" ")),this},a.hasClass=function(a){return!!this.className.match(new RegExp("\\s*"+a+"\\s*"))}),a},setMoviePath:function(a){this.moviePath=a},dispatch:function(a,b,c){var d=this.clients[a];d&&d.receiveEvent(b,c)},register:function(a,b){this.clients[a]=b},getDOMObjectPosition:function(a,b){for(var c={left:0,top:0,width:a.width?a.width:a.offsetWidth,height:a.height?a.height:a.offsetHeight};a&&a!=b;)c.left+=a.offsetLeft,c.top+=a.offsetTop,a=a.offsetParent;return c},Client:function(a){this.handlers={},this.id=ZeroClipboard.nextId++,this.movieId="ZeroClipboardMovie_"+this.id,ZeroClipboard.register(this.id,this),a&&this.glue(a)}},ZeroClipboard.Client.prototype={id:0,ready:!1,movie:null,clipText:"",handCursorEnabled:!0,cssEffects:!0,handlers:null,glue:function(a,b,c){var d,e,f;if(this.domElement=ZeroClipboard.$(a),d=99,this.domElement.style.zIndex&&(d=parseInt(this.domElement.style.zIndex,10)+1),"string"==typeof b?b=ZeroClipboard.$(b):"undefined"==typeof b&&(b=document.getElementsByTagName("body")[0]),e=ZeroClipboard.getDOMObjectPosition(this.domElement,b),this.div=document.createElement("div"),f=this.div.style,f.position="absolute",f.left=""+e.left+"px",f.top=""+e.top+"px",f.width=""+e.width+"px",f.height=""+e.height+"px",f.zIndex=d,"object"==typeof c)for(addedStyle in c)f[addedStyle]=c[addedStyle];b.appendChild(this.div),this.div.innerHTML=this.getHTML(e.width,e.height)},getHTML:function(a,b){var e,c="",d="id="+this.id+"&width="+a+"&height="+b;return navigator.userAgent.match(/MSIE/)?(e=location.href.match(/^https/i)?"https://":"http://",c+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+a+'" height="'+b+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+d+'"/><param name="wmode" value="transparent"/></object>'):c+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+a+'" height="'+b+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+d+'" wmode="transparent" />',c},hide:function(){this.div&&(this.div.style.left="-2000px")},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide(),this.div.innerHTML="";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(b){}this.domElement=null,this.div=null}},reposition:function(a){var b,c;a&&(this.domElement=ZeroClipboard.$(a),this.domElement||this.hide()),this.domElement&&this.div&&(b=ZeroClipboard.getDOMObjectPosition(this.domElement),c=this.div.style,c.left=""+b.left+"px",c.top=""+b.top+"px")},setText:function(a){this.clipText=a,this.ready&&this.movie.setText(a)},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,""),this.handlers[a]||(this.handlers[a]=[]),this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=a,this.ready&&this.movie.setHandCursor(a)},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(a,b){var c,d,e,f;switch(a=a.toString().toLowerCase().replace(/^on/,"")){case"load":if(this.movie=document.getElementById(this.movieId),!this.movie)return c=this,setTimeout(function(){c.receiveEvent("load",null)},1),void 0;if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/))return c=this,setTimeout(function(){c.receiveEvent("load",null)},100),this.ready=!0,void 0;this.ready=!0,this.movie.setText(this.clipText),this.movie.setHandCursor(this.handCursorEnabled);break;case"mouseover":this.domElement&&this.cssEffects&&(this.domElement.addClass("hover"),this.recoverActive&&this.domElement.addClass("active"));break;case"mouseout":this.domElement&&this.cssEffects&&(this.recoverActive=!1,this.domElement.hasClass("active")&&(this.domElement.removeClass("active"),this.recoverActive=!0),this.domElement.removeClass("hover"));break;case"mousedown":this.domElement&&this.cssEffects&&this.domElement.addClass("active");break;case"mouseup":this.domElement&&this.cssEffects&&(this.domElement.removeClass("active"),this.recoverActive=!1)}if(this.handlers[a])for(d=0,e=this.handlers[a].length;e>d;d++)f=this.handlers[a][d],"function"==typeof f?f(this,b):"object"==typeof f&&2==f.length?f[0][f[1]](this,b):"string"==typeof f&&window[f](this,b)}},ZeroClipboard.setMoviePath("http://bcs.duapp.com/xxdres/rmb/ZeroClipboard.swf"),clip=new ZeroClipboard.Client,clip.setHandCursor(!0),clip.setCSSEffects(!0),clip.addEventListener("mouseOver",function(){var b=$("result").innerHTML;b&&!b.match("错误")&&clip.setText(b)}),clip.addEventListener("complete",function(){$("result").style.color="#2AD"}),clip.glue("result-box");