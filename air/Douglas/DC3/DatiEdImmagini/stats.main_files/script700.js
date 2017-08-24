function Args() {
    var caller = this._findCaller();
    if (!caller) {
        this._isHttps = window.location.match("^https") == "https";
        this._queryString = "no_match_script";
    }
    else {
        this._isHttps = caller.src.match("^https") == "https";
        var qString = caller.src.replace(/^[^\?]+\??/, '');
        if (qString) { this._queryString = qString + "&"; }
    }
}

if (!Args._SeenScriptCache) Args._SeenScriptCache = new Array();
Args.prototype._findCaller = function() {
    var scripts = document.getElementsByTagName('script');
    for (var i = scripts.length - 1; i >= 0; i--) {
        var src = scripts[i].src;

        if (src.match(/^[^\?]+\?/) && src.match(/doubleverify\.com/) && !Args._SeenScriptCache[i]) {
           if (src.match('script700.js')) {
                Args._SeenScriptCache[i] = 1;
                return scripts[i];
            }
        }
        else {
            Args._SeenScriptCache[i] = 1;
        }
    }
    return null;
}

try {
    window.parentIsPermitted = false;
    window.DVCurWin = window;
     	 
    try {
        for (i = 0; i <= 10; i++) {
            if ((window.DVCurWin.parent != null) && (window.DVCurWin.parent != window.DVCurWin)) {
                var loc = window.DVCurWin.parent.location.toString();
                var x = loc.length;
                if (x > 0) {
                                        window.DVCurWin = window.DVCurWin.parent;
                    window.parentIsPermitted = true;
                }
                else {
                    window.parentIsPermitted = false;
                    break;
                }
            }
            else {
                if (i == 0) {
                    window.parentIsPermitted = true;
                }
                break;
            }
        }
    }
    catch (e)
    { window.parentIsPermitted = false; }

    if (window.DVCurWin.document.referrer.length == 0) {
        window.DVURL = window.DVCurWin.location;
    }
    else {
        if (window.parentIsPermitted) {
            window.DVURL = window.DVCurWin.location;
        }
        else {
                        window.DVURL = window.DVCurWin.document.referrer;
        }
    }

				var serverName = 'log40.doubleverify.com';		
		   
    var args = new Args();
    if (!args._isHttps) {
		var rand = Math.random();
							var frameUrl = 'http://' + serverName + '/visitor.aspx?query=' + escape(args._queryString) + '&num=700&srcurl=' + escape(DVURL) + '&random=' + escape(rand);
				var dv_el = document.createElement('span');
		dv_el.style.display = "none";
		dv_el.innerHTML = "<img width='0' height='0' style='width:0px;height:0px;display:none;' src='" + frameUrl + "' alt='clear pixel' >";
		document.body.insertBefore(dv_el, document.body.firstChild);
    }
    
        }
catch (ex) { } 
