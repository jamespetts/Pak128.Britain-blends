// -----------------------------------------------------------------------------
// Globals
// Major version of Flash required
var TF_requiredMajorVersion = 8;
// Minor version of Flash required
var TF_requiredMinorVersion = 0;
// Revision of Flash required
var TF_requiredRevision = 0;
// -----------------------------------------------------------------------------

function et_FEVLL9(id) {
	if(typeof(getVariableValue(id, "tf_VASTXmlFEV")) != "undefined" && getVariableValue(id, "tf_VASTXmlFEV") != "") {
		tf_FEVLL9(id);
	} else {
		et_sendFEVDataToFlash(id);
	}
}

function et_FEVflashToJS9(id, status, xmls) {
	if(status == 1) {
		if (typeof(getVariableValue(id, "tf_FEVTestMode")) != "undefined" && getVariableValue(id, "tf_FEVTestMode") == true) {
			if(typeof(getVariableValue(id, "tf_xmlsLoadedFEV_test")) != "undefined") {
				et_firePixelFEV6(id, getVariableValue(id, "tf_xmlsLoadedFEV_test") + new Date().getTime());
			}
		}
		tf_fevObj = new tf_FEV3_VAST2(xmls, getVariableValue(id, "tf_width"), getVariableValue(id, "tf_height"), id);
		setVariableValue(id, "tf_fevObj", tf_fevObj);
		et_sendFEVDataToFlash(id);
	} else {
		if (typeof(getVariableValue(id, "tf_FEVTestMode")) != "undefined" && getVariableValue(id, "tf_FEVTestMode") == true) {
			if(typeof(getVariableValue(id, "tf_error_test")) != "undefined") {
				et_firePixelFEV6(id, getVariableValue(id, "tf_error_test") + new Date().getTime() + "error=" + status);
			}
		}
	}
}

function et_FEVDataSent5(id) {
	if(typeof(getVariableValue(id, "tf_VASTXmlFEV")) != "undefined" && getVariableValue(id, "tf_VASTXmlFEV") != "") {
		var tf_fevObj = getVariableValue(id, "tf_fevObj");
		if(typeof(tf_fevObj.customObj.Root.Banner.Flash) != "undefined") {
			document.getElementById("TFFEVBannerDiv" + id).innerHTML = getVariableValue(id, "VASTFlash").replace("tf_flashfile.swf", tf_fevObj.customObj.Root.Banner.Flash.URL["#text"]).replace("tf_flashVars", tf_fevObj.customObj.Root.Banner.Flash.AdParameters["#text"]);
			window.setTimeout("tf_fireImpressionPixelsFEV7('" + id + "', 'Flash');", 1000);
		} else if(typeof(tf_fevObj.customObj.Root.Banner.Image) != "undefined") {
			document.getElementById("TFFEVBannerDiv" + id).innerHTML = getVariableValue(id, "VASTImage").replace("tf_imagefile", tf_fevObj.customObj.Root.Banner.Image.URL["#text"]);
			window.setTimeout("tf_fireImpressionPixelsFEV7('" + id + "', 'Image');", 1000);
		}
		document.getElementById("TFFEVBannerDiv" + id).style.display = "";
		window.setTimeout("tf_FEVTeaserAnimate('" + id + "')", 100);
	}
}

function et_sendFEVDataToFlash(id) {
	try {
		var flash_object = tf_thisMovie("TFclick" + id);
		if(flash_object) {
			flash_object.makeLocalConnection(et_flashfileFloating, getVariableValue(id, "tf_fevObj").customXml, et_widthFloating, et_heightFloating);
		}
	} catch (ex) {
	}
}

function et_fireEngagementPixelFEV7(id, type) {
	tf_fireEngagementPixelFEV7(id, type);
}

var TFclick = "TFclick" + tf_id;
//Copyright 2006 Adobe Systems, Inc. All rights reserved.
var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var tf_agt = navigator.userAgent.toLowerCase();
var is_mozilla = ((tf_agt.indexOf('mozilla') != -1) && (tf_agt.indexOf('spoofer') == -1) && (tf_agt.indexOf('compatible') == -1) && (tf_agt.indexOf('opera') == -1) && (tf_agt.indexOf('webtv') == -1) && (tf_agt.indexOf('hotjava') == -1));
var totalVideos = 1;

document.write("<!--[if IE 7]><script type='text/javascript'>var tf_isIE7 = true;</script><![endif]-->");

if (tf_floatingAdType == "FEV" || tf_floatingAdType == "InterstitialFEV") {
	var params = tf_getParams(window.location.href, true);
	var connectionName = params.connectionName;
	if(typeof(connectionName) != "undefined") {
		tf_id = params.index;
		tf_addFlashVar("connName", connectionName);
		tf_addFlashVar("prefixMode", "ET");
		tf_addFlashVar("tf_commDataSent", "_FEVDataSent5");
		tf_addFlashVarFloating("prefixMode", "ET");
		var et_flashfileFloating = tf_flashfileFloating;
		var et_widthFloating = tf_widthFloating;
		var et_heightFloating = tf_heightFloating;
	}
	var tf_FEVIndex = 0;
	if(typeof(tf_isFEVHosting) != "undefined" && tf_isFEVHosting == true) {
		tf_FEVIndex = 1;
	} else {
		tf_isFEVHosting = false;
	}
	if(typeof(tf_FEVData) != "undefined") {
		setVariableValue(tf_id, "Data", tf_FEVData);
	}
	if(typeof(tf_bandWidthCheckTeaser) == "undefined") {
		tf_bandWidthCheckTeaser = false;
	}
	if(typeof(tf_bandWidthCheckMainFEV) != "undefined") {
		setVariableValue(tf_id, "tf_bandWidthCheckMainFEV", tf_bandWidthCheckMainFEV);
	} else {
		setVariableValue(tf_id, "tf_bandWidthCheckMainFEV", true);
	}
	if(typeof(tf_minPlayedForSurvey) == "undefined") {
		tf_minPlayedForSurvey = "FirstQuartile";
	}
	if(typeof(tf_surveyOnCompletion) == "undefined") {
		tf_surveyOnCompletion = true;
	}
	setVariableValue(tf_id, "tf_cookieFlash", TF_AC_AddExtension(tf_cookieFlash, ".swf"));
	setVariableValue(tf_id, "tf_isFEVHosting", tf_isFEVHosting);
	setVariableValue(tf_id, "tf_FEVIndex", tf_FEVIndex);
	setVariableValue(tf_id, "tf_FEVHosting", tf_FEVHosting);
	setVariableValue(tf_id, "firstTime", true);
	setVariableValue(tf_id, "tf_minPlayedForSurvey", tf_minPlayedForSurvey);
	setVariableValue(tf_id, "tf_surveyOnCompletion", tf_surveyOnCompletion);
	if(typeof(tf_FEVDisableCache) != "undefined") {
		setVariableValue(tf_id, "disableCache", tf_FEVDisableCache);
	} else {
		setVariableValue(tf_id, "disableCache", false);
	}

	var networks = null;
	for(var i = 0; i < tf_FEVSocialNetworks.length; i++ ) {
		var network = new Object();
		if(networks == null) {
			networks = network;
		} else if(typeof(networks.length) == "number") {
			networks.push(network);
		} else {
			networks = [networks];
			networks.push(network);
		}
		tf_insertTextNodeFEV2(tf_id, network, "Name", tf_FEVSocialNetworks[i]);
		tf_insertTextNodeFEV2(tf_id, network, "FilePath", TF_AC_AddExtension(eval("tf_FEVSocialNetworks_" + tf_FEVSocialNetworks[i] + "_FilePath"), ".swf"));

		var varname = "tf_FEVSocialNetworks_" + tf_FEVSocialNetworks[i] + "_Fields";
		if(eval("typeof(" + varname + ")") != "undefined") {
			var FEVFields = eval(varname);
			for (var m in FEVFields)
			{
				tf_insertTextNodeFEV2(tf_id, network, "Field", FEVFields[m]).type = m;
			}
			eval(varname + " = undefined");
			if(typeof(FEVFields.title) == "undefined") {
				tf_insertTextNodeFEV2(tf_id, network, "Field", "Checkout FireFly Video").type = "title";
			}
			if(typeof(FEVFields.message) == "undefined") {
				tf_insertTextNodeFEV2(tf_id, network, "Field", "Checkout FireFly Video").type = "message";
			}
			if(typeof(FEVFields.hash) == "undefined") {
				tf_insertTextNodeFEV2(tf_id, network, "Field", "#fireflyvideo").type = "hash";
			}
		} else {
			tf_insertTextNodeFEV2(tf_id, network, "Field", "Checkout FireFly Video").type = "title";
			tf_insertTextNodeFEV2(tf_id, network, "Field", "Checkout FireFly Video").type = "message";
			tf_insertTextNodeFEV2(tf_id, network, "Field", "#fireflyvideo").type = "hash";
		}

		var j = 0;
		while (true) {
			var varname = "tf_FEVSocialNetworks_" + tf_FEVSocialNetworks[i] + "_Tracking";
			varname += ((j != 0)?j:"");
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, network, "Track", tf_FEVGetVariableValue(eval(varname), tf_FEVIndex));
				eval(varname + " = undefined");
			} else {
				break;
			}
			j++;
		}
		if (typeof(tf_FEVTestMode) != "undefined" && tf_FEVTestMode == true) {
			var varname = "tf_FEVSocialNetworks_" + tf_FEVSocialNetworks[i] + "_Tracking_test";
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, network, "Track", tf_FEVGetVariableValue(eval(varname), tf_FEVIndex)).mode = "test";
				eval(varname + " = undefined");
			}
		}
	}

	if(typeof(tf_FEVMailServer) != "undefined") {
		var network = new Object();
		if(networks == null) {
			networks = network;
		} else if(typeof(networks.length) == "number") {
			networks.push(network);
		} else {
			networks = [networks];
			networks.push(network);
		}
		tf_insertTextNodeFEV2(tf_id, network, "Name", "Email");
		tf_insertTextNodeFEV2(tf_id, network, "FilePath", TF_AC_AddExtension(tf_FEVMailFilePath, ".swf"));
		tf_insertTextNodeFEV2(tf_id, network, "Field", tf_FEVMailServer).type = "submitUrl";
		tf_insertTextNodeFEV2(tf_id, network, "Field", tf_FEVMailCaptchaUrl).type = "captchaUrl";
		if(typeof(tf_FEVMailSubject) == "undefined") {
			tf_FEVMailSubject = "sent you a firefly video message!";
		}
		if(typeof(tf_FEVMailBody) == "undefined") {
			tf_FEVMailBody = "sent you a firefly video message!";
		}
		if(typeof(tf_FEVMailMessage) == "undefined") {
			tf_FEVMailMessage = "Check this out!";
		}
		tf_insertTextNodeFEV2(tf_id, network, "Field", tf_FEVMailSubject).type = "subject";
		tf_insertTextNodeFEV2(tf_id, network, "Field", tf_FEVMailBody).type = "body";
		tf_insertTextNodeFEV2(tf_id, network, "Field", tf_FEVMailMessage).type = "message";
		tf_insertTextNodeFEV2(tf_id, network, "Field", tf_FEVMailCaptchaUrl).type = "captchaUrl";
		tf_insertTextNodeFEV2(tf_id, network, "Field", tf_FEVMailLogo).type = "logo";
		tf_insertTextNodeFEV2(tf_id, network, "Field", tf_FEVMailShareEmailAddress).type = "shareEmailAddress";
		var j = 0;
		while (true) {
			var varname = "tf_FEVMailTracking" + ((j != 0)?j:"");
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, network, "Track", tf_FEVGetVariableValue(eval(varname), tf_FEVIndex));
				eval(varname + " = undefined");
			} else {
				break;
			}
			j++;
		}
		if (typeof(tf_FEVTestMode) != "undefined" && tf_FEVTestMode == true) {
			if(typeof(tf_FEVMailTracking_test) != "undefined") {
				tf_insertTextNodeFEV2(tf_id, network, "Track", tf_FEVGetVariableValue(tf_FEVMailTracking_test, tf_FEVIndex)).mode = "test";
				tf_FEVMailTracking_test = undefined;
			}
		}
	}

	if(networks != null) {
		setVariableValue(tf_id, "SocialNetworks", networks);
	}

	if(typeof(tf_surveyEnabled) == "undefined") {
		tf_surveyEnabled = false;
	}

	var tf_survey = new Object();
	tf_survey.enabled = tf_surveyEnabled.toString();

	if(tf_surveyEnabled == true) {
		if(typeof(tf_surveyType) == "undefined") {
			tf_surveyType = "TF";
		}
		if(typeof(tf_surveyLanguage) == "undefined") {
			tf_surveyLanguage = "English";
		}
		if(typeof(tf_surveyButtonYesText) == "undefined") {
			tf_surveyButtonYesText = "Yes";
		}
		if(typeof(tf_surveyButtonNoText) == "undefined") {
			tf_surveyButtonNoText = "No";
		}
		if(typeof(tf_surveyButtonSubmitText) == "undefined") {
			tf_surveyButtonSubmitText = "Submit";
		}
		tf_survey.type = tf_surveyType;
		tf_survey.language = tf_surveyLanguage;
		tf_survey[tf_surveyType] = new Object();
		if(typeof(window["tf_survey_" + tf_surveyType]) != "undefined") {
			var tempVar = window["tf_survey_" + tf_surveyType];
			window["tf_survey_" + tf_surveyType] = undefined;
			for(var m in tempVar) {
				tf_insertTextNodeFEV2(tf_id, tf_survey[tf_surveyType], m, tempVar[m]);
			}
		}
		tf_insertTextNodeFEV2(tf_id, tf_survey, "ButtonText.Yes", tf_surveyButtonYesText);
		tf_insertTextNodeFEV2(tf_id, tf_survey, "ButtonText.No", tf_surveyButtonNoText);
		tf_insertTextNodeFEV2(tf_id, tf_survey, "ButtonText.Submit", tf_surveyButtonSubmitText);
		if(typeof(tf_surveyPermissionEnabled) == "undefined") {
			tf_surveyPermissionEnabled = true;
		}
		tf_survey.permissionEnabled = tf_surveyPermissionEnabled.toString();
		if(tf_surveyType != "TF" && typeof(tf_surveyId) == "undefined") {
			tf_surveyId = new Date().getTime();
		}
		tf_survey.id = tf_surveyId.toString();
		setVariableValue(tf_id, "surveyId", tf_surveyId);
		if(tf_surveyType == "TF") {
		tf_insertTextNodeFEV2(tf_id, tf_survey, "Title", tf_surveyTitle);
			if(tf_surveyPermissionEnabled == true) {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "PermissionWinTitle", tf_surveypermissionWinTitle);
			}
		}
		if(typeof(tf_surveyParameter) == "undefined") {
			tf_surveyParameter = "@ANSWER@";
		}
		tf_survey.surveyParameter = tf_surveyParameter;
		if(tf_surveyType == "TF") {
			tf_surveyFilePath = TF_AC_AddExtension(tf_surveyFilePath, ".swf");
		}
		tf_insertTextNodeFEV2(tf_id, tf_survey, "FilePath", tf_surveyFilePath);

		i = 0;
		while (true) {
			var varname = "tf_surveyPermissionPixel";
			varname += ((i != 0)?i:"");
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Permission.URL", tf_FEVGetVariableValue(eval(varname), tf_FEVIndex));
				eval(varname + " = undefined");
			} else {
				break;
			}
			i++;
		}

		i = 0;
		while (true) {
			var varname = "tf_surveyRejectPixel";
			varname += ((i != 0)?i:"");
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Reject.URL", tf_FEVGetVariableValue(eval(varname), tf_FEVIndex));
				eval(varname + " = undefined");
			} else {
				break;
			}
			i++;
		}

		i = 0;
		while (true) {
			var varname = "tf_surveyOpenPixel";
			varname += ((i != 0)?i:"");
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Open.URL", tf_FEVGetVariableValue(eval(varname), tf_FEVIndex));
				eval(varname + " = undefined");
			} else {
				break;
			}
			i++;
		}

		i = 0;
		while (true) {
			var varname = "tf_surveyClosePixel";
			varname += ((i != 0)?i:"");
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Close.URL", tf_FEVGetVariableValue(eval(varname), tf_FEVIndex));
				eval(varname + " = undefined");
			} else {
				break;
			}
			i++;
		}

		tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Submit.URL", tf_FEVGetVariableValue(tf_surveySubmitPixel, tf_FEVIndex));
		i = 1;
		while (true) {
			var varname = "tf_surveySubmitPixel";
			varname += ((i != 0)?i:"");
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Submit.URL", tf_FEVGetVariableValue(eval(varname), tf_FEVIndex));
				eval(varname + " = undefined");
			} else {
				break;
			}
			i++;
		}

		if (typeof(tf_FEVTestMode) != "undefined" && tf_FEVTestMode == true) {
			if(typeof(tf_surveyPermissionPixel_test) != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Permission.URL", tf_FEVGetVariableValue(tf_surveyPermissionPixel_test, tf_FEVIndex)).mode = "test";
				tf_surveyPermissionPixel_test = undefined;
			}

			if(typeof(tf_surveyRejectPixel_test) != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Reject.URL", tf_FEVGetVariableValue(tf_surveyRejectPixel_test, tf_FEVIndex)).mode = "test";
				tf_surveyRejectPixel_test = undefined;
			}

			if(typeof(tf_surveyOpenPixel_test) != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Open.URL", tf_FEVGetVariableValue(tf_surveyOpenPixel_test, tf_FEVIndex)).mode = "test";
				tf_surveyOpenPixel_test = undefined;
			}

			if(typeof(tf_surveyClosePixel_test) != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Close.URL", tf_FEVGetVariableValue(tf_surveyClosePixel_test, tf_FEVIndex)).mode = "test";
				tf_surveyClosePixel_test = undefined;
			}

			if(typeof(tf_surveySubmitPixel_test) != "undefined") {
				tf_insertTextNodeFEV2(tf_id, tf_survey, "Tracking.Submit.URL", tf_FEVGetVariableValue(tf_surveySubmitPixel_test, tf_FEVIndex)).mode = "test";
				tf_surveySubmitPixel_test = undefined;
			}
		}

		tf_questions = new Object();
		if(typeof(tf_surveyQuestionCount) != "undefined") {
			tf_questions.count = tf_surveyQuestionCount.toString();
		}
		tf_survey.Questions = tf_questions;
		i = 0;
		while (true) {
			var varname = "tf_surveyQuestion";
			varname += ((i != 0)?i:"");
			if(eval("typeof(" + varname + ")") != "undefined") {
				var tf_question = new Object();
				if(i == 0) {
					tf_questions.Question = tf_question;
				} else if(i == 1) {
					tf_questions.Question = [tf_questions.Question, tf_question];
				} else {
					tf_questions.Question.push(tf_question);
				}
				tf_insertTextNodeFEV2(tf_id, tf_question, "Text", eval(varname));
				eval(varname + " = undefined");
				tf_question.Type = eval(varname + "Type");
				eval(varname + "Type = undefined");
				tf_question.Id = (eval(varname + "Id")).toString();
				eval(varname + "Id = undefined");
				var j = 0;
				while(true) {
					var varname2 = varname + "_Answer";
					varname2 += ((j != 0)?j:"");
					if(eval("typeof(" + varname2 + ")") != "undefined") {
						var tf_answer = tf_insertTextNodeFEV2(tf_id, tf_question, "Answer", eval(varname2));
						tf_answer.Id = (eval(varname2 + "Id")).toString();
						eval(varname2 + " = undefined");
						eval(varname2 + "Id = undefined");
					} else {
						break;
					}
					j++;
				}
			} else {
				break;
			}
			i++;
		}
	}
	
	setVariableValue(tf_id, "Survey", tf_survey);

	var tf_FEVFrames = new Array();
	var i = 0;
	while(typeof(window["tf_FEViWin" + ((i == 0)? "" : i)]) != "undefined") {
		var tf_FEVFrame = new Object();
		tf_FEVFrame.id = "FEViWin_" + tf_id + "_" + i;
		tf_FEVFrame.src = new Object();
		tf_FEVFrame.src["#text"] = window["tf_FEViWin" + ((i == 0)? "" : i)];
		tf_FEVFrame.src.tf_ignore = "1";
		tf_FEVFrames.push(tf_FEVFrame);
		window["tf_FEViWin" + ((i == 0)? "" : i)] = undefined;
		i++;
	}

	setVariableValue(tf_id, "Frames", tf_FEVFrames);

	if(tf_isFEVHosting == false) {
		if(typeof(tf_impression) != "undefined") {
			tf_firePixelFEV6(tf_id, tf_FEVGetVariableValue(tf_impression, tf_FEVIndex), false, 0, true);
			tf_impression = undefined;
		}
		var i = 1;
		while (eval("typeof(tf_impression" + i + ")") != "undefined") {
			tf_firePixelFEV6(tf_id, tf_FEVGetVariableValue(eval("tf_impression" + i), tf_FEVIndex), false, 0, true);
			eval("tf_impression" + i + " = undefined");
			i++;
		}

		if (typeof(tf_FEVTestMode) != "undefined" && tf_FEVTestMode == true) {
			if(typeof(tf_impression_test) != "undefined") {
				tf_firePixelFEV6(tf_id, tf_FEVGetVariableValue(tf_impression_test, tf_FEVIndex) + new Date().getTime(), false, 0, true);
				tf_impression_test = undefined;
			}
		}
	} else {
		if(typeof(tf_hosting_impression) != "undefined") {
			tf_firePixelFEV6(tf_id, tf_FEVGetVariableValue(tf_hosting_impression, tf_FEVIndex), false, 0, true);
			tf_hosting_impression = undefined;
		}
		var i = 1;
		while (eval("typeof(tf_hosting_impression" + i + ")") != "undefined") {
			tf_firePixelFEV6(tf_id, tf_FEVGetVariableValue(eval("tf_hosting_impression" + i), tf_FEVIndex), false, 0, true);
			eval("tf_hosting_impression" + i + " = undefined");
			i++;
		}

		if (typeof(tf_FEVTestMode) != "undefined" && tf_FEVTestMode == true) {
			if(typeof(tf_hosting_impression_test) != "undefined") {
				tf_firePixelFEV6(tf_id, tf_FEVGetVariableValue(tf_hosting_impression_test, tf_FEVIndex) + new Date().getTime(), false, 0, true);
				tf_hosting_impression_test = undefined;
			}
		}
	}

	var videoEvents = ["creativeView", "start", "midpoint", "firstQuartile", "thirdQuartile", "complete", "mute", "unmute", "pause", "rewind", "resume", "replay", "fullscreen", "expand", "collapse", "acceptInvitation", "close"];
	var totalClickTags = 1;
	if (typeof(tf_VASTXmlFEV) == "undefined" || tf_VASTXmlFEV == "") {
		while (eval("typeof(tf_FEVVideoFile" + totalVideos + ")") != "undefined") {
			totalVideos++;
		}
		while (eval("typeof(tf_clickTag" + totalClickTags + ")") != "undefined") {
			totalClickTags++;
		}
	} else {
		tf_VASTXmlFEV = tf_FEVGetVariableValue(tf_VASTXmlFEV, tf_FEVIndex);
		var tempNumber = 1;
		var params = tf_getParams(tf_VASTXmlFEV, true);
		if(typeof(params.LR_CREATIVE_ID) != "undefined") {
			tempNumber = params.LR_CREATIVE_ID.split(",").length;
		}
		var i = 1;
		while (eval("typeof(tf_VASTXmlFEV" + i + ")") != "undefined") {
			eval("tf_VASTXmlFEV" + i + " = tf_FEVGetVariableValue(tf_VASTXmlFEV" + i + ", tf_FEVIndex)");
			params = tf_getParams(eval("tf_VASTXmlFEV" + i), true);
			if(typeof(params.LR_CREATIVE_ID) != "undefined") {
				tempNumber += params.LR_CREATIVE_ID.split(",").length;
			} else {
				tempNumber++;
			}
			i++;
		}
		if(typeof(tf_ignoreVASTVideos) != "undefined" && tf_ignoreVASTVideos == true) {
			while (eval("typeof(tf_FEVVideoFile" + totalVideos + ")") != "undefined") {
				totalVideos++;
			}
		} else {
			totalVideos = tempNumber;
		}
		if(typeof(tf_ignoreVASTClicks) != "undefined" && tf_ignoreVASTClicks == true) {
			while (eval("typeof(tf_clickTag" + totalClickTags + ")") != "undefined") {
				totalClickTags++;
			}
		} else {
			totalClickTags = tempNumber;
		}
	}
	var videoTrackings = new Array();
	var varName;
	for (var i = 0; i < totalVideos; i++) {
		videoTrackings[i] = new Object();
		if(typeof(tf_ignoreVASTVideos) != "undefined" && tf_ignoreVASTVideos == true) {
			if(i == 0) {
				tf_insertTextNodeFEV2(tf_id, videoTrackings[0], "LocationUrl", tf_FEVVideoFile);
			} else {
				tf_insertTextNodeFEV2(tf_id, videoTrackings[i], "LocationUrl", eval("tf_FEVVideoFile" + i));
			}
		}
		for (var k = 0; k < videoEvents.length; k++) {
			var j = 0;
			while (true) {
				varName = "tf_video" + ((i != 0)?i:"") + "_";
				varName += videoEvents[k] + ((j != 0)?j:"");
				if (eval("typeof(" + varName + ")") != "undefined") {
					var parts = videoEvents[k].split("");
					parts[0] = parts[0].toString().toUpperCase().split("")[0];
					var myEvent = parts.join("");
					tf_insertTextNodeFEV2(tf_id, videoTrackings[i], myEvent + ".URL", tf_FEVGetVariableValue(eval(varName), tf_FEVIndex));
					eval(varName + " = undefined");
				} else {
					break;
				}
				j++;
			}
			if(typeof(tf_FEVTestMode) != "undefined" && tf_FEVTestMode == true) {
				varName = "tf_video" + ((i != 0)?i:"") + "_";
				varName += videoEvents[k] + "_test";
				if (eval("typeof(" + varName + ")") != "undefined") {
					var parts = videoEvents[k].split("");
					parts[0] = parts[0].toString().toUpperCase().split("")[0];
					var myEvent = parts.join("");
					tf_insertTextNodeFEV2(tf_id, videoTrackings[i], myEvent + ".URL", tf_FEVGetVariableValue(eval(varName), tf_FEVIndex)).mode = "test";
					eval(varName + " = undefined");
				}
			}
		}
	}
	setVariableValue(tf_id, "videoTrackings", videoTrackings);

	var clickTrackings = new Array();
	var varName;
	for (var i = 0; i < totalClickTags; i++) {
		clickTrackings[i] = new Object();
		if(typeof(tf_ignoreVASTClicks) != "undefined" && tf_ignoreVASTClicks == true) {
			if(i == 0) {
				tf_insertTextNodeFEV2(tf_id, clickTrackings[0], "URL", tf_clickTag);
			} else {
				tf_insertTextNodeFEV2(tf_id, clickTrackings[i], "URL", eval("tf_clickTag" + i));
			}
		}
		var j = 0;
		while (true) {
			varName = "tf_clickTag" + ((i != 0)?i:"") + "_";
			varName += "clickTracking" + ((j != 0)?j:"");
			if (eval("typeof(" + varName + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, clickTrackings[i], "Track", tf_FEVGetVariableValue(eval(varName), tf_FEVIndex));
				eval(varName + " = undefined");
			} else {
				break;
			}
			j++;
		}
		if (typeof(tf_FEVTestMode) != "undefined" && tf_FEVTestMode == true) {
			varName = "tf_clickTag" + ((i != 0)?i:"") + "_";
			varName += "clickTracking_test";
			if (eval("typeof(" + varName + ")") != "undefined") {
				tf_insertTextNodeFEV2(tf_id, clickTrackings[i], "Track", tf_FEVGetVariableValue(eval(varName), tf_FEVIndex)).mode = "test";
				eval(varName + " = undefined");
			}
		}
	}
	setVariableValue(tf_id, "clickTrackings", clickTrackings);
	if(typeof(tf_ignoreVASTBanner) != "undefined" && typeof(tf_flashfile) != "undefined") {
		setVariableValue(tf_id, "tf_ignoreVASTBanner", tf_ignoreVASTBanner);
		setVariableValue(tf_id, "tf_imagefile", tf_imagefile);
		setVariableValue(tf_id, "tf_clickTag", tf_clickTag);
	}
}

