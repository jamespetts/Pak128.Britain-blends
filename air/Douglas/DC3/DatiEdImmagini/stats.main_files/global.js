function helpDisplay(selection) {
if (selection=="1") {
alert("If you are looking for photos of a particular aircraft type, use this menu.\n\nYou can choose to view photos of a particular aircraft version or to view every aircraft type by a particular aircraft manufacturer. For instance, if you choose 'Airbus' in the menu you will be able to view all our photos of Airbus aircraft while if you choose the entry for 'Airbus A300' only that particular aircraft type will be displayed.\n\nThe list is far from complete, due to space constraints we have chosen to only include the aircraft of which we have the most photos. You will find an 'Other' selection as the last entry below the list of each aircraft manufacturer that includes aircraft not listed.\n\nAlso note that the aircraft you're looking for might not be listed under the manufacturer you think it would. Aircraft manufacturers are bought and merged all the time resulting in new names for old aircraft types. We have tried to list the aircraft under the manufacturer most people would assume to find them. For instance, the DC-9 is listed under 'McDonnell Douglas', not 'Douglas' or 'Boeing'.\n\nAt the bottom of the list you will find entries of smaller manufacturers of which we do not have that many photos. Note that the list is far from complete and if you do not find the manufacturer or aircraft type you're looking for, use the 'Keywords field', 'Advanced Search' or 'Photo Index' features linked to lower down on this page.");
}
else if(selection=="2") {
alert("If you are looking for photos of a particular airline, use this menu.\n\nThe airlines are listed alphabetically and only a subsection of airlines are included due to space constraints. If you cannot find the airline you're looking for, use the 'Keywords field', 'Advanced Search' or 'Photo Index' features linked to lower down on this page. We try to list every airline of which we have more than 20 photos in our database. If you find an airline that we have more than 20 photos of but that isn't listed, do not hesitate to contact us so that we can add it.\n\nThe alphabetic separation lines (for instance 'C-------------------') are there to make the list easier to use. You can select such a separation line and our search engine will display every airline starting with the letter of the separation line.\n\nAt the bottom of the list you will find military entries (only those we have the most photos of included) as well as aircraft manufacturer colors and 'Private', 'Untitled' and 'Unknown'.");
}
else if(selection=="3") {
alert("If you are looking for photos of a particular category, use this menu. As every other menu, this one can be used together with other menus such as the aircraft and airline menus, to produce the required search results. \n\nIf you find a photo in an incorrect category, please let us know via the 'Correct' link you will find beside each photo in our database.");
}
else if(selection=="4") {
alert("If you are looking for photos from a particular country or airport, use this menu.\n\nPlease note that we only list a small subset of all the countries and airports from where we have photos in our database. Only countries with more than 10 photos and airports with more than 50 photos in our database are listed. New entries are automatically added to this list as the database grows.\n\nThe last entry of each country list is 'Other', where you will find photos from other airports in that particular country.");
} 
else if(selection=="5") {
alert("The keyword field searches through the fields:\n\nPhoto ID, aircraft, aircraft generic, airline, location, photo date, country, remark, photographer, email, year, registration, cn and code.\n\n* The search engine is case insensitive. A search for Boeing and bOeInG will generate the same results\n\n* You can only search for full words. A search for Boeing will generate results while Boei will not (use Advanced Search to search for parts of words)\n\n* When searing for more than one keyword, the search engine will return entries that contain both words. A search for Boeing 747 (without quotes)\n   will therefore return entries that contain the word Boeing and the word 747 somewhere in its fields.\n\n* Use quotation marks to search for exact matches of two or more words. A search for \"Boeing 747\" will return entries that contain that exact sentence.\n\n* User a minus (-) to exclude words or sentences from your search. A search for Boeing -747 will display entries that contain the word Boeing but not the\n  word 747.You can also exclude sentences in quotes. For instance a search for Boeing 747 -\"747-400\" will show entries containing the words Boeing and\n  747 but exclude those that contain 747-400.\n\n* Photo ID numbers: You can use the keyword field to search for Airliners.net photo ID numbers. All Photo ID searches starts with ID :\n   * A search for ID 123456 will show the photo with that exact photo ID.\n   * A search for ID 12345, 1234, 123456 will show the three photos corresponding to those ID numbers.\n   * A search for ID > 123456 will show all photos with an ID higher than 123456.\n   * A search for ID < 123456 will show all photos with an ID lower than 123456.\n   * A search for ID 1234 - 54332 will show all photos between ID 1234 and ID 54332 (inclusive).\n   * You can not combine ID searches with normal keyword searches (use Advanced Search for that).\n\n* Use the Advanced Search (linked to at the bottom of the search engine) to use features like searching with wildcards etc.");
}
else if(selection=="6") {
alert("Use this menu to limit your search to either civil aircraft or military aircraft. The default setting is to include both military and civil aircraft.");
} 
else if(selection=="7") {
alert("Limit your search to no more results than you really need. Our database is huge and a search through it all is hard work for our already overloaded database server. Thank you!");
}
else if(selection=="8") {
alert("Photos for sale here refers ONLY to the photos you can buy on-line as a hard copy on paper for personal use. If you want to buy the rights to publish or use a photo for commercial use you should NOT check this box. In these cases you must contact the photographer of the photo you would like to use.");
}
else if(selection=="9") {
alert("You can limit your search to particular dates.\n\nBy choosing from the top entries under \"UPLOAD DATE\" you can display photos uploaded during the last day, week, month, half year and year. Note that this is the date the photos were uploaded to Airliners.net, not the date they were photographed.\n\nChoose entries under \"PHOTO DATE\" to view photos from a particular year or decade. Note that this is the date the photo was photographed, not when it was uploaded.");
}
}

