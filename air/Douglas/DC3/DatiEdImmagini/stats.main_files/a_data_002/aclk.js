document.write('<!-- Copyright 2008 DoubleClick, a division of Google Inc. All rights reserved. -->\r\n<!-- Code auto-generated on Fri Feb 11 11:06:03 EST 2011 -->\r\n<script src=\"http://s0.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\r\n');

function DCFlash(id,pVM){
var swf = "http://s0.2mdn.net/2712390/160x600_internet per tutti_standard dal 14 feb_NO LOOP.swf";
var gif = "http://s0.2mdn.net/2712390/160x600_internet per tutti_standard dal 14 feb_NO LOOP.gif";
var minV = 8;
var FWH = ' width="160" height="600" ';
var url = escape("http://ad-emea.doubleclick.net/click%3Bh%3Dv8/3adb/f/197/%2a/b%3B228156896%3B0-0%3B0%3B56825262%3B2321-160/600%3B40707234/40725021/1%3B%3B%7Esscs%3D%3fhttp://googleads.g.doubleclick.net/aclk?sa=L&ai=BpWbivPaUTcGTCpG56Qb9ksD3A_bF1IgCpv_Y5h2OjOOlRQAQARgBIO3Mhxc4AFCq2fye-P____8BYP3S_oPkELIBEXd3dy5haXJsaW5lcnMubmV0ugEKMTYweDYwMF9hc8gBCdoBOGh0dHA6Ly93d3cuYWlybGluZXJzLm5ldC9haXJjcmFmdC1kYXRhL3N0YXRzLm1haW4_aWQ9MTg4mALUB6kC4pb4Yx_Ltz64AhjAAgTIAqbQ9huoAwHoA5YF6AP7COgDywH1AwIAAMQ&num=1&sig=AGiWqtw_z1WqaNFoEKiSZgi5BlifTF1cJg&client=ca-pub-4279434189571393&adurl=http%3a%2f%2fadsl.vodafone.it/offerta/%3Fecmp%3D01_Display");
var fscUrl = url;
var fscUrlClickTagFound = false;
var wmode = "opaque";
var bg = "";
var dcallowscriptaccess = "never";

var openWindow = "false";
var winW = 0;
var winH = 0;
var winL = 0;
var winT = 0;

var moviePath=swf.substring(0,swf.lastIndexOf("/"));
var sm=new Array();


var defaultCtVal = escape("http://ad-emea.doubleclick.net/click%3Bh%3Dv8/3adb/f/197/%2a/b%3B228156896%3B0-0%3B0%3B56825262%3B2321-160/600%3B40707234/40725021/1%3B%3B%7Esscs%3D%3fhttp://googleads.g.doubleclick.net/aclk?sa=L&ai=BpWbivPaUTcGTCpG56Qb9ksD3A_bF1IgCpv_Y5h2OjOOlRQAQARgBIO3Mhxc4AFCq2fye-P____8BYP3S_oPkELIBEXd3dy5haXJsaW5lcnMubmV0ugEKMTYweDYwMF9hc8gBCdoBOGh0dHA6Ly93d3cuYWlybGluZXJzLm5ldC9haXJjcmFmdC1kYXRhL3N0YXRzLm1haW4_aWQ9MTg4mALUB6kC4pb4Yx_Ltz64AhjAAgTIAqbQ9huoAwHoA5YF6AP7COgDywH1AwIAAMQ&num=1&sig=AGiWqtw_z1WqaNFoEKiSZgi5BlifTF1cJg&client=ca-pub-4279434189571393&adurl=http%3a%2f%2fadsl.vodafone.it/offerta/%3Fecmp%3D01_Display");
var ctp=new Array();
var ctv=new Array();
ctp[0] = "clickTag";
ctv[0] = "";


var fv='"moviePath='+moviePath+'/'+'&moviepath='+moviePath+'/';
for(i=1;i<sm.length;i++){if(sm[i]!=""){fv+="&submovie"+i+"="+escape(sm[i]);}}
for(var ctIndex = 0; ctIndex < ctp.length; ctIndex++) {
  var ctParam = ctp[ctIndex];
  var ctVal = ctv[ctIndex];
  if(ctVal != null && typeof(ctVal) == 'string') {
    if(ctVal == "") {
      ctVal = defaultCtVal;
    }
    else {
      ctVal = escape("http://ad-emea.doubleclick.net/click%3Bh%3Dv8/3adb/f/197/%2a/b%3B228156896%3B0-0%3B0%3B56825262%3B2321-160/600%3B40707234/40725021/1%3B%3B%7Esscs%3D%3fhttp://googleads.g.doubleclick.net/aclk?sa=L&ai=BpWbivPaUTcGTCpG56Qb9ksD3A_bF1IgCpv_Y5h2OjOOlRQAQARgBIO3Mhxc4AFCq2fye-P____8BYP3S_oPkELIBEXd3dy5haXJsaW5lcnMubmV0ugEKMTYweDYwMF9hc8gBCdoBOGh0dHA6Ly93d3cuYWlybGluZXJzLm5ldC9haXJjcmFmdC1kYXRhL3N0YXRzLm1haW4_aWQ9MTg4mALUB6kC4pb4Yx_Ltz64AhjAAgTIAqbQ9huoAwHoA5YF6AP7COgDywH1AwIAAMQ&num=1&sig=AGiWqtw_z1WqaNFoEKiSZgi5BlifTF1cJg&client=ca-pub-4279434189571393&adurl=" + ctVal);
    }
    if(ctParam.toLowerCase() == "clicktag") {
      fscUrl = ctVal;
      fscUrlClickTagFound = true;
    }
    else if(!fscUrlClickTagFound) {
      fscUrl = ctVal;
    }
    fv += "&" + ctParam + "=" + ctVal;
  }
}
fv+='"';
var bgo=(bg=="")?"":'<param name="bgcolor" value="#'+bg+'">';
var bge=(bg=="")?"":' bgcolor="#'+bg+'"';
function FSWin(){if((openWindow=="false")&&(id=="DCF0"))alert('openWindow is wrong.');
var dcw = 800;
var dch = 600;
// IE
if(!window.innerWidth)
{
  // strict mode
  if(!(document.documentElement.clientWidth == 0))
  {
    dcw = document.documentElement.clientWidth;
    dch = document.documentElement.clientHeight;
  }
  // quirks mode
  else if(document.body)
  {
    dcw = document.body.clientWidth;
    dch = document.body.clientHeight;
  }
}
// w3c
else
{
  dcw = window.innerWidth;
  dch = window.innerHeight;
}
if(openWindow=="center"){winL=Math.floor((dcw-winW)/2);winT=Math.floor((dch-winH)/2);}window.open(unescape(fscUrl),id,"width="+winW+",height="+winH+",top="+winT+",left="+winL+",status=no,toolbar=no,menubar=no,location=no");}this.FSWin = FSWin;
ua=navigator.userAgent;
if(minV<=pVM&&(openWindow=="false"||(ua.indexOf("Mac")<0&&ua.indexOf("Opera")<0))){
	var adcode='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+id+'"'+FWH+'>'+
		'<param name="movie" value="'+swf+'"><param name="flashvars" value='+fv+'><param name="quality" value="high"><param name="wmode" value="'+wmode+'"><param name="base" value="'+swf.substring(0,swf.lastIndexOf("/"))+'"><PARAM NAME="AllowScriptAccess" VALUE="'+dcallowscriptaccess+'">'+bgo+
		'<embed src="'+swf+'" flashvars='+fv+bge+FWH+' type="application/x-shockwave-flash" quality="high" swliveconnect="true" wmode="'+wmode+'" name="'+id+'" base="'+swf.substring(0,swf.lastIndexOf("/"))+'" AllowScriptAccess="'+dcallowscriptaccess+'"></embed></object>';
  if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);}
}else{
	document.write('<a target="_blank" href="'+unescape(url)+'"><img src="'+gif+'"'+FWH+'border="0" alt="Advertisement" galleryimg="no"></a>');
}}
var pVM=0;var DCid=(isNaN("228156896"))?"DCF2":"DCF228156896";
if(navigator.plugins && navigator.mimeTypes.length){
  var x=navigator.plugins["Shockwave Flash"];if(x && x.description){var pVF=x.description;var y=pVF.indexOf("Flash ")+6;pVM=pVF.substring(y,pVF.indexOf(".",y));}}