setVariableValue(tf_id, "tf_widthFloating", tf_widthFloating);
setVariableValue(tf_id, "tf_heightFloating", tf_heightFloating);

function tf_FEVGetVariableValue(variable, index) {
	if(typeof(variable) == "string") {
		return variable;
	}
	return variable[index];
}

function tf_FEV8(xmls, width, height, id) {
	this.xmls = xmls;
	var obj = null;
	var extraObjs = [];
	if(xmls != null) {
		obj = xmlToObject(xmls[0]);
		for (var i = 1; i < xmls.length; i++) {
			extraObjs.push(xmlToObject(xmls[i]));
		}
	}

	var allExtraObjs = [];
	var parser = parserTF1;
	if (obj != null) {
		obj = getProperty(getRootNode(obj), "Ad", {});
		if(typeof(obj.length) != "undefined") {
			for (var i = 1; i < obj.length; i++) {
				var adSystemType = getProperty(obj[i], "InLine.AdSystem");
				if(adSystemType == null || typeof(adSystemType) == "undefined" || adSystemType["#text"] != "LiveRail") {
					break;
				}
				allExtraObjs.push(obj[i]);
			}
			obj = obj[0];
		}
		obj = getProperty(obj, "InLine");
		parser = parserVersion1;
		if (getProperty(obj, "Creatives") != null) {
			parser = parserVersion2;
		}
	}

	this.customObj = new Object();
	this.customObj.Root = parser(id, obj, width, height);

	for (var i = 0; i < extraObjs.length; i++) {
		extraObjs[i] = getProperty(getRootNode(extraObjs[i]), "Ad", {});
		if(typeof(extraObjs[i].length) != "undefined") {
			for (var j = 0; j < extraObjs[i].length; j++) {
				if(j != 0) {
					var adSystemType = getProperty(extraObjs[i][j], "InLine.AdSystem");
					if(adSystemType == null || typeof(adSystemType) == "undefined" || adSystemType["#text"] != "LiveRail") {
						break;
					}
				}
				allExtraObjs.push(extraObjs[i][j]);
			}
		} else {
			allExtraObjs.push(extraObjs[i]);
		}
	}

	for (var i = 0; i < allExtraObjs.length; i++) {
		allExtraObjs[i] = getProperty(allExtraObjs[i], "InLine");
		parser = parserVersion1;
		if (getProperty(allExtraObjs[i], "Creatives") != null) {
			parser = parserVersion2;
		}
		allExtraObjs[i] = parser(allExtraObjs[i], width, height);
		var myid = i + 2;

		var clickObj = getProperty(allExtraObjs[i], "ClickTag");
		clickObj.id = myid.toString();
		if (typeof(this.customObj.Root.ClickTag.length) == "undefined") {
			this.customObj.Root.ClickTag = [this.customObj.Root.ClickTag];
		}
		this.customObj.Root.ClickTag.push(clickObj);

		var videoObj = getProperty(allExtraObjs[i], "Video");
		videoObj.id = myid.toString();
		if (typeof(this.customObj.Root.Video.length) == "undefined") {
			this.customObj.Root.Video = [this.customObj.Root.Video];
		}
		this.customObj.Root.Video.push(videoObj);

		var array = getProperty(this.customObj.Root, "Impression.URL", {});
		if(array == null) {
			delete this.customObj.Root.Impression;
		}
		array = getProperty(allExtraObjs[i], "Impression.URL", {});
		if(array != null) {
			if (typeof(array.length) == "number") {
				for (var j = 0; j < array.length; j++) {
					tf_insertTextNodeFEV2(id, this.customObj.Root, "Impression.URL", array[j]);
				}
			} else {
				tf_insertTextNodeFEV2(id, this.customObj.Root, "Impression.URL", array);
			}
		}
		this.customObj.Root.Impression.tf_ignore = "1";
	}

	var videoTrackings = getVariableValue(id, "videoTrackings");
	var totalVids = 1;
	if (typeof(this.customObj.Root.Video.length) != "undefined") {
		totalVids = this.customObj.Root.Video.length;
	}

	var tempNode;
	var tf_minPlayedForSurvey = getVariableValue(id, "tf_minPlayedForSurvey");
	var tf_surveyOnCompletion = getVariableValue(id, "tf_surveyOnCompletion");
	for (var i = 0; i < videoTrackings.length; i++) {
		var videoObj = this.customObj.Root.Video;
		if (totalVids != 1 && i < videoObj.length) {
			videoObj = videoObj[i];
		} else if(i != 0){
			if(typeof(videoObj.length) == "undefined") {
				this.customObj.Root.Video = [videoObj];
				videoObj = this.customObj.Root.Video;
			}
			var newVideoObj = videoObj[i];
			if(typeof(newVideoObj) == "undefined") {
				newVideoObj = new Object();
				var myid = i + 1;
				newVideoObj.id = myid.toString();
				tf_insertTextNodeFEV2(id, newVideoObj, "LocationUrl", null);
				videoObj.push(newVideoObj);
			}
			videoObj = newVideoObj;
		}
		videoObj.minPlayedForSurvey = tf_minPlayedForSurvey;
		videoObj.surveyOnCompletion = tf_surveyOnCompletion.toString();
		if(typeof(videoTrackings[i].LocationUrl) != "undefined") {
			videoObj.LocationUrl["#text"] = videoTrackings[i].LocationUrl["#text"];
		}
		for (var m in videoTrackings[i]) {
			if(m == "LocationUrl") {
				continue;
			}
			var urls = videoTrackings[i][m].URL;
			if (typeof(urls.length) != "undefined") {
				for (var j = 0; j < urls.length; j++) {
					tempNode = tf_insertTextNodeFEV2(id, videoObj, "Tracking." + m + ".URL", urls[j]);
					if(typeof(urls[j].mode) != "undefined") {
						tempNode.mode = urls[j].mode;
					}
				}
			} else {
				tempNode = tf_insertTextNodeFEV2(id, videoObj, "Tracking." + m + ".URL", urls);
				if(typeof(urls.mode) != "undefined") {
					tempNode.mode = urls.mode;
				}
			}
		}
	}

	if(totalVids > 1) {
		for (var i = videoTrackings.length; i < totalVids; i++) {
			delete this.customObj.Root.Video[i];
		}
	}

	var clickTrackings = getVariableValue(id, "clickTrackings");
	var totalClickTags = 1;
	if (typeof(this.customObj.Root.ClickTag.length) != "undefined") {
		totalClickTags = this.customObj.Root.ClickTag.length;
	}

	for (var i = 0; i < clickTrackings.length; i++) {
		var clickObj = this.customObj.Root.ClickTag;
		if (totalClickTags != 1 && i < clickObj.length) {
			clickObj = clickObj[i];
		} else if(i != 0){
			if(typeof(clickObj.length) == "undefined") {
				this.customObj.Root.ClickTag = [clickObj];
				clickObj = this.customObj.Root.ClickTag;
			}
			var newClickObj = clickObj[i];
			if(typeof(newClickObj) == "undefined") {
				newClickObj = new Object();
				var myid = i + 1;
				newClickObj.id = myid.toString();
				tf_insertTextNodeFEV2(id, newClickObj, "URL", null);
				clickObj.push(newClickObj);
			}
			clickObj = newClickObj;
		}

		if(typeof(clickTrackings[i].URL) != "undefined") {
			clickObj.URL["#text"] = clickTrackings[i].URL["#text"];
		}

		var urls = clickTrackings[i].Track;
		if (typeof(urls) == "undefined") {
			continue;
		}
		if (typeof(urls.length) != "undefined") {
			for (var j = 0; j < urls.length; j++) {
				tempNode = tf_insertTextNodeFEV2(id, clickObj, "Track", urls[j]);
				if(typeof(urls[j].mode) != "undefined") {
					tempNode.mode = urls[j].mode;
				}
			}
		} else {
			tempNode = tf_insertTextNodeFEV2(id, clickObj, "Track", urls);
			if(typeof(urls.mode) != "undefined") {
				tempNode.mode = urls.mode;
			}
		}
	}

	if(totalClickTags > 1) {
		for (var i = clickTrackings.length; i < totalClickTags; i++) {
			delete this.customObj.Root.ClickTag[i];
		}
	}

	var tf_ignoreVASTBanner = getVariableValue(id, "tf_ignoreVASTBanner");
	if(typeof(tf_ignoreVASTBanner) != "undefined" && typeof(getVariableValue(id, "tf_flashfile")) != "undefined") {
		if(tf_ignoreVASTBanner == true) {
			if(getProperty(this.customObj, "Root.Banner.Image.URL") == null) {
				tf_insertTextNodeFEV2(id, this.customObj, "Root.Banner.Image.URL", getVariableValue(id, "tf_imagefile"));
			} else {
				this.customObj.Root.Banner.Image.URL["#text"] = getVariableValue(id, "tf_imagefile");
			}
		} else if(tf_ignoreVASTBanner != false) {
			if(getProperty(this.customObj, "Root.Banner.Flash.URL") == null) {
				tf_insertTextNodeFEV2(id, this.customObj, "Root.Banner.Flash.URL", tf_ignoreVASTBanner);
			} else {
				this.customObj.Root.Banner.Flash.URL["#text"] = tf_ignoreVASTBanner;
			}
			tf_insertTextNodeFEV2(id, this.customObj, "Root.Banner.Flash.AdParameters", null);
			tf_insertTextNodeFEV2(id, this.customObj, "Root.Banner.Flash.Tracking", null);
			tf_insertTextNodeFEV2(id, this.customObj, "Root.Banner.Flash.ClickThrough.URL", getVariableValue(id, "tf_clickTag")).id = "1";
		}
	}

	tf_insertTextNodeFEV2(id, this.customObj.Root, "Hosting.URL", getVariableValue(id, "tf_FEVHosting"));
	this.customObj.Root.Hosting.SocialNetworks = new Object();
	if(typeof(getVariableValue(id, "SocialNetworks")) != "undefined") {
		this.customObj.Root.Hosting.SocialNetworks.Network = getVariableValue(id, "SocialNetworks"); 
	}

	this.customObj.Root.IWins = new Object();
	if(typeof(getVariableValue(id, "Frames")) != "undefined") {
		this.customObj.Root.IWins.IWin = getVariableValue(id, "Frames"); 
	}

	this.customObj.Root.Survey = getVariableValue(id, "Survey");

	var tf_isFEVHosting = getVariableValue(id, "tf_isFEVHosting");
	if(tf_isFEVHosting == true) {
		this.customObj.Root.Hosting.enabled = "true";
	} else {
		this.customObj.Root.Hosting.enabled = "false";
	}

	var mydata = getVariableValue(id, "Data");
	if(mydata == "undefined") {
		tf_insertTextNodeFEV2(id, this.customObj.Root, "Data", null);
	} else if(typeof(mydata) == "string") {
		tf_insertTextNodeFEV2(id, this.customObj.Root, "Data", mydata);
	} else {
		this.customObj.Root.Data = mydata;
	}

	this.customObj.Root.StreamingServer = {"#text": "video.fireflyvideo.com"};
	this.customObj.Root.StreamingServer.bandWidthCheck = getVariableValue(id, "tf_bandWidthCheckMainFEV").toString();
	this.customObj.Root.CookieFlash = {"#text": getVariableValue(id, "tf_cookieFlash")};
	this.customXml = objectToXml(this.customObj);

	function parserTF1(id, obj, width, height) {
		var tempObj = new Object();
		tempObj.FEVType = "TF8.0";
		tf_insertTextNodeFEV2(id, tempObj, "Title", null);
		tf_insertTextNodeFEV2(id, tempObj, "Description", null);
		tf_insertTextNodeFEV2(id, tempObj, "ErrorUrl", null);
		var videos = new Array();
		videos[0] = new Object();
		videos[0].id = "1";
		tf_insertTextNodeFEV2(id, videos[0], "LocationUrl", tf_FEVVideoFile);
		tf_insertTextNodeFEV2(id, videos[0], "AdParameters", null);
		var i = 1;
		while (eval("typeof(tf_FEVVideoFile" + i + ")") != "undefined") {
			var myid = i + 1;
			videos[i] = new Object();
			videos[i].id = myid.toString();
			tf_insertTextNodeFEV2(id, videos[i], "LocationUrl", eval("tf_FEVVideoFile" + i));
			tf_insertTextNodeFEV2(id, videos[i], "AdParameters", null);
			i++;
		}

		if (videos.length == 1) {
			tempObj.Video = videos[0];
		} else {
			tempObj.Video = new Array();
			for (i = 0; i < videos.length; i++) {
				tempObj.Video.push(videos[i]);
			}
		}

		tempObj.ClickTag = new Object();
		tempObj.ClickTag.id = "1";
		tf_insertTextNodeFEV2(id, tempObj.ClickTag, "URL", tf_clickTag);

		i = 1;
		while (eval("typeof(tf_clickTag" + i + ")") != "undefined") {
			var myid = i + 1;
			var clickObj = new Object;
			clickObj.id = myid.toString();
			tf_insertTextNodeFEV2(id, clickObj, "URL", eval("tf_clickTag" + i));
			if (typeof(tempObj.ClickTag.length) == "undefined") {
				tempObj.ClickTag = [tempObj.ClickTag];
			}
			tempObj.ClickTag.push(clickObj);
			i++;
		}

		tf_insertTextNodeFEV2(id, tempObj, "SurveyUrl", null).tf_ignore = "1";
		tf_insertTextNodeFEV2(id, tempObj, "Impression", null);
		tempObj.Impression.tf_ignore = "1";

		if (tf_floatingAdType != 2 && typeof(tf_flashfile) != "undefined") {
			tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.URL", tf_flashfile + ".swf");
			tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.Tracking", null);
			tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.ClickThrough.URL", tf_clickTag).id = "1";
			i = 1;
			while (eval("typeof(tf_clickTag" + i + ")") != "undefined") {
				var myid = i + 1;
				tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.ClickThrough.URL", eval("tf_clickTag" + i)).id = myid.toString();
				i++;
			}
			tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.AdParameters", null);
			tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.URL", tf_imagefile);
			tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.ClickThrough.URL", tf_clickTag);
			tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.AltText", "");
			tempObj.Banner.tf_ignore = "1";
		}
		return tempObj;
	}

	function parserVersion1(id, obj, width, height) {
		var tempObj = new Object();
		tempObj.FEVType = "VAST1.0";
		tf_insertTextNodeFEV2(id, tempObj, "Title", getProperty(obj, "AdTitle"));
		tf_insertTextNodeFEV2(id, tempObj, "Description", getProperty(obj, "Description"));
		tf_insertTextNodeFEV2(id, tempObj, "ErrorUrl", getProperty(obj, "Error.URL"));

		//Video details
		var array = getProperty(obj, "Video.MediaFiles.MediaFile", {delivery:"progressive"});
		var videoLocation = null;
		var bitrates = [];
		var bitrateUrlMap = {};
		if (typeof(array.length) == "number") {
			for (var i = 0; i < array.length; i++) {
				if (/[.]flv$/.test(array[i].URL["#text"]) || array[i].type == "video/x-flv") {
					bitrates.push(Number(array[i].bitrate));
					bitrateUrlMap["bitrate" + array[i].bitrate] = getProperty(array[i], "URL");
				}
			}
			bitrates.sort(function(a, b) {
				return a - b
			});
			videoLocation = bitrateUrlMap["bitrate" + bitrates[Math.floor(bitrates.length / 2)]];
		} else {
			videoLocation = getProperty(array, "URL");
		}
		tf_insertTextNodeFEV2(id, tempObj, "Video.LocationUrl", videoLocation);
		getProperty(tempObj, "Video").id = "1";
		array = getProperty(obj, "TrackingEvents.Tracking", new Object());
		if (array != null) {
			if (typeof(array.length) == "number") {
				for (var i = 0; i < array.length; i++) {
					var parts = array[i].event.split("");
					parts[0] = parts[0].toString().toUpperCase().split("")[0];
					var myEvent = parts.join("");
					tf_insertTextNodeFEV2(id, tempObj, "Video.Tracking." + myEvent + ".URL", getProperty(array[i], "URL"));
				}
			} else {
				var parts = array.event.split("");
				parts[0] = parts[0].toString().toUpperCase().split("")[0];
				var myEvent = parts.join("");
				tf_insertTextNodeFEV2(id, tempObj, "Video.Tracking." + myEvent + ".URL", getProperty(array, "URL"));
			}
		}

		tempObj.ClickTag = new Object();
		tempObj.ClickTag.id = "1";
		tf_insertTextNodeFEV2(id, tempObj.ClickTag, "URL", getProperty(obj, "Video.VideoClicks.ClickThrough.URL"));

		array = getProperty(obj, "Video.VideoClicks.ClickTracking", new Object());
		if (array != null) {
			if (typeof(array.length) == "number") {
				for (var i = 0; i < array.length; i++) {
					tf_insertTextNodeFEV2(id, tempObj.ClickTag, "Track", getProperty(array[i], "URL"));
				}
			} else {
				tf_insertTextNodeFEV2(id, tempObj.ClickTag, "Track", getProperty(array, "URL"));
			}
		} else {
		}
		tf_insertTextNodeFEV2(id, tempObj, "Video.AdParameters", getProperty(obj, "Video.AdParameters", {apiFramework:"FlashVars"}));

		//nodes to be ignored while convering to xml
		tf_insertTextNodeFEV2(id, tempObj, "SurveyUrl", getProperty(obj, "Survey.URL")).tf_ignore = "1";
		array = getProperty(obj, "Impression", new Object());
		if (array != null) {
			if (typeof(array.length) == "number") {
				for (var i = 0; i < array.length; i++) {
					tf_insertTextNodeFEV2(id, tempObj, "Impression.URL", getProperty(array[i], "URL"));
				}
			} else {
				tf_insertTextNodeFEV2(id, tempObj, "Impression.URL", getProperty(array, "URL"));
			}
		} else {
			tf_insertTextNodeFEV2(id, tempObj, "Impression", null);
		}

		tempObj.Impression.tf_ignore = "1";

		var resourceTypes = ["static", "other"];
		//, "iframe", "script", "HTML", "html"];
		for (var i = 0; i < resourceTypes.length; i++) {
			var companion = getProperty(obj, "CompanionAds.Companion", {resourceType:resourceTypes[i],width:width,height:height});
			if (companion != null) {
				if (/[.]swf$/.test(getProperty(companion, "URL")["#text"])) {
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.URL", getProperty(companion, "URL"));
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.Tracking", null);
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.ClickThrough.URL", getProperty(companion, "CompanionClickThrough.URL")).id = "1";
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.AdParameters", getProperty(companion, "AdParameters", {apiFramework:"FlashVars"}));
				} else {
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.URL", getProperty(companion, "URL"));
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.Tracking", null);
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.ClickThrough.URL", getProperty(companion, "CompanionClickThrough.URL")).id = "1";
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.AltText", getProperty(companion, "AltText"));
				}
			}
		}
		if(typeof(tempObj.Banner) != "undefined") {
			tempObj.Banner.tf_ignore = "1";
		}
		return tempObj;
	}

	function parserVersion2(id, obj, width, height) {
		var tempObj = new Object();
		tempObj.FEVType = "VAST2.0";
		tf_insertTextNodeFEV2(id, tempObj, "Title", getProperty(obj, "AdTitle"));
		tf_insertTextNodeFEV2(id, tempObj, "Description", getProperty(obj, "Description"));
		tf_insertTextNodeFEV2(id, tempObj, "ErrorUrl", getProperty(obj, "Error"));

		//Video details
		var array = getProperty(obj, "Creatives.Creative", new Object());
		var linearAd, companionAds = null;
		if (typeof(array.length) == "number") {
			for (var i = 0; i < array.length; i++) {
				if (typeof(array[i].Linear) == "object") {
					linearAd = array[i].Linear;
				} else if (typeof(array[i].CompanionAds) == "object") {
					companionAds = array[i].CompanionAds;
				}
			}
		} else {
			if (typeof(array.Linear) == "object") {
				linearAd = array.Linear;
			} else if (typeof(array.CompanionAds) == "object") {
				companionAds = array.CompanionAds;
			}
		}
		array = getProperty(linearAd, "MediaFiles.MediaFile", {delivery:"progressive"});
		var videoLocation = null;
		var bitrates = [];
		var bitrateUrlMap = {};
		if (typeof(array.length) == "number") {
			for (var i = 0; i < array.length; i++) {
				if (/[.]flv$/.test(array[i]["#text"]) || array[i].type == "video/x-flv") {
					bitrates.push(Number(array[i].bitrate));
					bitrateUrlMap["bitrate" + array[i].bitrate] = array[i];
				}
			}
			bitrates.sort(function(a, b) {
				return a - b
			});
			videoLocation = bitrateUrlMap["bitrate" + bitrates[Math.floor(bitrates.length / 2)]];
		} else {
			videoLocation = array["#text"];
		}
		tf_insertTextNodeFEV2(id, tempObj, "Video.LocationUrl", videoLocation);
		getProperty(tempObj, "Video").id = "1";
		array = getProperty(linearAd, "TrackingEvents.Tracking", new Object());
		if (array != null) {
			if (typeof(array.length) == "number") {
				for (var i = 0; i < array.length; i++) {
					if (typeof(array[i].event) != "undefined") {
						var parts = array[i].event.split("");
						parts[0] = parts[0].toString().toUpperCase().split("")[0];
						var myEvent = parts.join("");
						tf_insertTextNodeFEV2(id, tempObj, "Video.Tracking." + myEvent + ".URL", array[i]);
					}
				}
			} else {
				var parts = array.event.split("");
				parts[0] = parts[0].toString().toUpperCase().split("")[0];
				var myEvent = parts.join("");
				tf_insertTextNodeFEV2(id, tempObj, "Video.Tracking." + myEvent + ".URL", array);
			}
		}

		tempObj.ClickTag = new Object();
		tempObj.ClickTag.id = "1";
		tf_insertTextNodeFEV2(id, tempObj.ClickTag, "URL", getProperty(linearAd, "VideoClicks.ClickThrough"));

		array = getProperty(linearAd, "VideoClicks.ClickTracking", new Object());
		if (array != null) {
			if (typeof(array.length) == "number") {
				for (var i = 0; i < array.length; i++) {
					tf_insertTextNodeFEV2(id, tempObj.ClickTag, "Track", array[i]);
				}
			} else {
				tf_insertTextNodeFEV2(id, tempObj.ClickTag, "Track", array);
			}
		} else {
		}

		tf_insertTextNodeFEV2(id, tempObj, "Video.AdParameters", getProperty(linearAd, "AdParameters", {apiFramework:"FlashVars"}));

		//nodes to be ignored while convering to xml
		tf_insertTextNodeFEV2(id, tempObj, "SurveyUrl", getProperty(obj, "Survey")).tf_ignore = "1";
		array = getProperty(obj, "Impression", new Object());
		if (array != null) {
			if (typeof(array.length) == "number") {
				for (var i = 0; i < array.length; i++) {
					tf_insertTextNodeFEV2(id, tempObj, "Impression.URL", array[i]);
				}
			} else {
				tf_insertTextNodeFEV2(id, tempObj, "Impression.URL", array);
			}
		} else {
			tf_insertTextNodeFEV2(id, tempObj, "Impression", null);
		}

		tempObj.Impression.tf_ignore = "1";

		var resourceType = "StaticResource";
		//, "IFrameResource", "HTMLResource"
		array = getProperty(companionAds, "Companion", {width:width,height:height});
		var companion = null;
		if (array != null) {
			if (typeof(array.length) != "undefined") {
				for (var i = 0; i < array.length; i++) {
					if (typeof(array[i][resourceType]) != "undefined") {
						companion = array[i];
					}
				}
			} else {
				if (typeof(array[resourceType]) != "undefined") {
					companion = array;
				}
			}
			if (companion != null) {
				if (getProperty(companion, resourceType).creativeType == "application/x-shockwave-flash" || /[.]swf$/.test(getProperty(companion, resourceType)["#text"])) {
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.URL", getProperty(companion, resourceType));
					array = getProperty(companion, "TrackingEvents.Tracking", new Object());
					if (array != null) {
						if (typeof(array.length) == "number") {
							for (var i = 0; i < array.length; i++) {
								var parts = array[i].event.split("");
								parts[0] = parts[0].toString().toUpperCase().split("")[0];
								tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.Tracking." + parts.join("") + ".URL", array[i]);
							}
						} else {
							var parts = array.event.split("");
							parts[0] = parts[0].toString().toUpperCase().split("")[0];
							tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.Tracking." + parts.join("") + ".URL", array);
						}
					} else {
						tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.Tracking", null);
					}
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.ClickThrough.URL", getProperty(companion, "CompanionClickThrough")).id = "1";
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Flash.AdParameters", getProperty(companion, "AdParameters", {apiFramework:"FlashVars"}));
				} else {
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.URL", getProperty(companion, resourceType));
					array = getProperty(companion, "TrackingEvents.Tracking", new Object());
					if (array != null) {
						if (typeof(array.length) == "number") {
							for (var i = 0; i < array.length; i++) {
								var parts = array[i].event.split("");
								parts[0] = parts[0].toString().toUpperCase().split("")[0];
								tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.Tracking." + parts.join("") + ".URL", array[i]);
							}
						} else {
							var parts = array.event.split("");
							parts[0] = parts[0].toString().toUpperCase().split("")[0];
							tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.Tracking." + parts.join("") + ".URL", array);
						}
					} else {
						tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.Tracking", null);
					}
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.ClickThrough.URL", getProperty(companion, "CompanionClickThrough"));
					tf_insertTextNodeFEV2(id, tempObj, "Banner.Image.AltText", getProperty(companion, "AltText"));
				}
			}
			if(typeof(tempObj.Banner) != "undefined") {
				tempObj.Banner.tf_ignore = "1";
			}
		}

		return tempObj;
	}

	function getRootNode(obj) {
		var count = 0;
		var rootNode;
		for (var m in obj) {
			if (typeof(obj[m]) == "object") {
				if (count == 0) {
					rootNode = obj[m];
				}
				count++;
			}
		}
		if (count == 1) {
			return rootNode;
		}
		return null;
	}

	function getProperty(obj, property, atrributeMap) {
		if (obj == null) {
			return null;
		}
		var tempObj = obj;
		parts = property.split(".");
		for (var i = 0; i < parts.length; i++) {
			if (typeof(tempObj[parts[i]]) != "undefined") {
				tempObj = tempObj[parts[i]];
				if (typeof(tempObj.length) == "number") {
					if (i < parts.length - 1 || typeof(atrributeMap) == "undefined") {
						tempObj = tempObj[0];
					} else {
						var array = new Array();
						for (var j = 0; j < tempObj.length; j++) {
							var flag = true;
							for (var m in atrributeMap) {
								if (typeof(tempObj[j][m]) == "undefined" || tempObj[j][m] != atrributeMap[m]) {
									flag = false;
									break;
								}
							}
							if (flag == true) {
								array.push(tempObj[j]);
							}
						}
						if (array.length == 0) {
							return null;
						}
						if (array.length == 1) {
							return array[0];
						}
						return array;
					}
				} else {
					if(i == parts.length - 1 && typeof(atrributeMap) != "undefined") {
						var flag = true;
						for (var m in atrributeMap) {
							if (typeof(tempObj[m]) == "undefined" || tempObj[m] != atrributeMap[m]) {
								flag = false;
								break;
							}
						}
						if (flag == true) {
							return tempObj;
						}
						return null;
					}
				}
			} else {
				return null;
			}
		}
		return tempObj;
	}

	function createObject(xmlNode) {
		var allTextNodes = true;
		if (xmlNode.attributes != null) {
			for (var j = 0; j < xmlNode.attributes.length; j++) {
				var attribute = xmlNode.attributes[j];
				this[attribute.nodeName] = attribute.nodeValue;
			}
		}
		for (var i = 0; i < xmlNode.childNodes.length; i++)
		{
			var childNode = xmlNode.childNodes[i];
			if (childNode.nodeType != 1) {
				continue;
			}
			allTextNodes = false;

			var nodeName = childNode.nodeName;
			var nodeValue = new createObject(childNode);

			if (typeof(this[nodeName]) == 'undefined') {
				this[nodeName] = nodeValue;
			} else if ((typeof(this[nodeName]) == 'object') && typeof(this[nodeName].length) == 'undefined') {
				this[nodeName] = [ this[nodeName], nodeValue ];
			} else if (typeof(this[nodeName]) == 'object' && typeof(this[nodeName].length) == 'number') {
				this[nodeName].push(nodeValue);
			}
		}

		if (allTextNodes) {
			if (typeof(xmlNode.textContent) != "undefined") {
				this["#text"] = xmlNode.textContent.replace(/^\s*/, "").replace(/\s*$/, "");
			} else {
				this["#text"] = xmlNode.text.replace(/^\s*/, "").replace(/\s*$/, "");
			}
		}
	}

	function xmlToObject(text) {
		if (text == null) {
			return null;
		}
		if (window.DOMParser)
		{
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(text, "text/xml");
			return new createObject(xmlDoc);
		}
		else
		{
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = "false";
			xmlDoc.loadXML(text);
			return new createObject(xmlDoc);
		}
	}

	function objectToXml(obj, nodeName) {
		var xml = "";
		if (typeof(obj.tf_ignore) != "undefined" && obj.tf_ignore == 1) {
			return xml;
		}
		var text = null;
		if (typeof(nodeName) != "undefined") {
			xml = "<" + nodeName;
			for (var m in obj) {
				if (typeof(obj[m]) == "string") {
					if (m == "#text") {
						text = obj[m];
						if (text != "") {
							text = "<![CDATA[" + text + "]]>";
						}
					} else {
						xml += " " + m + "='" + obj[m] + "'";
					}
				}
			}
			xml += ">";
		} else {
			xml += "<?xml version='1.0' encoding='UTF-8'?>";
		}

		if (text == null) {
			for (var m in obj) {
				if (typeof(obj[m]) == "object") {
					if (typeof(obj[m].length) == "number") {
						for (var i = 0; i < obj[m].length; i++) {
							xml += objectToXml(obj[m][i], m);
						}
					} else {
						xml += objectToXml(obj[m], m);
					}
				}
			}
		} else {
			xml += text;
		}

		if (typeof(nodeName) != "undefined") {
			xml += "</" + nodeName + ">";
		}
		return xml;
	}

	function escapeXml(str) {
		str = str.replace(/\&/g, "&amp;");
		str = str.replace(/</g, "&lt;");
		str = str.replace(/>/g, "&gt;");
		str = str.replace(/'/g, "&apos;");
		str = str.replace(/"/g, "&quot;");
		return str;
	}
}

function tf_insertTextNodeFEV2(id, obj, property, fromObj) {
	var value = "";
	if (fromObj != null) {
		if (typeof(fromObj) == "string") {
			value = fromObj;
		} else {
			value = fromObj["#text"];
		}
	}
	value = value.replace(/\[timestamp\]/g, id).replace(/%timestamp%/g, id);
	var parts = property.split(".");
	var tempObj = obj;
	var parent, current;
	for (var i = 0; i < parts.length; i++) {
		current = parts[i];
		if (typeof(tempObj[current]) == "undefined") {
			tempObj[current] = new Object();
		}
		parent = tempObj;
		tempObj = tempObj[current];
	}

	if (typeof(tempObj.length) == "number") {
		var temp = new Object();
		temp["#text"] = value;
		tempObj.push(temp);
		return temp;
	} else if (typeof(tempObj["#text"]) != "undefined") {
		var temp = tempObj;
		tempObj = new Array();
		tempObj.push(temp);
		temp = new Object();
		temp["#text"] = value;
		tempObj.push(temp);
		parent[current] = tempObj;
		return temp;
	}
	tempObj["#text"] = value;
	return tempObj;
}

function TF_ControlVersion() {
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");

			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful.

			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}

	return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function TF_GetSwfVer() {
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;

	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			var versionRevision = descArray[3];
			if (versionRevision == "") {
				versionRevision = descArray[4];
			}
			if (versionRevision[0] == "d") {
				versionRevision = versionRevision.substring(1);
			} else if (versionRevision[0] == "r") {
				versionRevision = versionRevision.substring(1);
				if (versionRevision.indexOf("d") > 0) {
					versionRevision = versionRevision.substring(0, versionRevision.indexOf("d"));
				}
			}
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if (isIE && isWin && !isOpera) {
		flashVer = TF_ControlVersion();
	}
	return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function TF_DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision) {
	versionStr = TF_GetSwfVer();
	if (versionStr == -1) {
		return false;
	} else if (versionStr != 0) {
		if (isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray = versionStr.split(" ");
			// ["WIN", "2,0,0,11"]
			tempString = tempArray[1];
			// "2,0,0,11"
			versionArray = tempString.split(",");
			// ['2', '0', '0', '11']
		} else {
			versionArray = versionStr.split(".");
		}
		var versionMajor = versionArray[0];
		var versionMinor = versionArray[1];
		var versionRevision = versionArray[2];

		// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor > parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
}

function TF_AC_AddExtension(src, ext) {
	if (src.indexOf('?') != -1)
		return src.replace(/\?/, ext + '?');
	else
		return src + ext;
}

if (typeof(tf_floatingAdType) == "string") {
	tf_floatingAdType = {
		OutOfBanner : 0,
		FEV : 1,
		InterstitialFEV : 2,
		Interstitial : 4
	}[tf_floatingAdType];
	if (typeof(tf_floatingAdType) == "undefined") {
		tf_floatingAdType = 0;
	}
}

function tf_getParams(value, isUrl) {
	var params = {};
	if(typeof(isUrl) != "undefined" && isUrl == true) {
	value = value.split("?");
		if(value.length == 2) {
			value = value[1];
		} else {
			return params;
		}
	}
	value = value.split("&");
	for(var i = 0; i < value.length; i++) {
		var keyValue = value[i].split("=");
		if(keyValue.length == 2) {
			params[keyValue[0]]= unescape(keyValue[1]);
		} else {
			params[keyValue[0]] = "";
		}
	}
	return params;
}

function tf_flashVarHasKey(extraFlashVars, key) {
	var obj;
	if(typeof(extraFlashVars) == "object") {
		obj = extraFlashVars;
	} else {
		obj = tf_getParams(extraFlashVars);
	}

	for(var m in obj) {
		if(m == key){
			return true;
		}
	}

	return false;
}

function tf_addFlashVar(key, value) {
	if(typeof(tf_extraFlashVars) != "undefined") {
		if(tf_flashVarHasKey(tf_extraFlashVars, key) ==  false) {
			if(typeof(tf_extraFlashVars) == "object"){
				tf_extraFlashVars[key] = value;
			} else if(typeof(tf_extraFlashVars) == "string") {
				tf_extraFlashVars += "&" + key + "=" + escape(value);
			}
		}
	} else {
		tf_extraFlashVars = key + "=" + escape(value);
	}
}

function tf_addFlashVarFloating(key, value) {
	if(typeof(tf_extraFlashVarsFloating) != "undefined") {
		if(tf_flashVarHasKey(tf_extraFlashVarsFloating, key) ==  false) {
			if(typeof(tf_extraFlashVarsFloating) == "object"){
				tf_extraFlashVarsFloating[key] = escape(value);
			} else if(typeof(tf_extraFlashVarsFloating) == "string") {
				tf_extraFlashVarsFloating += "&" + key + "=" + escape(value);
			}
		}
	} else {
		tf_extraFlashVarsFloating = key + "=" + escape(value);
	}
}

if (tf_floatingAdType == 1 && (typeof(tf_VASTXmlFEV) == "undefined" || tf_VASTXmlFEV == "") && typeof(tf_flashfile) != "undefined") {
	var locations = new Array();
	locations.push(tf_flashfile);
	i = 1;
	while (eval("typeof(tf_flashfile" + i + ")") != "undefined") {
		locations.push(eval("tf_flashfile" + i));
		i++;
	}

	var videoIndex = parseInt(Math.random() * 100000, 10) % locations.length;
	tf_flashfile = locations[videoIndex];
	if(totalVideos != locations.length) {
		videoIndex = 0;
	}

	tf_addFlashVarFloating("videoIndex", videoIndex);

	if(tf_isFEVHosting == false) {
		var j = 0;
		while (true) {
			var varname ="tf_flashfile" + ((videoIndex != 0)?videoIndex:"");
			varname += "_impression" + ((j != 0)?j:"");
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_firePixelFEV6(tf_id, tf_FEVGetVariableValue(eval(varname), tf_FEVIndex), false, 0, true);
				eval(varname + " = undefined");
			} else {
				break;
			}
			j++;
		}

		if (typeof(tf_FEVTestMode) != "undefined" && tf_FEVTestMode == true) {
			var varname ="tf_flashfile" + ((videoIndex != 0)?videoIndex:"");
			varname += "_impression_test";
			if(eval("typeof(" + varname + ")") != "undefined") {
				tf_firePixelFEV6(tf_id, tf_FEVGetVariableValue(eval(varname), tf_FEVIndex) + new Date().getTime(), false, 0, true);
				eval(varname + " = undefined");
			}
		}
	}
}

function TF_GetFlashVars3(extraVars) {
	var flashVars = "";
	flashVars = "clickTag=" + escape(tf_clickTag);
	flashVars += "&clickTAG=" + escape(tf_clickTag);
	flashVars += "&clicktag=" + escape(tf_clickTag);

	var i = 1;
	while (eval("typeof(tf_clickTag" + i + ")") != "undefined") {
		flashVars += "&clickTag" + i + "=" + escape(eval("tf_clickTag" + i));
		i++;
	}

	flashVars += "&tf_flash=" + TF_AC_AddExtension(tf_adBanner, ".swf");
	flashVars += "&tf_button=" + tf_button;
	flashVars += "&tf_state=" + tf_state;
	flashVars += "&tf_city=" + tf_city;
	flashVars += "&tf_zipcode=" + tf_zipcode;
	flashVars += "&tf_gender=" + tf_gender;
	flashVars += "&tf_location=" + tf_location;
	flashVars += "&tf_id=" + tf_id;

	if (typeof(extraVars) == "object") {
		for (i in extraVars) {
			flashVars += "&" + i + "=" + escape(extraVars[i]);
		}
	} else if (typeof(extraVars) == "string") {
		flashVars += "&" + extraVars;
	}
	return flashVars;
}

if(typeof(tf_flashfile) != "undefined") {
	setVariableValue(tf_id, "tf_flashfile", tf_flashfile);
}
if (tf_floatingAdType != 2 && tf_floatingAdType != 4 && typeof(tf_flashfile) != "undefined") {
	tf_adBanner = tf_flashfile;
}

if (typeof(tf_use_flash_wrapper) == "undefined") {
	tf_use_flash_wrapper = false;
}

if (tf_use_flash_wrapper) {
	tf_flashfile = tf_loaderFlash;
}

//if (typeof(tf_allowScriptAccess) == "undefined") {
	tf_allowScriptAccess = "always";
//}

if (typeof(tf_salign) == "undefined") {
	tf_salign = "lt";
}

if (typeof(tf_bgcolor) == "undefined") {
	tf_bgcolor = "#ffffff";
}

if (typeof(tf_wmode) == "undefined") {
	if (tf_floatingAdType == 1 && typeof(tf_VASTXmlFEV) != "undefined" && tf_VASTXmlFEV != "") {
		tf_wmode = "transparent";
	} else {
		tf_wmode = "opaque";
	}
}

tf_addFlashVar("tf_show", "_showFloating9");
tf_addFlashVarFloating("tf_close", "_hideFloating8");
tf_addFlashVarFloating("tf_openWindow", "_openWindow");
if(tf_floatingAdType == 1 || tf_floatingAdType == 2) {
	tf_addFlashVar("tf_flashLoaded", "_FEVLL9");
	tf_addFlashVar("tf_clickEvent", "_fireEngagementPixelFEV7");
	tf_addFlashVar("tf_sendData", "_FEVflashToJS9");
	tf_addFlashVar("tf_mouseOver", "_FEVLoadCache");
	tf_addFlashVar("tf_firePixel", "_firePixelFEV6");
	tf_addFlashVar("tf_streamingServer", "video.fireflyvideo.com");
	tf_addFlashVar("tf_bandWidthCheck", tf_bandWidthCheckTeaser.toString());
	tf_addFlashVarFloating("tf_authenticateSurvey", "_authenticateSurvey");
	if((tf_isFEVHosting == true && (typeof(tf_VASTXmlFEV) != "undefined" && tf_VASTXmlFEV != "")) || tf_floatingAdType == 2 || typeof(tf_flashfile) == "undefined") {
		tf_addFlashVarFloating("tf_flashLoaded", "_FEVLL9");
	} else {
		tf_addFlashVarFloating("tf_flashLoaded", "_FEVMainFL9");
	}
	tf_addFlashVarFloating("tf_sendData", "_FEVflashToJS9");
	tf_addFlashVarFloating("tf_firePixel", "_firePixelFEV6");
	tf_addFlashVarFloating("tf_showIWin", "_showFEVFrameAfter2");
	tf_addFlashVarFloating("tf_hideIWin", "_hideFEVFrame2");
	tf_addFlashVarFloating("tf_backIWin", "_backFEVFrame");
	tf_addFlashVarFloating("tf_zOrderIWin", "_customFEVFrame");
	tf_addFlashVarFloating("tf_frontIWin", "_frontFEVFrame");
	tf_addFlashVarFloating("tf_getSessionObject", "_getSessionObject");
	tf_addFlashVarFloating("tf_setSessionObject", "_setSessionData");
}

if(typeof(tf_teaserVideo ) != "undefined") {
	tf_addFlashVar("teaserVideo", tf_teaserVideo);
}

function tf_FEVLL9(id, version) {
	var flash_object;
	var doFireloadedPixel = false;
	var tf_isFEVHosting = getVariableValue(id, "tf_isFEVHosting");
	if(getVariableValue(id, "tf_floatingAdType") == 2 || tf_isFEVHosting == true || typeof(getVariableValue(id, "tf_flashfile")) == "undefined") {
		doFireloadedPixel = true;
		if(version != 8) {
			if(document.location.protocol == "file:" || document.location.hostname.toLowerCase().indexOf("tribalfusion") != -1 || document.location.hostname.toLowerCase().indexOf("fireflyvideo") != -1) {
				alert("Javascript and flash version mismatch.");
			}
			tf_hideFloating8(id);
			return;
		}
		flash_object = tf_thisMovie(getVariableValue(id, "flashId"));
	} else {
		flash_object = tf_thisMovie("TFclick" + id);
	}
	if (flash_object) {
		if(doFireloadedPixel) {
			setVariableValue(id, "flashLoadedTime", new Date().getTime());
			if (typeof(getVariableValue(id, "tf_FEVTestMode")) != "undefined" && getVariableValue(id, "tf_FEVTestMode") == true) {
				tf_firePixelFEV6(id, getVariableValue(id, "tf_flashLoadedPixel_test") + new Date().getTime());
			}
			if(typeof(getVariableValue(id, "engagementTime")) != "undefined") {
				tf_firePixelFEV6(id, getVariableValue(id, "tf_flashLoadedPixel"), false, new Date().getTime() - getVariableValue(id, "engagementTime"));
			} else {
				tf_firePixelFEV6(id, getVariableValue(id, "tf_flashLoadedPixel"), 0);
			}
		}
		i = 1;
		var tf_VASTXmlFEV = getVariableValue(id, "tf_VASTXmlFEV");
		if(typeof(tf_VASTXmlFEV) == "undefined" || tf_VASTXmlFEV == "" || (typeof(getVariableValue(id, "tf_flashfile")) == "undefined" && getVariableValue(id, "tf_FEVLL") == true)) {
			tf_FEVMainFL9(id, 8);
		} else {
			if (getVariableValue(id, "tf_FEVLL") == false) {
				setVariableValue(id, "tf_FEVLL", true);
				var additionalVASTXmls = new Array(tf_VASTXmlFEV);
				while (typeof(getVariableValue(id, "tf_VASTXmlFEV" + i)) != "undefined") {
					additionalVASTXmls.push(getVariableValue(id, "tf_VASTXmlFEV" + i));
					i++;
				}
				try {
					flash_object.fevMode(0, additionalVASTXmls);
				} catch (ex) {
				}
			}
		}
	}
}

function tf_FEVflashToJS9(id, status, xmls) {
	if (status == 1) {
		if (typeof(getVariableValue(id, "tf_FEVTestMode")) != "undefined" && getVariableValue(id, "tf_FEVTestMode") == true) {
			if(typeof(getVariableValue(id, "tf_xmlsLoadedFEV_test")) != "undefined") {
				tf_firePixelFEV6(id, getVariableValue(id, "tf_xmlsLoadedFEV_test") + new Date().getTime());
			}
		}
		tf_fevObj = new tf_FEV8(xmls, getVariableValue(id, "tf_width"), getVariableValue(id, "tf_height"), id);
		setVariableValue(id, "tf_fevObj", tf_fevObj);
		var tf_isFEVHosting = getVariableValue(id, "tf_isFEVHosting");
		if(tf_isFEVHosting == true || getVariableValue(id, "tf_floatingAdType") == 2 || typeof(getVariableValue(id, "tf_flashfile")) == "undefined") {
			tf_FEVMainFL9(id, 8);
			return;
		}
		var tf_ignoreVASTBanner = getVariableValue(id, "tf_ignoreVASTBanner");
		if(typeof(tf_ignoreVASTBanner) != "undefined" && tf_ignoreVASTBanner != false) {
			if(tf_ignoreVASTBanner == true) {
				document.getElementById("TFFEVBannerDiv" + id).innerHTML = getVariableValue(id, "VASTImage").replace("tf_imagefile", tf_fevObj.customObj.Root.Banner.Image.URL["#text"]);
				window.setTimeout("tf_fireImpressionPixelsFEV7('" + id + "', 'Image');", 1000);
			} else {
				document.getElementById("TFFEVBannerDiv" + id).innerHTML = getVariableValue(id, "VASTFlash").replace("tf_flashfile.swf", TF_AC_AddExtension(tf_fevObj.customObj.Root.Banner.Flash.URL["#text"], ".swf")).replace("tf_flashVars", tf_fevObj.customObj.Root.Banner.Flash.AdParameters["#text"]);
				window.setTimeout("tf_fireImpressionPixelsFEV7('" + id + "', 'Flash');", 1000);
			}
		} else {
			if (typeof(tf_fevObj.customObj.Root.Banner.Flash) != "undefined") {
				document.getElementById("TFFEVBannerDiv" + id).innerHTML = getVariableValue(id, "VASTFlash").replace("tf_flashfile.swf", tf_fevObj.customObj.Root.Banner.Flash.URL["#text"]).replace("tf_flashVars", tf_fevObj.customObj.Root.Banner.Flash.AdParameters["#text"]);
				window.setTimeout("tf_fireImpressionPixelsFEV7('" + id + "', 'Flash');", 1000);
			} else if (typeof(tf_fevObj.customObj.Root.Banner.Image) != "undefined") {
				document.getElementById("TFFEVBannerDiv" + id).innerHTML = getVariableValue(id, "VASTImage").replace("tf_imagefile", tf_fevObj.customObj.Root.Banner.Image.URL["#text"]);
				window.setTimeout("tf_fireImpressionPixelsFEV7('" + id + "', 'Image');", 1000);
			}
		}
		document.getElementById("TFFEVBannerDiv" + id).style.display = "";
		window.setTimeout("tf_FEVTeaserAnimate('" + id + "')", 100);
	} else {
		if (typeof(getVariableValue(id, "tf_FEVTestMode")) != "undefined" && getVariableValue(id, "tf_FEVTestMode") == true) {
			if(typeof(getVariableValue(id, "tf_error_test")) != "undefined") {
				tf_firePixelFEV6(id, getVariableValue(id, "tf_error_test") + new Date().getTime() + "error=" + status);
			}
		}
	}
}

function tf_showFEVFrameAfter2(id, htmlid, x, y, w, h, time, t, r, b, l, scrollValue, transparent) {
	if(typeof(htmlid) == "undefined") {
		return;
	}

	var factor = getVariableValue(id, "factor", factor);
	factor = 100 / factor;

	if(t == undefined) {
		t = -1;
	}
	if(r == undefined) {
		r = -1;
	}
	if(b == undefined) {
		b = -1;
	}
	if(l == undefined) {
		l = -1;
	}

	if(transparent == undefined) {
		transparent = false;
	}

	if(scrollValue == undefined || scrollValue == null) {
		scrollValue = "";
	} else {
		scrollValue = scrollValue.toLowerCase().split("").sort().join("");
	}

	var FEVFrames = getVariableValue(id, "Frames");
	for (var i = 0; i < FEVFrames.length; i++) {
		if(FEVFrames[i].id == htmlid) {
			FEVFrames[i].x = x;
			FEVFrames[i].y = y;
			FEVFrames[i].w = w;
			FEVFrames[i].h = h;
			FEVFrames[i].t = t;
			FEVFrames[i].r = r;
			FEVFrames[i].b = b;
			FEVFrames[i].l = l;
			FEVFrames[i].scrollValue = scrollValue;
			break;
		}
	}

	if(r != -1) {
		r *= factor;
	}
	if(b != -1) {
		b *= factor;
	}
	
	window.setTimeout("tf_showFEVFrame2('" + id + "','" + htmlid + "','" + x * factor + "','" + y * factor + "','" + w * factor + "','" + h * factor + "','" + t + "','" + r + "','" + b + "','" + l + "',true,'" + scrollValue + "'," + transparent + ");", time);
}

function tf_showFEVFrame2(id, htmlid, x, y, w, h, t, r, b, l, changeVisiblity, scrollValue, transparent) {
	x = Number(x);
	y = Number(y);
	w = Number(w);
	h = Number(h);
	t = Number(t);
	r = Number(r);
	b = Number(b);
	l = Number(l);
	var d = document.getElementById(htmlid);
	var f = document.getElementById(htmlid + "_f");
	if(transparent != null) {
		if(transparent == true) {
			d.style.backgroundColor = "transparent";
		} else {
			d.style.backgroundColor = "white";
		}
		f.allowTransparency = transparent.toString();
	}
	
	if(changeVisiblity) {
		var reload = getVariableValue(id, htmlid);
		if(typeof(reload) == "undefined") {
			reload = true;
		}
		if(reload == true) {
			var FEVFrames = getVariableValue(id, "Frames");
			for (var i = 0; i < FEVFrames.length; i++) {
				if(FEVFrames[i].id == htmlid) {
					f.src = FEVFrames[i].src["#text"];
					break;
				}
			}
		}
		setVariableValue(id, htmlid, false);
	}

	var factor = getVariableValue(id, "factor");
	factor = 100 / factor;
	f.width = (w + ((r != -1)?r:0)) / factor + ((l != -1)?l:0);
	f.height = (h + ((b != -1)?b:0)) / factor + ((t != -1)?t:0);
	if(t != -1) {
		f.style.left = (-1 * l) + "px";
		f.style.top = (-1 * t) + "px";
	} else {
		f.style.left = "0px";
		f.style.top = "0px";
	}
	var d2 = document.getElementById(htmlid + "_d");
	d2.style.width = (w + ((r != -1)?r:0)) / factor + "px";
	d2.style.height = (h + ((b != -1)?b:0)) / factor + "px";

	d.style.left = x + "px";
	d.style.top = y + "px";
	d.style.width = w + "px";
	d.style.height = h + "px";
	if(changeVisiblity) {
		d.style.visibility = "visible";
	}
	
	if(scrollValue == "hv" || factor < 1) {
		d.style.overflowX = "scroll";
		d.style.overflowY = "scroll";
	} else if(scrollValue == "h") {
		d.style.overflowX = "scroll";
		d.style.overflowY = "hidden";
	} else if(scrollValue == "v") {
		d.style.overflowX = "hidden";
		d.style.overflowY = "scroll";
	} else {
		d.style.overflowX = "hidden";
		d.style.overflowY = "hidden";
	}
}

function tf_backFEVFrame(id, htmlid) {
	document.getElementById(htmlid).style.zIndex = 1;
}

function tf_frontFEVFrame(id, htmlid) {
	document.getElementById(htmlid).style.zIndex = 11;
}

function tf_customFEVFrame(id, htmlid, zIndex) {
	document.getElementById(htmlid).style.zIndex = 11 + zIndex;
}

function tf_hideFEVFrame2(id, htmlid, reload) {
	if(reload == undefined) {
		reload = false;
	}
	setVariableValue(id, htmlid, reload);
	var d = document.getElementById(htmlid);
	d.style.visibility = "hidden";
	var f = document.getElementById(htmlid + "_f");
	if(reload) {
		var FEVFrames = getVariableValue(id, "Frames");
		for (var i = 0; i < FEVFrames.length; i++) {
			if(FEVFrames[i].id == htmlid) {
				f.src = "about:blank";
				break;
			}
		}
	}
}

function et_FEVLoadCache(id) {
	tf_FEVLoadCache(id);
}

function tf_FEVLoadCache(id) {
	if(getVariableValue(id, "firstTime")) {
		setVariableValue(id, "firstTime", false);
		if(typeof(getVariableValue(id, "disableCache")) == "undefined" || getVariableValue(id, "disableCache") == false) {
			var mydiv = document.createElement("div");
			mydiv.id = "mydiv" + id;
			mydiv.style.width = "1px";
			mydiv.style.height = "1px";
			mydiv.innerHTML = getVariableValue(id, "cache");
			if(is_mozilla) {
				mydiv.style.position = "fixed";
				mydiv.style.top = "5px";
				mydiv.style.left = "5px";
			}
			document.body.appendChild(mydiv);
		}
	}
}

function tf_FEVTeaserAnimate(id) {
	try {
		var flash_object = tf_thisMovie("TFclick" + id);
		if (flash_object) {
			flash_object.fevMode(1);
		}
	} catch (ex) {
	}
}

function tf_FEVMainFL9(id, version) {
	if(version != 8) {
		if(document.location.protocol == "file:" || document.location.hostname.toLowerCase().indexOf("tribalfusion") != -1 || document.location.hostname.toLowerCase().indexOf("fireflyvideo") != -1) {
			alert("Javascript and flash version mismatch.");
			tf_hideFloating8(id);
			return;
		}
	}
	var flash_object = tf_thisMovie(getVariableValue(id, "flashId"));
	try {
		if (flash_object) {
			setVariableValue(id, "flashLoadedTime", new Date().getTime());
			if (typeof(getVariableValue(id, "tf_FEVTestMode")) != "undefined" && getVariableValue(id, "tf_FEVTestMode") == true) {
				tf_firePixelFEV6(id, getVariableValue(id, "tf_flashLoadedPixel_test") + new Date().getTime());
			}
			if(typeof(getVariableValue(id, "engagementTime")) != "undefined") {
				tf_firePixelFEV6(id, getVariableValue(id, "tf_flashLoadedPixel"), false, new Date().getTime() - getVariableValue(id, "engagementTime"));
			} else {
				tf_firePixelFEV6(id, getVariableValue(id, "tf_flashLoadedPixel"), 0);
			}
			flash_object.sendXMLData(getVariableValue(id, "tf_fevObj").customXml);
		}
	} catch (ex) {
	}
	flash_object = tf_thisMovie(getVariableValue(id, "flashId") + "3");
	var zoomDiv = document.getElementById("zoomDiv" + id);
	zoomDiv.style.visibility = "visible";
	if (flash_object) {
		try {
			flash_object.getZoom();
		} catch (e) {
		}
	}
}

function tf_FEVCacheMainFL3(id) {
	var flash_object = tf_thisMovie(getVariableValue(id, "flashId") + "2");
	try {
		if(flash_object) {
			document.getElementById("mydiv" + id).style.visibility = "hidden";
		}
	} catch (ex) {
	}
}

function tf_FEVErrorHandling(status) {

}

var tf_text = "";

var tf_write = function(text) {
	tf_text += text;
};

var TF_hasRightVersionFloating = TF_DetectFlashVer(TF_requiredMajorVersion, TF_requiredMinorVersion, TF_requiredRevision);

if(tf_isFEVHosting == true) {
	//to do: code here
} else if (tf_floatingAdType != 2 && tf_floatingAdType != 4 && typeof(tf_flashfile) != "undefined") {
	if (TF_hasRightVersionFloating) {  // if we've detected an acceptable version
		if (tf_floatingAdType == 1 && typeof(tf_VASTXmlFEV) != "undefined" && tf_VASTXmlFEV != "") {
			tf_write("<div id='TFFEVMainDiv" + tf_id + "' style='position:relative;width:" + tf_width + "px;height:" + tf_height + "px;'><div id='TFFEVTeaserDiv" + tf_id + "' style='z-index:2;position:absolute;width:" + tf_width + "px;height:" + tf_height + "px;'>");
		}
		var tf_flashVars = "";
		if (typeof(tf_extraFlashVars) != "undefined") {
			tf_flashVars = TF_GetFlashVars3(tf_extraFlashVars);
		} else {
			tf_flashVars = TF_GetFlashVars3();
		}

		// embed the flash movie
		tf_write(TF_AC_FL_RunContentFloating3(
				'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
				'width', tf_width,
				'height', tf_height,
				'src', 'banner',
				'quality', 'high',
				'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
				'align', 'middle',
				'play', 'true',
				'loop', 'true',
				'scale', 'showall',
				'wmode', tf_wmode,
				'devicefont', 'false',
				'id', TFclick,
				'bgcolor', tf_bgcolor,
				'name', TFclick,
				'menu', 'false',
				'allowFullScreen', 'false',
				'allowScriptAccess', tf_allowScriptAccess,
				'movie', tf_flashfile,
				'salign', tf_salign,
				'flashVars', tf_flashVars
				));
		//end AC code
		if (tf_floatingAdType == 1 && typeof(tf_VASTXmlFEV) != "undefined" && tf_VASTXmlFEV != "") {
			tf_write("</div><div id='TFFEVBannerDiv" + tf_id + "' style='z-index:1;position:absolute;width:" + tf_width + "px;height:" + tf_height + "px;display:none;'></div></div>");
		}
	} else {  // flash is too old or we can't detect the plugin
		tf_write('<a href="' + tf_clickTag + '" target="_blank">');
		tf_write('<img src="' + tf_imagefile + '" style="width:' + tf_width + 'px;height:' + tf_height + 'px;" border="0px"></a>');
	}
}

if (tf_floatingAdType == 1 && typeof(tf_flashfile) != "undefined") {
	setVariableValue(tf_id, "VASTFlash", TF_AC_FL_RunContentFloating3(
			'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
			'width', tf_width,
			'height', tf_height,
			'src', 'banner',
			'quality', 'high',
			'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
			'align', 'middle',
			'play', 'true',
			'loop', 'true',
			'scale', 'showall',
			'wmode', 'opaque',
			'devicefont', 'false',
			'id', TFclick + "2",
			'bgcolor', tf_bgcolor,
			'name', TFclick + "2",
			'menu', 'false',
			'allowFullScreen', 'false',
			'allowScriptAccess', 'never',
			'movie', 'tf_flashfile',
			'salign', tf_salign,
			'flashVars', 'tf_flashVars'
			));
	setVariableValue(tf_id, "VASTImage", '<img src="tf_imagefile" style="width:' + tf_width + 'px;height:' + tf_height + 'px;" border="0px">');
}

function TF_AC_GenerateobjFloating3(objAttrs, params, embedAttrs)
{
	var str = '';
	if (isIE && isWin && !isOpera)
	{
		str += '<object ';
		for (var i in objAttrs)
		{
			str += i + '="' + objAttrs[i] + '" ';
		}
		str += '>';
		for (var i in params)
		{
			str += '<param name="' + i + '" value="' + params[i] + '" /> ';
		}
		str += '</object>';
	}
	else
	{
		str += '<embed ';
		for (var i in embedAttrs)
		{
			str += i + '="' + embedAttrs[i] + '" ';
		}
		str += '> </embed>';
	}

	return str;
}

function TF_AC_FL_RunContentFloating3() {
	var ret =
			TF_AC_GetArgs
					(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
							, "application/x-shockwave-flash"
							);
	return TF_AC_GenerateobjFloating3(ret.objAttrs, ret.params, ret.embedAttrs);
}

function TF_AC_GetArgs(args, ext, srcParamName, classid, mimeType) {
	var ret = new Object();
	ret.embedAttrs = new Object();
	ret.params = new Object();
	ret.objAttrs = new Object();
	for (var i = 0; i < args.length; i = i + 2) {
		var currArg = args[i].toLowerCase();

		switch (currArg) {
			case "classid":
				break;
			case "pluginspage":
				ret.embedAttrs[args[i]] = args[i + 1];
				break;
			case "src":
			case "movie":
				args[i + 1] = TF_AC_AddExtension(args[i + 1], ext);
				ret.embedAttrs["src"] = args[i + 1];
				ret.params[srcParamName] = args[i + 1];
				break;
			case "onafterupdate":
			case "onbeforeupdate":
			case "onblur":
			case "oncellchange":
			case "onclick":
			case "ondblclick":
			case "ondrag":
			case "ondragend":
			case "ondragenter":
			case "ondragleave":
			case "ondragover":
			case "ondrop":
			case "onfinish":
			case "onfocus":
			case "onhelp":
			case "onmousedown":
			case "onmouseup":
			case "onmouseover":
			case "onmousemove":
			case "onmouseout":
			case "onkeypress":
			case "onkeydown":
			case "onkeyup":
			case "onload":
			case "onlosecapture":
			case "onpropertychange":
			case "onreadystatechange":
			case "onrowsdelete":
			case "onrowenter":
			case "onrowexit":
			case "onrowsinserted":
			case "onstart":
			case "onscroll":
			case "onbeforeeditfocus":
			case "onactivate":
			case "onbeforedeactivate":
			case "ondeactivate":
			case "type":
			case "codebase":
			case "id":
				ret.objAttrs[args[i]] = args[i + 1];
				break;
			case "width":
			case "height":
			case "align":
			case "vspace":
			case "hspace":
			case "class":
			case "title":
			case "accesskey":
			case "name":
			case "tabindex":
				ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
				break;
			default:
				ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
		}
	}
	ret.objAttrs["classid"] = classid;
	if (mimeType) ret.embedAttrs["type"] = mimeType;
	return ret;
}

function getVariableValue(id, name) {
	if (typeof(tf_variableManager) != "undefined") {
		return tf_variableManager[id][name];
	}
}

function setVariableValue(id, name, value) {
	if (typeof(tf_variableManager) == "undefined") {
		tf_variableManager = new Object();
	}
	if (typeof(tf_variableManager[id]) == "undefined") {
		tf_variableManager[id] = new Object();
	}
	tf_variableManager[id][name] = value;
}

var flashId = "TFFloatingFlash" + tf_id;
var divFixedId = "TFFloatingFixedDiv" + tf_id;
var divFlashId = "TFFloatingFlashDiv" + tf_id;
var dummyIFrameId = "TFFloatingDummyIFrame" + tf_id;
setVariableValue(tf_id, "flashId", flashId);
setVariableValue(tf_id, "divFixedId", divFixedId);
setVariableValue(tf_id, "divFlashId", divFlashId);
setVariableValue(tf_id, "dummyIFrameId", dummyIFrameId);

if (typeof(tf_floatingPosition) != "undefined") {
	setVariableValue(tf_id, "tf_floatingPosition", tf_floatingPosition);
} else {
	setVariableValue(tf_id, "tf_floatingPosition", "cc");
}

if (typeof(tf_floatingPreLoaded) != "undefined") {
	setVariableValue(tf_id, "tf_floatingPreLoaded", tf_floatingPreLoaded);
} else {
	setVariableValue(tf_id, "tf_floatingPreLoaded", true);
}

if (typeof(tf_floatingDelay) != "undefined") {
	setVariableValue(tf_id, "tf_floatingDelay", tf_floatingDelay * 1000);
} else {
	setVariableValue(tf_id, "tf_floatingDelay", 10000);
}

if (typeof(tf_floatingInterstitialDelay) != "undefined") {
	setVariableValue(tf_id, "tf_floatingInterstitialDelay", tf_floatingInterstitialDelay * 1000);
} else {
	setVariableValue(tf_id, "tf_floatingInterstitialDelay", 0);
}

if (typeof(tf_hidden_floatingReLoadByPlay) != "undefined") {
	setVariableValue(tf_id, "tf_hidden_floatingReLoadByPlay", tf_hidden_floatingReLoadByPlay);
} else {
	setVariableValue(tf_id, "tf_hidden_floatingReLoadByPlay", 1);
}

if (typeof(tf_engagementPixelFEV_TF) != "undefined") {
	setVariableValue(tf_id, "tf_engagementPixelFEV_TF", tf_FEVGetVariableValue(tf_engagementPixelFEV_TF, tf_FEVIndex));
	tf_engagementPixelFEV_TF = undefined;
} else {
	setVariableValue(tf_id, "tf_engagementPixelFEV_TF", "");
}

if (typeof(tf_flashLoadedPixel) != "undefined") {
	setVariableValue(tf_id, "tf_flashLoadedPixel", tf_FEVGetVariableValue(tf_flashLoadedPixel, tf_FEVIndex));
	tf_flashLoadedPixel = undefined;
} else {
	setVariableValue(tf_id, "tf_flashLoadedPixel", "");
}

if (typeof(tf_FEVTestMode) != "undefined" && tf_FEVTestMode == true) {
	setVariableValue(tf_id, "tf_FEVTestMode", true);
	if (typeof(tf_engagementPixelFEV_TF_test) != "undefined") {
		setVariableValue(tf_id, "tf_engagementPixelFEV_TF_test", tf_FEVGetVariableValue(tf_engagementPixelFEV_TF_test, tf_FEVIndex));
		tf_engagementPixelFEV_TF_test = undefined;
	}
	if (typeof(tf_xmlsLoadedFEV_test) != "undefined") {
		setVariableValue(tf_id, "tf_xmlsLoadedFEV_test", tf_FEVGetVariableValue(tf_xmlsLoadedFEV_test, tf_FEVIndex));
		tf_xmlsLoadedFEV_test = undefined;
	}
	if (typeof(tf_error_test) != "undefined") {
		setVariableValue(tf_id, "tf_error_test", tf_FEVGetVariableValue(tf_error_test, tf_FEVIndex));
		tf_error_test = undefined;
	}
	if (typeof(tf_flashLoadedPixel_test) != "undefined") {
		setVariableValue(tf_id, "tf_flashLoadedPixel_test", tf_FEVGetVariableValue(tf_flashLoadedPixel_test, tf_FEVIndex));
		tf_flashLoadedPixel_test = undefined;
	} else {
		setVariableValue(tf_id, "tf_flashLoadedPixel_test", "");
	}
}

if (typeof(tf_engagementPixelFEV_TP) != "undefined") {
	setVariableValue(tf_id, "tf_engagementPixelFEV_TP", tf_FEVGetVariableValue(tf_engagementPixelFEV_TP, tf_FEVIndex));
	tf_engagementPixelFEV_TP = undefined;
} else {
	setVariableValue(tf_id, "tf_engagementPixelFEV_TP", "");
}

i = 1;
while (eval("typeof(tf_engagementPixelFEV_TP" + i + ")") != "undefined") {
	setVariableValue(tf_id, "tf_engagementPixelFEV_TP" + i, tf_FEVGetVariableValue(eval("tf_engagementPixelFEV_TP" + i), tf_FEVIndex));
	eval("tf_engagementPixelFEV_TP" + i + " = undefined");
	i++;
}

if (typeof(tf_FEVVideoFile) != "undefined") {
	setVariableValue(tf_id, "tf_FEVVideoFile", tf_FEVVideoFile);
} else {
	setVariableValue(tf_id, "tf_FEVVideoFile", "");
}

if (typeof(tf_floatingAdType) == "undefined") {
	tf_floatingAdType = 0;
}

setVariableValue(tf_id, "tf_floatingAdType", tf_floatingAdType);

if (typeof(tf_videoBackgroundColorFEV) != "undefined") {
	setVariableValue(tf_id, "tf_videoBackgroundColorFEV", tf_videoBackgroundColorFEV);
} else {
	setVariableValue(tf_id, "tf_videoBackgroundColorFEV", "#000000");
}

if (typeof(tf_videoBackgroundOpacityFEV) != "undefined") {
	setVariableValue(tf_id, "tf_videoBackgroundOpacityFEV", tf_videoBackgroundOpacityFEV);
} else {
	setVariableValue(tf_id, "tf_videoBackgroundOpacityFEV", 50);
}

if (typeof(tf_showFloatingCallback) != "undefined") {
	setVariableValue(tf_id, "tf_showFloatingCallback", tf_showFloatingCallback);
}

if (typeof(tf_hideFloatingCallback) != "undefined") {
	setVariableValue(tf_id, "tf_hideFloatingCallback", tf_hideFloatingCallback);
}

if (TF_hasRightVersionFloating) {
	if (tf_floatingAdType == 1 || tf_floatingAdType == 2) {
		if (typeof(tf_VASTXmlFEV) == "undefined" || tf_VASTXmlFEV == "") {
			setVariableValue(tf_id, "tf_fevObj", new tf_FEV8(null, (typeof(tf_width) != "undefined")?tf_width:null, (typeof(tf_height) != "undefined")?tf_height:null, tf_id));
		} else {
			setVariableValue(tf_id, "tf_VASTXmlFEV", tf_VASTXmlFEV);
			i = 1;
			while (eval("typeof(tf_VASTXmlFEV" + i + ")") != "undefined") {
				setVariableValue(tf_id, "tf_VASTXmlFEV" + i, eval("tf_VASTXmlFEV" + i));
				i++;
			}
		}
		setVariableValue(tf_id, "tf_FEVLL", false);
		if (tf_floatingAdType != 2 && typeof(tf_flashfile) != "undefined") {
			setVariableValue(tf_id, "tf_width", tf_width);
			setVariableValue(tf_id, "tf_height", tf_height);
		}
	}

	tf_write("<!--[if gte IE 5]><script type='text/javascript'>var tf_oldIE = true;</script><![endif]-->");
	tf_write("<!--[if gt IE 6]><div style='width:2px;height:2px;position:absolute;visibility:hidden;top:-100px;left:-100px' id='dummyAbsDiv" + tf_id + "'><div style='width:1px;height:1px'></div><div style='width:1px;height:1px;top:0px;left:0px;position:fixed' id='dummyFixedDiv" + tf_id + "'></div></div><![endif]-->");

	if (is_mozilla) {
		tf_write("<div style='overflow:scroll;width:150px;height:150px;position:absolute;top:-8000px;left:-8000px' id='dummyScrollDiv" + tf_id + "'></div>");
	}

	var tf_new_load = new Function("tf_floatingLoad9('" + tf_id + "');");
	if (window.attachEvent) {
		window.attachEvent("onload", tf_new_load);
	} else {
		window.addEventListener("load", tf_new_load, false);
	}

	var tf_new_unload = new Function("tf_floatingUnload8('" + tf_id + "');");
	if (window.attachEvent) {
		window.attachEvent("onbeforeunload", tf_new_unload);
	} else {
		window.addEventListener("beforeunload", tf_new_unload, false);
	}

	if (tf_floatingAdType == 1 || tf_floatingAdType == 2) {
		var tf_keydown = new Function("event", "tf_keydownFloating(event, '" + tf_id + "');");
		if (window.attachEvent) {
			if(document.body) {
				document.body.attachEvent("onkeydown", tf_keydown);
				setVariableValue(tf_id, "bodykeydown", true);
			} else {
				setVariableValue(tf_id, "bodykeydown", false);
			}
		} else {
			window.addEventListener("keydown", tf_keydown, false);
		}
	}
}

function tf_keydownFloating(e, id) {
	if (e.keyCode == 27) {
		try {
			var flash_object = tf_thisMovie(getVariableValue(id, "flashId"));
			if (flash_object) {
				flash_object.goBack();
			}
		} catch (ex) {
		}
	}
}

if ((tf_floatingAdType == 2 && tf_isFEVHosting == false) || tf_floatingAdType == 4) { //Interstitial
	if (document.body) {
		setVariableValue(tf_id, "tf_floatingOnClickSet", true);
		if (document.body.onclick) {
			setVariableValue(tf_id, "tf_bodyClickFloatingPub", document.body.onclick);
		}
		if (isIE) {
			document.body.onclick = new Function("return tf_bodyClickFloating9(event, '" + tf_id + "');");
		} else {
			document.body.onclick = new Function("event", "return tf_bodyClickFloating9(event, '" + tf_id + "');");
		}
	} else {
		setVariableValue(tf_id, "tf_floatingOnClickSet", false);
	}
}

function tf_floatingLoad9(id) {
	if (typeof(getVariableValue(id, "tf_floatingLoaded")) != "undefined" && getVariableValue(id, "tf_floatingLoaded") == true) {
		return;
	}
	if(window.attachEvent && getVariableValue(id, "bodykeydown") == false) {
		document.body.attachEvent("onkeydown", tf_keydown);
		setVariableValue(id, "bodykeydown", true);
	}
	setVariableValue(id, "tf_floatingLoaded", true);
	var div_Element = document.getElementById(getVariableValue(id, "divFixedId"));
	var dummy_IFrameElement = document.getElementById(getVariableValue(id, "dummyIFrameId"));
	var zoomDiv = document.getElementById("zoomDiv" + id);
	zoomDiv.style.width = "100px";
	zoomDiv.style.height = "100px";
	var flash_object = tf_thisMovie(getVariableValue(id, "flashId") + "3");
	if(flash_object) {
		flash_object.width = 100;
		flash_object.height = 100;
	}
	if (dummy_IFrameElement) {
		var oDoc = dummy_IFrameElement.contentWindow || dummy_IFrameElement.contentDocument;
		if (typeof(oDoc) != "undefined") {
			if (oDoc.document) {
				oDoc = oDoc.document;
			}
			try {
				oDoc.body.attachEvent("onkeydown", new Function("event", "parent.tf_keydownFloating(event, '" + id + "');"));
			} catch (e) {
			}
		}
		if (dummy_IFrameElement.parentNode != document.body) {
			document.body.appendChild(dummy_IFrameElement);
		}
	} else {
		dummy_IFrameElement = new Object();
		dummy_IFrameElement.style = new Object();
	}
	if (div_Element.parentNode != document.body) {
		document.body.appendChild(div_Element);
	}
	if (zoomDiv.parentNode != document.body) {
		document.body.appendChild(zoomDiv);
	}
	var scrollDiv = document.getElementById("dummyScrollDiv" + id);
	if (is_mozilla && scrollDiv.parentNode != document.body) {
		document.body.appendChild(scrollDiv);
	}
	var position = getVariableValue(id, "tf_floatingPosition").split("");
	var x = position[0];
	var y = position[1];
	if (document.getElementById("dummyFixedDiv" + id)) {
		if (parseInt(document.getElementById("dummyFixedDiv" + id).offsetTop, 10) == 0) {
			tf_oldIE = false;
		}
		document.getElementById("dummyFixedDiv" + id).style.display = "none";
		document.getElementById("dummyAbsDiv" + id).style.display = "none";
	}
	if (typeof(tf_oldIE) != "undefined" && tf_oldIE == true) {
		div_Element.className = tf_getNewCss3(id, x, y);
		dummy_IFrameElement.className = div_Element.className;
		zoomDiv.className = tf_getNewCss3(id + "3", "l", "t", -40, -40);
	} else {
		div_Element.style.position = "fixed";
		dummy_IFrameElement.style.position = "fixed";
		zoomDiv.style.position = "fixed";
		zoomDiv.style.left = "-40px";
		zoomDiv.style.top = "-40px";
		if (x == "l") {
			div_Element.style.left = "0px";
			dummy_IFrameElement.style.left = "0px";
		} else if (x == "r") {
			div_Element.style.right = "0px";
			dummy_IFrameElement.style.right = "0px";
		} else {
			div_Element.style.left = "50%";
			div_Element.style.marginLeft = (-1) * parseInt(div_Element.style.width, 10) / 2 + "px";
			dummy_IFrameElement.style.left = "50%";
			dummy_IFrameElement.style.marginLeft = (-1) * parseInt(div_Element.style.width, 10) / 2 + "px";
		}

		if (y == "t") {
			div_Element.style.top = "0px";
			dummy_IFrameElement.style.top = "0px";
		} else if (y == "b") {
			div_Element.style.bottom = "0px";
			dummy_IFrameElement.style.bottom = "0px";
		} else {
			div_Element.style.top = "50%";
			div_Element.style.marginTop = (-1) * parseInt(div_Element.style.height, 10) / 2 + "px";
			dummy_IFrameElement.style.top = "50%";
			dummy_IFrameElement.style.marginTop = (-1) * parseInt(div_Element.style.height, 10) / 2 + "px";
		}
	}

	var tf_floatingAdType = getVariableValue(id, "tf_floatingAdType");
	if (tf_floatingAdType == 0) {
		if (getVariableValue(id, "tf_floatingPreLoaded") == true) {
			tf_showFloating9(id);
		}
	} else if (tf_floatingAdType == 1 || tf_floatingAdType == 2) {
		var videoDiv = document.createElement("div");
		var videoDivId = "TFFloatingVideoDiv" + id;
		videoDiv.id = videoDivId;
		if (isOpera) {
			videoDiv.style.zIndex = 2147483583;
		} else if (typeof(navigator.vendor) == "string" && navigator.vendor.indexOf("Apple") != -1) {
			videoDiv.style.zIndex = 16777269;
		}
		else {
			videoDiv.style.zIndex = 2147483645;
		}
		if (typeof(tf_oldIE) != "undefined" && tf_oldIE == true) {
			videoDiv.className = tf_getNewCss3(id + "2", "r", "b");
			videoDiv.style.width = Math.max(document.body.offsetWidth, screen.width) + "px";
			videoDiv.style.height = Math.max(document.body.offsetHeight, screen.height) + "px";
			dummy_IFrameElement.className = videoDiv.className;
			dummy_IFrameElement.width = Math.max(document.body.offsetWidth, screen.width) + "px";
			dummy_IFrameElement.height = Math.max(document.body.offsetHeight, screen.height) + "px";
		} else {
			if (is_mozilla) {
				videoDiv.style.position = "absolute";
				videoDiv.style.left = "0px";
				videoDiv.style.top = "0px";
				var dimensions = tf_floatingGetDimensions2(id);
				videoDiv.style.width = dimensions[0] + "px";
				videoDiv.style.height = dimensions[1] + "px";
				setVariableValue(id, "mozresize", new Function("var videoDiv = document.getElementById('TFFloatingVideoDiv' + '" + id + "');videoDiv.style.width='0px';videoDiv.style.height='0px';window.setTimeout('var dimensions = tf_floatingGetDimensions2(\\'" + id + "\\');var videoDiv = document.getElementById(\\'TFFloatingVideoDiv\\' + \\'" + id + "\\');videoDiv.style.width = dimensions[0] + \\'px\\';videoDiv.style.height = dimensions[1] + \\'px\\';', 100);"));
				window.addEventListener("resize", getVariableValue(id, "mozresize"), false);
			} else {
				videoDiv.style.position = "fixed";
				videoDiv.style.left = "0px";
				videoDiv.style.top = "0px";
				if(typeof(tf_isIE7) != "undefined" && tf_isIE7 == true) {
					var factor = getVariableValue(id, "factor");
					factor = 100 / factor;
					videoDiv.style.width = Math.max(document.body.offsetWidth, screen.width) + "px";
					videoDiv.style.height = Math.max(document.body.offsetHeight, screen.height) + "px";
					dummy_IFrameElement.width = Math.max(document.body.offsetWidth, screen.width) + "px";
					dummy_IFrameElement.height = Math.max(document.body.offsetHeight, screen.height) + "px";
				} else {
					videoDiv.style.width = "100%";
					videoDiv.style.height = "100%";
					dummy_IFrameElement.width = "100%";
					dummy_IFrameElement.height = "100%";
				}
				dummy_IFrameElement.style.position = "fixed";
				dummy_IFrameElement.style.left = "0px";
				dummy_IFrameElement.style.top = "0px";
			}
		}

		videoDiv.style.backgroundColor = getVariableValue(id, "tf_videoBackgroundColorFEV");
		videoDiv.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + getVariableValue(id, "tf_videoBackgroundOpacityFEV") + ")";
		videoDiv.style.opacity = getVariableValue(id, "tf_videoBackgroundOpacityFEV") / 100;
		videoDiv.style.MozOpacity = getVariableValue(id, "tf_videoBackgroundOpacityFEV") / 100;
		videoDiv.style.display = "none";
		setVariableValue(id, "videoDivId", videoDivId);
		document.body.appendChild(videoDiv);

		var FEVFrames = getVariableValue(id, "Frames");
		for (var i = 0; i < FEVFrames.length; i++) {
			var f = document.createElement("iframe");
			f.width = "1";
			f.height = "1";
			f.scrolling = "no";
			f.frameBorder = "0";
			f.border = "0";
			f.hSpace = "0";
			f.vSpace = "0";
			f.marginHeight = "0";
			f.marginWidth = "0";
			f.src = "about:blank";
			f.id = FEVFrames[i].id + "_f";
			f.style.position = "absolute";
			var d = document.createElement("div");
			d.id = FEVFrames[i].id;
			d.style.position = "absolute";
			d.style.overflow = "hidden";
			d.style.zIndex = 11;
			d.style.width = "1px";
			d.style.height = "1px";
			d.style.visibility = "hidden";
			div_Element.appendChild(d);
			var d2 = document.createElement("div");
			d2.id = FEVFrames[i].id + "_d";
			d2.style.position = "absolute";
			d2.style.left = "0px";
			d2.style.top = "0px";
			d.appendChild(d2);
			d2.appendChild(f);
		}

		var tf_isFEVHosting = getVariableValue(id, "tf_isFEVHosting");
		if(tf_isFEVHosting == true) {
			tf_showFloating9(id, 0);
			return;
		}
	}

	if ((tf_floatingAdType == 2 || tf_floatingAdType == 4) && getVariableValue(id, "tf_floatingOnClickSet") == false) {
		if (document.body.onclick) {
			setVariableValue(id, "tf_bodyClickFloatingPub", document.body.onclick);
		}
		if (isIE) {
			document.body.onclick = new Function("return tf_bodyClickFloating9(event, '" + id + "');");
		} else {
			document.body.onclick = new Function("event", "return tf_bodyClickFloating9(event, '" + id + "');");
		}
	}
}

function tf_floatingUnload8(id) {
	if(document.getElementById(getVariableValue(id, "divFixedId")).style.display == "none") {
		return;
	}
	var closes = new Array();
	var vids = getVariableValue(id, "tf_fevObj").customObj.Root.Video;
	if(typeof(vids.length) == "number") {
		for(var i = 0; i < vids.length; i++) {
			if(typeof(vids[i].Tracking) != "undefined" && typeof(vids[i].Tracking.Close) != "undefined") {
				closes.concat(vids[i].Tracking.Close);
			}
		}
	} else {
		if(typeof(vids.Tracking) != "undefined" && typeof(vids.Tracking.Close) != "undefined") {
			closes.concat(vids.Tracking.Close);
		}
	}

	for(var i = 0; i < closes.length; i++) {
		tf_firePixelFEV6(id, closes[i]);
	}
}

setVariableValue(tf_id, "factor", 100);

function tf_floatingAdjustForZoom2(id, factor) {
	if(factor == 0) {
		return;
	}
	setVariableValue(id, "factor", factor);
	factor = 100 / factor;
	var tf_widthFloating = getVariableValue(id, "tf_widthFloating");
	var tf_heightFloating = getVariableValue(id, "tf_heightFloating")
	var div_Element = document.getElementById(getVariableValue(id, "divFixedId"));
	var flashDiv = document.getElementById(getVariableValue(id, "divFlashId"));
	var flash_object = tf_thisMovie(getVariableValue(id, "flashId"));
	div_Element.style.width = tf_widthFloating * factor + "px";
	div_Element.style.height = tf_heightFloating * factor + "px";
	if(typeof(tf_oldIE) != "undefined" && tf_oldIE == true) {
		var videoDiv = document.getElementById("TFFloatingVideoDiv" + id);
		if (videoDiv) {
			videoDiv.style.width = Math.max(document.body.offsetWidth, screen.width) + "px";
			videoDiv.style.height = Math.max(document.body.offsetHeight, screen.height) + "px";
		}
		var dummy_IFrameElement = document.getElementById(getVariableValue(id, "dummyIFrameId"));
		if (dummy_IFrameElement){
			dummy_IFrameElement.width = Math.max(document.body.offsetWidth, screen.width) + "px";
			dummy_IFrameElement.height = Math.max(document.body.offsetHeight, screen.height) + "px";
		}
	} else {
		if(typeof(tf_isIE7) != "undefined" && tf_isIE7 == true) {
			var videoDiv = document.getElementById("TFFloatingVideoDiv" + id);
			videoDiv.style.width = Math.max(document.body.offsetWidth, screen.width) * factor + "px";
			videoDiv.style.height = Math.max(document.body.offsetHeight, screen.height) * factor + "px";
			var dummy_IFrameElement = document.getElementById(getVariableValue(id, "dummyIFrameId"));
			if(dummy_IFrameElement) {
				dummy_IFrameElement.width = Math.max(document.body.offsetWidth, screen.width) * factor + "px";
				dummy_IFrameElement.height = Math.max(document.body.offsetHeight, screen.height) * factor + "px";
			}
		}
		div_Element.style.marginLeft = (-1) * tf_widthFloating * factor / 2 + "px";
		div_Element.style.marginTop = (-1) * tf_heightFloating * factor / 2 + "px";
	}
	if(typeof(getVariableValue(id, "mozresize")) == "function") {
		getVariableValue(id, "mozresize")();
	}
	flashDiv.style.width = tf_widthFloating * factor + "px";
	flashDiv.style.height = tf_heightFloating * factor + "px";
	flash_object.width = tf_widthFloating * factor;
	flash_object.height = tf_heightFloating * factor;

	var tf_floatingAdType = getVariableValue(id, "tf_floatingAdType");
	if (tf_floatingAdType == 1 || tf_floatingAdType == 2) {
		if(typeof(getVariableValue(id, "Frames")) != "undefined") {
			var FEVFrames = getVariableValue(id, "Frames");
			for (var i = 0; i < FEVFrames.length; i++) {
				if(FEVFrames[i].x != undefined) {
					tf_showFEVFrame2(id, FEVFrames[i].id, FEVFrames[i].x * factor, FEVFrames[i].y * factor, FEVFrames[i].w * factor, FEVFrames[i].h * factor, (FEVFrames[i].t == -1)?-1:FEVFrames[i].t, (FEVFrames[i].r == -1)?-1:FEVFrames[i].r * factor, (FEVFrames[i].b == -1)?-1:FEVFrames[i].b * factor, (FEVFrames[i].l == -1)?-1:FEVFrames[i].l, false, FEVFrames[i].scrollValue, null);
				}
			}
		}
	}
}

function tf_floatingGetDimensions2(id) {
	var factor = getVariableValue(id, "factor");
	if(factor > 100) {
		factor = factor / 100;
	} else {
		factor = 1;
	}
	var scrollDiv = document.getElementById("dummyScrollDiv" + id);
	var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	var mywidth = Math.max(document.body.scrollWidth, window.innerWidth) * factor;

	if (document.body.scrollHeight > window.innerHeight) { //vertical srollbar
		mywidth -= scrollbarWidth;
	}

	var myheight = Math.max(document.body.scrollHeight, window.innerHeight) * factor;

	if (document.body.scrollWidth > window.innerWidth) { //horizontal srollbar
		myheight -= scrollbarWidth;
	}
	return [mywidth, myheight];
}

function tf_bodyClickFloating9(e, id) {
	if (typeof(getVariableValue(id, "tf_bodyClickFloatingPub")) == "function") {
		try {
			getVariableValue(id, "tf_bodyClickFloatingPub")();
		} catch(e) {
		}
	}
	var el;
	if (e.target)
		el = e.target;
	else
		el = e.srcElement;
	if ((el.tagName == 'A' || el.tagName == 'AREA') && el.href && tf_targetIsTopFloating(el.target)) { // consider target
		if (el.href.indexOf("javascript:") != -1 || el.href.indexOf("mailto:") != -1 || el.href == "#") {
			return true;
		}
		if (el.onclick)
			return true;
		setVariableValue(id, "href", el.href);
		tf_showFloating9(id, 0);
		return false;
	}
	return true;
}

function tf_targetIsTopFloating(target) {
	if (!target) {
		var t = document.getElementsByTagName("BASE");
		if (t && t.length > 0 && t[0].target) {
			return targetIsTop(t[0].target);
		}
		return window == top;
	}
	if (target == '_top') {
		return true;
	}
	if (target == '_parent') {
		return window.parent == top;
	}
	if (target == '_self') {
		return window == top;
	}
	for (w = window; w && w != w.top; w = w.parent) {
		if (w.name == target) {
			return w == w.top;
		}
	}
	return false;
}

function tf_hideFloating8(id) {
	var div_Element = document.getElementById(getVariableValue(id, "divFixedId"));
	var tf_floatingAdType = getVariableValue(id, "tf_floatingAdType");
	var zoomDiv = document.getElementById("zoomDiv" + id);
	zoomDiv.style.visibility = "hidden";
	if (tf_floatingAdType == 1 || tf_floatingAdType == 2) {
		var videoDiv = document.getElementById(getVariableValue(id, "videoDivId"));
		videoDiv.style.display = "none";
	}

	if (tf_floatingAdType == 2 || tf_floatingAdType == 4) {
		window.location = getVariableValue(id, "href");
	}

	div_Element.style.display = "none";

	if (tf_floatingAdType == 1 || tf_floatingAdType == 2) {
		if(typeof(getVariableValue(id, "Frames")) != "undefined") {
			var FEVFrames = getVariableValue(id, "Frames");
			for (var i = 0; i < FEVFrames.length; i++) {
				try {
					tf_hideFEVFrame2(id, FEVFrames[i].id, true);
				} catch (e) {
				}
			}
		}
		var flash_object = tf_thisMovie("TFclick" + id);
		try {
			if(flash_object) {
				flash_object.setMouseEnabled(true);
			}
		} catch (e) {
		}
	}

	var dummy_IFrameElement = document.getElementById(getVariableValue(id, "dummyIFrameId"));
	if (dummy_IFrameElement) {
		dummy_IFrameElement.style.display = "none";
	}

	var flash_object = tf_thisMovie(getVariableValue(id, "flashId"));
	
	if (getVariableValue(id, "tf_hidden_floatingReLoadByPlay") == 1) {
		window.setTimeout("document.getElementById(getVariableValue('" + id + "', 'divFlashId')).innerHTML = ''", 100);
	} else if (getVariableValue(id, "tf_hidden_floatingReLoadByPlay") == 2) {
		try {
			flash_object.StopPlay();
		} catch (e) {
		}
	}

	if (typeof(getVariableValue(id, "tf_hideFloatingCallback")) == "function") {
		getVariableValue(id, "tf_hideFloatingCallback")();
	}
}

function tf_showFloating9(id, type, doReload) {
	tf_floatingLoad9(id);
	var div_Element = document.getElementById(getVariableValue(id, "divFixedId"));
	var flash_object = tf_thisMovie(getVariableValue(id, "flashId") + "3");
	var zoomDiv = document.getElementById("zoomDiv" + id);
	zoomDiv.style.visibility = "visible";
	if (flash_object) {
		try {
			flash_object.getZoom();
		} catch (e) {
		}
	}
	var tf_floatingAdType = getVariableValue(id, "tf_floatingAdType");
	if (tf_floatingAdType == 0 || tf_floatingAdType == 2 || tf_floatingAdType == 4) {
		var t = getVariableValue(id, "tf_hideFloating8");
		if (typeof(t) != "undefined") {
			window.clearTimeout(t);
			setVariableValue(id, "tf_hideFloating8");
		}
	}
	if (getVariableValue(id, "tf_floatingAdType") == 1 || getVariableValue(id, "tf_floatingAdType") == 2) {
		var videoDiv = document.getElementById(getVariableValue(id, "videoDivId"));
		videoDiv.style.display = "";
	}

	if (typeof(doReload) == "undefined" || doReload == true) {
		var innerHTML = getVariableValue(id, "innerHTML");
		if (getVariableValue(id, "tf_hidden_floatingReLoadByPlay") == 1) {
			document.getElementById(getVariableValue(id, "divFlashId")).innerHTML = innerHTML;
		} else if (getVariableValue(id, "tf_hidden_floatingReLoadByPlay") == 2) {
			var flash_object = tf_thisMovie(getVariableValue(id, "flashId"));
			if (flash_object) {
				try {
					flash_object.GotoFrame(1);
					flash_object.Play();
				} catch (e) {
				}
			}
		}
	}

	div_Element.style.display = "";

	var dummy_IFrameElement = document.getElementById(getVariableValue(id, "dummyIFrameId"));
	if (dummy_IFrameElement) {
		dummy_IFrameElement.style.display = "";
	}

	var tf_floatingAdType = getVariableValue(id, "tf_floatingAdType");
	var tf_isFEVHosting = getVariableValue(id, "tf_isFEVHosting");
	if ((tf_floatingAdType == 0 || tf_floatingAdType == 2 || tf_floatingAdType == 4) && tf_isFEVHosting == false) {
		var delay = getVariableValue(id, "tf_floatingDelay");
		if(tf_floatingAdType == 2 || tf_floatingAdType == 4) {
			delay = getVariableValue(id, "tf_floatingInterstitialDelay");
		}
		if (delay != 0) {
			setVariableValue(id, "tf_hideFloating8", window.setTimeout("tf_hideFloating8('" + id + "');", delay));
		}
	}

	if (tf_floatingAdType == 1 || tf_floatingAdType == 2) {
		tf_fireEngagementPixelFEV7(id, type);
		var flash_object = tf_thisMovie("TFclick" + id);
		try {
			if(flash_object) {
				flash_object.setMouseEnabled(false);
			}
		} catch (e) {
		}
	}

	if (typeof(getVariableValue(id, "tf_showFloatingCallback")) == "function") {
		getVariableValue(id, "tf_showFloatingCallback")();
	}
}

function tf_getNewCss3(id, x, y, offSetX, offSetY) {
	if(typeof(offSetX) == "undefined") {
		offSetX = 0;
	}
	
	if(typeof(offSetY) == "undefined") {
		offSetY = 0;
	}
	var left = x;
	var top = y;
	if (x == "l") {
		left = "expression((" + offSetX + "+(ignoreMe=document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft))+'px')";
	} else if (x == "r") {
		left = "expression((" + offSetX + "-this.offsetWidth+(document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth)+(ignoreMe=document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft))+'px')";
	} else if (x == "c")  {
		left = "expression((" + offSetX + "+((document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.clientWidth)-this.offsetWidth)/2+(ignoreMe=document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft))+'px')";
	}

	if (y == "t") {
		top = "expression((" + offSetY + "+(ignoreMe=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop))+'px');";
	} else if (y == "b") {
		top = "expression((" + offSetY + "-this.offsetHeight+(document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight)+(ignoreMe=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop))+'px')";
	} else if (y == "c")  {
		top = "expression((" + offSetY + "+((document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight)-this.offsetHeight)/2+(ignoreMe=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop))+'px')";
	}

	var style = document.createElement('style');
	var cssClassName = "TFFloatingCSSClassName" + id.replace(/\$/g, "");
	style.setAttribute("type", "text/css");
	var def = "." + cssClassName + "{position: absolute;top:" + top + ";left:" + left + "}";
	if (style.styleSheet) {
		style.styleSheet.cssText = def;
	} else {
		style.appendChild(document.createTextNode(def));
	}
	document.getElementsByTagName('head')[0].appendChild(style);
	return cssClassName;
}

function tf_fireEngagementPixelFEV7(id, type) {
	var tf_isFEVHosting = getVariableValue(id, "tf_isFEVHosting");

	if(tf_isFEVHosting == false) {
		setVariableValue(id, "engagementTime", new Date().getTime());
		tf_firePixelFEV6(id, getVariableValue(id, "tf_engagementPixelFEV_TF"));
		if (typeof(getVariableValue(id, "tf_engagementPixelFEV_TF_test")) != "undefined") {
			tf_firePixelFEV6(id, getVariableValue(id, "tf_engagementPixelFEV_TF_test") + new Date().getTime() + "&engagementType=" + type);
		}
		//if (typeof(getVariableValue(id, "tf_VASTXmlFEV")) == "undefined" || getVariableValue(id, "tf_VASTXmlFEV") == "") {
			tf_firePixelFEV6(id, getVariableValue(id, "tf_engagementPixelFEV_TP"));
			var i = 1;
			while (typeof(getVariableValue(id, "tf_engagementPixelFEV_TP" + i)) != "undefined") {
				tf_firePixelFEV6(id, getVariableValue(id, "tf_engagementPixelFEV_TP" + i));
				i++;
			}
		//}
	}
}

function et_firePixelFEV6(id, url) {
	tf_firePixelFEV6(id, url);
}

function tf_firePixelFEV6(id, url, multipleFire, timeDifference, isLoading) {
	if(typeof(url) == "undefined" || url == "") {
		return;
	}

	if(typeof(timeDifference) == "undefined") {
		if(typeof(getVariableValue(id, "flashLoadedTime")) == "undefined") {
			timeDifference = 0;
		} else {
			timeDifference = new Date().getTime() - getVariableValue(id, "flashLoadedTime");
		}
	}

	if(typeof(isLoading) == "undefined") {
		isLoading = false;
	}

	if(typeof(multipleFire) != "undefined" && multipleFire == true) {
		url = url.replace(/@TIMEDIFFERENCE@/g, timeDifference);
		if(typeof(tf_isIE7) != "undefined" && tf_isIE7 == true) {
			if(document.body) {
				var img = document.createElement("img");
				img.src = url;
				img.style.width = "1px";
				img.style.height = "1px";
				img.style.display = "none";
				document.body.appendChild(img);
			} else if(isLoading) {
				document.write("<img src='" + url + "' style='width:1px;height:1px;display:none'>");
			}
		} else {
			var img = new Image();
			img.src = url;
		}
		return;
	}

	var hash = 0;
	for (var i = 0; i < url.length; i++) {
		hash = 31 * hash + url.charCodeAt(i);
		while(hash > 2147483647) {
			hash -= 4294967296;
		}

		while(hash < -2147483648) {
			hash += 4294967296;
		}
	}
	hash = "hash" + hash;
	hash = hash.replace("-", "k");

	var cancelFire = false;
	if(typeof(getVariableValue(id, hash)) == "undefined") {
		setVariableValue(id, hash, [url]);
	} else {
		for(var i = 0; i < getVariableValue(id, hash).length; i++) {
			if(getVariableValue(id, hash)[i] == url) {
				cancelFire = true;
				break;
			}
		}
		if(!cancelFire) {
			getVariableValue(id, hash).push(url);
		}
	}

	if(!cancelFire) {
		url = url.replace(/@TIMEDIFFERENCE@/g, timeDifference);
		if(typeof(tf_isIE7) != "undefined" && tf_isIE7 == true) {
			if(document.body) {
				var img = document.createElement("img");
				img.src = url;
				img.style.width = "1px";
				img.style.height = "1px";
				img.style.display = "none";
				document.body.appendChild(img);
			} else if(isLoading) {
				document.write("<img src='" + url + "' style='width:1px;height:1px;display:none'>");
			}
		} else {
			var img = new Image();
			img.src = url;
		}
	}
}

function et_openWindow(id, url) {
	tf_openWindow(id, url)
}

function tf_openWindow(id, url) {
	window.open(url, "_blank", "resizable=1,scrollbars=1,toolbar=1,location=1,menubar=1,titlebar=1");
}

function tf_fireImpressionPixelsFEV7(id, type) {
	var tf_isFEVHosting = getVariableValue(id, "tf_isFEVHosting");
	if(tf_isFEVHosting == false) {
		var tf_fevObj = getVariableValue(id, "tf_fevObj");
		var urls = tf_fevObj.customObj.Root.Impression.URL;
		if (typeof(urls) != "undefined") {
			if (typeof(urls.length) == "number") {
				for (var i = 0; i < urls.length; i++) {
					tf_firePixelFEV6(id, urls[i]["#text"]);
				}
			} else {
				tf_firePixelFEV6(id, urls["#text"]);
			}
		}

		urls = tf_fevObj.customObj.Root.Banner[type].Tracking;
		if (typeof(urls) != "undefined") {
			for (var m in urls) {
				if (m == "CreativeView") {
					var finalurls = urls[m].URL;
					if (typeof(finalurls) != "undefined") {
						if (typeof(finalurls.length) == "number") {
							for (var i = 0; i < finalurls.length; i++) {
								tf_firePixelFEV6(id, finalurls[i]["#text"]);
							}
						} else {
							tf_firePixelFEV6(id, finalurls["#text"]);
						}
					}
					break;
				}
			}
		}
	}
}

function tf_getSessionObject(id) {
	var obj = getVariableValue(id, "sessionObject");
	if(typeof(obj) == "undefined") {
		var obj = new Object();
		setVariableValue(id, "sessionObject", obj);
	}
	return obj;
}

function tf_setSessionData(id, key, value) {
	var obj = getVariableValue(id, "sessionObject");
	if(typeof(obj) == "undefined") {
		var obj = new Object();
		setVariableValue(id, "sessionObject", obj);
	}

	obj[key] = value;
	return obj;
}

function tf_authenticateSurvey(id) {
	var surveyId = getVariableValue(id, "surveyId");
	var isAuthenticated = getVariableValue(id, "isSurveyAuthenticated");
	if(typeof(isAuthenticated) == "undefined") {
		setVariableValue(id, "isSurveyAuthenticated", false);
		return true;
	}

	return false;
}

function tf_thisMovie(movieName) {
	if (isIE) {
		return window[movieName];
	} else {
		return document[movieName];
	}
}

function TF_GetFlashVarsFloating3(extraVars) {
	var flashVars = "";

	if (tf_floatingAdType != 1 && tf_floatingAdType != 2) {
		flashVars = "clickTag=" + escape(tf_clickTagFloating);
		flashVars += "&clickTAG=" + escape(tf_clickTagFloating);
		flashVars += "&clicktag=" + escape(tf_clickTagFloating);

		var i = 1;
		while (eval("typeof(tf_clickTagFloating" + i + ")") != "undefined") {
			flashVars += "&clickTag" + i + "=" + escape(eval("tf_clickTagFloating" + i));
			i++;
		}
	} else {
		flashVars = "clickTag=" + escape(tf_clickTag);
		flashVars += "&clickTAG=" + escape(tf_clickTag);
		flashVars += "&clicktag=" + escape(tf_clickTag);

		var i = 1;
		while (eval("typeof(tf_clickTag" + i + ")") != "undefined") {
			flashVars += "&clickTag" + i + "=" + escape(eval("tf_clickTag" + i));
			i++;
		}
	}

	flashVars += "&tf_flash=" + TF_AC_AddExtension(tf_adBannerFloating, ".swf");
	flashVars += "&tf_button=" + tf_button;
	flashVars += "&tf_state=" + tf_state;
	flashVars += "&tf_city=" + tf_city;
	flashVars += "&tf_zipcode=" + tf_zipcode;
	flashVars += "&tf_gender=" + tf_gender;
	flashVars += "&tf_location=" + tf_location;
	flashVars += "&tf_id=" + tf_id;

	if (typeof(extraVars) == "object") {
		for (i in extraVars) {
			flashVars += "&" + i + "=" + escape(extraVars[i]);
		}
	} else if (typeof(extraVars) == "string") {
		flashVars += "&" + extraVars;
	}
	return flashVars;
}

var tf_adBannerFloating = tf_flashfileFloating;

if (typeof(tf_use_flash_wrapperFloating) == "undefined") {
	tf_use_flash_wrapperFloating = false;
}

if (tf_use_flash_wrapperFloating) {
	tf_flashfileFloating = tf_loaderFlash;
}

if (typeof(tf_allowScriptAccessFloating) == "undefined") {
	tf_allowScriptAccessFloating = "always";
}

if (typeof(tf_salignFloating) == "undefined") {
	tf_salignFloating = "lt";
}

if (typeof(tf_bgcolorFloating) == "undefined") {
	tf_bgcolorFloating = "#ffffff";
}

if (typeof(tf_wmodeFloating) == "undefined") {
	tf_wmodeFloating = "transparent";
}


if (TF_hasRightVersionFloating) {
	tf_write("<!--[if lt IE 7]><IFRAME id='" + dummyIFrameId + "' style='border:none;display: none; position: absolute; z-index:2147483646;filter:alpha(opacity=0);' src='javascript:false;' frameBorder='0' scrolling='no' width='" + tf_widthFloating + "px' height='" + tf_heightFloating + "px' hSpace = '0' vSpace = '0' marginHeight = '0' marginWidth = '0'></IFRAME><![endif]-->");
}

tf_write("<div id='" + divFixedId + "' style='width:" + tf_widthFloating + "px;height:" + tf_heightFloating + "px;z-index:2147483647;padding:0px;display:none;'>");
tf_write("<div id='" + divFlashId + "' style='width:" + tf_widthFloating + "px;height:" + tf_heightFloating + "px;z-index:10;padding:0px;'>");
if (TF_hasRightVersionFloating) {  // if we've detected an acceptable version
	var tf_flashVars = "";
	if (typeof(tf_extraFlashVarsFloating) != "undefined") {
		tf_flashVars = TF_GetFlashVarsFloating3(tf_extraFlashVarsFloating);
	} else {
		tf_flashVars = TF_GetFlashVarsFloating3();
	}

	var innerHTML = TF_AC_FL_RunContentFloating3(
			'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
			'width', tf_widthFloating,
			'height', tf_heightFloating,
			'src', 'banner',
			'quality', 'high',
			'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
			'align', 'middle',
			'play', 'true',
			'loop', 'true',
			'scale', 'showall',
			'wmode', tf_wmodeFloating,
			'devicefont', 'false',
			'id', flashId,
			'bgcolor', tf_bgcolorFloating,
			'name', flashId,
			'menu', 'false',
			'allowFullScreen', tf_floatingAdType == 1 || tf_floatingAdType == 2,
			'allowScriptAccess', tf_allowScriptAccessFloating,
			'movie', tf_flashfileFloating,
			'salign', tf_salignFloating,
			'flashVars', tf_flashVars
			);

	if(tf_floatingAdType == 1 || tf_floatingAdType == 2) {
		setVariableValue(tf_id, "cache", TF_AC_FL_RunContentFloating3(
			'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
			'width', 1,
			'height', 1,
			'src', 'banner',
			'quality', 'high',
			'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
			'align', 'middle',
			'play', 'true',
			'loop', 'true',
			'scale', 'showall',
			'wmode', tf_wmodeFloating,
			'devicefont', 'false',
			'id', flashId + "2",
			'bgcolor', tf_bgcolorFloating,
			'name', flashId + "2",
			'menu', 'false',
			'allowFullScreen', tf_floatingAdType == 1 || tf_floatingAdType == 2,
			'allowScriptAccess', tf_allowScriptAccessFloating,
			'movie', tf_flashfileFloating,
			'salign', tf_salignFloating,
			'flashVars', "tf_flashLoaded=_FEVCacheMainFL3"
			));
	}
	if (getVariableValue(tf_id, "tf_hidden_floatingReLoadByPlay") == 1) {
		setVariableValue(tf_id, "innerHTML", innerHTML);
	} else {
		tf_write(innerHTML);
	}

} else {  // flash is too old or we can't detect the plugin
	//tf_write('<a href="' + tf_clickTagFloating + '" target="_blank">');
	//tf_write('<img src="' + tf_imagefileFloating + '" style="width:' + tf_widthFloating + 'px;height:' + tf_heightFloating + 'px;" border="0px"></a>');
}
tf_write("</div>");
tf_write("</div>");
if (TF_hasRightVersionFloating) {
	tf_write("<div id='zoomDiv" + tf_id + "' style='width:1px;height:1px;z-index:2147483647;overflow:hidden;clip:rect(40px 48px 48px 40px);visibility:hidden'>");
	tf_write(TF_AC_FL_RunContentFloating3(
				'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
				'width', '1',
				'height', '1',
				'src', 'banner',
				'quality', 'high',
				'pluginspage', 'http://www.macromedia.com/go/getflashplayer',
				'play', 'true',
				'loop', 'true',
				'scale', 'noorder',
				'wmode', 'transparent',
				'devicefont', 'false',
				'id', flashId + '3',
				'bgcolor', '#ffffff',
				'name', flashId + '3',
				'menu', 'false',
				'allowFullScreen', false,
				'allowScriptAccess', "always",
				'movie', tf_zoomFlash,
				'flashVars', 'tf_id=' + tf_id + '&tf_zoomFunction=tf_floatingAdjustForZoom2'
			));
	tf_write("</div>");
}

document.write(tf_text);

//Clean up
var tf_use_flash_wrapper = undefined;
var tf_allowScriptAccess = undefined;
var tf_salign = undefined;
var tf_extraFlashVars = undefined;
var tf_bgcolor = undefined;
var tf_wmode = undefined;

i = 1;
while (eval("typeof(tf_clickTag" + i + ")") != "undefined") {
	eval("tf_clickTag" + i + " = undefined");
	i++;
}
//----------------------------------
var tf_floatingPosition = undefined;
var tf_floatingPreLoaded = undefined;
var tf_use_flash_wrapperFloating = undefined;
var tf_allowScriptAccessFloating = undefined;
var tf_salignFloating = undefined;
var tf_extraFlashVarsFloating = undefined;
var tf_bgcolorFloating = undefined;
var tf_wmodeFloating = undefined;
var tf_floatingDelay = undefined;
var tf_hidden_floatingReLoadByPlay = undefined;
var tf_floatingAdType = undefined;
var tf_videoBackgroundColorFEV = undefined;
var tf_videoBackgroundOpacityFEV = undefined;
var tf_floatingInterstitialDelay = undefined;
var tf_engagementPixelFEV_TF = undefined;
var tf_flashLoadedPixel = undefined;
var tf_FEVVideoFile = undefined;

var tf_showFloatingCallback = undefined;
var tf_hideFloatingCallback = undefined;
var tf_VASTXmlFEV = undefined;

var tf_ignoreVASTVideos = undefined;
var tf_ignoreVASTClicks = undefined;
var tf_ignoreVASTBanner = undefined;
var tf_FEVTestMode = undefined;

var tf_isFEVHosting = undefined;
var tf_teaserVideo = undefined;
var tf_FEVMailServer = undefined;
var tf_FEVMailCaptchaUrl = undefined;
var tf_FEVMailFilePath = undefined;
var tf_FEVMailSubject = undefined;
var tf_FEVMailBody = undefined;
var tf_FEVMailMessage = undefined;
var tf_FEVMailLogo = undefined;
var tf_FEVMailShareEmailAddress = undefined;
var tf_flashfile = undefined;
var tf_FEVDisableCache = undefined;
var tf_FEVData = undefined;
var tf_bandWidthCheckTeaser = undefined;
var tf_bandWidthCheckMainFEV = undefined;
var tf_minPlayedForSurvey = undefined;
var tf_surveyOnCompletion = undefined;
var tf_surveyEnabled = undefined;
var tf_surveyType = undefined;
var tf_surveyLanguage = undefined;
var tf_surveyButtonYesText = undefined;
var tf_surveyButtonNoText = undefined;
var tf_surveyButtonSubmitText = undefined;
var tf_surveyPermissionEnabled = undefined;
var tf_surveyParameter = undefined;
var tf_surveyQuestionCount = undefined;
var tf_zoomFlash = undefined;

i = 1;
while (eval("typeof(tf_VASTXmlFEV" + i + ")") != "undefined") {
	eval("tf_VASTXmlFEV" + i + " = undefined");
	i++;
}

i = 1;
while (eval("typeof(tf_FEVVideoFile" + i + ")") != "undefined") {
	eval("tf_FEVVideoFile" + i + " = undefined");
	i++;
}

i = 1;
while (eval("typeof(tf_clickTagFloating" + i + ")") != "undefined") {
	eval("tf_clickTagFloating" + i + " = undefined");
	i++;
}

i = 1;
while (eval("typeof(tf_flashfile" + i + ")") != "undefined") {
	eval("tf_flashfile" + i + " = undefined");
	i++;
}