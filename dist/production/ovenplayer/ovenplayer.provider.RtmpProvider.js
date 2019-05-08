/*! For license information please see ovenplayer.provider.RtmpProvider.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n(397));t.default=function(e,t,n){var i={},a=null,u={name:r.PROVIDER_RTMP,extendedElement:e,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:r.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:n};return i=(0,o.default)(u,t,null),a=i.super("destroy"),OvenPlayerConsole.log("RTMP PROVIDER LOADED."),i.destroy=function(){OvenPlayerConsole.log("RTMP : PROVIDER DESTROYED."),a()},i}},389:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pickCurrentSource=t.errorTrigger=t.separateLive=t.extractVideoElement=void 0;var r=n(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n(9));t.extractVideoElement=function(e){return o.default.isElement(e)?e:e.getVideoElement?e.getVideoElement():e.media?e.media:null},t.separateLive=function(e){return!!e.isDynamic&&e.isDynamic()},t.errorTrigger=function(e,t){t&&(t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e))},t.pickCurrentSource=function(e,t,n){var r=Math.max(0,t);if(e)for(var o=0;o<e.length;o++)if(e[o].default&&(r=o),n.getSourceLabel()&&e[o].label===n.getSourceLabel())return o;return r}},391:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(392)),o=u(n(8)),i=n(389),a=n(2);function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,n,u){var l=google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,s=google.ima.AdErrorEvent.Type.AD_ERROR,c={},g=!1,d={started:!1,active:!1,isVideoEnded:!1};google.ima.settings.setLocale("ko"),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0);var f=null,E=null,T=null,v=null,A=null,y=function(n){var o=new google.ima.AdsRenderingSettings;o.restoreCustomPlaybackStateOnAdBreakComplete=!0,(T=n.getAdsManager(e,o)).init("100%","100%",google.ima.ViewMode.NORMAL),v=(0,r.default)(T,t,d),t.on(a.CONTENT_VOLUME,function(e){T.setVolume(e.volume/100)},c),g=!0},p=function(e){(0,i.errorTrigger)({message:e.getError().getMessage()+" ["+e.getError().getVastErrorCode()+"]",code:e.getError().getVastErrorCode(),reason:e.getError().getMessage()},t),T&&T.destroy(),d.active=!1,d.started=!0,t.play()};f=new google.ima.AdDisplayContainer(function(){var e=document.createElement("div");return e.setAttribute("class","ovp-ads"),e.setAttribute("id","ovp-ads"),n.getContainer().append(e),e}(),e),(E=new google.ima.AdsLoader(f)).addEventListener(l,y,!1),E.addEventListener(s,p,!1);return(A=new google.ima.AdsRequest).forceNonLinearFullSlot=!1,A.setAdWillAutoPlay(!1),A.setAdWillPlayMuted(!1),A.adTagUrl=u,E.requestAds(A),c.isActive=function(){return d.active},c.started=function(){return d.started},c.play=function(){if(t.setState(a.STATE_LOADING),!d.started){var n=0;return new Promise(function(t,r){!function o(){return n++,g?(e.load(),f.initialize(),T.start(),d.started=!0,t()):n<100?void setTimeout(o,100):r()}()})}T.resume()},c.pause=function(){T.pause()},c.videoEndedCallback=function(e){v.isAllAdComplete()||!v.isLinearAd()?e():(d.isVideoEnded=!0,E.contentComplete())},c.destroy=function(){T&&T.destroy(),f&&f.destroy(),v&&v.destroy(),E&&(E.removeEventListener(l,y),E.removeEventListener(s,p));var e=(0,o.default)(n.getContainer()).find(".ovp-ads");e&&e.remove(),t.off(a.CONTENT_VOLUME,null,c)},c}},392:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n(8));var r=n(2);t.default=function(e,t,n){var o={},i={},a=null,u=google.ima.AdEvent.Type.AD_BUFFERING,l=google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,s=google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,c=google.ima.AdEvent.Type.AD_ERROR,g=google.ima.AdEvent.Type.ALL_ADS_COMPLETED,d=google.ima.AdEvent.Type.CLICK,f=google.ima.AdEvent.Type.SKIPPED,E=google.ima.AdEvent.Type.COMPLETE,T=google.ima.AdEvent.Type.FIRST_QUARTILE,v=google.ima.AdEvent.Type.LOADED,A=google.ima.AdEvent.Type.MIDPOINT,y=google.ima.AdEvent.Type.PAUSED,p=google.ima.AdEvent.Type.RESUMED,S=google.ima.AdEvent.Type.STARTED,m=google.ima.AdEvent.Type.USER_CLOSE,O=google.ima.AdEvent.Type.THIRD_QUARTILE,_=!1,P=null;return i[l]=function(e){OvenPlayerConsole.log(e.type),n.active=!0,t.pause()},i[s]=function(e){OvenPlayerConsole.log(e.type),n.active=!1,n.isVideoEnded||t.play()},i[c]=function(e){OvenPlayerConsole.log(e.type)},i[g]=function(e){OvenPlayerConsole.log(e.type),_=!0,n.isVideoEnded&&t.setState(r.STATE_COMPLETE)},i[d]=function(e){OvenPlayerConsole.log(e.type)},i[T]=function(e){OvenPlayerConsole.log(e.type)},i[u]=function(e){OvenPlayerConsole.log("AD_BUFFERING",e.type),t.setState(r.STATE_LOADING)},i[v]=function(n){OvenPlayerConsole.log(n.type);var o=e.getRemainingTime(),i=n.getAd();t.trigger(r.STATE_AD_LOADED,{remaining:o,isLinear:i.isLinear()})},i[A]=function(e){OvenPlayerConsole.log(e.type)},i[y]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PAUSED)},i[p]=function(e){OvenPlayerConsole.log(e.type),t.setState(r.STATE_AD_PLAYING)},i[S]=function(o){OvenPlayerConsole.log(o.type);var i=o.getAd();P=i;var u={isLinear:i.isLinear(),duration:i.getDuration(),skipTimeOffset:i.getSkipTimeOffset()};t.trigger(r.AD_CHANGED,u),i.isLinear()?(t.setState(r.STATE_AD_PLAYING),n.started=!0,a=setInterval(function(){var n=e.getRemainingTime(),o=i.getDuration();t.trigger(r.AD_TIME,{duration:o,skipTimeOffset:i.getSkipTimeOffset(),remaining:n,position:o-n,skippable:e.getAdSkippableState()})},300)):t.play()},i[E]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(a),t.trigger(r.STATE_AD_COMPLETE)},i[f]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(a),t.trigger(r.STATE_AD_COMPLETE)},i[m]=function(e){OvenPlayerConsole.log(e.type),e.getAd().isLinear()&&clearInterval(a),t.trigger(r.STATE_AD_COMPLETE)},i[O]=function(e){OvenPlayerConsole.log(e.type)},Object.keys(i).forEach(function(t){e.removeEventListener(t,i[t]),e.addEventListener(t,i[t])}),o.setAdCompleteCallback=function(e){},o.isAllAdComplete=function(){return _},o.isLinearAd=function(){return!P||P.isLinear()},o.destroy=function(){OvenPlayerConsole.log("AdsEventListener : destroy()"),t.trigger(r.STATE_AD_COMPLETE),Object.keys(i).forEach(function(t){e.removeEventListener(t,i[t])})},o}},397:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(391)),o=l(n(93)),i=l(n(398)),a=n(389),u=n(2);function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){OvenPlayerConsole.log("CORE loaded. ");var n={};(0,o.default)(n);var l=(0,a.extractVideoElement)(e.extendedElement),s=null,c=null;Object.defineProperty(l,"currentTime",{value:0,writable:!0}),e.adTag&&(s=(0,r.default)(l,n,t,e.adTag)),c=(0,i.default)(e.extendedElement,n,s?s.videoEndedCallback:null);var g=function(t){var r=e.sources[e.currentSource];OvenPlayerConsole.log("source loaded : ",r,"lastPlayPosition : "+t);var o=l.getCurrentSource();r.file!==o?l.load(r.file):0===t&&n.getPosition()>0&&n.seek(t),t>0&&(n.seek(t),n.play())};return n.triggerEventFromExternal=function(e,t){return c[e]?c[e](t):null},n.getName=function(){return e.name},n.canSeek=function(){return e.canSeek},n.setCanSeek=function(t){e.canSeek=t},n.isSeeking=function(){return e.seeking},n.setSeeking=function(t){e.seeking=t},n.setState=function(t){if(e.state!==t){var r=e.state;switch(t){case u.STATE_COMPLETE:n.trigger(u.PLAYER_COMPLETE);break;case u.STATE_PAUSED:n.trigger(u.PLAYER_PAUSE,{prevState:e.state});break;case u.STATE_PLAYING:n.trigger(u.PLAYER_PLAY,{prevState:e.state})}e.state=t,n.trigger(u.PLAYER_STATE,{prevstate:r,newstate:e.state})}},n.getState=function(){return e.state},n.setBuffer=function(e){},n.getBuffer=function(){if(l)return l.getBuffer?l.getBuffer():null},n.getDuration=function(){if(l)return l.getDuration?l.getDuration():0},n.getPosition=function(){if(l)return l.getPosition?l.getPosition():0},n.setVolume=function(e){if(l)return l.setVolume?l.setVolume(e):0},n.getVolume=function(){if(l)return l.setVolume?l.getVolume():0},n.setMute=function(){l&&l.setMute()},n.getMute=function(){if(l)return!!l.getMute&&l.getMute()},n.preload=function(r,o){OvenPlayerConsole.log("CORE : preload() ",r,o);var i=0;return e.sources=r,e.currentSource=(0,a.pickCurrentSource)(r,e.currentSource,t),new Promise(function(e,r){!function a(){return i++,l.isFlashReady&&l.isFlashReady()?(Object.defineProperty(l,"duration",{value:l.getDuration()}),g(o||0),i=0,function o(){return i++,l.isFileLoaded()?(t.isAutoStart()&&n.play(),t.isMute()&&n.setMute(!0),t.getVolume()&&t.getVolume()<100&&n.setVolume(t.getVolume()),e()):i<100?void setTimeout(o,100):r(u.ERRORS[u.INIT_RTMP_SETUP_ERROR])}()):i<100?void setTimeout(a,100):r(u.ERRORS[u.INIT_RTMP_SETUP_ERROR])}()})},n.load=function(n){e.sources=n,e.currentSource=(0,a.pickCurrentSource)(n,e.currentSource,t),g(e.sources_.starttime||0)},n.play=function(){if(!l)return!1;n.getState()!==u.STATE_PLAYING&&(s&&s.isActive()||s&&!s.started()?s.play():l.play())},n.pause=function(){if(!l)return!1;n.getState()===u.STATE_PLAYING?l.pause():n.getState()===u.STATE_AD_PLAYING&&s.pause()},n.seek=function(e){l.seek(e)},n.setPlaybackRate=function(e){return 0},n.getPlaybackRate=function(){return 0},n.getSources=function(){return l?e.sources.map(function(e,t){return{file:e.file,type:e.type,label:e.label,index:t}}):[]},n.getCurrentSource=function(){return e.currentSource},n.setCurrentSource=function(r,o){return e.currentQuality!==r&&(r>-1&&e.sources&&e.sources.length>r?(n.setState(u.STATE_IDLE),OvenPlayerConsole.log("source changed : "+r),e.currentSource=r,n.trigger(u.CONTENT_SOURCE_CHANGED,{currentSource:r}),t.setSourceLabel(e.sources[r].label),o&&g(l.getCurrentTime()||0),e.currentSource):void 0)},n.getQualityLevels=function(){return l?e.qualityLevels:[]},n.getCurrentQuality=function(){return l?e.currentQuality:null},n.setCurrentQuality=function(e){},n.isAutoQuality=function(){},n.setAutoQuality=function(e){},n.getFramerate=function(){return e.framerate},n.setFramerate=function(t){return e.framerate=t},n.seekFrame=function(t){var r=e.framerate,o=(l.getCurrentTime()*r+t)/r;o+=1e-5,n.pause(),n.seek(o)},n.stop=function(){OvenPlayerConsole.log("CORE : stop() "),l.stop()},n.destroy=function(){OvenPlayerConsole.log("CORE : destroy() player stop, listener, event destroied"),l.remove(),s&&s.destroy(),n.off()},n.super=function(e){var t=n[e];return function(){return t.apply(n,arguments)}},n}},398:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);t.default=function(e,t,n){var o={isJSReady:function(){return!0},timeupdate:function(o){e.currentTime=o.position,t.trigger(r.CONTENT_TIME,o),t.trigger(r.CONTENT_BUFFER,o),o.position>=o.duration&&t.getState()!==r.STATE_IDLE&&t.getState()!==r.STATE_COMPLETE&&(n?n(function(){t.setState(r.STATE_COMPLETE)}):t.setState(r.STATE_COMPLETE))},volumeChanged:function(e){t.trigger(r.CONTENT_VOLUME,e)},stateChanged:function(e){console.log(e.newstate,e.teststate),t.setState(e.newstate)},status:function(e){console.log(e)},metaChanged:function(e){t.trigger(r.CONTENT_META,e)},error:function(e){t.setState(r.STATE_ERROR),t.pause(),t.trigger(r.ERROR,e)}};return o}}}]);