/* Create a new XMLHttpRequest object to talk to the Web server */
var xmlHttp = false;
/*@cc_on @*/
/*@if (@_jscript_version >= 5)
try {
  xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
  try {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e2) {
    xmlHttp = false;
  }
}
@end @*/

if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
  xmlHttp = new XMLHttpRequest();
}

function callServer() {
  document.SearchEngine.truecount.value = false;
  document.SearchEngine.calccount.value = "Updating...";
  var aircraft_genericsearch = document.SearchEngine.aircraft_genericsearch.value;
  var airlinesearch = document.SearchEngine.airlinesearch.value;
  var specialsearch = document.SearchEngine.specialsearch.value;
  var countrysearch = document.SearchEngine.countrysearch.value;
  var keywords =      document.SearchEngine.keywords.value;
  var range =         document.SearchEngine.range.value;
  var daterange =     document.SearchEngine.daterange.value;
  var forsale =       document.SearchEngine.forsale.checked;

  if ((airlinesearch == null) || (airlinesearch == "")) { 
   var airlinesearch = document.SearchEngine.airlinesearch.options[document.SearchEngine.airlinesearch.options.selectedIndex].text;
  }
  if ((countrysearch == null) || (countrysearch == "")) { 
   var countrysearch = document.SearchEngine.countrysearch.options[document.SearchEngine.countrysearch.options.selectedIndex].text;
  }
  if ((daterange == null) || (daterange == "")) { 
   var daterange = document.SearchEngine.daterange.options[document.SearchEngine.daterange.options.selectedIndex].text;
  }

  // Build the URL to connect to
  var url = "/global/getHits.inc?aircraft_genericsearch=" + escape(aircraft_genericsearch) + "&airlinesearch=" + escape(airlinesearch) + "&specialsearch=" + escape(specialsearch) + "&countrysearch=" + escape(countrysearch) + "&daterange=" + escape(daterange) + "&range=" + escape(range) + "&keywords=" + escape(keywords) + "&forsale=" + escape(forsale);

  // Open a connection to the server
  xmlHttp.open("GET", url, true);

  // Setup a function for the server to run when its done
  xmlHttp.onreadystatechange = updatePage;

  // Send the request
  xmlHttp.send(null);
}


function highlightSearchTab(e) {
	for(var x=1;x<5;x++) {
		var tabName = "searchTab"+x;
		if (tabName==e) {
			document.getElementById(tabName).className = "selected";
		} else {
			document.getElementById(tabName).className = "unselected";
		}
		if (e=="searchTab1") {
			document.getElementById("searchform").action="/search/photo.search";
		} else if (e=="searchTab2") {
			document.getElementById("searchform").action="/aviation-forums/general_aviation/search.main";
		} else if (e=="searchTab3") {
			document.getElementById("searchform").action="/aviation-news/";
		} else if (e=="searchTab4") {
			document.getElementById("searchform").action="http://www.google.com/cse";
		}
	}
}
function changeCriteria() {
	if (document.getElementById("searchTab2").className == "selected") {
		document.getElementById("search").value = document.getElementById("q").value;
	} else if (document.getElementById("searchTab3").className == "selected") {
		document.getElementById("sheadline").value = document.getElementById("q").value;
	} else if (document.getElementById("searchTab4").className == "selected") {
	
		
	} else {
		document.getElementById("search").value ="";
		document.getElementById("sheadline").value ="";
		if (document.getElementById("q").value =="") {
			document.getElementById("searchform").action="/search/index.main";
		}
	}
}
function MM_findObj(n, d) { //v4.01
	var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
		d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
		if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
		for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
		if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
	var i,p,v,obj,s,args=MM_showHideLayers.arguments;
	for (i=0; i<(args.length-2); i+=3) 
		if ((obj=MM_findObj(args[i]))!=null) { 
			v=args[i+2];	
			if (obj.style) { 
				v=(v=='show')?'block':(v=='hide')?'none':v; 
				obj.style.display=v;			
				if (obj.id=="Layer1" && v=='block') {
					x=MM_findObj("link1");
					x.className='selected';
					y=MM_findObj("link2");
					y.className='unselected';
				}
				if (obj.id=="Layer2" && v=='block') {
					x=MM_findObj("link2");
					x.className='selected';
					y=MM_findObj("link1");
					y.className='unselected';
				}
			}
	}
}
function view_new_photos(newphotos,nrs) {
var win3=window.open ('/view_new_photos.main?newphotos='+newphotos+'&nrs='+nrs,'newphotos','toolbar=0,location=0,frame=0,directories=0,status=0,menubar=0,scrollbars=1,resizable=0,copyhistory=0,width=280,height=200')
win3.creator=self
}

jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var loc = document.location.href;
        var slash_pos = loc.indexOf("/",7);
        if (slash_pos>-1) {
			var domain_name = loc.substring(7, slash_pos);
		} else {
			var domain_name = loc.substring(7);
		}        
        var domain =  '; domain=' + (domain_name);
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

jQuery.fn.log = function (msg, priority) {
    return this;
};
jQuery.log = function (msg, priority) {
    return;
};


$(function () {
    $(".color").click(function() {
        $("body").removeClass();
        if ($(this).hasClass("white")) {
            $("body").addClass("white");
            $.cookie("color", "white",{ path: '/', expires: 1000000 }); 
        } else if ($(this).hasClass("classic")) {
            $("body").addClass("classic");
            $.cookie("color", "classic",{ path: '/', expires: 1000000 }); 
        } else if ($(this).hasClass("purple")) {
            $("body").addClass("purple");
            $.cookie("color", "purple",{ path: '/', expires: 1000000 }); 
        } else if ($(this).hasClass("blue")) {
            $("body").addClass("blue");
            $.cookie("color", "blue",{ path: '/', expires: 1000000 }); 
        }
    });
});