else if (window.ActiveXObject && window.execScript){
  window.execScript('on error resume next\npVM=2\ndo\npVM=pVM+1\nset swControl = CreateObject("ShockwaveFlash.ShockwaveFlash."&pVM)\nloop while Err = 0\nOn Error Resume Next\npVM=pVM-1\nSub '+DCid+'_FSCommand(ByVal command, ByVal args)\nCall '+DCid+'_DoFSCommand(command, args)\nEnd Sub\n',"VBScript");}
eval("function "+DCid+"_DoFSCommand(c,a){if(c=='openWindow')o"+DCid+".FSWin();}o"+DCid+"=new DCFlash('"+DCid+"',pVM);");
//-->

document.write('\r\n<noscript><a target=\"_blank\" href=\"http://ad-emea.doubleclick.net/click%3Bh%3Dv8/3adb/f/197/%2a/b%3B228156896%3B0-0%3B0%3B56825262%3B2321-160/600%3B40707234/40725021/1%3B%3B%7Esscs%3D%3fhttp://googleads.g.doubleclick.net/aclk?sa=L&ai=BpWbivPaUTcGTCpG56Qb9ksD3A_bF1IgCpv_Y5h2OjOOlRQAQARgBIO3Mhxc4AFCq2fye-P____8BYP3S_oPkELIBEXd3dy5haXJsaW5lcnMubmV0ugEKMTYweDYwMF9hc8gBCdoBOGh0dHA6Ly93d3cuYWlybGluZXJzLm5ldC9haXJjcmFmdC1kYXRhL3N0YXRzLm1haW4_aWQ9MTg4mALUB6kC4pb4Yx_Ltz64AhjAAgTIAqbQ9huoAwHoA5YF6AP7COgDywH1AwIAAMQ&num=1&sig=AGiWqtw_z1WqaNFoEKiSZgi5BlifTF1cJg&client=ca-pub-4279434189571393&adurl=http%3a%2f%2fadsl.vodafone.it/offerta/%3Fecmp%3D01_Display\"><img src=\"http://s0.2mdn.net/2712390/160x600_internet per tutti_standard dal 14 feb_NO LOOP.gif\" width=\"160\" height=\"600\" border=\"0\" alt=\"Advertisement\" galleryimg=\"no\"></a></noscript>\r\n');
