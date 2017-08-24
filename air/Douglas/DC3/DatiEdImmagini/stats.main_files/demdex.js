//version:7
var Tim = {dp_added:false, dp_enabled:true, tagList:[], bodyTags:{dom:[], load:[]}, tagCodes:{dom:[], load:[]}, bufStr:{dom:"", load:""}, counter:[], miscVar:[], aDiv:null, sDiv:null, nDiv:null, partner:null, stagingPath:null, stagingFiles:null, stageAllFiles:false, isStaged:false, container:0, constants:{HEAD:1, BODY:2, ONLOAD:3, CURRENT_DATE:+new Date, isHTTPS:"https:" == document.location.protocol, isHTTP:"http:" == document.location.protocol, URL_NONSECURE:"cdn.demdex.net", URL_SECURE:"a248.e.akamai.net/demdex.download.akamai.com", 
XMLParser:{specialChars:/</, reverseChars:/&lt;/, scriptRegex:/<script[^>]*>([\s\S]*)<\/script>/}}, tags:{head:null, body:null, onload:null}, getProtoStr:function() {
  return Tim.constants.isHTTPS ? "https://" : "http://"
}, pixels:{firing:false, pixel_str:"", num_of_pixel_responses:0, isPixelFiring:function() {
  return Tim.pixels.firing
}, getPixelSrc:function() {
  return Tim.pixels.pixel_str
}, setState:function(state) {
  var tp = Tim.pixels;
  switch(state) {
    case "clear":
      tp.firing = false;
      break;
    case "fire":
      tp.firing = true;
      tp.addToPixelQueues("waiting", "logdata", ["containerid=" + Tim.container, "_cb=" + (new Date).getTime()]);
      tp.makePixelSrc();
      tp.storePixels();
      tp.activateCallbacks();
      break;
    case "process":
      tp.processCallbacks();
      tp.num_of_pixel_responses++;
      break;
    default:
      break
  }
  return
}, activateCallbacks:function() {
  var tpc = Tim.pixels.callbacks;
  if(tpc.waiting.length) {
    tpc.ready = tpc.ready.concat(tpc.waiting);
    tpc.waiting = []
  }
}, processCallbacks:function() {
  var i = 0, tpc = Tim.pixels.callbacks, len = tpc.ready.length, arr_copy = Array.prototype.slice.call(tpc.ready);
  tpc.ready = [];
  if(arr_copy.length) {
    for(i = 0, len = arr_copy.length;i < len;i++) {
      setTimeout(arr_copy[i], 13)
    }
  }
}, makePixelSrc:function() {
  var str = "", tp = Tim.pixels, tpw = tp.waiting, fp = tpw.pdata[0] ? tpw.pdata[0] : "", data = tpw.data.join("&"), pdata = tpw.pdata.slice(1).join("&"), extras = tpw.extras.join("|"), logdata = tpw.logdata.join("&");
  str = Tim.getProtoStr() + Tim.partner + ".demdex.net/pixel/" + (fp ? fp : "") + "?" + (data.length ? "data:" + data + "|" : "") + (pdata.length ? "pdata:" + pdata + "|" : "") + (logdata.length ? "logdata:" + logdata + "|" : "") + (extras.length ? "extras:" + extras + "|" : "");
  tp.pixel_str = str.charAt(str.length - 1) === "|" ? str.substring(0, str.length - 1) : str
}, addToPixelQueues:function(queue, type, arg) {
  if(Tim.helpers.isArray(arg)) {
    Array.prototype.push.apply(Tim.pixels[queue][type], [].concat(arg))
  }else {
    Tim.pixels[queue][type].push(arg)
  }
  return
}, callbacks:{waiting:[], ready:[]}, waiting:{pdata:[], data:[], logdata:[], extras:[]}, fired:{pdata:[], data:[], logdata:[], extras:[]}, hasNewPixels:function() {
  var tpq = Tim.pixels.waiting;
  return tpq.pdata.length || tpq.data.length || tpq.logdata.length || tpq.extras.length
}, storePixels:function() {
  var tp = Tim.pixels, type = null;
  for(type in tp.waiting) {
    if(tp.waiting[type].length) {
      tp.fired[type] = tp.fired[type].concat(tp.waiting[type]);
      tp.waiting[type] = []
    }
  }
}, handlePixels:function(pixels, type) {
  var pixel = null, tp = Tim.pixels, i = 0, len = null, tpq = tp.waiting[type];
  if(type == "logdata" || type == "data") {
    pixels = Tim.helpers.convertObjectToKeyValuePairs(pixels)
  }
  len = pixels.length;
  while(i < len) {
    pixel = isNaN(pixels[i]) ? pixels[i] : +pixels[i];
    if(!tp.pixelExists(pixel, type)) {
      tpq.push(pixel)
    }
    i++
  }
}, pixelExists:function(pixel, type) {
  var tp = Tim.pixels, pixels = tp.waiting[type].concat(tp.fired[type]);
  return Tim.helpers.indexOf(pixels, pixel) >= 0
}, firePixels:function() {
  var img = null, tp = Tim.pixels;
  if(tp.isPixelFiring()) {
    return false
  }
  if(!tp.hasNewPixels()) {
    return false
  }
  tp.setState("fire");
  img = new Image(0, 0);
  img.onload = function() {
    var tp = Tim.pixels;
    tp.setState("process");
    tp.setState("clear");
    tp.firePixels()
  };
  img.src = tp.getPixelSrc();
  return true
}}, demdexSubmit:function(pixels) {
  var type = null, tp = Tim.pixels;
  pixels = pixels || false;
  if(pixels === false || pixels.pdata && !pixels.pdata.length) {
    return false
  }
  if(pixels.callback) {
    tp.callbacks.waiting.push(pixels.callback)
  }
  delete pixels.callback;
  for(type in pixels) {
    pixels.hasOwnProperty(type) && tp.handlePixels(pixels[type], type)
  }
  return Tim.pixels.firePixels()
}, dp_makeUrl:function() {
  var dpm_url = "%%PARTNER%%.demdex.net/%%PARTNER%%-dest.html", regex = /%%PARTNER%%/g;
  return function(partner) {
    var proto = Tim.constants.isHTTP ? "http://fast." : Tim.constants.isHTTPS ? "https://" : false;
    if(!proto) {
      return false
    }
    return proto + dpm_url.replace(regex, partner)
  }
}(), helpers:{concatNodeLists:function() {
  var theLists = [].slice.call(arguments), list = null, i = 0, element = null, finalList = [];
  if(!theLists.length) {
    return finalList
  }
  list = theLists.pop();
  do {
    for(i = 0;element = list[i++];) {
      finalList.push(element)
    }
  }while(list = theLists.pop());
  return finalList
}, indexOf:function(arr, value) {
  if(!Array.prototype.indexOf) {
    Tim.helpers.indexOf = function(arr, value) {
      for(var i = 0, l = arr.length;i < l;i++) {
        if(arr[i] === value) {
          return i
        }
      }
      return-1
    }
  }else {
    Tim.helpers.indexOf = function(arr, value) {
      return arr.indexOf(value)
    }
  }
  Tim.helpers.indexOf(arr, value)
}, convertObjectToKeyValuePairs:function(obj, separator) {
  var arr = [], separator = separator || "=", key = null;
  for(key in obj) {
    arr.push(key + separator + obj[key])
  }
  return arr
}, isArray:function(a) {
  return"[object Array]" == Object.prototype.toString.apply(a)
}}, getTags:function(posvar) {
  var tagStr = "", tags = [], dest = "", exclusion = "", code = null, pos = null, expires = null, scope = null, rgxExcl = null, rgxDest = null, url = document.location.href;
  for(var i = 0;i < this.tagList.length;i++) {
    pos = this.tagList[i]["pos"];
    expires = this.tagList[i]["expires"];
    if(pos != posvar || expires != null && expires < this.constants.CURRENT_DATE) {
      continue
    }
    scope = this.tagList[i]["scope"];
    code = this.constants.isHTTPS ? this.tagList[i]["scode"] : this.tagList[i]["code"];
    dest = this.tagList[i]["dest"];
    if(scope == 1) {
      if(posvar == 1) {
        tagStr += code
      }else {
        tags[tags.length] = this.tagList[i]
      }
      continue
    }
    if(scope == 2) {
      exclusion = this.tagList[i]["exclusion"];
      rgxExcl = new RegExp(exclusion, "ig");
      if(url.indexOf(dest) >= 0 && (exclusion == null || exclusion == "" || !rgxExcl.test(url))) {
        if(posvar == 1) {
          tagStr += code
        }else {
          tags[tags.length] = this.tagList[i]
        }
      }
    }
    if(scope == 3) {
      if(document.location.href.toString() == dest.toString()) {
        if(posvar == 1) {
          tagStr += code
        }else {
          tags[tags.length] = this.tagList[i]
        }
      }
    }
    if(scope == 4) {
      try {
        rgxDest = new RegExp(dest, "i");
        exclusion = this.tagList[i]["exclusion"];
        rgxExcl = new RegExp(exclusion, "ig");
        if(rgxDest.test(url) && (exclusion == null || exclusion == "" || !rgxExcl.test(url))) {
          if(posvar == 1) {
            tagStr += code
          }else {
            tags[tags.length] = this.tagList[i]
          }
        }
      }catch(__TIM_Err__) {
        if(typeof Tim != "undefined" && typeof Tim.error != "undefined" && typeof Tim.error.handleError == "function") {
          __TIM_Err__.partner = Tim.partner || "no_partner";
          __TIM_Err__.filename = __TIM_Err__.filename || "demdex.js";
          Tim.error.handleError(__TIM_Err__)
        }else {
          (new Image(0, 0)).src = (document.location.protocol == "https:" ? "https://" : "http://") + "error.demdex.net/pixel/14137?logdata:Error handling not defined"
        }
      }
    }
  }
  return posvar == 1 ? tagStr : tags
}, getHeadTags:function() {
  return Tim.tags.head
}, getBodyTags:function() {
  return Tim.tags.body
}, getOnloadTags:function() {
  return Tim.tags.onload
}, checkLoaded:function(viter, type) {
  try {
    if(Tim.counter.length >= Tim.bodyTags[type].length || viter >= 10) {
      Tim.aDiv.innerHTML += Tim.bufStr[type];
      for(var i = 0;i < Tim.tagCodes[type].length;i++) {
        eval(Tim.tagCodes[type][i])
      }
    }else {
      viter++;
      setTimeout("Tim.checkLoaded(" + viter + ',"' + type + '")', 400)
    }
  }catch(__TIM_Err__) {
    if(typeof Tim != "undefined" && typeof Tim.error != "undefined" && typeof Tim.error.handleError == "function") {
      __TIM_Err__.partner = Tim.partner || "no_partner";
      __TIM_Err__.filename = __TIM_Err__.filename || "demdex.js";
      Tim.error.handleError(__TIM_Err__)
    }else {
      (new Image(0, 0)).src = (document.location.protocol == "https:" ? "https://" : "http://") + "error.demdex.net/pixel/14137?logdata:Error handling not defined"
    }
  }
}, getPartner:function(dom_scripts) {
  var scripts = dom_scripts || document.getElementsByTagName("script"), i = 0, s = null, url_to_match = Tim.constants.isHTTP ? Tim.constants.URL_NONSECURE : Tim.constants.URL_SECURE, url_regex = new RegExp(url_to_match, "i"), demdex_regex = /\/([^\/]+)\/([^\/]+)\/demdex\.js/, m = null;
  while(s = scripts[i++]) {
    if(s.src && s.src.match(url_regex)) {
      m = s.src.match(demdex_regex);
      if(isNaN(m[2])) {
        this.partner = m[2];
        this.container = 0
      }else {
        this.partner = m[1];
        this.container = m[2]
      }
      break
    }
  }
}, domReady:function(tags, type) {
  var code = "";
  Tim.sDiv.appendChild(Tim.aDiv);
  Tim.sDiv.appendChild(Tim.nDiv);
  document.body.appendChild(Tim.sDiv);
  for(var i = 0;i < tags.length;i++) {
    code = Tim.constants.isHTTPS ? tags[i].scode : tags[i].code;
    if(code.toLowerCase().indexOf("iframe") != -1) {
      var str = code.replace(/&/g, "&amp;");
      var xmlDoc;
      if(document.implementation.createDocument) {
        var parser = new DOMParser;
        xmlDoc = parser.parseFromString(str, "text/xml")
      }else {
        if(window.ActiveXObject) {
          xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async = "false";
          xmlDoc.loadXML(str)
        }
      }
      var m = Tim.helpers.concatNodeLists(xmlDoc.getElementsByTagName("IFRAME"), xmlDoc.getElementsByTagName("iframe"));
      if(m.length != 0) {
        var src;
        if(m[0].getAttribute("src")) {
          src = m[0].getAttribute("src")
        }else {
          if(m[i].getAttribute("SRC")) {
            src = m[0].getAttribute("SRC")
          }
        }
        var iframe = document.createElement("IFRAME");
        iframe.setAttribute("style", "display:none");
        iframe.setAttribute("width", "0");
        iframe.setAttribute("height", "0");
        iframe.setAttribute("id", "ddiframe");
        iframe.setAttribute("src", src);
        document.body.appendChild(iframe)
      }
    }else {
      if(code.toLowerCase().indexOf("<\/script") != -1) {
        Tim.reparse(code.replace(/&/g, "&amp;"), type)
      }else {
        Tim.nDiv.innerHTML += code
      }
    }
  }
  var loaded = false, tsrcFile = null;
  for(var j = 0;j < Tim.bodyTags[type].length;j++) {
    var tsrc = false;
    var tbody = "";
    if(typeof Tim.bodyTags[type][j] != "undefined") {
      tsrc = Tim.bodyTags[type][j].src;
      tbody = Tim.bodyTags[type][j].body
    }
    if(tsrc) {
      if(Tim.stagingPath) {
        tsrcFile = tsrc.split("/").pop();
        if(Tim.stageAllFiles || Tim.stagingFiles.indexOf(tsrcFile) > -1) {
          tsrc = Tim.stagingPath + tsrcFile;
          Tim.isStaged = true
        }
      }
      var script = document.createElement("script");
      script.setAttribute("type", "text/javascript");
      script.setAttribute("src", tsrc);
      script.onload = script.onreadystatechange = function() {
        Tim.counter[Tim.counter.length] = 1
      };
      Tim.sDiv.appendChild(script)
    }else {
      Tim.counter[Tim.counter.length] = 1
    }
    Tim.bufStr[type] += "<br/>" + "<SCR" + 'IPT type="text/javascript">' + tbody + "</" + "SCRIPT>";
    Tim.tagCodes[type][Tim.tagCodes[type].length] = tbody
  }
  setTimeout('Tim.checkLoaded(1, "' + type + '")', 500)
}, windowReady:function() {
  var iframe, src, proto_url, url, params = "", fld;
  if(!Tim.dp_added && Tim.partner) {
    for(var i = 0;i < Tim.miscVar.length;i++) {
      fld = Tim.constants.isHTTP ? "miscVarTagCode" : "miscVarSecureTagCode";
      params = params + Tim.miscVar[i][fld] + "&"
    }
    iframe = document.createElement("iframe");
    url = Tim.dp_makeUrl(Tim.partner);
    if(!url) {
      return
    }
    url += "?" + params;
    iframe.style.cssText = "display:none;width:0px;height:0px;";
    iframe.width = 0;
    iframe.height = 0;
    iframe.id = "dpiframe";
    iframe.src = url;
    Tim.dp_added = !!document.body.appendChild(iframe)
  }
}, getText:function(node) {
  var buffer = "";
  var cnodes = node.childNodes;
  if(cnodes) {
    for(var i = 0;i < cnodes.length;i++) {
      buffer = buffer + this.getText(cnodes[i])
    }
  }
  if(node.data) {
    buffer += node.data
  }
  return buffer
}, xmlSpecialCharsParser:function() {
  function parse(text) {
    var div = document.createElement("div");
    div.innerHTML = "<br />" + text;
    return div.getElementsByTagName("script")
  }
  function santize(scripts) {
    var i = 0, st = "", script = null, tcx = Tim.constants.XMLParser;
    for(i = 0;script = scripts[i++];) {
      st = script.text;
      script.customText = tcx.specialChars.test(st) ? st.replace(tcx.specialChars, "&lt;") : st
    }
    return scripts
  }
  function combine(scripts) {
    var i = 0, script = null, src = "", buffer = "";
    for(i = 0;script = scripts[i++];) {
      src = script.src || script.SRC;
      buffer += src ? '<script type="text/javascript" src="' + src + '"><\/script>' : '<script type="text/javascript">' + script.customText + "<\/script>"
    }
    return buffer
  }
  return function(text) {
    var tcx = Tim.constants.XMLParser, contents = tcx.scriptRegex.exec(text);
    return contents && tcx.specialChars.test(contents[1]) ? combine(santize(parse(text))) : text
  }
}(), reparse:function(parm, type) {
  var tagscript = {};
  parm = Tim.xmlSpecialCharsParser(parm);
  var str = "<div>" + parm + "</div>";
  var strBuf = "";
  var docStr = "";
  var xDoc = null;
  document._originalWrite = document.write;
  document.write = function(t) {
    docStr += t
  };
  var xmlDoc;
  if(document.implementation.createDocument) {
    var parser = new DOMParser;
    xmlDoc = parser.parseFromString(str, "text/xml")
  }else {
    if(window.ActiveXObject) {
      xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
      xmlDoc.async = "false";
      xmlDoc.loadXML(str)
    }
  }
  var m = Tim.helpers.concatNodeLists(xmlDoc.getElementsByTagName("SCRIPT"), xmlDoc.getElementsByTagName("script"));
  for(var i = 0;i < m.length;i++) {
    if(m[i].getAttribute("src")) {
      tagscript["src"] = m[i].getAttribute("src")
    }else {
      if(m[i].getAttribute("SRC")) {
        tagscript["src"] = m[i].getAttribute("SRC")
      }
    }
    var tagbody = Tim.getText(m[i]);
    tagbody = tagbody.replace(Tim.constants.XMLParser.reverseChars, "<");
    if(tagbody.indexOf("document.write") == -1) {
      if(tagscript["body"]) {
        tagscript["body"] = tagscript["body"] + tagbody
      }else {
        tagscript["body"] = tagbody
      }
    }else {
      eval(tagbody);
      if(document.implementation.createDocument) {
        xDoc = parser.parseFromString("<div>" + docStr + "</div>", "text/xml")
      }else {
        if(window.ActiveXObject) {
          xDoc = new ActiveXObject("Microsoft.XMLDOM");
          xDoc.async = "false";
          xDoc.loadXML("<div>" + docStr + "</div>")
        }
      }
      var n = Tim.helpers.concatNodeLists(xDoc.getElementsByTagName("SCRIPT"), xDoc.getElementsByTagName("script"));
      for(var j = 0;j < n.length;j++) {
        var ts = n[j].getAttribute("src");
        var tb = Tim.getText(n[j]);
        tagscript["src"] = ts;
        if(tagscript["body"]) {
          tagscript["body"] = tagscript["body"] + tb
        }else {
          tagscript["body"] = tb
        }
      }
    }
    docStr = ""
  }
  Tim.bodyTags[type][Tim.bodyTags[type].length] = tagscript;
  document.write = document._originalWrite;
  return strBuf
}, getCookie:function(name) {
  var dc = document.cookie, cname = name + "=", end = 0, begin = 0;
  if(dc.length > 0) {
    begin = dc.indexOf(cname);
    if(begin != -1) {
      begin += cname.length;
      end = dc.indexOf(";", begin);
      if(end == -1) {
        return unescape(dc.substring(begin))
      }else {
        return unescape(dc.substring(begin, end))
      }
    }
  }
  return null
}, events:{domready:{isDOMReady:false, isDOMEventBound:false}, onload:{isOnloadEventBound:false}, attachEvent:function(type) {
  var response = false;
  switch(type) {
    case "dom":
      response = !!Tim.tags.body.length;
      break;
    case "load":
      response = Tim.events.domready.isDOMEventBound || !!Tim.tags.onload.length || Tim.dp_enabled;
      break;
    default:
      break
  }
  return response
}, fireDomEvent:function() {
  if(!Tim.tags.body.length || Tim.events.domready.isDOMReady) {
    return
  }
  if(!document.body) {
    return setTimeout(Tim.events.fireDomEvent, 13)
  }
  Tim.events.domready.isDOMReady = true;
  Tim.domReady(Tim.getBodyTags(), "dom");
  if("removeEventListener" in document && Tim.events.domready.isDOMEventBound) {
    document.removeEventListener("DOMContentLoaded", Tim.events.fireDomEvent, false)
  }else {
    if("detachEvent" in document && Tim.events.domready.isDOMEventBound && document.readyState == "complete") {
      document.detachEvent("onreadystatechange", Tim.events.fireDomEvent)
    }
  }
  Tim.events.domready.isDOMEventBound = false
}, fireLoadEvent:function() {
  Tim.events.domready.isDOMEventBound && Tim.events.fireDomEvent();
  Tim.tags.onload.length && Tim.domReady(Tim.getOnloadTags(), "load");
  Tim.windowReady()
}, bindEvents:function() {
  if(Tim.events.domready.isDOMEventBound || Tim.events.onload.isOnloadEventBound) {
    return
  }
  if(document.readyState == "complete") {
    return setTimeout(function() {
      Tim.events.fireDomEvent();
      Tim.events.fireLoadEvent()
    }, 13)
  }
  if("addEventListener" in document) {
    if(Tim.events.attachEvent("dom")) {
      Tim.events.domready.isDOMEventBound = true;
      document.addEventListener("DOMContentLoaded", Tim.events.fireDomEvent, false)
    }
    if(Tim.events.attachEvent("load")) {
      Tim.events.onload.isOnloadEventBound = true;
      window.addEventListener("load", Tim.events.fireLoadEvent, false)
    }
  }else {
    if("attachEvent" in document) {
      var toplevel = false;
      if(Tim.events.attachEvent("dom")) {
        Tim.events.domready.isDOMEventBound = true;
        document.attachEvent("onreadystatechange", Tim.events.fireDomEvent)
      }
      if(Tim.events.attachEvent("load")) {
        Tim.events.onload.isOnloadEventBound = true;
        window.attachEvent("onload", Tim.events.fireLoadEvent)
      }
      try {
        toplevel = window.frameElement = null
      }catch(e) {
      }
      if(document.documentElement.doScroll && toplevel) {
        Tim.doScrollCheck()
      }
    }else {
      var oldOnload = window.onload || function() {
      };
      if(Tim.events.attachEvent("load")) {
        Tim.events.onload.isOnloadEventBound = true;
        window.onload = function(e) {
          oldOnload(e);
          window[Tim.domReady](e)
        }
      }
    }
  }
}, doScrollCheck:function() {
  if(Tim.events.domready.isDOMReady) {
    return
  }
  try {
    document.documentElement.doScroll("left")
  }catch(error) {
    setTimeout(Tim.doScrollCheck, 13);
    return
  }
  Tim.events.fireDomEvent()
}}, main:function() {
  if(this.magicCookie()) {
    return
  }
  Tim.getPartner();
  Tim.tags.head = Tim.getTags(Tim.constants.HEAD);
  Tim.tags.body = Tim.getTags(Tim.constants.BODY);
  Tim.tags.onload = Tim.getTags(Tim.constants.ONLOAD);
  document.write(Tim.tags.head);
  Tim.aDiv = document.createElement("div");
  Tim.aDiv.style.display = "none";
  Tim.sDiv = document.createElement("div");
  Tim.sDiv.style.display = "none";
  Tim.nDiv = document.createElement("div");
  Tim.nDiv.style.display = "none";
  Tim.aDiv.innerHTML = "";
  Tim.events.bindEvents()
}};
typeof Tim != "undefined" && (Tim.error = function() {
  var config = {pixelMap:{harvestererror:14138, destpuberror:14139, dpmerror:14140, generalerror:14137, error:14137, noerrortypedefined:15021, evalerror:15016, rangeerror:15017, referenceerror:15018, typeerror:15019, urierror:15020}, domain:"error.demdex.net/pixel/"}, src = "";
  function getRequest() {
    return src
  }
  function firePixel(src) {
    (new Image(0, 0)).src = (document.location.protocol == "https:" ? "https://" : "http://") + config.domain + src
  }
  function handleError(args) {
    var pixel = 0, name = args.name ? String(args.name).toLowerCase() : false, filename = args.filename ? String(args.filename) : false, partner = args.partner ? String(args.partner) : typeof Tim != undefined && Tim.partner ? String(Tim.partner) : "no_partner", site = args.site ? args.site : document.location.href, filename = args.filename ? String(args.filename) : false, message = args.message ? String(args.message) : false;
    pixel = name in config.pixelMap ? config.pixelMap[name] : config.pixelMap.noerrortypedefined;
    src = pixel + "?logdata:" + (message ? "message=" + message.replace(",", " ") + "," : "") + (site ? "site=" + site.replace(",", " ") + "," : "") + (partner ? "partner=" + partner.replace(",", " ") + "," : "") + (filename ? "filename=" + filename + "," : "");
    src = src.replace(/,$/, "");
    firePixel(src)
  }
  return{handleError:handleError, pixelMap:config.pixelMap, getErrorRequest:getRequest}
}());
typeof Tim != "undefined" && (Tim.magicCookie = function(testCookie) {
  var ck = testCookie || this.getCookie("demdex-staging"), src = null, script = null, script0 = null, ckArray = [], STAGING_SCRIPT_ID = "demdex_staging_replacement_script";
  if(ck) {
    ckArray = ck.split("|");
    this.stagingPath = ckArray[document.location.protocol == "https:" ? 1 : 2];
    this.stagingFiles = ckArray[3] || "";
    if(!this.stagingFiles) {
      this.stageAllFiles = true
    }
    if(!this.stagingPath || this.stagingFiles && this.stagingFiles.indexOf("demdex.js") < 0) {
      return false
    }
    this.isStaged = true;
    if(!document.getElementById(STAGING_SCRIPT_ID)) {
      src = this.stagingPath + "demdex.js";
      if(parseInt(ckArray[0], 10)) {
        script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        script.id = STAGING_SCRIPT_ID;
        script0 = document.getElementsByTagName("script")[0];
        script0.parentNode.insertBefore(script, script0)
      }else {
        document.write("<scr" + 'ipt type="text/javascript" id="' + STAGING_SCRIPT_ID + '" src ="' + src + '"></scr' + "ipt>")
      }
      return true
    }
  }
  return false
});
typeof Tim != "undefined" && (Tim.getSearchReferrer = function(arg) {
  var site = arg.site ? arg.site : document.referrer, extensions = arg.extensions ? arg.extensions : false, aElement = function(ref) {
    var a = document.createElement("a");
    a.href = ("" + ref).toLowerCase();
    return a
  }(site), searchEngines = {"bing.":{name:"bing.com", pagePattern:/.*/, keywordPattern:/[&\?]q=([^&]+)/}, "google.":{name:"google.com", pagePattern:/.*/, keywordPattern:/[&\?]q=([^&]+)/}, "yahoo.":{name:"yahoo.com", pagePattern:/.*/, keywordPattern:/[&\?]p=([^&]+)/}, "ask.":{name:"ask.com", pagePattern:/.*/, keywordPattern:/[&\?]q=([^&]+)/}, "aol.":{name:"aol.com", pagePattern:/.*/, keywordPattern:/[&\?]q=([^&]+)/}}, re = [], se = null, new_site = "", domain = null, es = null, host = "", keywords = 
  "", customSite = null, keywordPattern = null, pagePattern = null, valid = null, se_regex = null, searchEngine = null;
  function santizeRE(str) {
    return str.replace(/\./g, "\\.")
  }
  function sanitizeURL(site) {
    site = site.split(".");
    return(site[0] == "www" ? site[1] : site[0]) + "."
  }
  function parseKeywords() {
    var query = pageText = keywordMatch = null, retVal = "";
    query = "search" in aElement ? aElement.search : "";
    if(!query) {
      return retVal
    }
    pageTest = searchEngine.pagePattern.test(aElement.pathname), keywordMatch = query.match(searchEngine.keywordPattern);
    return!!(pageTest && keywordMatch) ? decodeURIComponent(keywordMatch[1]).replace(/\+/g, " ") : ""
  }
  function parseDomain() {
    return searchEngine.name
  }
  if(extensions) {
    es = extensions.sites;
    for(customSite in es) {
      if(!es.hasOwnProperty(customSite)) {
        continue
      }
      new_site = es[customSite].match_all_extensions ? sanitizeURL(new_site) : customSite;
      pagePattern = es[customSite].search_page ? es[customSite].search_page : ".*";
      keywordPattern = es[customSite].search_param ? es[customSite].search_param : "q=";
      searchEngines[new_site] = {name:customSite, pagePattern:RegExp(santizeRE(pagePattern)), keywordPattern:RegExp("[&?]" + santizeRE(keywordPattern) + "=([^&]+)", "i"), matchExtensions:!!es[customSite].match_all_extensions}
    }
  }
  for(se in searchEngines) {
    searchEngines.hasOwnProperty(se) && re.push(se)
  }
  se_regex = RegExp(santizeRE(re.join("|")) + ".*?");
  domain = "hostname" in aElement ? aElement.hostname.match(se_regex) : "";
  searchEngine = domain in searchEngines ? searchEngines[domain] : "";
  valid = !!(domain && "search" in aElement && searchEngine);
  return{name:valid ? parseDomain() : "", keywords:valid ? parseKeywords() : "", valid:valid}
});
try {
  Tim.miscVar={};

Tim.tagList[Tim.tagList.length]={ 'scope':1, 'pos':2, 'dest':'All available destinations', 'code': '<img src=\"http://dm.demdex.net/pixel/18116\" width=\"0\" height=\"0\" />', 'scode':'', 'expires':null, 'exclusion':''}; 

  Tim.main()
}catch(__TIM_Err__) {
  if(typeof Tim != "undefined" && typeof Tim.error != "undefined" && typeof Tim.error.handleError == "function") {
    __TIM_Err__.filename = __TIM_Err__.filename || "demdex.js";
    Tim.error.handleError(__TIM_Err__)
  }else {
    (new Image(0, 0)).src = (document.location.protocol == "https:" ? "https://" : "http://") + "error.demdex.net/pixel/14137?logdata:Error handling not defined"
  }
}