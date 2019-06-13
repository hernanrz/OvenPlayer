/*! For license information please see ovenplayer.provider.DashProvider-0.9.5992.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{135:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,r){var i=t?1e3:1024;if(Math.abs(e)<i)return e+" B";var a=r||"B",o=["k"+a,"M"+a,"G"+a,"T"+a,"P"+a,"E"+a,"Z"+a,"Y"+a],n=-1;do{e/=i,++n}while(Math.abs(e)>=i&&n<o.length-1);return e.toFixed(1)+o[n]}},74:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=l(r(314)),a=r(304),o=l(r(135)),n=r(1),u=l(r(8));function l(e){return e&&e.__esModule?e:{default:e}}var s="download",d="manifestError";t.default=function(e,t,r){var l={},y=null,A=null,c=null,E=0,h=!1,f=!1,v=!1,T="";try{var g=function(e){dashjs.Version>"2.9.0"?y.setAutoSwitchQualityFor("video",e):y.setAutoSwitchQualityFor(e)},D=function(){return dashjs.Version>"2.9.0"?y.getAutoSwitchQualityFor("video"):y.getAutoSwitchQualityFor()};if(y=dashjs.MediaPlayer().create(),dashjs.Version<"2.6.5")throw n.ERRORS[n.INIT_DASH_UNSUPPORT];y.getDebug().setLogToBrowserConsole(!1),y.initialize(e,null,!1);var _={name:n.PROVIDER_DASH,element:e,mse:y,listener:null,canSeek:!1,isLive:!1,seeking:!1,state:n.STATE_IDLE,buffer:0,framerate:0,currentQuality:-1,currentSource:-1,qualityLevels:[],sources:[],adTagUrl:r};l=(0,i.default)(_,t,function(e,t){OvenPlayerConsole.log("DASH : Attach File : ",e,"lastPlayPosition : "+t),g(!0),T=e.file,y.attachSource(T),E=t}),A=l.super("play"),c=l.super("destroy"),OvenPlayerConsole.log("DASH PROVIDER LOADED."),y.on(dashjs.MediaPlayer.events.ERROR,function(e){if(e&&!h&&(e.error===s||e.error===d)){h=!0;var t=n.ERRORS[n.PLAYER_UNKNWON_NEWWORK_ERROR];t.error=e,(0,a.errorTrigger)(t,l)}}),y.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_REQUESTED,function(e){e&&e.mediaType&&"video"===e.mediaType&&l.trigger(n.CONTENT_LEVEL_CHANGED,{isAuto:D(),currentQuality:_.currentQuality,type:"request"})}),y.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_RENDERED,function(e){e&&e.mediaType&&"video"===e.mediaType&&(_.currentQuality=e.newQuality,l.trigger(n.CONTENT_LEVEL_CHANGED,{isAuto:D(),currentQuality:e.newQuality,type:"render"}))}),y.on(dashjs.MediaPlayer.events.PLAYBACK_METADATA_LOADED,function(e){OvenPlayerConsole.log("DASH : PLAYBACK_METADATA_LOADED  : ",y.getQualityFor("video"),y.getBitrateInfoListFor("video"),y.getBitrateInfoListFor("video")[y.getQualityFor("video")]),f=!0;var r=y.getBitrateInfoListFor("video");_.currentQuality=y.getQualityFor("video");for(var i=0;i<r.length;i++)u.default.findWhere(_.qualityLevels,{bitrate:r[i].bitrate,height:r[i].height,width:r[i].width})||_.qualityLevels.push({bitrate:r[i].bitrate,height:r[i].height,width:r[i].width,index:r[i].qualityIndex,label:r[i].width+"x"+r[i].height+", "+(0,o.default)(r[i].bitrate,!0,"bps")});E&&(y.seek(E),t.isAutoStart()||l.play()),y.isDynamic()&&(_.isLive=!0),t.isAutoStart()&&!v&&(OvenPlayerConsole.log("DASH : AUTOPLAY()!! MOTHER FOGERHJKads"),l.play(),v=!0)}),l.play=function(t){var r=0;l.getState()===n.STATE_AD_PLAYING||l.getState()===n.STATE_AD_PAUSED||(f=!1,y.attachView(e)),function e(){r++,f?A(t):r<300?setTimeout(e,100):l.play()}()},l.setCurrentQuality=function(e){return l.getState()!==n.STATE_PLAYING&&l.play(),_.currentQuality=e,D()&&g(!1),y.setQualityFor("video",e),_.currentQuality},l.isAutoQuality=function(){return D()},l.setAutoQuality=function(e){g(e)},l.destroy=function(){y.reset(),OvenPlayerConsole.log("DASH : PROVIDER DESTROYED."),c()}}catch(e){if(e&&e.code&&e.code===n.INIT_DASH_UNSUPPORT)throw e;var S=n.ERRORS[n.INIT_DASH_NOTFOUND];throw S.error=e,S}return l}}}]);