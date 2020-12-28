/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
function dependOn(){"use strict";return[require("communicate"),require("proxy"),require("common"),require("util"),require("analytics")]}var def;require=function(e){"use strict";return e},def=window.define?window.define:function(e,t){"use strict";return t.apply(null,[{ajax:$.ajax.bind($)}])};var exports=acom_analytics={};def(dependOn(),(function(e,t,i,s,n){"use strict";var o,a,r=null,h=!1,c=2,l=13,T=[0,1,c,l,14],g=[c=2,11,12,l=13];for(o in a=function(){return e.getModule("acro-gstate")},r||(r=new function(){var o=[];function r(e){var t;for(t=0;t<o.length;t+=1)if(o[t].tabId===e)return o[t];return null}function E(e){return(e=e||chrome.i18n.getMessage("web2pdfUntitledFileName")).replace(/[<>?:|\*"\/\\'&\.]/g,"")}this.proxy=t.proxy.bind(this),this.LOG=i.LOG,this.UNSET=0,this.OPEN_IN_ACROBAT=1,this.APPEND=2,this.CONVERT_PAGE=4,this.CONVERT_LINK=8,this.CONVERT_SELECTION=16,this.PRINT=32,this.EMAIL=64,this.CALLER_TOOLBAR=128,this.CLEAN_FILE_ON_FAILURE=256,this.STATUS_WAITING=1e4,this.STATUS_DOWNLOADING=10001,this.STATUS_CONVERTING=10002,this.STATUS_SUCCESS=10003,this.STATUS_ERROR=10004,this.STATUS_NOINSTANCE=10005,this.STATUS_FILELOCKED=10006,this.STATUS_NOACROBAT=10007,this.STATUS_CANCELLED=10008,this.STATUS_FILE_OPENED=10100,this.STATUS_FILE_OPEN_FAILED=10101,this.STATUS_ERROR_JS=10110,this.STATUS_ERROR_HOST=10111,this.STATUS_ERROR_TRY=11e3,this.STATUS_ERROR_DOM=11001,this.imagePromise=null,this.errorHandler=function(){try{if(0===o.length)return;this.Done(o[0].tabId,this.STATUS_ERROR_JS,null,s.getTranslation("web2pdfHTMLJSError"))}catch(e){}},t.handlers(this.errorHandler.bind(this)),this.Done=function(e,t,i,s){if(-1===e){if(0===o.length)return;e=o[0].tabId}this.setStatus(e,t,i,s),this.nextConversion(e)},this.nextConversion=function(e){var t;for(t=0;t<o.length;t+=1)o[t].tabId===e&&o.splice(t,1);o.length>0&&o[0].start.resolve(o[0]),this.exitShim()},this.cancelConversion=function(e){var t;for(t=0;t<o.length;t+=1)o[t].tabId===e&&(o[t].start&&o[t].start.reject(),o.splice(t,1))},this.addConversion=function(e,t){return e.start=s.Deferred(),o.push(e),1===o.length?e.start.resolve(e):t&&t(),e.start},this.setStatus=function(t,i,o,a){var h,c=r(t)||this.openPDFRequest,l=new Date;s.consoleLog("setStatus: "+t+" status: "+i),c?(c.timing||(c.timing=[]),i===this.STATUS_WAITING?(h="waiting",n.event(n.e.TREFOIL_HTML_CONVERT_WAITING),c.timing.push({stage:"WAIT",start_time:l.getTime()})):i===this.STATUS_DOWNLOADING?(n.event(n.e.TREFOIL_HTML_CONVERT_DOWNLOADING),h="downloading",this.logTiming(c.timing,"WAIT")):i===this.STATUS_CONVERTING?(n.event(n.e.TREFOIL_HTML_CONVERT_IN_PROGRESS),h="in_progress",this.logTiming(c.timing,"USER_PROMPT"),c.timing.push({stage:"CONVERT",start_time:l.getTime()})):i===this.STATUS_SUCCESS?(n.event(n.e.TREFOIL_HTML_CONVERT_COMPLETE),h="complete",this.logTiming(c.timing,"CONVERT")):i===this.STATUS_ERROR?(n.event(n.e.TREFOIL_HTML_CONVERT_FAILED),h="failure"):i===this.STATUS_ERROR_JS?(n.event(n.e.TREFOIL_HTML_CONVERT_FAILED_JS),h="failure"):i===this.STATUS_ERROR_TRY?(n.event(n.e.TREFOIL_HTML_CONVERT_FAILED_TRY),h="failure"):i===this.STATUS_ERROR_DOM?(n.event(n.e.TREFOIL_HTML_CONVERT_FAILED_DOM),h="failure"):i===this.STATUS_ERROR_HOST?(n.event(n.e.TREFOIL_HTML_CONVERT_FAILED_HOST),h="failure"):i===this.STATUS_CANCELLED?(n.event(n.e.TREFOIL_HTML_CONVERT_CANCELLED),h="cancelled",this.logTiming(c.timing,"USER_PROMPT")):i===this.STATUS_NOACROBAT?(n.event(n.e.TREFOIL_HTML_CONVERT_NO_ACROBAT),h="noacrobat"):i===this.STATUS_FILELOCKED?h="filelocked":i===this.STATUS_FILE_OPENED?(c.version===SETTINGS.READER_VER?c.newUI?n.event(n.e.PERSIST_PDF_DOWNLOAD_OPENED_READER):n.event(n.e.TREFOIL_PDF_DOWNLOAD_OPENED_READER):c.newUI?n.event(n.e.PERSIST_PDF_DOWNLOAD_OPENED):n.event(n.e.TREFOIL_PDF_DOWNLOAD_OPENED),h="pdf_opened"):i===this.STATUS_FILE_OPEN_FAILED?(c.version===SETTINGS.READER_VER?n.event(n.e.TREFOIL_PDF_DOWNLOAD_OPEN_FAILED_READER):n.event(n.e.TREFOIL_PDF_DOWNLOAD_OPEN_FAILED),h="pdf_open_failed"):(s.consoleLog("Unexpected status: "+i),h="unknown"),c.panel_op="status",c.current_status=h,o&&(c.file_path=o),a&&(c.message=a),e.deferMessage(c)):s.consoleLog("failed to find conversion for tabId: "+t)},this.nativeMessageCallback=function(e){var t,i;"setStateCallback"===e.messageType?this.setStatus(+e.conversionID,+e.state):"doneCallback"===e.messageType?(e.filePath&&(t=s.atob16(e.filePath)),this.Done(+e.conversionID,+e.state,t)):"getMessageCallback"===e.messageType?this.sendMessageToNative({message:(i=e.msgIDStr,chrome.i18n.getMessage(i)||chrome.i18n.getMessage("web2pdfStatusError"))}):"saveSuccessCallback"===e.messageType?(t=s.atob16(e.path),this.imagePromise.resolve(t)):"saveFailureCallback"===e.messageType?(s.consoleLogDir("failed to save image"),this.imagePromise.reject()):"shimVersionInfo"===e.messageType?this.versionCallback&&(this.versionCallback(e),delete this.versionCallback):"fileOpenCallback"===e.messageType&&(0==+e.state?this.setStatus(0,this.STATUS_FILE_OPENED):this.setStatus(0,this.STATUS_FILE_OPEN_FAILED),this.openPDFRequest&&(this.nextConversion(this.openPDFRequest.tabId),delete this.openPDFRequest))},this.init=function(){this.m_NativeConnectionPort=chrome.runtime.connectNative("com.adobe.acrobat.chrome_webcapture"),this.m_NativeConnectionPort.onMessage.addListener(this.proxy(this.nativeMessageCallback)),this.m_NativeConnectionPort.onDisconnect.addListener(this.proxy((function(){var e=this.STATUS_ERROR;"Specified native messaging host not found."===chrome.runtime.lastError.message&&(this.versionCallback&&(this.versionCallback({messageType:"shimVersionInfo",majorVersion:"0",minorVersion:"0"}),delete this.versionCallback),e=this.STATUS_NOACROBAT),"Native host has exited"===chrome.runtime.lastError.message&&(e=this.STATUS_ERROR_HOST),this.m_NativeConnectionPort=null,this.Done(-1,e)})))},this.sendMessageToNative=function(t){e.legacyShim()&&t.task&&-1===T.indexOf(t.task)?s.consoleLog("Skipping task: "+t.task+" in legacy shim"):(this.m_NativeConnectionPort||this.init(),this.m_NativeConnectionPort.postMessage(t),-1!==g.indexOf(t.task)&&setTimeout(this.proxy((function(){this.exitShim()})),1e3))},this.exitShim=function(){0===o.length&&this.sendMessageToNative({task:14})},this.getVersion=function(e){this.versionCallback=e,this.sendMessageToNative({task:l})},this.openInAcrobat=function(t){t.newUI&&e.resetPersistPrefCount(),this.addConversion(t).then(this.proxy((function(e){this.openPDFRequest=e,this.sendMessageToNative({task:12,pdfData:e.base64PDF.split(",")[1],fileName:e.filename,paramName:e.paramName}),n.checkAndLogPDFSize(e.base64PDF.length/1048576),delete e.base64PDF})))},this.openFile=function(e){0===o.length&&this.sendMessageToNative({task:11,filePath:e.file_path})},this.SendForConversion=function(e,t){try{var i,s=new Date;i=0!=(e.conversionSettings&this.APPEND)?1:0,t.timing||(t.timing=[]),t.timing.push({stage:"USER_PROMPT",start_time:s.getTime()}),t.outputPath?0===t.action?this.sendMessageToNative({task:3,conversionID:t.tabId,domData:e.domData,conversionSettings:e.conversionSettings,charset:e.charset,url:e.url,docTitle:e.domtitle,outputPath:t.outputPath}):1===t.action&&this.sendMessageToNative({task:4,conversionID:t.tabId,domData:e.domData,conversionSettings:e.conversionSettings,charset:e.charset,url:e.url,docTitle:e.domtitle,outputPath:t.outputPath}):this.sendMessageToNative({task:i,conversionID:t.tabId,domData:e.domData,conversionSettings:e.conversionSettings,charset:e.charset,url:e.url,docTitle:e.domtitle})}catch(e){this.Done(t.tabId,this.STATUS_ERROR_TRY)}},this.showConversionSettingsDialog=function(){0===o.length&&this.sendMessageToNative({task:c})},this.convertToPDF=function(e,t){e.conversionSettings=this.UNSET,a().getViewResultsPreferenceState()&&(e.conversionSettings|=this.OPEN_IN_ACROBAT),e.action===a().web2pdfAction.APPEND?e.conversionSettings|=this.APPEND:e.conversionSettings|=this.CLEAN_FILE_ON_FAILURE,e.context===a().web2pdfContext.PAGE&&(e.conversionSettings|=this.CONVERT_PAGE),e.caller===a().web2pdfCaller.TOOLBAR?e.conversionSettings|=this.CALLER_TOOLBAR:e.context===a().web2pdfContext.LINK&&(e.conversionSettings|=this.CONVERT_LINK),this.SendForConversion(e,t)},this.processImages=function(e,t,i){var n=e.blob.refs[t],o=new Date;return e.timing||(e.timing=[]),e.imagesComplete||(e.imagesComplete=s.Deferred()),this.imagePromise=s.Deferred(),t>=e.blob.refs.length?(this.imagePromise.resolve(),e.imagesComplete.resolve(),this.imagePromise):(n.data&&"data:"!==n.data?"image"===n.type?(h||(e.timing.push({stage:"SEND_IMAGES",start_time:o.getTime()}),h=!0),e.blob.refs.splice(t,1),this.sendMessageToNative({task:10,imagedata:n.data.split(",")[1],conversionID:e.tabId}),this.imagePromise.then(this.proxy((function(e){i.push("<AcroexchangeDownloadSeprator AcroexchangeDownloadUrl="+n.placeholder+"><FILEPATH>"+e+"</FILEPATH></AcroexchangeDownloadSeprator>")})),(function(){}))):(this.imagePromise.resolve(),t+=1):(e.blob.refs.splice(t,1),this.imagePromise.resolve()),this.imagePromise.done(this.proxy((function(){this.processImages(e,t,i)}))),this.imagePromise)},this.acro_html=function(e,t){var i,o,c;e.error?(s.consoleError(e.error),n.logError(e.error_analytics),this.Done(e.tabId,this.STATUS_ERROR_DOM,null,s.getTranslation(e.error))):(n.checkAndLogHTMLBlobSize(e.blob.currentSize/1048576),n.logContents(e),e.analytics&&n.setParamsAndLogAnalytics(e.analytics,n.e.HTML_SOURCE_CONTENT,"content"),n.setArg("stage","CLONE"),n.checkAndLogTimingRange(e.cloneTiming),(c=r(e.tabId)).blob=e.blob,o=[],h=!1,this.processImages(c,0,o),c.imagesComplete.then(this.proxy((function(){for(delete c.imagesComplete,this.logTiming(c.timing,"SEND_IMAGES"),o.push("<AcroexchangeDownloadSeprator AcroexchangeDownloadUrl="+t.tab.url+">"+c.blob.html+"</AcroexchangeDownloadSeprator>"),i=0;i<c.blob.refs.length;i+=1)o.push("<AcroexchangeDownloadSeprator AcroexchangeDownloadUrl="+c.blob.refs[i].placeholder+">"+c.blob.refs[i].data+"</AcroexchangeDownloadSeprator>");delete c.blob,this.convertToPDF({caller:c.caller,action:c.action,context:a().web2pdfContext.PAGE,domData:o.join("\n"),charset:"UTF-8",domtitle:c.domtitle,url:c.url},c)}))))},this.logTiming=function(e,t){var i,s=new Date;e.forEach((function(e){e.stage===t&&(i=s.getTime()-e.start_time,n.setArg("stage",t),n.checkAndLogTimingRange(i/100))}))},this.handleConversionRequest=function(t){if(SETTINGS.IS_ACROBAT){var i,s=this.proxy((function(){this.setStatus(t.tabId,this.STATUS_WAITING)}));e.legacyShim()||t.context!==a().web2pdfContext.PAGE?(e.legacyShim()||t.context===a().web2pdfContext.LINK)&&this.addConversion(t,s).then(this.proxy((function(e){this.convertToPDF({caller:e.caller,action:e.action,context:e.context,domData:"",charset:"UTF-8",domtitle:e.domtitle,url:e.url},e)}))):this.addConversion(t,s).then(this.proxy((function(e){delete e.start,this.setStatus(e.tabId,this.STATUS_DOWNLOADING),n.logSiteAndProtocolAnalytics(e.url),i="var maxSize = "+SETTINGS.MAX_HTML_SIZE+", DEBUG = "+SETTINGS.DEBUG_MODE+", TABID = "+e.tabId+", OP = 'acro-html', EXCLUDE = ['font', 'svg_image'];",chrome.tabs.executeScript(e.tabId,{code:i,runAt:"document_start"},this.proxy((function(){if(chrome.runtime.lastError)throw new Error(chrome.runtime.lastError.message);chrome.tabs.executeScript(e.tabId,{file:"data/js/get-html.js"})})))})))}},this.convertToPDFPopupMenu=function(e,t){var i={tabId:t.tab.id,caller:a().web2pdfCaller.TOOLBAR,action:a().web2pdfAction.CONVERT,context:a().web2pdfContext.PAGE,url:t.tab.url,domtitle:E(t.tab.title)};e.outputPath&&(i.outputPath=e.outputPath),this.handleConversionRequest(i)},this.appendToExistingPDFPopupMenu=function(e,t){var i={tabId:t.tab.id,caller:a().web2pdfCaller.TOOLBAR,action:a().web2pdfAction.APPEND,context:a().web2pdfContext.PAGE,url:t.tab.url,domtitle:E(t.tab.title)};e.outputPath&&(i.outputPath=e.outputPath),this.handleConversionRequest(i)}},e.registerModule("acro-web2pdf",r),SETTINGS.IS_ACROBAT&&e.registerHandlers({"acro-html":r.proxy(r.acro_html),appendToExistingPDFPopupMenu:r.proxy(r.appendToExistingPDFPopupMenu),convertToPDFPopupMenu:r.proxy(r.convertToPDFPopupMenu),showConversionSettingsDialog:r.proxy(r.showConversionSettingsDialog)})),r)r.hasOwnProperty(o)&&("function"==typeof r[o]?exports[o]=r[o].bind(r):exports[o]=r[o]);return r}));